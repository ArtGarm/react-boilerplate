import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// modules
import auth from '../ui/modules/auth/ducks';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default rootReducer;
