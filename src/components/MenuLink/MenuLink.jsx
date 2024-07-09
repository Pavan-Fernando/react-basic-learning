import React from 'react'
import './MenuLink.css'

function MenuLink(props ) { // props use to data pass to parent componenct to child componenct
  return (
    <div>
      <a href={props.url} className='link'>{props.linkName}</a>
    </div>
  )
}

export default MenuLink
