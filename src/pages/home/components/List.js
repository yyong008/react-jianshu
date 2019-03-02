import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    console.log("page ==> ", this.props)

    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link to={'/detail/' + item.get('id')}  key={index}>
              <ListItem key={item.get('id')}>
                <img alt="" className="pic" src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
            
          )
        })}
        <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

// 映射 state
const mapStateToProps = state => {
  return {
    list: state.home.get('articleList'),
    page: state.home.get('articlePage')
  }
}

// 这是dispatch映射函数
const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
