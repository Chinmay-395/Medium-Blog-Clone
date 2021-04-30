import {
  COMMENTS_FAILED,
  FETCH_COMMENTS,
  CREATE_COMMENTS,
} from "./commentActionTypes";

const initialState = {
  isLoading: true,
  errMess: null,
  comments: [],
};
