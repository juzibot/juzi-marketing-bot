interface Data {
  content: string;
  hashId: string;
  unixtime: number;
  updatetime: string;
}

interface Result {
  data: Data[];
}

export interface JokeInfoResult {
  reason: string;
  result: Result;
  error_code: number;
}

// 示例数据
// {
//   "reason": "Success",
//   "result": {
//     "data": [{
//       "content": "某先生是地方上的要人。一天，他像往常一样在书房里例览当日报纸，突然对妻子大声喊道：喂，安娜，你看到今天早报上的流言蜚语了吗？真可笑！他们说，你收拾行装出走了。你听见了吗？安娜、你在哪儿？安娜？啊！",
//       "hashId": "90B182FC7F74865B40B1E5807CFEBF41",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "有一天我看着报纸，小声嘟囔着一篇文章的题目鸟儿也有外语，丈夫听了对了一句：鸟儿当然也有‘外遇’。原来丈夫听错了，我笑得前仰后合。",
//       "hashId": "206F5C52FD2ED94772CBC66C8AC61F2A",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "新提拔的经理觉得从员工中得到的尊重不够，于是一天戴上一枚自制的徽章，上面写着：“我是头儿！”然后在办公室神气地来回巡视。中午吃完饭后，经理回到办公室，看见桌上留着一张字条，上面写着：“你的妻子打来电话，说让你记着下班后把徽章带回去，她要用。”",
//       "hashId": "B36BF69DC3B622BD8A4F5A7740C31806",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "每天最开心的事情就是早晨看着老婆抹了化妆水啪啪的拍自己的脸（据说是用来保湿的）。“啪啪”，“啪啪”，“啪啪”，听了太爽了，我边听边心里默念“叫你让我洗袜子，叫你让我接孩子，叫你不让我喝酒，叫你不叫我玩CS,打，打，给我使劲打！！”",
//       "hashId": "844C822551A6D4B8352BDDE902F3034D",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "有一对新婚夫妇，彼此都不太了解，这个新娘有口臭而新郎呢，他有脚臭，但是彼此都不想让对方知道，因此在新婚后的一个月里新娘在晚上从来不开口说话，而新郎呢在一个月里都不脱袜子。但是一个月后的一天晚上，新郎不知怎的把袜子给睡掉了，当他醒来时发现袜子不见了他就找，把新娘给吵醒了，新娘问到你：你找什么我帮你找吧！新郎用手捂着鼻子说：呀，我找到了，原来我的袜子在你的嘴里。",
//       "hashId": "CC93180C3C0BA4C291A2CF88B6A28A3A",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "今天周日，陪我逛商场去好么？啊，求你啊，老婆，上次累得我的腿还没缓过劲来呢。你不去逛商场，那就在家里洗衣服好么？洗就洗！！哎？哎？你怎么跟着我来了，不是不去商场么？-我是不放心，还是跟你着比较好。再说了，在卫生间里洗衣服和在里面吸烟是两回事呢。呵呵，那帮我拎着包好么？拎就拎吧，回来的比这重我也不是不知道。",
//       "hashId": "AAFC436653D8520B9C3D6ECE1DBC6AA6",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "一天早晨，妻子正在厨房里安排早餐的时候，丈夫发现他的衣柜抽屉里只剩下一双干净的袜子了，他并没有发任何牢骚来责怪妻子洗衣不勤快，只是对着厨房大声说：“亲爱的，要是我还有一只脚，那它就会没有袜子穿了。”",
//       "hashId": "1B596F6B3FF8787B29345A738477E62F",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "商人叮嘱老婆，如果他做生意赔了本，就把屋子弄得灯火通明，相反的话，则只是点一支蜡烛就行了。为什么这样呢？老婆不解地问。我赔了本，其他人该生气，他解释道，让他们生气的唯一方法就是让他们看到我家灯火通明。那你赚了钱呢？如果我赚了钱，那我当然要他们高兴，只点一支蜡烛，他们会认为我快要穷死了，一定会乐得跳起来！",
//       "hashId": "EC3F5E40AA978568A273C01F24E27D19",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "妻子问我：“今天我生日，你给我买了什么礼物？”我笑着往对面一指：“看到那边那辆粉红色的奔驰了么？”“看到了！”她开心地回答。“我给你买了同样颜色的牙刷。”",
//       "hashId": "BF43956476E9E2306A1C88DF329D59A9",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "有人问老陈：“听说你在公司是老虎，在家里却是一只柔顺的小猫咪.因为你怕老婆，是吗?”老陈回答道：“谁说的!我在家里也是老虎!敢小看我?没门!”这些话刚好被他老婆听见了，便破口大骂：“你是老虎，那我是谁？”老陈不好意思地说：“你~~~~你是武松呀！”",
//       "hashId": "AF6A402659CF6F8785AD7488D01D98CC",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "她：因为别人都不同情你，我才做你的妻子。他：你总算成功了。现在每个人都因此同情我。",
//       "hashId": "EA99E1CE63349DF7AA4712E820B59234",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "老婆把钱管得严，家里有个保险箱，密码只有她知道。有一天急用钱，向老婆申请，老婆批了，我问密码是多少。老婆说：“我们初吻的日子”。我没敢继续问，只好找朋友借钱了。",
//       "hashId": "E4C530E96D284793E76F3DD2CA1A7907",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "“亲爱的，我现正在国际机场，准备赴新加坡参加一个学术研讨会……”“我已登上飞机了，哦---我的小姐，你注意点啊----亲爱的，不好意思，刚才空姐不小心把茶溅到我身上了----”“是吗，那位空姐对你实在太好了，连你在飞机上打手机都没劝阻你，去死！嘟嘟嘟-----”",
//       "hashId": "F611129E4A67F4AE5CD11819B6D5FE0C",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "一个男人周五下午离开家去上班。这天是发薪日，因此他没有回家，整个周末在外面与男人们狂欢，并花光了他的全部薪水。周日晚上他终于回到家里时，火冒三丈的妻子正等着他，连珠炮似的对他的所作所为骂了将近两个小时。最后，妻子停止了喋喋不休的责骂，问他：要是你也连着两三天见不到我，会作何感想？他回答说：我会感觉挺好的。周一过去了，他没看见妻子。周二和周三也过去了，他还是没有看见他妻子。到了周四……肿消了一些，他终于勉强能从左眼角看到妻子一点点了……",
//       "hashId": "771AC90167E260A5A783A13F08494B41",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "老公在上个东家那里还有最后一笔工资要领，因为他比较忙，而我比较闲，我要替他去领，被老公坚决拒绝。我以为他不想工资被“充公”呢，结果他半天才幽幽地说道:“你不能去……因为我已经在他们面前把你吹得跟天仙一样了……”",
//       "hashId": "B16E11E35C54B2CB2E2715CB7BF4A967",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "老公下班回家后，发现老婆躺在床上。老公关切地问道：老婆，身体不舒服吗？老婆点了点头。老公连忙安慰道：做饭的事你不用愁，我一会把你背到厨房！",
//       "hashId": "66C10A1595B2CF295034179161FDC2F9",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "老公今天发工资了，问我六千咱两怎么分，问我要多少？我本想他自己留着花吧，就说零。结果这个二货说：你把零拿走了，我岂不只剩下六百…亲，你太自觉了好吗亲。",
//       "hashId": "8AF684B04882493C128602F11C7C8C85",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "有句话对所有男人说：“和媳妇闹别扭，她哄你，见好就收吧，收不住就会变成你哄她了，角色立马转变…得不偿失啊！”",
//       "hashId": "D44DFB8241F49DA08E248F60908999EC",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "妻子：快点吃吧，不然饭馆的服务员要给咱们加菜了！丈夫：加什么菜？妻子：你没有看见邻桌上的鱼刺、鸡骨头都扫到咱们眼前来了？",
//       "hashId": "05D41CAACE705F07BC0DAAC5586C5BB1",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }, {
//       "content": "夫被妻子盯得很紧，每日的薪金都如数交给妻子，只有一点刚够买香烟的零钱。一天，丈夫兴高采烈地回家，对妻子大叫：亲爱的，我中奖了！有5000元呢？妻子吃惊地问道：你哪里来的钱买彩票？",
//       "hashId": "CE9665A881C0516772304B32F0541724",
//       "unixtime": 1418745227,
//       "updatetime": "2014-12-16 23:53:47"
//     }]
//   },
//   "error_code": 0
// }