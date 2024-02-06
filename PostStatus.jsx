import React from "react"

// ========== Returns Liked/Unliked Ico ========== //

const UnlikedPost = () => {
    return (
      <>
        <i className="fa-regular fa-heart"></i>
      </>
    )
  }
  
  const LikedPost = () => {
    return (
      <>
        <i className="fa-solid fa-heart heart-red"></i>
      </>
    )
  }
  
  // ========== Returns Saved/Unsaved Ico ========== //
  
  const UnSaved = () => {
    return (
      <>
        <i class="fa-regular fa-bookmark"></i>
      </>
    )
  }
  
  const SavedPost = () => {
    return (
      <>
        <i class="fa-solid fa-bookmark"></i>
      </>
    )
  }

    // ========== Function for saving posts ========== //

    export { UnlikedPost, LikedPost, UnSaved, SavedPost }