import Taro, { Component } from "@tarojs/taro";
import { View, CoverView, CoverImage } from "@tarojs/components";
import "./index.scss";

class customTabBar extends Component {
  state = {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首1页",
        iconPath: "../image/page_sel.png",
        selectedIconPath: "../image/page_sel.png",
      },
      {
        pagePath: "pages/recommend/recommend",
        text: "今日推荐",
        iconPath: "../image/hand-thumbs-up-fill.png",
        selectedIconPath: "../image/hand-thumbs-up-fill.png",
      },
      {
        pagePath: "pages/search/search",
        text: "搜索",
        iconPath: "../image/search_nosel.png",
        selectedIconPath: "../image/search_nosel.png",
      },
      {
        pagePath: "pages/myself/myself",
        text: "我的",
        iconPath: "../image/person-fill.png",
        selectedIconPath: "../image/person-fill.png",
      },
    ],
  };

  switchTab = (item) => {
    const url = "/" + item.pagePath;
    Taro.switchTab({
      url: url,
    });
  };

  render() {
    return (
      <div className="bottom-tab">
        {this.state.list.map((item, index) => {
          return (
            <CoverView
              className="bottom-tab-item"
              onClick={this.switchTab.bind(this, item)}
              data-path={item.pagePath}
              key={item.text}
            >
              <CoverImage
                className="bottom-tab-item-img"
                src={
                  this.state.selected === index
                    ? item.selectedIconPath
                    : item.iconPath
                }
              />
              <CoverView
                className="bottom-tab-item-text"
                style={{
                  color:
                    this.state.selected === index
                      ? this.state.selectedColor
                      : this.state.color,
                }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </div>
    );
  }
}

export default customTabBar;
