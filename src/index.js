import React from 'react'
import ReactDOM from 'react-dom'

import style from './reset.css'
import App from './Components/App'

const Index = () => {
  return (
    <div className={style.reset}>
      <App />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
