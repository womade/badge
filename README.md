<h1 align="center">badge</h1>
<p align="center">
  <a href="https://github.com/womade/badge" target="_blank"><img src="https://badge.ssss.fun/badge/release/GitHub/black?icon=github&label&scale=1.2" /></a> <a href="https://gitee.com/womade/badge" target="_black"><img src="https://badge.ssss.fun/badge/release/Gitee/orange?icon=gitee&label&scale=1.2" /></a> <a href="https://blog.ssss.fun" target="_blank"><img src="https://badge.ssss.fun/badge/icon/我的博客/cyan?icon=badgeblog&label&scale=1.2" /></a>
</p>

  
使用 [Next.js](https://nextjs.org/) 框架开发的生成徽章服务。
## 使用

#### 自定义徽章

```
https://badge.ssss.fun/badge/:subject/:status/:color?icon=github
                   ------|--------|-------|------|-----------
                     |       |       |       |        |
                     |       |       |       |       选项(icon,color,label,list,labelColor,scale)
                     |       |       |      颜色
                     |       |      状态
                     |      主题
                 自定义Badge
```

- **可选颜色**  
  [![blue](https://badge.ssss.fun/badge/color/blue/blue "color blue")](https://badge.ssss.fun/badge/color/blue/blue) [![cyan](https://badge.ssss.fun/badge/color/cyan/cyan "color cyan")](https://badge.ssss.fun/badge/color/cyan/cyan) [![green](https://badge.ssss.fun/badge/color/green/green "color green")](https://badge.ssss.fun/badge/color/green/green) [![yellow](https://badge.ssss.fun/badge/color/yellow/yellow "color yellow")](https://badge.ssss.fun/badge/color/yellow/yellow) [![orange](https://badge.ssss.fun/badge/color/orange/orange "color orange")](https://badge.ssss.fun/badge/color/orange/orange) [![red](https://badge.ssss.fun/badge/color/red/red "color red")](https://badge.ssss.fun/badge/color/red/red) [![pink](https://badge.ssss.fun/badge/color/pink/pink "color pink")](https://badge.ssss.fun/badge/color/pink/pink) [![purple](https://badge.ssss.fun/badge/color/purple/purple "color purple")](https://badge.ssss.fun/badge/color/purple/purple) [![grey](https://badge.ssss.fun/badge/color/grey/grey "color grey")](https://badge.ssss.fun/badge/color/grey/grey) [![black](https://badge.ssss.fun/badge/color/black/black "color black")](https://badge.ssss.fun/badge/color/black/black)
  > 其他颜色参数或无颜色参数将显示默认颜色 `blue`
- **可选图标**  
  [![icon airbnb](https://badge.ssss.fun/badge/icon/airbnb?icon=airbnb&label "icon airbnb")](https://badge.ssss.fun/badge/icon/airbnb?icon=airbnb&label) [![icon alipay](https://badge.ssss.fun/badge/icon/alipay?icon=alipay&label "icon alipay")](https://badge.ssss.fun/badge/icon/alipay?icon=alipay&label) [![icon aliwangwang](https://badge.ssss.fun/badge/icon/aliwangwang?icon=aliwangwang&label "icon aliwangwang")](https://badge.ssss.fun/badge/icon/aliwangwang?icon=aliwangwang&label) [![icon aliyun](https://badge.ssss.fun/badge/icon/aliyun?icon=aliyun&label "icon aliyun")](https://badge.ssss.fun/badge/icon/aliyun?icon=aliyun&label) [![icon amazon](https://badge.ssss.fun/badge/icon/amazon?icon=amazon&label "icon amazon")](https://badge.ssss.fun/badge/icon/amazon?icon=amazon&label) [![icon android](https://badge.ssss.fun/badge/icon/android?icon=android&label "icon android")](https://badge.ssss.fun/badge/icon/android?icon=android&label) [![icon antd](https://badge.ssss.fun/badge/icon/antd?icon=antd&label "icon antd")](https://badge.ssss.fun/badge/icon/antd?icon=antd&label) [![icon apple](https://badge.ssss.fun/badge/icon/apple?icon=apple&label "icon apple")](https://badge.ssss.fun/badge/icon/apple?icon=apple&label) [![icon appveyor](https://badge.ssss.fun/badge/icon/appveyor?icon=appveyor&label "icon appveyor")](https://badge.ssss.fun/badge/icon/appveyor?icon=appveyor&label) [![icon atom](https://badge.ssss.fun/badge/icon/atom?icon=atom&label "icon atom")](https://badge.ssss.fun/badge/icon/atom?icon=atom&label) [![icon awesome](https://badge.ssss.fun/badge/icon/awesome?icon=awesome&label "icon awesome")](https://badge.ssss.fun/badge/icon/awesome?icon=awesome&label) [![icon behance](https://badge.ssss.fun/badge/icon/behance?icon=behance&label "icon behance")](https://badge.ssss.fun/badge/icon/behance?icon=behance&label) [![icon bitcoin-lightning](https://badge.ssss.fun/badge/icon/bitcoin-lightning?icon=bitcoin-lightning&label "icon bitcoin-lightning")](https://badge.ssss.fun/badge/icon/bitcoin-lightning?icon=bitcoin-lightning&label) [![icon bitcoin](https://badge.ssss.fun/badge/icon/bitcoin?icon=bitcoin&label "icon bitcoin")](https://badge.ssss.fun/badge/icon/bitcoin?icon=bitcoin&label) [![icon chrome](https://badge.ssss.fun/badge/icon/chrome?icon=chrome&label "icon chrome")](https://badge.ssss.fun/badge/icon/chrome?icon=chrome&label) [![icon circleci](https://badge.ssss.fun/badge/icon/circleci?icon=circleci&label "icon circleci")](https://badge.ssss.fun/badge/icon/circleci?icon=circleci&label) [![icon code-sandbox](https://badge.ssss.fun/badge/icon/code-sandbox?icon=code-sandbox&label "icon code-sandbox")](https://badge.ssss.fun/badge/icon/code-sandbox?icon=code-sandbox&label) [![icon codebeat](https://badge.ssss.fun/badge/icon/codebeat?icon=codebeat&label "icon codebeat")](https://badge.ssss.fun/badge/icon/codebeat?icon=codebeat&label) [![icon codeclimate](https://badge.ssss.fun/badge/icon/codeclimate?icon=codeclimate&label "icon codeclimate")](https://badge.ssss.fun/badge/icon/codeclimate?icon=codeclimate&label) [![icon codecov](https://badge.ssss.fun/badge/icon/codecov?icon=codecov&label "icon codecov")](https://badge.ssss.fun/badge/icon/codecov?icon=codecov&label) [![icon codepen](https://badge.ssss.fun/badge/icon/codepen?icon=codepen&label "icon codepen")](https://badge.ssss.fun/badge/icon/codepen?icon=codepen&label) [![icon codeship](https://badge.ssss.fun/badge/icon/codeship?icon=codeship&label "icon codeship")](https://badge.ssss.fun/badge/icon/codeship?icon=codeship&label) [![icon commonwl](https://badge.ssss.fun/badge/icon/commonwl?icon=commonwl&label "icon commonwl")](https://badge.ssss.fun/badge/icon/commonwl?icon=commonwl&label) [![icon deepscan](https://badge.ssss.fun/badge/icon/deepscan?icon=deepscan&label "icon deepscan")](https://badge.ssss.fun/badge/icon/deepscan?icon=deepscan&label) [![icon dependabot](https://badge.ssss.fun/badge/icon/dependabot?icon=dependabot&label "icon dependabot")](https://badge.ssss.fun/badge/icon/dependabot?icon=dependabot&label) [![icon dingding](https://badge.ssss.fun/badge/icon/dingding?icon=dingding&label "icon dingding")](https://badge.ssss.fun/badge/icon/dingding?icon=dingding&label) [![icon discord](https://badge.ssss.fun/badge/icon/discord?icon=discord&label "icon discord")](https://badge.ssss.fun/badge/icon/discord?icon=discord&label) [![icon dockbit](https://badge.ssss.fun/badge/icon/dockbit?icon=dockbit&label "icon dockbit")](https://badge.ssss.fun/badge/icon/dockbit?icon=dockbit&label) [![icon docker](https://badge.ssss.fun/badge/icon/docker?icon=docker&label "icon docker")](https://badge.ssss.fun/badge/icon/docker?icon=docker&label) [![icon dropbox](https://badge.ssss.fun/badge/icon/dropbox?icon=dropbox&label "icon dropbox")](https://badge.ssss.fun/badge/icon/dropbox?icon=dropbox&label) [![icon eclipse](https://badge.ssss.fun/badge/icon/eclipse?icon=eclipse&label "icon eclipse")](https://badge.ssss.fun/badge/icon/eclipse?icon=eclipse&label) [![icon email](https://badge.ssss.fun/badge/icon/email?icon=email&label "icon email")](https://badge.ssss.fun/badge/icon/email?icon=email&label) [![icon facebook](https://badge.ssss.fun/badge/icon/facebook?icon=facebook&label "icon facebook")](https://badge.ssss.fun/badge/icon/facebook?icon=facebook&label) [![icon firefox](https://badge.ssss.fun/badge/icon/firefox?icon=firefox&label "icon firefox")](https://badge.ssss.fun/badge/icon/firefox?icon=firefox&label) [![icon flow](https://badge.ssss.fun/badge/icon/flow?icon=flow&label "icon flow")](https://badge.ssss.fun/badge/icon/flow?icon=flow&label) [![icon git](https://badge.ssss.fun/badge/icon/git?icon=git&label "icon git")](https://badge.ssss.fun/badge/icon/git?icon=git&label) [![icon gitee](https://badge.ssss.fun/badge/icon/gitee?icon=gitee&label "icon gitee")](https://badge.ssss.fun/badge/icon/gitee?icon=gitee&label) [![icon github](https://badge.ssss.fun/badge/icon/github?icon=github&label "icon github")](https://badge.ssss.fun/badge/icon/github?icon=github&label) [![icon gitlab](https://badge.ssss.fun/badge/icon/gitlab?icon=gitlab&label "icon gitlab")](https://badge.ssss.fun/badge/icon/gitlab?icon=gitlab&label) [![icon gitter](https://badge.ssss.fun/badge/icon/gitter?icon=gitter&label "icon gitter")](https://badge.ssss.fun/badge/icon/gitter?icon=gitter&label) [![icon google-plus](https://badge.ssss.fun/badge/icon/google-plus?icon=google-plus&label "icon google-plus")](https://badge.ssss.fun/badge/icon/google-plus?icon=google-plus&label) [![icon googleplay](https://badge.ssss.fun/badge/icon/googleplay?icon=googleplay&label "icon googleplay")](https://badge.ssss.fun/badge/icon/googleplay?icon=googleplay&label) [![icon graphql](https://badge.ssss.fun/badge/icon/graphql?icon=graphql&label "icon graphql")](https://badge.ssss.fun/badge/icon/graphql?icon=graphql&label) [![icon haskell](https://badge.ssss.fun/badge/icon/haskell?icon=haskell&label "icon haskell")](https://badge.ssss.fun/badge/icon/haskell?icon=haskell&label) [![icon instagram](https://badge.ssss.fun/badge/icon/instagram?icon=instagram&label "icon instagram")](https://badge.ssss.fun/badge/icon/instagram?icon=instagram&label) [![icon kofi](https://badge.ssss.fun/badge/icon/kofi?icon=kofi&label "icon kofi")](https://badge.ssss.fun/badge/icon/kofi?icon=kofi&label) [![icon lgtm](https://badge.ssss.fun/badge/icon/lgtm?icon=lgtm&label "icon lgtm")](https://badge.ssss.fun/badge/icon/lgtm?icon=lgtm&label) [![icon libraries](https://badge.ssss.fun/badge/icon/libraries?icon=libraries&label "icon libraries")](https://badge.ssss.fun/badge/icon/libraries?icon=libraries&label) [![icon linkedin](https://badge.ssss.fun/badge/icon/linkedin?icon=linkedin&label "icon linkedin")](https://badge.ssss.fun/badge/icon/linkedin?icon=linkedin&label) [![icon now](https://badge.ssss.fun/badge/icon/now?icon=now&label "icon now")](https://badge.ssss.fun/badge/icon/now?icon=now&label) [![icon npm](https://badge.ssss.fun/badge/icon/npm?icon=npm&label "icon npm")](https://badge.ssss.fun/badge/icon/npm?icon=npm&label) [![icon nuget](https://badge.ssss.fun/badge/icon/nuget?icon=nuget&label "icon nuget")](https://badge.ssss.fun/badge/icon/nuget?icon=nuget&label) [![icon patreon](https://badge.ssss.fun/badge/icon/patreon?icon=patreon&label "icon patreon")](https://badge.ssss.fun/badge/icon/patreon?icon=patreon&label) [![icon phone](https://badge.ssss.fun/badge/icon/phone?icon=phone&label "icon phone")](https://badge.ssss.fun/badge/icon/phone?icon=phone&label) [![icon postgresql](https://badge.ssss.fun/badge/icon/postgresql?icon=postgresql&label "icon postgresql")](https://badge.ssss.fun/badge/icon/postgresql?icon=postgresql&label) [![icon qq](https://badge.ssss.fun/badge/icon/qq?icon=qq&label "icon qq")](https://badge.ssss.fun/badge/icon/qq?icon=qq&label) [![icon rss](https://badge.ssss.fun/badge/icon/rss?icon=rss&label "icon rss")](https://badge.ssss.fun/badge/icon/rss?icon=rss&label) [![icon ruby](https://badge.ssss.fun/badge/icon/ruby?icon=ruby&label "icon ruby")](https://badge.ssss.fun/badge/icon/ruby?icon=ruby&label) [![icon scrutinizer](https://badge.ssss.fun/badge/icon/scrutinizer?icon=scrutinizer&label "icon scrutinizer")](https://badge.ssss.fun/badge/icon/scrutinizer?icon=scrutinizer&label) [![icon segmentfault](https://badge.ssss.fun/badge/icon/segmentfault?icon=segmentfault&label "icon segmentfault")](https://badge.ssss.fun/badge/icon/segmentfault?icon=segmentfault&label) [![icon sketch](https://badge.ssss.fun/badge/icon/sketch?icon=sketch&label "icon sketch")](https://badge.ssss.fun/badge/icon/sketch?icon=sketch&label) [![icon skype](https://badge.ssss.fun/badge/icon/skype?icon=skype&label "icon skype")](https://badge.ssss.fun/badge/icon/skype?icon=skype&label) [![icon slack](https://badge.ssss.fun/badge/icon/slack?icon=slack&label "icon slack")](https://badge.ssss.fun/badge/icon/slack?icon=slack&label) [![icon sourcegraph](https://badge.ssss.fun/badge/icon/sourcegraph?icon=sourcegraph&label "icon sourcegraph")](https://badge.ssss.fun/badge/icon/sourcegraph?icon=sourcegraph&label) [![icon stackoverflow](https://badge.ssss.fun/badge/icon/stackoverflow?icon=stackoverflow&label "icon stackoverflow")](https://badge.ssss.fun/badge/icon/stackoverflow?icon=stackoverflow&label) [![icon telegram](https://badge.ssss.fun/badge/icon/telegram?icon=telegram&label "icon telegram")](https://badge.ssss.fun/badge/icon/telegram?icon=telegram&label) [![icon terminal](https://badge.ssss.fun/badge/icon/terminal?icon=terminal&label "icon terminal")](https://badge.ssss.fun/badge/icon/terminal?icon=terminal&label) [![icon terraform](https://badge.ssss.fun/badge/icon/terraform?icon=terraform&label "icon terraform")](https://badge.ssss.fun/badge/icon/terraform?icon=terraform&label) [![icon travis](https://badge.ssss.fun/badge/icon/travis?icon=travis&label "icon travis")](https://badge.ssss.fun/badge/icon/travis?icon=travis&label) [![icon twitter](https://badge.ssss.fun/badge/icon/twitter?icon=twitter&label "icon twitter")](https://badge.ssss.fun/badge/icon/twitter?icon=twitter&label) [![icon typescript](https://badge.ssss.fun/badge/icon/typescript?icon=typescript&label "icon typescript")](https://badge.ssss.fun/badge/icon/typescript?icon=typescript&label) [![icon wechat](https://badge.ssss.fun/badge/icon/wechat?icon=wechat&label "icon wechat")](https://badge.ssss.fun/badge/icon/wechat?icon=wechat&label) [![icon weibo](https://badge.ssss.fun/badge/icon/weibo?icon=weibo&label "icon weibo")](https://badge.ssss.fun/badge/icon/weibo?icon=weibo&label) [![icon windows](https://badge.ssss.fun/badge/icon/windows?icon=windows&label "icon windows")](https://badge.ssss.fun/badge/icon/windows?icon=windows&label) [![icon youtube](https://badge.ssss.fun/badge/icon/youtube?icon=youtube&label "icon youtube")](https://badge.ssss.fun/badge/icon/youtube?icon=youtube&label) [![icon yuque](https://badge.ssss.fun/badge/icon/yuque?icon=yuque&label "icon yuque")](https://badge.ssss.fun/badge/icon/yuque?icon=yuque&label) [![icon zeit](https://badge.ssss.fun/badge/icon/zeit?icon=zeit&label "icon zeit")](https://badge.ssss.fun/badge/icon/zeit?icon=zeit&label) [![icon zhihu](https://badge.ssss.fun/badge/icon/zhihu?icon=zhihu&label "icon zhihu")](https://badge.ssss.fun/badge/icon/zhihu?icon=zhihu&label)
- **选项**
  - `color` 覆盖**默认**的徽章颜色  
    例如：`https://badge.ssss.fun/badge/release/v1.0.2?color=black`  
    [![options color](https://badge.ssss.fun/badge/release/v1.0.2?color=black "options color")](https://badge.ssss.fun/badge/release/v1.0.2?color=black)
  - `icon` 在主题 `subject` 中添加图标  
    例如：`https://badge.ssss.fun/badge/release/v1.0.2/cyan?color=black&icon=github`  
    [![options icon](https://badge.ssss.fun/badge/release/v1.0.2/cyan?color=black&icon=github "options icon")](https://badge.ssss.fun/badge/release/v1.0.2/cyan?color=black&icon=github)
  - `list` 设置 `list=|`， 将会用 `|` 代替状态 `status` 中的 `,`  
    例如：`https://badge.ssss.fun/badge/platform/ios,macos,tvos?list=|`  
    [![options list](https://badge.ssss.fun/badge/platform/ios,macos,tvos?list=| "options label")](https://badge.ssss.fun/badge/platform/ios,macos,tvos?list=|)
  - `label` 覆盖主题 `subject` 中的文本  
    例如：`https://badge.ssss.fun/badge/release/GitHub/cyan?color=black&icon=github&label`  
    [![options label](https://badge.ssss.fun/badge/release/GitHub/cyan?color=black&icon=github&label "options label")](https://badge.ssss.fun/badge/icon/GitHub/black?icon=github&label)
  - `labelColor` 覆盖主题 `subject` 的背景色  
    例如：`https://badge.ssss.fun/badge/release/GitHub/cyan?labelColor=pink`  
    [![options labelColor](https://badge.ssss.fun/badge/release/GitHub/cyan?labelColor=pink "options labelColor")](https://badge.ssss.fun/badge/release/GitHub/cyan?labelColor=pink)
  - `scale` 自定义缩放大小  
    例如：`https://badge.ssss.fun/badge/docker/v1.2.3/blue?icon=docker&scale=2`  
    [![options scale](https://badge.ssss.fun/badge/docker/v1.2.3/blue?icon=docker&scale=2 "options scale")](https://badge.ssss.fun/badge/docker/v1.2.3/blue?icon=docker&scale=2)

#### Gitee Api

```
https://badge.ssss.fun/gitee/:subject/:owner/:repo
                   ------|--------|------|-----
                     |       |       |     |
                     |       |       |  仓库名称
                     |       |   仓库所有者
                     |      主题
                 Gitee Api
```

- **用法**  
  如下表所列出所有的用法。地址前缀：`https://badge.ssss.fun`  
  |说明|地址|效果|
  |---:|:---|:---|
  |latest release|[/gitee/release/womade/dt-read](https://badge.ssss.fun/gitee/release/womade/dt-read)|![latest release](https://badge.ssss.fun/gitee/release/womade/dt-read "latest release")|
  |latest tag|[/gitee/tag/womade/Aliyun-oss-storage](https://badge.ssss.fun/gitee/tag/womade/Aliyun-oss-storage)|![latest tag](https://badge.ssss.fun/gitee/tag/womade/Aliyun-oss-storage "latest tag")
  |watchers|[/gitee/watchers/womade/dt-read](https://badge.ssss.fun/gitee/watchers/womade/dt-read)|![watchers](https://badge.ssss.fun/gitee/watchers/womade/dt-read "watchers")|
  |stars|[/gitee/stars/womade/dt-read](https://badge.ssss.fun/gitee/stars/womade/dt-read)|![stars](https://badge.ssss.fun/gitee/stars/womade/dt-read "stars")|
  |forks|[/gitee/forks/womade/dt-read](https://badge.ssss.fun/gitee/forks/womade/dt-read)|![forks](https://badge.ssss.fun/gitee/forks/womade/dt-read "forks")|
  |issues|[/gitee/issues/smallweigit/avue](https://badge.ssss.fun/gitee/issues/smallweigit/avue)|![issues](https://badge.ssss.fun/gitee/issues/smallweigit/avue "issues")
  |open issues|[/gitee/open-issues/smallweigit/avue](https://badge.ssss.fun/gitee/open-issues/smallweigit/avue)|![open-issues](https://badge.ssss.fun/gitee/open-issues/smallweigit/avue "open-issues")|
  |closed issues|[/gitee/closed-issues/smallweigit/avue](https://badge.ssss.fun/gitee/closed-issues/smallweigit/avue)|![closed issues](https://badge.ssss.fun/gitee/closed-issues/smallweigit/avue "closed issues")|
  |issues by label|[/gitee/label-issues/smallweigit/avue/bug](https://badge.ssss.fun/gitee/label-issues/smallweigit/avue/bug)|![issues by label](https://badge.ssss.fun/gitee/label-issues/smallweigit/avue/bug "issues by label")|
  |open issues by label|[/gitee/open-label-issues/smallweigit/avue/bug](https://badge.ssss.fun/gitee/open-label-issues/smallweigit/avue/bug)|![open issues by label](https://badge.ssss.fun/gitee/open-label-issues/smallweigit/avue/bug "open issues by label")|
  |closed issues by label|[/gitee/closed-label-issues/smallweigit/avue/bug](https://badge.ssss.fun/gitee/closed-label-issues/smallweigit/avue/bug)|![closed issues by label](https://badge.ssss.fun/gitee/closed-label-issues/smallweigit/avue/bug "closed issues by label")|
  |PRs|[/gitee/prs/sentsin/layui](https://badge.ssss.fun/gitee/prs/sentsin/layui)|![PRs](https://badge.ssss.fun/gitee/prs/sentsin/layui "PRs")|
  |open PRs|[/gitee/open-prs/sentsin/layui](https://badge.ssss.fun/gitee/open-prs/sentsin/layui)|![open PRs](https://badge.ssss.fun/gitee/open-prs/sentsin/layui "open PRs")|
  |closed PRs|[/gitee/closed-prs/sentsin/layui](https://badge.ssss.fun/gitee/closed-prs/sentsin/layui)|![closed PRs](https://badge.ssss.fun/gitee/closed-prs/sentsin/layui "closed PRs")|
  |merged PRs|[/gitee/merged-prs/sentsin/layui](https://badge.ssss.fun/gitee/merged-prs/sentsin/layui)|![merged PRs](https://badge.ssss.fun/gitee/merged-prs/sentsin/layui "merged PRs")|
  |milestone percentage|[/gitee/milestones/smallweigit/avue/v2.5.1](https://badge.ssss.fun/gitee/milestones/smallweigit/avue/v2.5.1)|![milestone percentage](https://badge.ssss.fun/gitee/milestones/smallweigit/avue/v2.5.1 "milestone percentage")|
  |commits count|[/gitee/commits/smallweigit/avue](https://badge.ssss.fun/gitee/commits/smallweigit/avue)|![commits count](https://badge.ssss.fun/gitee/commits/smallweigit/avue "commits count")|
  |commits count (branch ref)|[/gitee/commits/smallweigit/avue/dev](https://badge.ssss.fun/gitee/commits/smallweigit/avue/dev)|![commits count (branch ref)](https://badge.ssss.fun/gitee/commits/smallweigit/avue/dev "commits count (branch ref)")|
  |commits count (tag ref)|[/gitee/commits/smallweigit/avue/v2.4.1](https://badge.ssss.fun/gitee/commits/smallweigit/avue/v2.4.1)|![commits count (tag ref)](https://badge.ssss.fun/gitee/commits/smallweigit/avue/v2.4.1 "commits count (tag ref)")|
  |last commit|[/gitee/last-commit/womade/dt-read](https://badge.ssss.fun/gitee/last-commit/womade/dt-read)|![last commit](https://badge.ssss.fun/gitee/last-commit/womade/dt-read "last commit")|
  |last commit (branch ref)|[/gitee/last-commit-branch/smallweigit/avue/dev](https://badge.ssss.fun/gitee/last-commit-branch/smallweigit/avue/dev)|![last commit (branch ref)](https://badge.ssss.fun/gitee/last-commit-branch/smallweigit/avue/dev "last commit (branch ref)")|
  |last commit (tag ref)|[/gitee/last-commit-tag/smallweigit/avue/v2.4.1](https://badge.ssss.fun/gitee/last-commit-tag/smallweigit/avue/v2.4.1)|![last commit (tag ref)](https://badge.ssss.fun/gitee/last-commit-tag/smallweigit/avue/v2.4.1 "last commit (tag ref)")|
  |branches|[/gitee/branches/womade/dt-read](https://badge.ssss.fun/gitee/branches/womade/dt-read)|![branches](https://badge.ssss.fun/gitee/branches/womade/dt-read "branches")|
  |releases|[/gitee/releases/womade/dt-read](https://badge.ssss.fun/gitee/releases/womade/dt-read)|![releases](https://badge.ssss.fun/gitee/releases/womade/dt-read "releases")|
  |tags|[/gitee/tags/womade/dt-read](https://badge.ssss.fun/gitee/tags/womade/dt-read)|![tags](https://badge.ssss.fun/gitee/tags/womade/dt-read "tags")|
  |license|[/gitee/license/womade/dt-read](https://badge.ssss.fun/gitee/license/womade/dt-read)|![license](https://badge.ssss.fun/gitee/license/womade/dt-read "license")|
  |contributors|[/gitee/contributors/smallweigit/avue](https://badge.ssss.fun/gitee/contributors/smallweigit/avue)|![contributors](https://badge.ssss.fun/gitee/contributors/smallweigit/avue "contributors")|

## 问题

1. `nodejs` 获取字体宽度的问题
   - 使用 [canvas](https://www.npmjs.com/package/canvas#quick-example) 中的 `measureText` 方法测量字符串显示宽度。  
     **但是** 在不同系统得到的结果是不同的，[查看 issues #782](https://github.com/Automattic/node-canvas/issues/782)
   - 使用 [text-to-svg](https://www.npmjs.com/package/text-to-svg#texttosvggetmetricstext-option--) 中的 `getMetrics` 方法测量字符串显示宽度。  
     **但是** 在这个插件中，每个字符的宽度是相等的，实际上 `a` 和 `b` 的显示宽度是不相等的。这就导致一些稍宽的字符，在测量出来的宽度中显示的很挤。
