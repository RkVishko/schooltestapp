import { combineReducers } from 'redux';
import collegeReducer from './collegeReducer';

export default combineReducers({
  col: collegeReducer,
});
