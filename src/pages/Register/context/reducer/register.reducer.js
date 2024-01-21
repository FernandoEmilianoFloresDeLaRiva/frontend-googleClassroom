import { registerActions } from "../actions/register.actions";

export const registerReducer = (state, action) => {
  switch (action.type) {
    case registerActions.getUser: {
      return state;
    }

    case registerActions.setName: {
      const { payload } = action;
      const newObject = {
        ...state,
        name: payload,
      };
      return newObject;
    }

    case registerActions.setEmail: {
      const { payload } = action;
      const newObject = {
        ...state,
        email: payload,
      };
      return newObject;
    }
    case registerActions.setPassword: {
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
