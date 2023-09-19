import React, { useState, useRef } from "react";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./fileupload.css";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleRemoveImage = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const uploadedImage = {
        id: Date.now().toString(),
        src: event.target.result,
        file,
      };

      setImages([...images, uploadedImage]);
      setSelectedImage(null);
    };

    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach((file) => {
      handleImageUpload(file);
    });
  };
  const handleSubmit = () => {
    if (images.length == 0) {
      console.log("nothing is there");
    }
    console.log("submitted images");
  };
  return (
    <div
      className="image-upload-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="container-header">
        <p className="upload-text">FILE UPLOAD</p>
      </div>
      <div className="upload-tab">
        <div className="uploaded-images">
          <ul className="uploaded-image-list">
            {images.map((image) => (
              <li key={image.id} className="uploaded-image-item">
                <img
                  className="uploaded-image"
                  src={image.src}
                  alt="Uploaded"
                  width="100"
                  height="100"
                />

                <FontAwesomeIcon
                  icon={faRectangleXmark}
                  className="cancel-icon"
                  onClick={() => handleRemoveImage(image.id)}
                >
                  {" "}
                </FontAwesomeIcon>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="chooseImg-btn"
      >
        Choose Image
      </button>

      <button className="submit-btn" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default ImageUpload;
