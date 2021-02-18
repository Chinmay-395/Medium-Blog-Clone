import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, //NavLink
} from "reactstrap";
//react-redux imports
import { connect } from "react-redux";
import { authLogin, authLogout } from "../redux/auth/authActions";
//custom imports
import { toast } from "react-toastify";
import icon from "../assets/medium-blog-icons.svg";

function LoginForm({ modal, toggle, login_func }) {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    login_func(details);
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Authentication</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="name">Email</Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="username"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.username}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </FormGroup>
            <Button
              type="Submit"
              color="info"
              value="login_func2"
              onClick={toggle}
            >
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}

const NavBar = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => setIsOpen(!isOpen);

  const login_func = (details) => {
    console.log("LOGGED IN");
    console.log(details);
    props.login(details.username, details.email, details.password);
  };

  const logout = () => {
    console.log("THE USER LOGGED OUT");
    props.authLogout();
    toast.info("YOU LOGGED OUT", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  console.log("THE PROPS", props);

  return (
    <div className="container mt-3">
      <Navbar style={{ backgroundColor: "#00203FFF" }} expand="md">
        <NavbarBrand href="/">
          <img
            style={{
              width: "35%",
              maxWidth: "100px",
              height: "auto", //"100px",
              display: "block",
            }}
            src={icon}
            alt="Medium-Blog-Clone"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavBar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                className="nav-link"
                style={{ color: "#ADEFD1FF" }}
              >
                {/* <Link to="/"> */}
                <span className="fa fa-home fa-lg"></span>
                {/* #ADEFD1FF  #00203FFF */}
                {/* </Link> */}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/blog"
                className="nav-link"
                style={{ color: "#ADEFD1FF" }}
              >
                <span className="fa fa-blog fa-lg">Blog</span>
              </NavLink>
            </NavItem>
          </Nav>
          {/* Assign to ml-auto for authentication on the left side */}
          <Nav className="ml-auto" navbar>
            {props.auth.token !== null && props.auth.token !== undefined ? (
              <>
                <NavItem>
                  <NavLink
                    to="/"
                    className="nav-link"
                    style={{ color: "#ADEFD1FF" }}
                  >
                    <span className="fa fa-pencil-square fa-lg"></span>
                  </NavLink>
                </NavItem>
                <NavItem onClick={logout}>
                  <NavLink
                    to="#"
                    className="nav-link"
                    style={{ color: "#ADEFD1FF" }}
                  >
                    <span className="fa fa-sign-out fa-lg">Sign Out</span>
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem onClick={toggle}>
                  <NavLink
                    to="#"
                    className="nav-link"
                    style={{ color: "#ADEFD1FF" }}
                  >
                    <span className="fa fa-sign-in fa-lg">Sign In</span>
                  </NavLink>
                </NavItem>
                <LoginForm
                  modal={modal}
                  toggle={toggle}
                  login_func={login_func}
                />
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, email, password) =>
      dispatch(authLogin(username, email, password)),
    authLogout: () => dispatch(authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

/*<button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" exact to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/blog">
              Blog
            </NavLink>
          </li>
          
        </ul>
      </div>
      */

/** 
 * 
  // useEffect(() => {
  //   if(props.auth.token!==null && props.auth.error==null){
  //     console.log("THE PROPS CHECK",props)
  //     toast.success("You just logged in",{
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // }, [])
*/
