import blogActions from '../actions/blogActions';
import blogReducer from '../reducers/blogReducers';
import createDataContext from './createDataContext';

const initialState = [{ id: '1', title: 'Test', content: 'Content' }];

export const { Context, Provider } = createDataContext(
  blogReducer,
  blogActions,
  initialState
);
