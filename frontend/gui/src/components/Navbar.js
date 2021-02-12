import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from "react-redux";
import {authLogin, authLogout } from "../redux/auth/authActions"


function LoginForm({modal,toggle,login_func}) {
  const [details, setDetails] = useState({username:"", email: "", password: ""})
  const submitHandler = e =>{
    e.preventDefault();
    login_func(details)
  }
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
                onChange={e=>setDetails({...details,username:e.target.value})}
                value={details.username}
                />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" 
                onChange={e=>setDetails({...details,email:e.target.value})}
                value={details.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" 
                onChange={e=>setDetails({...details,password:e.target.value})}
                value={details.password}              
              />
            </FormGroup>
            <Button type="Submit" color="info" value="login_func2" onClick={toggle}>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}




const NavBar = (props) => {

  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);

  const login_func = (details) => {
    console.log("LOGGED IN")
    console.log(details)
    props.login(details.username, details.email, details.password)
  }
  const logout = () =>{
    console.log("THE USER LOGGED OUT")
    props.authLogout()
  }
  console.log("THE PROPS",props)

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Medium Blog Clone
      </Link>
      <button
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
          {(props.auth.token!==null && props.auth.token!==undefined)?
            <>
            <Button color="warning" onClick={logout}>Logout</Button>
            </>
          :<>
            <li className="nav-item">
              <Button color="danger" onClick={toggle}>Toggle Modal</Button>
            </li>
            <LoginForm modal={modal} toggle={toggle} login_func={login_func}/>
          </>
          }
        </ul>
      </div>
    </nav>
    </>
  );
};

const mapStateToProps = state => {
  return{
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return{
    login: (username,email, password)=>dispatch(authLogin(username,email, password)),
    authLogout: ()=>dispatch(authLogout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
