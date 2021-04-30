import React from "react";
// import {
//   Container,
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
//   Row,
//   Col,
// } from "reactstrap";
import "../global/index2.scss";
import shika from "../global/shikamaru.png";

const CopyingHtml = () => (
  <div className="block-61 space-between-blocks">
    <div className="container">
      <div className="row px-2 pt-4">
        <div className="testimonial-card-1">
          <div className="block-61-person">
            <div>
              <img
                className="block-61-person__avatar"
                src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
                alt=""
              />
            </div>
            <div className="px-2"></div>
            <div className="flex-grow-1 d-flex flex-column">
              <span className="block-61-person__name my-1">Ali Boukeroui</span>
              <span className="block-61-person__info">frontendor.com</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card-1">
          <div className="block-61-person">
            <div>
              <img
                className="block-61-person__avatar"
                src="https://uifaces.co/our-content/donated/ukegoVAy.jpg"
                alt=""
              />
            </div>
            <div className="px-2"></div>
            <div className="flex-grow-1 d-flex flex-column">
              <span className="block-61-person__name my-1">Ali Boukeroui</span>
              <span className="block-61-person__info">frontendor.com</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card-1">
          <div className="block-61-person">
            <div>
              <img className="block-61-person__avatar" src={shika} alt="" />
            </div>
            <div className="px-2"></div>
            <div className="flex-grow-1 d-flex flex-column">
              <span className="block-61-person__name my-1">Shikamaru Nara</span>
              <span className="block-61-person__info">frontendor.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function GlobalComponent() {
  return (
    <div
      style={{
        position: "fixed",
        right: "0px",
        bottom: "0px",
        zIndex: 1,
        width: "20%",
        // height: "40%",
      }}
    >
      This will be a chat component
      <CopyingHtml />
    </div>
  );
}

export default GlobalComponent;
