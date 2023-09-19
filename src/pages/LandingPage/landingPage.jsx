import React from "react";
import Header from "../../header/header";
import IMAGES from "../../images";
import "./landingPage.css";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUpload from "../../components/fileupload/fileupload";

const title = "Making your life easier, at the tap of a finger!";
const text =
  "This is how it works, simply upload a picture of your ingredients or write down what ingredients you have and we’ll serve you with three of the best meals you could make with those!";
const typeIngredients =
  "Please type in names of ingredients (comma separated) and add it to your list of ingredients. It will be used by our site to generate different recopies you could try out.";
const uploadImage =
  "You can choose to take a picture of the ingredients you have , alternatively, upload an existing image.";
function LandingPage() {
  return (
    <div>
      <Header />
      <div className="landing-content">
        <div className="image-container">
          <img src={IMAGES.ingredients} className="image" />
        </div>
        <div className="content">
          <div className="title">
            <p className="title-text">{title}</p>
          </div>
          <div className="subtext">
            <p className="subtext-text">{text}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="user-input">
          <div className="info-tag-one">
            <div className="idea-icon-container">
              <FontAwesomeIcon icon={faLightbulb} className="idea-icon">
                {" "}
              </FontAwesomeIcon>
            </div>
            <div className="type-ingredients">
              <p className="typeIngredients-text">{typeIngredients}</p>
            </div>
          </div>

          <input
            className="resizable-text"
            type="text"
            placeholder="write ingredients..."
          />
          <div className="divider">
            <div className="line"></div>
            <p className="or-text">OR</p>
            <div className="line"></div>
          </div>
          <br />
          <div className="info-tag-one">
            <div className="idea-icon-container">
              <FontAwesomeIcon icon={faLightbulb} className="idea-icon">
                {" "}
              </FontAwesomeIcon>
            </div>
            <div className="type-ingredients">
              <p className="typeIngredients-text">{uploadImage}</p>
            </div>
          </div>
          <ImageUpload></ImageUpload>
        </div>
        <div className="image-right">
          <img src={IMAGES.handDough} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
