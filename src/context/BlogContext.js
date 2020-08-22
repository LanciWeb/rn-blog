import blogActions from '../actions/blogActions';
import blogReducer from '../reducers/blogReducers';
import createDataContext from './createDataContext';

const initialState = [];

export const { Context, Provider } = createDataContext(
  blogReducer,
  blogActions,
  initialState
);
