import { getSvg, handleQuery } from "components/utils/client.js";
import gitee from "components/apis/gitee.js";
import defaultSubject from "components/apis/gitee/subject";
import defaultColor from "components/apis/gitee/color";

export default async (req, res, hasParam) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/svg+xml");
  const { subject, owner, repo, param } = req.query;

  const result =
    hasParam === true
      ? await gitee(subject, owner, repo, param)
      : await gitee(subject, owner, repo);

  if (result.code === 200) {
    const search = {
      ...req.query,
      ...result.data,
    };
    if (!result.data.subject && defaultSubject[subject]) {
      if (typeof defaultSubject[subject] === "function") {
        search.subject = defaultSubject[subject](req.query);
      } else {
        search.subject = defaultSubject[subject];
      }
    }
    if (!result.data.color && defaultColor[subject]) {
      search.color = defaultColor[subject];
    }
    return generate(
      res,
      handleQuery(search, ["subject", "status", "owner", "repo", "param"])
    );
  }

  return generate(res, { subject: "badge", status: result.data, color: "red" });
};

const generate = (res, query) => {
  const svg = getSvg(query);
  return res.end(svg);
};
