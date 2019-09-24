const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, ...action.payload.user };
    default:
      return state;
  }
};
