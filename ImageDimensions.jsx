import React, { useEffect, useState } from "react";
import PostsContainer from "../PostsContainer";

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

const ImgDim = () => {
  const [imageDimensions, setImageDimensions] = useState({});
  const imageUrl = 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    

  useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
    console.log(imageDimensions);
  }, []);

  return (
    <div>
      {Object.keys(imageDimensions).length === 0 ? (
        <b>Calculating...</b>
      ) : (
        <>
          <p>
            <b>Height:</b> {imageDimensions.height}{" "}
          </p>
          <p>
            <b>Width:</b> {imageDimensions.width}{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default ImgDim;