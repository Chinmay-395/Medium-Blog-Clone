import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReadBlogPost } from "../redux/blog/blogActions";
import { Button, Alert } from "reactstrap";
import { Loading } from "./LoadingComponent";

import { BlogDetailComponent } from "./BlogDetailComponent";

export default function BlogDetail(props) {
  /* In this component we will be using useReducer hook
   * to create a local state management system for this particular component
   * since it won't disturb the global state from the rootReducer.
   * Here the props ==> global from rootReducer
   * We will receive the API url for details of the blog.
   * Those details will be managed on a local reducer */
  const dispatch = useDispatch();
  const blogDetail = useSelector((state) => state.blog);
  const url = props.location.state.post.url;
  useEffect(() => {
    dispatch(ReadBlogPost(url));
  }, [dispatch, url]);

  // console.log("THE GLOBAL STATE ",postDetails)
  console.log("PROPS", props);
  console.log("BLOGDETAILS PROPS", blogDetail);
  // const val = props.location.state.post

  return (
    <div className="container">
      <h1>Blog Detail Component</h1>
      {/* <button onClick={() => dispatch(ReadBlogPost(url))}>Click</button> */}

      {blogDetail.isLoading ? (
        <Loading />
      ) : blogDetail.errMess ? (
        <>
          <Alert color="primary">{blogDetail.errMess}</Alert>
        </>
      ) : (
        <>
          <BlogDetailComponent details={blogDetail.post_data} />
        </>
      )}
    </div>
  );
}

/**
 * const ACTIONS = {
  FETCH_DETAILS: "FETCH_DETAILS", //we get both posts as well as comments
  POST_COMMENT: "POST_COMMENT",
};
 * function reducer(state, action) {
  switch (
    action.type
    // case
  ) {
  }
}
 */
// const [postDetails, setPostDetails] = useState([]);
// const [state,dispatch] = useReducer(reducer,{details:null})

// useEffect(()=>{
//   async function fetchData(){
//   const res =  await fetch(url);
//   const json = await res.json();
//   setPostDetails(json)
//   }
//   fetchData()
// },[url,setPostDetails])
