import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
  type: constants.CHNANGE_DETAIL,
  title,
  content
})

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content))
    }).catch(() => {console.log("detail 请求失败了！")})
  }
}