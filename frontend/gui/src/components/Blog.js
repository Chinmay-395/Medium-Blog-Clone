import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { 
  Button,
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle } from "reactstrap";
import {fetchingOfAllBlogPost } from "../redux/blog/blogActions"

import {Loading} from "./LoadingComponent"




export const BlogCardComponent = (props) => {
  console.log("THE PROPS",props)
  if(props.blogs_array!=null){
      return(
      <>
      {props.blogs_array.map((post)=>{
        return(
          <Card key={post.id}>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Authored by: <span>{post.user}</span></CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
          <Link to={{pathname:`blog/${post.id}`,state:{post}}}>DETAILS</Link>
        </CardBody>
      </Card>
        )
      })}
      </>
    )
  }
  return(
    <></>
  )
};

function Blog({fetchBlogPosts,blog}) {
  useEffect(()=>{
    console.log("Fetching blog posts using useEffect.")
    fetchBlogPosts();
  },[fetchBlogPosts])
  // console.log("Fetching blog",props)
  return (
    <div className="container mt-3">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/category/world">
            World
          </Link>
          <Link className="p-2 text-muted" to="/category/environment">
            Environment
          </Link>
          <Link className="p-2 text-muted" to="/category/technology">
            Technology
          </Link>
          <Link className="p-2 text-muted" to="/category/design">
            Design
          </Link>
          <Link className="p-2 text-muted" to="/category/culture">
            Culture
          </Link>
          <Link className="p-2 text-muted" to="/category/business">
            Business
          </Link>
          <Link className="p-2 text-muted" to="/category/politics">
            Politics
          </Link>
          <Link className="p-2 text-muted" to="/category/opinion">
            Opinion
          </Link>
          <Link className="p-2 text-muted" to="/category/science">
            Science
          </Link>
          <Link className="p-2 text-muted" to="/category/health">
            Health
          </Link>
          <Link className="p-2 text-muted" to="/category/style">
            Style
          </Link>
          <Link className="p-2 text-muted" to="/category/travel">
            Travel
          </Link>
        </nav>
      </div>
      {/* <button onClick={fetch_func}>Get the blogs</button> */}
      {(blog.isLoading)?<Loading/>:
      <>
      <BlogCardComponent blogs_array={blog.blog_data.results}/>
      </>}
      
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    blog: state.blog
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    fetchBlogPosts: ()=>{dispatch(fetchingOfAllBlogPost())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog)
