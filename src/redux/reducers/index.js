const initialState = {
  favourites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter((company) => company._id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
