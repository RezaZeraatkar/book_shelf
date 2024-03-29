export default function(state = {}, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return { ...state, list: action.payload };

    case "GET_BOOK":
      return { ...state, book: action.payload };
    case "GET_BOOK_WITH_REVIEWER":
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case "CLEAR_BOOK_WITH_REVIEWER":
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case "ADD_BOOK":
      return { ...state, newBook: action.payload };
    case "CLEAR_NEW_BOOK":
      return { ...state, newBook: action.payload };
    case "UPDATE_BOOK":
      return {
        ...state,
        book: action.payload.doc,
        status: action.payload.success
      };
    case "DELETE_BOOK":
      return {
        ...state,
        isPostDeleted: action.payload
      };
    case "CLEAR_BOOK":
      return {
        ...state,
        isPostDeleted: action.payload.isPostDeleted,
        status: action.payload.status
      };
    default:
      return state;
  }
}
