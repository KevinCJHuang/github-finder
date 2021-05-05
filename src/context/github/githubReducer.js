import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../../types';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true, 
      };
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
      };
    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
