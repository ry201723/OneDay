import "./index.less";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Index() {
  const [navDatas, setNavDatas] = useState([]); // 声明存储导航栏数据的变量
  const [clickNum, setClickNum] = useState(0); // 声明记录当前点击的变量
  const [tags, setTags] = useState([]); // 声明存储标签的数组
  const [new_hot, setNew_hot] = useState("最近更新"); // 记录当前点击的模块
  const [hot_show, setHot_show] = useState(false); // 声明是否显示更多选项的按钮
  const [bannerData, setBannerData] = useState([]); // 声明存储内容数据 的数组
  // 请求导航栏和内容数据
  async function getData() {
    const { data } = await axios.get("http://127.0.0.1:9527/init");
    const { data: newDatas } = await axios.get(
      "http://127.0.0.1:9527/timeline"
    );
    setNavDatas(data.data);
    setBannerData(newDatas.data);
    setTags(data.data[0].tags);
  }
  // 页面加载完成时的回调
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="index">
      {/* 标题模块 */}
      <div className="index_title">
        <p>营销文案辞库</p>
      </div>
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
        {tags.map((item) => {
          return (
            <div className="tags_item" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      {/* 内容模块 */}
      <div className="index_banner">
        {clickNum === 0 && (
          <div className="banner_info">
            {bannerData.map((data) => {
              return (
                <div className="banner_item" key={data.id}>
                  <p>{data.content}</p>
                  <div className="banner_tags">
                    {data.tags.map((item) => (
                      <span>#{item}&gt;</span>
                    ))}
                  </div>
                  <div className="small_icon">
                    <span
                      className="icon_1"
                      onClick={() => {
                        console.log(1);
                      }}
                    ></span>
                    <span
                      className="icon_2"
                      onClick={() => {
                        console.log(2);
                      }}
                    ></span>
                    <span
                      className="icon_3"
                      onClick={() => {
                        console.log(3);
                      }}
                    ></span>
                    <span
                      className="icon_4"
                      onClick={() => {
                        console.log(4);
                      }}
                    ></span>
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
    </div>
  );
}
