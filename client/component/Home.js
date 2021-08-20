import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

// import styles from "./Home.css";
import Page from "./Page";
// import withStyle from "../hoc/withStyle";
import { getHomeList } from "../store/home/action";

class Home extends React.Component {
  // 预加载数据，服务端调用
  static loadData(store, match) {
    // 参数 match 是当前匹配路由的信息
    return store.dispatch(getHomeList());
  }

  componentDidMount() {
    // 服务端已经往store中注入数据，这里不需要重复请求
    if (!this.props.home.list.length) {
      this.props.getHomeList1();
    }
  }

  render() {
    const props = this.props;
    return (
      <div>
        <div className={"title"}>This is home</div>
        <div>
          {!!props.home.list.length &&
            props.home.list.map(item => <div key={item.name}>{item.name}</div>)}
        </div>
        <button onClick={props.getHomeList1}>click me</button>
        <div>
          <button className={"alertMe"} onClick={() => alert("hhhhhh")}>
            alert
          </button>
        </div>
        <Page></Page>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeList1: () => dispatch(getHomeList())
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
