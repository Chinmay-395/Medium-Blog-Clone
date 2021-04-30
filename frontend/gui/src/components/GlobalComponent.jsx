import React from "react";
import { Container, Card, Button, Row, Col } from "reactstrap";
import "../global/index2.scss";
import shika from "../global/shikamaru.png";

const CopyingHtml = () => (
  <div className="block-61 space-between-blocks">
    <div className="container">
      <div className="row px-2 pt-1">
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
      </div>
    </div>
  </div>
);

/**
 *
 * @returns This will be a chat component
 */
function GlobalComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      style={{
        position: "fixed",
        right: "0px",
        bottom: "0px",
        zIndex: 1,
        width: "15%",
      }}
      className="chat_component_box"
    >
      <div>
        {/* HEADING PART OF CHAT COMPONENT */}
        <div
          style={{
            paddingTop: "1rem",
            display: "flex",
            flexWrap: "nowrap",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Avatar of the logged in user */}
          <div style={{ paddingLeft: "1rem" }}>
            <img
              style={{ height: "35px", width: "35px", borderRadius: "10rem" }}
              src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
              alt=""
            />
          </div>
          <div>
            <p>
              <span>MESSAGING</span>
            </p>
          </div>
          <div style={{ paddingRight: "1rem" }}>
            <Button onClick={() => setIsOpen(!isOpen)}>click</Button>
          </div>
        </div>
        {isOpen && (
          <>
            {/* LIST OF PEOPLE TO CHAT  */}
            <div style={{ height: "25rem", overflow: "auto" }}>
              <CopyingHtml />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GlobalComponent;
