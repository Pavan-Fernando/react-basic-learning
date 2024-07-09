import React from 'react'

function BodyContent(props) {
  return (
    <div className='content'>
      <h1>Main Content</h1>
      {props.children}
    </div>
  )
}

export default BodyContent
