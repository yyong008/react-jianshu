import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { actionCreator } from "./store";

class Detail extends PureComponent {
  
  render() {
    console.log(this.props)
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapState = (state) => {
  return {
    title: state.detail.get('title'),
    content: state.detail.get('content')
  }
}

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreator.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));