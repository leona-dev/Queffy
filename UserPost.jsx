import React, { useState, useEffect } from "react"
import { 
        UnlikedPost, 
        LikedPost, 
        UnSaved, 
        SavedPost 
      } from "./small-assets/PostStatus"

// ========== Get Image Dimensions ========== //
const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};





const UserPost = (props) => {

  // ========== Getting Image Dimensions & Resizing =========

  const [imageDimensions, setImageDimensions] = useState({});
  const imageUrl = props.url ;

  useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
    console.log(imageDimensions);
  }, []);

  let imgHeight = imageDimensions.height
  let imgWidth = imageDimensions.width

  console.log(imageDimensions.height)
// ========== Logic for liking posts ========== //

  const [ like, setLike ] = useState(false)
  const [saved, setSaved ] = useState(false)

  const likeFunc = () => {
    if(like) {
      setLike(false)
    }
    else {
      setLike(true)
    }
  }
  const saveFunc = () => {
    if(saved) {
      setSaved(false)
    }
    else {
      setSaved(true)
    }
  }

// ========== Return Func ========== //

  return (
    <>
        <div className="user-post-block">
          <div className="user-post-header">
            <div className="user-post-av">
              <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4a/4a2ad8495ba975c18269910e33f0c28738d311af.jpg" alt="" />
            </div>
            <div className="user-post-name">
              <p className="post-author">Leona</p>
              <p className="post-timestamp">Today 19:45</p>
            </div>
          </div>
          <div className="user-post-codeblocks"></div>
          <div className="user-post-media">
            <img src={props.url} alt="" style={{height: `${imgHeight > 550 ? imgHeight : '550px'}`}} />
          </div>
          <div className="user-post-action">
            <div className="upa-left">
              <div onClick={likeFunc} className="upa-box upa-likes">
                { like ? <LikedPost /> : <UnlikedPost />}
                <span>12k</span>
              </div>
              <div className="upa-box upa-comments">
                <i className="fa-regular fa-comment"></i>
                <span>8k</span>
              </div>
              <div className="upa-box upa-shares">
                <i className="fa-solid fa-share"></i>
                <span>6.85k</span>
              </div>
            </div>
            <div onClick={saveFunc} className="upa-box upa-bookmark">
              { saved ? <SavedPost /> : <UnSaved />}
              <span>10k</span>
            </div>
          </div>
          <div className="user-post-description">
            <span className="author-mention">@leona.dev </span> 
            <span className="description-contnet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolorem?</span>
          </div>
        </div>
    </>
  )
}

export default UserPost
