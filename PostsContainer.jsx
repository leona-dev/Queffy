import React from 'react'

import UserPost from './UserPost'
import ImgDim from './small-assets/ImageDimensions'

const PostsContainer = () => {
  return (
    <>
        <section className="main-posts-container">
            <div className="main-posts-content">
                <UserPost url="https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <UserPost url="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <UserPost url="https://plus.unsplash.com/premium_photo-1675314800274-d84f6a902203?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D" />
                <ImgDim />
            </div>
        </section>
    </>
  )
}

export default PostsContainer