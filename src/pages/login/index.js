import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props

    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input
              }}
            />
            <Button
              onClick={() => login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
const mapState = state => {
  return {
    loginStatus: state.login.get('login')
  }
}

const mapDispatch = dispatch => {
  return{
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
}}

export default connect(
  mapState,
  mapDispatch
)(Login)
