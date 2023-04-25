import Mock from "mockjs";

export default {
  "GET /init": {
    data: [
      {
        id: "wechat_moments",
        name: "朋友圈",
        count_all: 100,
        count_last_week: 100,
        tags: ["4⽉推荐", "⼤促成交", "评价反馈"],
      },
      {
        id: "group_send",
        count_all: 100,
        count_last_week: 100,
        name: "群发",
        tags: ["4⽉推荐", "⼤促成交", "评价反馈"],
      },
      {
        id: "soft_advertising",
        name: "软⽂",
        count_all: 100,
        count_last_week: 100,
        tags: ["4⽉推荐", "⼤促成交", "评价反馈"],
      },
      {
        id: "poster",
        name: "海报",
        count_all: 100,
        count_last_week: 100,
        tags: ["4⽉推荐", "⼤促成交", "评价反馈"],
      },
      {
        id: "commodity",
        name: "商品",
        count_all: 100,
        count_last_week: 100,
        tags: ["4⽉推荐", "⼤促成交", "评价反馈"],
      },
      {
        id: "live_broadcast",
        name: "直播",
        count_all: 100,
        count_last_week: 100,
        tags: ["4⽉推荐", "⼤促成交", "评价反馈"],
      },
    ],
  },
  "GET /timeline": {
    data: [
      {
        id: "1",
        content:
          "如果不敬业，早不发圈了；\n如果是骗⼦，早就消失了；\n⻓期坚持的，都",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "2",
        content:
          "有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "3",
        content:
          "⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "4",
        content:
          "开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "5",
        content:
          "懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "6",
        content:
          "好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
    ],
  },
};
