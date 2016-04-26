import {combineReducers} from 'redux-loop';
import {routeReducer as router} from 'react-router-redux';
import {reducer as images} from 'modules/home';
export default combineReducers({
  router,
  images,
});
