import React from 'react'

import Sidebar from '../components/Sidebar'
import PostsContainer from '../components/PostsContainer'
import StatusBar from '../components/StatusBar'

const index = () => {
  return (
    <main className='index-container'>
        <Sidebar />
        <PostsContainer />
        <StatusBar />
    </main>
  )
}

export default index