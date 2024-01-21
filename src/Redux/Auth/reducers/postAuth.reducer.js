export const postAuthReducer = (state, action) => {
  const authObject = action.payload;
  console.log(authObject);
  const newState = {
    isAuth: true,
    ...authObject,
  };
  console.log(newState);
  window.localStorage.setItem("auth", JSON.stringify(newState));
  return newState;
};
