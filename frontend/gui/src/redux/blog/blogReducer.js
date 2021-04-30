import {
  FETCH_BLOG,
  BLOG_START,
  DETAIL_BLOG,
  CREATE_BLOG,
  UPDATE_BLOG,
  BLOG_FAILED,
} from "./blogActionTypes";

const initialState = {
  isLoading: true,
  errMess: null,
  blog_data: [],
};
const Blog_Data_reducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_START:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        blog_data: null,
      };
    case FETCH_BLOG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blog_data: action.payload,
      };
    case CREATE_BLOG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blog_data: action.payload,
      };
    case DETAIL_BLOG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blog_data: action.payload,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blog_data: action.payload,
      };
    case BLOG_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        blog_data: null,
      };
    default:
      return state;
  }
};
export default Blog_Data_reducer;
