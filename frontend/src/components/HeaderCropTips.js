import React from 'react'
import { Link } from 'react-router-dom'

function HeaderCropTips() {
  return (
    <div className="header">
      <Link to='/ctips'>
        <h2>Crop Advisory Tips</h2>
      </Link>
      <Link to="/addpost">
        <h3>Add Post</h3>
      </Link>
    </div>
  )
}

export default HeaderCropTips