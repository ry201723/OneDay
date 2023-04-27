import React from "react";
import { Image, View } from "@tarojs/components";
import "./myself.less";
class Myself extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     oLeft: 0,
  //     oTop: 0,
  //   };
  //   this.oDiv = null;

  //   this.disX = null;
  //   this.disY = null;

  //   this.moveX = null;
  //   this.moveY = null;

  //   this.L = null;
  //   this.T = null;

  //   this.starX = null;
  //   this.starY = null;

  //   this.starXEnd = null;
  //   this.starYEnd = null;
  // }
  // //在这个生命周期函数里定义oDiv  还有初始的位置
  // componentDidMount() {
  //   this.oDiv = document.getElementsByClassName("t-suspend-button")[0];
  //   this.setState({
  //     oTop: document.documentElement.clientWidth + this.oDiv.offsetHeight,
  //   });
  // }
  // //点击事件
  // enquire(e) {
  //   e.preventDefault();
  //   console.log(11111);
  // }

  // onTouchStart(e) {
  //   // e.preventDefault();
  //   this.disX = e.touches[0].clientX - this.oDiv.offsetLeft;
  //   this.disY = e.touches[0].clientY - this.oDiv.offsetTop;
  //   //手指按下时的坐标
  //   this.starX = e.touches[0].clientX;
  //   this.starY = e.touches[0].clientY;
  // }

  // onTouchMove(e) {
  //   this.L = e.touches[0].clientX - this.disX;
  //   this.T = e.touches[0].clientY - this.disY;
  //   //移动时 当前位置与起始位置之间的差值
  //   this.starXEnd = e.touches[0].clientX - this.starX;
  //   this.starYEnd = e.touches[0].clientY - this.starY;
  //   //console.log(L);
  //   if (this.L < 0) {
  //     //限制拖拽的X范围，不能拖出屏幕
  //     this.L = 0;
  //   } else if (
  //     this.L >
  //     document.documentElement.clientWidth - this.oDiv.offsetWidth
  //   ) {
  //     this.L = document.documentElement.clientWidth - this.oDiv.offsetWidth;
  //   }
  //   if (this.T < 0) {
  //     //限制拖拽的Y范围，不能拖出屏幕
  //     this.T = 0;
  //   } else if (
  //     this.T >
  //     document.documentElement.clientHeight - this.oDiv.offsetHeight
  //   ) {
  //     this.T = document.documentElement.clientHeight - this.oDiv.offsetHeight;
  //   }
  //   this.moveX = this.L;
  //   this.moveY = this.T;
  //   this.setState({
  //     oLeft: this.moveX,
  //     oTop: this.moveY,
  //   });
  // }

  // onTouchEnd(e) {
  //   //计算结束的位置是靠左还是靠右
  //   let oLeft = this.state.oLeft;
  //   if (
  //     oLeft <
  //     (document.documentElement.clientWidth - this.oDiv.offsetWidth) / 2
  //   ) {
  //     oLeft = 0;
  //   } else {
  //     oLeft = document.documentElement.clientWidth - this.oDiv.offsetWidth;
  //   }
  //   this.setState({
  //     oLeft: oLeft,
  //   });
  // }

  render() {
    //先定义一些变量

    return (
      <View
      // className="t-suspend-button"
      // // onClick={this.handleClick.bind(this)}
      // onTouchStart={(e) => this.onTouchStart(e)}
      // onTouchMove={(e) => this.onTouchMove(e)}
      // onTouchEnd={(e) => this.onTouchEnd(e)}
      // style={{
      //   position: "fixed",
      //   left: `${this.state.oLeft}px`,
      //   top: `${this.state.oTop}px`,
      // }}
      >
        <View className="customer-text">Myself</View>
      </View>
    );
  }
}
export default Myself;
