export const templateReducer = (state = {}, action) => {
  switch (action.type) {
    case "action":
      return {
        ...state,
        aciton: action.action
      };

    default:
      return state;
  }
};

export default templateReducer;
