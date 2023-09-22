import React, { useState, useRef } from "react";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./fileupload.css";

const ImageUpload = (props) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

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
    console.log("Text input:", props.textInput);
    if (images.length === 0 && !props.textInput) {
      console.log("Nothing is there");
      return;
    }

    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`images`, image.file);
    });

    // Append text data to the formData
    if (props.textInput) {
      formData.append("text_data", props.textInput);
    }

    fetch("http://localhost:5000/process_images", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle the results from the server here
          setResponseData(data.results);
          navigate("/recipes", { state: { data: data.results } });
          console.log(data.results);
        } else {
          console.error(data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        name="images[]"
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
