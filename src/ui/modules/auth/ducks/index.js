import createAction, { defaultState } from 'utils/actionHelpers';

export const auth = createAction({
  check: defaultState,
  login: defaultState,
  logout: defaultState,
});

const initialState = {
  state: null,
  loading: true,
  error: null,
  userId: null,
};

export default function check(state = initialState, action) {
  switch (action.type) {
    case auth.check.start:
      return { ...state, loading: true };
    case auth.check.end:
      return {
        ...state,
        loading: false,
        state: action.payload.state,
        userId: action.payload.userId,
      };
    case auth.check.error:
      return {
        ...state,
        loading: false,
        state: action.payload.state,
        error: action.payload.error,
      };

    case auth.logout.start:
      return { ...state, loading: true };
    case auth.logout.end:
      return initialState;
    case auth.logout.error:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

export const checkAuthAction = () => ({
  type: auth.check.start,
});

export const logoutAction = () => ({
  type: auth.logout.start,
});

export const loginAction = (data) => ({
  type: auth.login.start,
  payload: data,
});
