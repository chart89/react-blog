//selectors
export const getAllCategory = state => state.category;

//actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_CATEGORY = createActionName('ADD_CATEGORY');

// action creators
export const addCategory = payload => ({ type: ADD_CATEGORY, payload});


const categoryReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CATEGORY:
        return [...statePart, {categoryName: action.payload} ];
      default:
        return statePart;
    }
  }

  export default categoryReducer;


