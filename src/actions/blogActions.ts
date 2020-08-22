import jsonServer from '../api/jsonServer';
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      await dispatch({ type: 'add', payload: { title, content } });
      callback();
    } catch (e) {
      console.error(e);
    }
  };
};

const deleteBlogPost = (dispatch) => (id) => {
  dispatch({ type: 'delete', payload: id });
};

const editBlogPost = (dispatch) => (post, callback) => {
  try {
    dispatch({ type: 'edit', payload: post });
    callback();
  } catch (e) {
    console.error(e);
  }
};

const fetchBlogPosts = (dispatch) => async () => {
  try {
    const response = await jsonServer.get('/blogposts');
    const blogPosts = response.data;
    dispatch({ type: 'fetch', payload: blogPosts });
  } catch (e) {
    console.error(e);
  }
};

export default { addBlogPost, editBlogPost, deleteBlogPost, fetchBlogPosts };
