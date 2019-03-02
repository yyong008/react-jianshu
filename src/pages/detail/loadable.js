import React from 'react'
import Loadable from 'react-loadable'

const loadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>正在加载...</div>
  }
})

export default () => <loadableComponent />