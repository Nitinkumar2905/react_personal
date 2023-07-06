import React from 'react'

const SignUp = (props) => {
  return (
    <div className={`text-center text-${props.mode==="Dark"?"light":"dark"}`}>
      signup page
    </div>
  )
}

export default SignUp
