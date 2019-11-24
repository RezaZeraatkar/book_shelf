export default function(state = {}, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, login: action.payload };
    case "USER_AUTH":
      return { ...state, login: action.payload };
    case "GET_USER_POSTS":
      return { ...state, userReviews: action.payload };
    case "GET_USERS":
      return {
        ...state,
        allUsers: action.payload
      };
    case "USER_REGISTER":
      return {
        ...state,
        status: action.payload.success,
        allUsers: action.payload.users
      };
    case "LOGOUT":
      return {
        ...state,
        logout: action.payload.logout.success,
        login: null
      };
    case "CLEAR_USER_DATA":
      return {
        ...state,
        login: action.payload
      };
    default:
      return state;
  }
}
