import "./index.less";
import axios from "axios";
import { usePageScroll, useReachBottom } from "@tarojs/taro";
import { Image, View, Text } from "@tarojs/components";
import { useState, useEffect, useRef } from "react";
import { Drag } from "@nutui/nutui-react-taro";
export default function Index() {
  const [navDatas, setNavDatas] = useState([]); // 声明存储导航栏数据的变量
  const [clickNum, setClickNum] = useState(0); // 声明记录当前点击的变量
  const [tags, setTags] = useState([]); // 声明存储标签的数组
  const [new_hot, setNew_hot] = useState("最近更新"); // 记录当前点击的模块
  const [hot_show, setHot_show] = useState(false); // 声明是否显示更多选项的按钮
  const [bannerData, setBannerData] = useState([]); // 声明存储内容数据 的数组
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);
  // 请求导航栏和内容数据
  async function getData() {
    // const { data } = await axios.get("http://127.0.0.1:9527/init");
    // const { data: newDatas } = await axios.get(
    //   "http://127.0.0.1:9527/timeline"
    // )
    setNavDatas([
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
    ]);
    setBannerData([
      {
        id: "1",
        content: `如果不敬业,早不发圈了;\n如果是骗⼦,早就消失了;\n⻓期坚持的,都是靠谱的;\n如果不敬业,早不发圈了;\n如果是骗⼦,早就消失了`,
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "2",
        content:
          "有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "3",
        content:
          "⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "4",
        content:
          "开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "5",
        content:
          "懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
      {
        id: "6",
        content:
          "好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，",
        tags: ["⼤促成交"],
        star_count: 1000,
      },
    ]);
    setTags(["4⽉推荐", "⼤促成交", "评价反馈"]);
  }
  // 页面加载完成时的回调
  useEffect(() => {
    getData();
  }, []);
  useReachBottom(async () => {
    setLoading(true);
    // const { data: newDatas } = await axios.get(
    //   "http://127.0.0.1:9527/timeline"
    // );
    console.log(11);
    setBannerData([
      ...bannerData,
      ...[
        {
          id: "1",
          content:
            "如果不敬业,早不发圈了;\n如果是骗⼦,早就消失了;\n⻓期坚持的,都是靠谱的;\n如果不敬业,早不发圈了;\n如果是骗⼦,早就消失了",
          tags: ["⼤促成交"],
          star_count: 1000,
        },
        {
          id: "2",
          content:
            "有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为",
          tags: ["⼤促成交"],
          star_count: 1000,
        },
        {
          id: "3",
          content:
            "⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要",
          tags: ["⼤促成交"],
          star_count: 1000,
        },
        {
          id: "4",
          content:
            "开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以",
          tags: ["⼤促成交"],
          star_count: 1000,
        },
        {
          id: "5",
          content:
            "懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰",
          tags: ["⼤促成交"],
          star_count: 1000,
        },
        {
          id: "6",
          content:
            "好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，",
          tags: ["⼤促成交"],
          star_count: 1000,
        },
      ],
    ]);
    setLoading(false);
  });
  const handleDragStart = (e) => {
    const { clientX, clientY } = e.touches[0];
    const rect = draggableRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    setPosition({ x: offsetX, y: offsetY });
    // draggableRef.current.style.transition = "none";
  };
  const handleDragging = (e) => {
    const { clientX, clientY } = e.touches[0];
    const rect = draggableRef.current.getBoundingClientRect();

    const left = clientX - position.x;
    const top = clientY - position.y;

    setPosition({ x: position.x, y: position.y });
    draggableRef.current.style.left = `${left}px`;
    draggableRef.current.style.top = `${top}px`;
  };
  const handleDragEnd = () => {
    // draggableRef.current.style.transition = "";
  };

  return (
    <div className="index">
      <div className="fixed_box">
        <div className="head_fixed">
          {/* 导航模块 */}
          <div className="index_nav">
            {navDatas.map((data, i) => {
              return (
                <div key={data.id}>
                  <nav
                    className={clickNum === i ? "on" : "no_on"}
                    onClick={() => {
                      setClickNum(i);
                      setTags(data.tags);
                    }}
                  >
                    {data.name}
                    <div className="under_line"></div>
                  </nav>
                </div>
              );
            })}
          </div>
          {/* 标签模块 */}
          <div className="tags">
            <div
              className="new_hot"
              onClick={() => {
                setHot_show(!hot_show);
              }}
            >
              {new_hot}
            </div>
            <span className="img_box">
              <Image
                className="img_bg"
                src={require("../../image/Ellipse.png")}
              ></Image>
              <Image
                className={
                  hot_show ? "choose_img show_choose" : "no_choose show_choose"
                }
                src={require("../../image/Vector.png")}
              ></Image>
            </span>
            {hot_show && (
              <div className="choose">
                <p
                  onClick={() => {
                    setNew_hot("最近更新");
                    setHot_show(false);
                  }}
                  className={new_hot === "最近更新" ? "active" : ""}
                >
                  最近更新
                </p>
                <p
                  className={new_hot === "热门下载" ? "active" : ""}
                  onClick={() => {
                    setNew_hot("热门下载");
                    setHot_show(false);
                  }}
                >
                  热门下载
                </p>
              </div>
            )}
            <div className="tags_info">
              {tags.map((item) => {
                return (
                  <div className="tags_item" key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 内容模块 */}
      <div className="index_banner">
        {clickNum === 0 && (
          <div className="banner_info">
            {bannerData &&
              bannerData.map((data, i) => {
                return (
                  <div className="banner_item" key={i}>
                    <Text className="banner_content">{data.content}</Text>

                    <div className="banner_tags">
                      {data.tags.map((item) => (
                        <span key={item}>#{item}&gt;</span>
                      ))}
                    </div>

                    <div className="small_icon">
                      <Image
                        className="icon_img"
                        src={require("../../image/note-2.png")}
                        alt=""
                        onClick={() => {
                          console.log(1);
                        }}
                      />
                      <Image
                        className="icon_img"
                        src={require("../../image/heart.png")}
                        alt=""
                        onClick={() => {
                          console.log(2);
                        }}
                      />
                      <div className="setting">
                        <Image
                          className="icon_img"
                          src={require("../../image/edit-2.png")}
                          alt=""
                          onClick={() => {
                            console.log(3);
                          }}
                        />
                        <span className="small_ai">AI</span>
                      </div>

                      <Image
                        className="icon_img"
                        src={require("../../image/export.png")}
                        alt=""
                        onClick={() => {
                          console.log(4);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {clickNum === 1 && <div>群发</div>}
        {clickNum === 2 && <div>软文</div>}
        {clickNum === 3 && <div>海报</div>}
        {clickNum === 4 && <div>商品</div>}
        {clickNum === 5 && <div>直播</div>}
      </div>
      <div
        ref={draggableRef}
        className="ball"
        onMouseDown={(e) => {
          handleDragStart(e);
        }}
        onMouseMove={(e) => {
          handleDragging(e);
        }}
        onMouseUp={(e) => {
          handleDragEnd(e);
        }}
      >
        <Image
          className="ball_img"
          src={require("../../image/edit-1.png")}
          alt=""
        />
        <span>AI</span>
        <p>AI智改</p>
      </div>

      {/* {loading && <div className="loading">正在全力加载下一页</div>} */}
    </div>
  );
}
