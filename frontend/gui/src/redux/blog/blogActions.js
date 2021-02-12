import {
FETCH_BLOG,
BLOG_START,
CREATE_BLOG,
DETAIL_BLOG,
UPDATE_BLOG,
BLOG_FAILED
} from "./blogActionTypes"

import axios from "axios"

export const blogStart = () => {
  return {
    type: BLOG_START
  }
}

export const blogFetched = (data) => {
  return{
    type:FETCH_BLOG,
    payload: data
  }
}

export const blogFail = (error) => {
  return{
    type:BLOG_FAILED,
    payload: error
  }
}

export const blogCreate = (data) => {
  return {
    type: CREATE_BLOG,
    payload: data
  }
}

export const blogDetail = (data) => {
  return{
    type:DETAIL_BLOG,
    payload: data
  }
}

export const blogUpdate = (data) => {
  return {
    type: UPDATE_BLOG,
    payload: data
  }
}

// CRUD functionality

//this function will fetch all the blog posts
export const fetchingOfAllBlogPost = () => {
  dispatch(blogStart());
  axios.get(`http://127.0.0.1:8000/posts/`)
    .then(res => dispatch(blogFetched(res.data)))
    .catch(error => dispatch(blogFail(error.message)))
}

export const createNewBlogPost = (title,image,content,publish) => (dispatch) => {
  dispatch(blogStart())
  let createBlog = async () =>{
    await axios.post(`http://127.0.0.1:8000/posts/create/`,
    {
    "title":title,
    "image":image,
    "content":content,
    "publish":publish
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
  }).then(res =>dispatch(blogDetail(res.data)))
    .catch(error => dispatch(blogFail(error.message)))
    }
    createBlog()
}
// this function will be Details of a particular blog
export const ReadBlogPost = (url) => (dispatch) => {
  dispatch(blogStart())
  let detailBlog = async () =>{
    await axios.get(url)
    .then(res=>dispatch(res.data))
    .catch(error =>dispatch(blogFail(error.message)))
  }
  detailBlog()
}