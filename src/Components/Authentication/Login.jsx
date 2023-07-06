import React from 'react'

const Login = (props) => {
  return (
    <div className={`text-${props.mode==="Dark"?"light":"dark"} text-center`}>
      login page
    </div>
  )
}

export default Login
