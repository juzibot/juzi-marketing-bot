# juzi-marketing-bot

## 功能简述

目前该机器人程序实现了通过[句子秒回](https://miaohui.juzibot.com)定时批量推送「早报」，「早间新闻」，「开心一刻」到指定企业微信群。并且每个群推送的数据可以根据群的相关信息进行自定义拉取

## 修改推送时间

如果想要修改推送时间，需要修改这个文件`/src/config/time.config.ts`，根据文件中的注释将其中对应的时间修改成想要的即可。
目前只支持修改成`小时:分钟`的格式，例如`18:30`即为下午六点半

## 修改推送消息格式

如果想要修改推送消息的格式，请前往这个文件`/src/material/index.ts`，这个文件里面目前有三个函数

- `getMorningMessage`：根据网络API获取的数据来生成早报的消息，对应的各个部分的消息可以根据注释来理解
- `getNewsMessage`：根据网络API获取早间新闻的消息，这个比较简单，只有一个消息模块可以用来排版
- `getJokeMessage`：根据网络API获取开心一刻的消息，这个也比较简单，其中只有一个笑话模块可以用来排版

## 修改推送群信息

如果想要增加接收推送的群聊，请修改这个文件`/src/config/room.config.ts`，这个文件里面包含的都是群的相关消息，主要是下述几个重要的字段

- `chatId`：聊天id，这个是秒回中用来发送消息所需的重要id，获取方式可以通过[获取群聊信息的接口](https://docs.juzibot.com/group/basic/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8-%E4%B8%8D%E5%8C%85%E5%90%AB%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF)拉取
- `roomTopic`: 群名，可以填空，这个目前没有具体的作用，只是为了方便管理
- `city`：群所在的城市，这个需要根据不同的群进行配置
- `stationId`：加油站的id，这个需要根据情况具体填写进来

# For Developers

## 环境变量

本项目所需要调用的所有API接口都需要对应的key来使用，如果是本地开发，可以在根目录下创建一个`.env`的文件，并在文件中写入以下的值
```bash
JUHE_WEATHER_KEY=
JUHE_CALENDAR_KEY=
JUHE_NEWS_KEY=
JUHE_JOKE_KEY=

API_SPACE_KEY=
MH_TOKEN=
```

填入对应的值之后即可调用各个接口了

## 本地启动

### 安装依赖

```bash
npm install --registry=https://registry.npmmirror.com
```

### 运行程序

```
npm run start:dev
```
