import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import "../global/index2.scss";
import shika from "../global/shikamaru.png";

const UserListComponent = () => {
  return (
    <div class="cards">
      <div class="outer">
        <div class="card" style={{ "--delay": -1 }}>
          <div class="content">
            <div class="img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFIvBPH9fIMQZis4SHYTuv485uqr38bg1VQ&usqp=CAU" />
            </div>
            <div class="details">
              <span class="name">Iron Man</span>
              <p>Frontend Developer</p>
            </div>
          </div>
          <a href="#">Follow</a>
        </div>
        <div class="card" style={{ "--delay": 0 }}>
          <div class="content">
            <div class="img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMYmBQyoz9BWjEiMi5XipSPOmhamZUyI1gQ&usqp=CAU"
                alt=""
              />
            </div>
            <div class="details">
              <span class="name">Spider Man</span>
              <p>Full-stack Developer</p>
            </div>
          </div>
          <a href="#">Follow</a>
        </div>
        <div class="card" style={{ "--delay": 1 }}>
          <div class="content">
            <div class="img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2k6vsAWhq5UPsCW58Q2RSCKqPxMDq75wfg&usqp=CAU"
                alt=""
              />
            </div>
            <div class="details">
              <span class="name">Venom</span>
              <p>Tester</p>
            </div>
          </div>
          <a href="#">Follow</a>
        </div>
        <div class="card" style={{ "--delay": 2 }}>
          <div class="content">
            <div class="img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwJX81iy7cnzgclyjTKlNnDlzIzPN1KSIgA&usqp=CAU"
                alt=""
              />
            </div>
            <div class="details">
              <span class="name">Batman</span>
              <p>Backend Developer</p>
            </div>
          </div>
          <a href="#">Follow</a>
        </div>
        <div class="card" style={{ "--delay": 2 }}>
          <div class="content">
            <div class="img">
              <img
                src="https://static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-superman-1978/EB20101104REVIEWS08101109987AR.jpg"
                alt=""
              />
            </div>
            <div class="details">
              <span class="name">Superman</span>
              <p>Youtuber</p>
            </div>
          </div>
          <a href="#">Follow</a>
        </div>
      </div>
    </div>
  );
};

const UserCardComponent = () => (
  <div class="box">
    <div class="box-header">
      <img
        src={shika}
        // style={{ width: "70%" }}
        class="card-img-top h-10 w-100"
        alt="..."
      />
      <span>USER NAME</span>
    </div>
  </div>
);

const UserProfileComponent = () => (
  <div class="bs-example" style={{ margin: "20px" }}>
    <div class="card" style={{ maxWidth: "500px" }}>
      <div class="row no-gutters">
        {/* <div class="col-sm-5" style={{ background: "#868e96" }}> */}
        <img
          src={shika}
          // style={{ width: "70%" }}
          class="card-img-top h-10 w-100"
          alt="..."
        />
        {/* </div> */}
        {/* <div class="col-sm-7"> */}
        <div class="card-body">
          <h5 class="card-title">Alice Liddel</h5>
        </div>
        {/* </div> */}
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
      <div class="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
        <div class="container">
          <div class="box">
            <div class="box-header">
              <img
                src={shika}
                // style={{ width: "70%" }}
                // class="card-img-top h-10 w-100"
                alt="..."
              />
              <span>USER NAME</span>
            </div>
          </div>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <div class="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
        <div className="container">
          {/* <UserCardComponent /> */}
          <div className="d-flex flex-row border rounded">
            <div className="p-0 w-25">
              <img
                // src="https://c1.staticflickr.com/3/2862/12328317524_18e52b5972_k.jpg"
                src={shika}
                className="img-thumbnail border-0"
              />
            </div>
            <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
              <h4 className="text-primary">Leanne Boulton</h4>
              <h5 className="text-info">Photographer</h5>
              <ul
                className="m-0 float-left"
                style={{ listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <i className="fab fa-facebook-square"></i> Facebook
                </li>
                <li>
                  <i className="fab fa-twitter-square"></i> Twitter
                </li>
              </ul>
              <p className="text-right m-0">
                <a href="#" className="btn btn-primary">
                  <i className="far fa-user"></i> View Profile
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
          <div className="container">
            {/* <UserCardComponent /> */}
            <div className="d-flex flex-row border rounded">
              <div className="p-0 w-25">
                <img
                  // src="https://c1.staticflickr.com/3/2862/12328317524_18e52b5972_k.jpg"
                  src={shika}
                  className="img-thumbnail border-0"
                />
              </div>
              <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
                <h4 className="text-primary">Leanne Boulton</h4>
                <h5 className="text-info">Photographer</h5>
                <ul
                  className="m-0 float-left"
                  style={{ listStyle: "none", margin: 0, padding: 0 }}
                >
                  <li>
                    <i className="fab fa-facebook-square"></i> Facebook
                  </li>
                  <li>
                    <i className="fab fa-twitter-square"></i> Twitter
                  </li>
                </ul>
                <p className="text-right m-0">
                  <a href="#" className="btn btn-primary">
                    <i className="far fa-user"></i> View Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalComponent;

/*
<Card>
        <CardBody>
          <CardTitle tag="h5">
            <div>person or group name you want to chat with</div>
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <div>Some random subtitle</div>
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            <div>person or group name you want to chat with</div>
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <div>Some random subtitle</div>
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
*/
