import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { fetchingOfAllBlogPost } from "../redux/blog/blogActions";

import { Loading } from "./LoadingComponent";

export const BlogCardComponent = (props) => {
  console.log("PROPS BlogCardComponent", props);

  console.log("PROPS BLOG", props.blogs_array);
  if (props.blogs_array !== null) {
    return (
      <>
        {props.blogs_array.map((post) => {
          return (
            <Card key={post.id}>
              <CardBody>
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Authored by: <span>{post.user}</span>
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
                <Link to={{ pathname: `blog/${post.id}`, state: { post } }}>
                  DETAILS
                </Link>
              </CardBody>
            </Card>
          );
        })}
        {
          <>
            {props.next !== null ? (
              <Button onClick={() => props.fetchBlog(props.next)}>Next</Button>
            ) : (
              <></>
            )}
            {props.previous !== null ? (
              <Button onClick={() => props.fetchBlog(props.previous)}>
                previous
              </Button>
            ) : (
              <></>
            )}
          </>
        }
      </>
    );
  }
  return <></>;
};

function Blog({ fetchBlogPosts, blog }) {
  useEffect(() => {
    console.log("Fetching blog posts using useEffect.");
    fetchBlogPosts(`http://127.0.0.1:8000/posts/`);
  }, [fetchBlogPosts]);
  console.log("-----------------------------------", blog);
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
      {blog.isLoading ? (
        <Loading />
      ) : (
        <>
          <BlogCardComponent
            blogs_array={blog.blog_data.results}
            next={blog.blog_data.next}
            previous={blog.blog_data.previous}
            fetchBlog={fetchBlogPosts}
          />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blog: state.blog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogPosts: (url) => {
      dispatch(fetchingOfAllBlogPost(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

/* inside the blog-card-component
function isScrolling() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("THE BOTTOM");
    } else {
      console.log("scrolling down");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return window.removeEventListener("scroll", isScrolling);
  }, []);
  */
