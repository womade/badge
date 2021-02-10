const userFriendlyDate = require("user-friendly-date");

export const success = (status, color) => {
  const data = { status };
  if (color) data.color = color;
  return { code: 200, data };
};

export const noneRepo = (message) => {
  if (message === "404 Project Not Found") {
    return {
      code: 200,
      data: { subject: "gitee", status: "Project Not Found", color: "grey" },
    };
  }

  return warning(message);
};

export const warning = (status) => {
  return { code: 200, data: { status, color: "yellow" } };
};

export const errors = (message = "something wrong!") => {
  return { code: 404, data: message };
};

export function noneSubject() {
  return {
    code: 200,
    data: { subject: "badge", status: "404", color: "orange" },
  };
}

export const showBetter = (num, unit = 0) => {
  const map = ["K", "M", "G"];
  let recurse = false;
  let nextUnit = map[unit - 1] || "";
  if (num / 1000 >= 1) {
    num = (num / 1000).toFixed(2);
    recurse = true;
  }
  if (recurse) {
    return showBetter(num, unit + 1);
  } else {
    return num + nextUnit;
  }
};

export const showPercent = (top, bottom, decimal = 0) => {
  if (top == 0) {
    return "0%";
  }
  if (bottom == 0) {
    return "infinity";
  }
  return ((top / bottom) * 100).toFixed(decimal) + "%";
};

export const betterDate = (date) => {
  const d = new Date(date);
  return userFriendlyDate(d.getTime());
};
