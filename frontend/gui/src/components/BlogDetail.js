import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blogDetail, ReadBlogPost } from "../redux/blog/blogActions";
import { Alert } from "reactstrap";
import { Loading } from "./LoadingComponent";
import axios from "axios";
import { BlogDetailComponent } from "./BlogDetailComponent";

/* In this component we will be using useReducer hook
 * to create a local state management system for this particular component
 * since it won't disturb the global state from the rootReducer.
 * Here the props ==> global from rootReducer
 * We will receive the API url for details of the blog.
 * Those details will be managed on a local reducer */
// --------------------- MY proposal -------------------------------- //
/** if the blog-detail component is not able to retain
 * the props from global reducer; I will use local setState
 * for this rather than the useReducer hook
 */
// ---------------- MY proposal ended ---------------- //
//Global Actions for the reducers
const ACTIONS = {
  //blog post detail comes with comments
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  POST_COMMENT: "POST_COMMENT",
};
//accepts current state and the action it needs to perform
//initial state
const initialState = {
  loading: true,
  error: "",
  post: {},
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_SUCCESS:
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        post: {},
      };

    default:
      // ⚠ Rather than returning the same state return an error
      console.log("IT WENT TO DEFAULT");
      return state;
  }
}

export default function BlogDetail(props) {
  const globalState = useSelector((state) => state.blog);
  //check if the user is comming from the blog-list view
  const url = props.location.state.post.url;
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) =>
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data })
      )
      .catch((err) =>
        dispatch({ type: ACTIONS.FETCH_ERROR, payload: err.data })
      );
  }, [url]);
  console.log("POST-DETAILS FROM Reducer-Hook", state);
  console.log("THE GLOBAL STATE OF REDUX", globalState);
  return (
    <div className="container">
      <h1>Blog Detail Component</h1>
      {/* { ? "LOADING..." : console.log(state)}
      { ? state.error : null} */}

      {state.loading ? (
        <Loading />
      ) : state.error ? (
        <Alert color="primary">{state.error}</Alert>
      ) : (
        <BlogDetailComponent details={state.post} />
      )}
    </div>
  );
}

/**
 * useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      setPostDetails(json);
    }
    fetchData();
  }, [url, setPostDetails]);
 * 
 * 
 * 
 * 
 * <button onClick={() => dispatch(ReadBlogPost(url))}>Click</button>
 *   const dispatch = useDispatch();
  const blogDetail = useSelector((state) => state.blog);
    useEffect(() => {
    dispatch(ReadBlogPost(url));
  }, [dispatch, url]);
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
