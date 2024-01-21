import { loginActions } from "../actions/login.actions";

export const loginReducer = (state, action) => {
  switch (action.type) {
    case loginActions.getUser: {
      return state;
    }

    case loginActions.setName: {
      const { payload } = action;
      const newObject = {
        ...state,
        name: payload,
      };
      return newObject;
    }

    case loginActions.setEmail: {
      const { payload } = action;
      const newObject = {
        ...state,
        email: payload,
      };
      return newObject;
    }
    case loginActions.setPassword: {
      const { payload } = action;
      const newObject = {
        ...state,
        password: payload,
      };
      console.log(newObject);
      return newObject;
    }
  }
};
