import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Write';
import { actionCreators } from './store';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {
  // 挥刀顶部
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    console.log("our props", this.props)
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  console.log("ou no my state is broke", state.home.get('showScroll'))
  return {
    showScroll: state.home.get('showScroll')
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    console.log("actionCreators.toggleToShow", actionCreators)
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});


export default connect(mapStateToProps, mapDispatch)(Home);
