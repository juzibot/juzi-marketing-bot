interface Data {
  uniquekey: string;
  title: string;
  date: string;
  category: string;
  author_name: string;
  url: string;
  thumbnail_pic_s: string;
  thumbnail_pic_s02: string;
  thumbnail_pic_s03: string;
  is_content: string;
}

interface Result {
  stat: string;
  data: Data[];
  page: string;
  pageSize: string;
}

export interface NewsInfoResult {
  reason: string;
  result: Result;
  error_code: number;
}

// 示例数据
// {
//   "reason": "success!",
//   "result": {
//     "stat": "1",
//     "data": [{
//       "uniquekey": "718c452853ec3aa719a2e248fb68635a",
//       "title": "新疆：平稳激活生产生活要素，稳妥推动复工复产复市",
//       "date": "2022-11-28 23:51:00",
//       "category": "国内",
//       "author_name": "石榴云客户端",
//       "url": "https://mini.eastday.com/mobile/221128235134872266868.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128235134_1bcb444d5882b5e6d2668552c3c0267f_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "13f5cad44aec5f09656cc9bbff093a32",
//       "title": "中央广播电视总台与蒙古国家公共广播电视台签署合作备忘录",
//       "date": "2022-11-28 23:50:00",
//       "category": "国内",
//       "author_name": "文汇报",
//       "url": "https://mini.eastday.com/mobile/221128235057578975456.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "e8e4f4727666ab3800113774c9ccba51",
//       "title": "香港中联办：坚定维护国家安全是香港法治的宪制责任必守底线",
//       "date": "2022-11-28 22:43:00",
//       "category": "国内",
//       "author_name": "香港中联办微信公号",
//       "url": "https://mini.eastday.com/mobile/221128224322245348133.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128224322_17b0985b05bd97ea6818f52464043d3b_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "4069b7fd7043e27a2543ee4941a14329",
//       "title": "惠及超15万人次 沃尔玛将在全国继续推进余量食物捐赠",
//       "date": "2022-11-28 22:43:00",
//       "category": "国内",
//       "author_name": "中国质量新闻网",
//       "url": "https://mini.eastday.com/mobile/221128224340231259347.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128224340_5cdf8fdbe7eb2a2e2cddf9f25ece1da6_1_mwpm_03201609.jpeg",
//       "thumbnail_pic_s02": "https://dfzximg02.dftoutiao.com/news/20221128/20221128224340_5cdf8fdbe7eb2a2e2cddf9f25ece1da6_2_mwpm_03201609.jpeg",
//       "thumbnail_pic_s03": "https://dfzximg02.dftoutiao.com/news/20221128/20221128224340_5cdf8fdbe7eb2a2e2cddf9f25ece1da6_3_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "2094e211ecda533d9cf41517de7f9bbb",
//       "title": "独家视频丨习近平举行仪式欢迎蒙古国总统访华",
//       "date": "2022-11-28 22:10:00",
//       "category": "国内",
//       "author_name": "央视新闻",
//       "url": "https://mini.eastday.com/mobile/221128221052123916344.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128221052_676146dd7274b7cdba84adfc4264b60c_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "60ac6b1da344ac32a11179219fb66a08",
//       "title": "人民网评：战胜疫情，信心耐心贵如金",
//       "date": "2022-11-28 22:07:00",
//       "category": "国内",
//       "author_name": "人民网-观点频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128220721516319471.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "6702d88554014b7c15ddc062a2e9e6ae",
//       "title": "讲好“中国式商量”故事|安徽：有事好商量，写就“暖”文章",
//       "date": "2022-11-28 21:47:00",
//       "category": "国内",
//       "author_name": "人民网－安徽频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128214733423989007.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128214733_36832068b882569a59ec753a10171771_1_mwpm_03201609.jpeg",
//       "thumbnail_pic_s02": "https://dfzximg02.dftoutiao.com/news/20221128/20221128214733_36832068b882569a59ec753a10171771_2_mwpm_03201609.jpeg",
//       "thumbnail_pic_s03": "https://dfzximg02.dftoutiao.com/news/20221128/20221128214733_36832068b882569a59ec753a10171771_3_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "0ea400afc1c41e83f7fbedf8fe257855",
//       "title": "顾明远：因材施教、适合每个学生发展的教育，才是最公平教育",
//       "date": "2022-11-28 21:39:00",
//       "category": "国内",
//       "author_name": "澎湃新闻",
//       "url": "https://mini.eastday.com/mobile/221128213934320835256.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "fd19812007497332af32923fefc64bf1",
//       "title": "著名地质学家沈其韩逝世，共和国今年已痛失38位两院院士",
//       "date": "2022-11-28 21:38:00",
//       "category": "国内",
//       "author_name": "澎湃新闻",
//       "url": "https://mini.eastday.com/mobile/221128213855058879722.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128213855_1a43d5d49e648b3e53534888863c2d42_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "29cca0264e234a8d2c9e7bd43ad4a43f",
//       "title": "129个“警民议事群”解民忧聚民心",
//       "date": "2022-11-28 21:37:00",
//       "category": "国内",
//       "author_name": "人民网－安徽频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128213729906171397.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "b31a1c84590c90e14ae8d6e824433c4e",
//       "title": "“雅万高铁”所需钢轨从这里装船发运",
//       "date": "2022-11-28 21:37:00",
//       "category": "国内",
//       "author_name": "人民网－广西频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128213729877157531.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "7976c96533494d45f946983e1645d68d",
//       "title": "上海首座旗舰型加油站党群服务站在宝山启用",
//       "date": "2022-11-28 21:36:00",
//       "category": "国内",
//       "author_name": "人民网－上海频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128213653027699958.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128213653_a1d4505930e2281e1b52ff40da1720cc_1_mwpm_03201609.jpeg",
//       "thumbnail_pic_s02": "https://dfzximg02.dftoutiao.com/news/20221128/20221128213653_a1d4505930e2281e1b52ff40da1720cc_2_mwpm_03201609.jpeg",
//       "thumbnail_pic_s03": "https://dfzximg02.dftoutiao.com/news/20221128/20221128213653_a1d4505930e2281e1b52ff40da1720cc_3_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "e30f72d4a2b1cc58db3fa0825775c38e",
//       "title": "聚焦基层社会服务 南京鼓楼又一校地共建项目启动",
//       "date": "2022-11-28 21:36:00",
//       "category": "国内",
//       "author_name": "人民网－江苏频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128213652995547205.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "345f94a16660b8bd76d8bdcbf9c06402",
//       "title": "乘风破浪的青年，大有可为的未来",
//       "date": "2022-11-28 21:24:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128212450467710019.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "e521957cc5b683920a1729637208e55c",
//       "title": "福安市支行：投放770万助力地方教育发展",
//       "date": "2022-11-28 21:22:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128212221101319397.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "e8d7b56c2e95c41b178b04ffd728b047",
//       "title": "农发行福鼎市支行：3亿元支持福鼎民俗文化特色街区提升改造项目",
//       "date": "2022-11-28 21:19:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128211921875662673.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "00e215feba6a9a6c3e0fe16e3e498795",
//       "title": "福鼎市农发行8亿元支持霞浦县福宁湾滨海新城及基础设施PPP项",
//       "date": "2022-11-28 21:15:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128211518098359690.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "e4e8d79f71e5af33983d7bde8fb79106",
//       "title": "国网湘潭供电公司圆满完成中国红色旅游博览会开幕式保电任务",
//       "date": "2022-11-28 21:10:00",
//       "category": "国内",
//       "author_name": "人民网－湖南频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128211004325511571.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128211004_c6d5f6362e33865a5c48cd7f81840cfc_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "ad75b01611b4937722bf63b7ffdd5f84",
//       "title": "农发行福鼎市支行开展“廉洁向党守初心”主题党日活动",
//       "date": "2022-11-28 21:09:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128210955660646831.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1707x1280_6384b32319fd9_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "83b5288cd02c5e945f69fe4c1a04a509",
//       "title": "农发行福鼎市支行开展“清廉金融大讲坛”活动",
//       "date": "2022-11-28 21:09:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128210907079431801.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1267x950_6384b2f28b6a5_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "137ed71b942e99203548aabd320c8eee",
//       "title": "江西中烟赣州卷烟厂多措并举提升生产保障能力",
//       "date": "2022-11-28 21:09:00",
//       "category": "国内",
//       "author_name": "人民网－江西频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128210926610920633.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "026c4b60f86b11c4c11f2a76149f8ad7",
//       "title": "陕西省委副书记、延安市委书记赵刚已任省政府党组书记",
//       "date": "2022-11-28 21:06:00",
//       "category": "国内",
//       "author_name": "澎湃新闻",
//       "url": "https://mini.eastday.com/mobile/221128210625108957006.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "ef70758a736d97dc097c10014a1482fd",
//       "title": "江西省科学院院长宋德雄调任江西省科技厅党组书记",
//       "date": "2022-11-28 21:05:00",
//       "category": "国内",
//       "author_name": "澎湃新闻",
//       "url": "https://mini.eastday.com/mobile/221128210536036566909.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128210536_622cfd828580b4271d491d613aa81acf_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "de55b0c48560b0a317a89505b8c35ad9",
//       "title": "苏州大学校友捐款设立“师恩源”基金，为退休教师送上温暖",
//       "date": "2022-11-28 21:04:00",
//       "category": "国内",
//       "author_name": "澎湃新闻",
//       "url": "https://mini.eastday.com/mobile/221128210421703417118.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20221128/20221128210421_e3d10e1779776e7744949032595e7e77_1_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "72770f24436abd54b7acfa650e8a6e0d",
//       "title": "农发行福鼎市支行召开十一月廉政警示教育会",
//       "date": "2022-11-28 21:04:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128210401418744108.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1707x1280_6384b1c0b9642_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "4aa672dddf9c2744abb738499efad7d2",
//       "title": "农发行宁德分行：举办2022年度全市系统客户经理培训班",
//       "date": "2022-11-28 21:03:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128210301458716409.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1269x952_6384b184d6bd7_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }, {
//       "uniquekey": "185877ee4dff045da0e04e0454797724",
//       "title": "江苏省省管领导干部任职前公示 涉及7人",
//       "date": "2022-11-28 21:03:00",
//       "category": "国内",
//       "author_name": "人民网－江苏频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128210353367143301.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "1eef705abe2a30a873391363c5af5365",
//       "title": "24项举措支持青海市场主体健康发展",
//       "date": "2022-11-28 21:03:00",
//       "category": "国内",
//       "author_name": "人民网－青海频道，供稿：人民资讯",
//       "url": "https://mini.eastday.com/mobile/221128210316823530271.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "7853fbae29ef0d7561e121490545f0a2",
//       "title": "中亚天然气管道今年向我国输气超400亿方",
//       "date": "2022-11-28 21:00:00",
//       "category": "国内",
//       "author_name": "每日看点快看",
//       "url": "https://mini.eastday.com/mobile/221128210050216235216.html",
//       "thumbnail_pic_s": "",
//       "is_content": "1"
//     }, {
//       "uniquekey": "6ef17d524bc1a027b715bfdb0aa6d0a4",
//       "title": "农发行宁德分行：开展反洗钱观摩交流会",
//       "date": "2022-11-28 20:58:00",
//       "category": "国内",
//       "author_name": "过客匆匆",
//       "url": "https://mini.eastday.com/mobile/221128205801642941668.html",
//       "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1920x1280_6384b0576bd4b_mwpm_03201609.jpeg",
//       "thumbnail_pic_s02": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1920x1280_6384b05824e38_mwpm_03201609.jpeg",
//       "thumbnail_pic_s03": "https://dfzximg02.dftoutiao.com/minimodify/20221128/1920x1280_6384b05913846_mwpm_03201609.jpeg",
//       "is_content": "1"
//     }],
//     "page": "1",
//     "pageSize": "30"
//   },
//   "error_code": 0
// }