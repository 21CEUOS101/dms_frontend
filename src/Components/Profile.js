import React from 'react'

function Profile(props) {
  return (
      <>
        <div>Profile</div>
        <p>{JSON.stringify(props.data)}</p>
      </>
  )
}

export default Profile