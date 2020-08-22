import jsonServer from '../api/jsonServer';
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      await jsonServer.post('/blogposts', { title, content });
      callback();
    } catch (e) {
      console.error(e);
    }
  };
};

const deleteBlogPost = (dispatch) => async (id) => {
  try {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete', payload: id });
  } catch (e) {
    console.error(e);
  }
};

const editBlogPost = (dispatch) => async (post, callback) => {
  const { id, title, content } = post;
  try {
    await jsonServer.put(`/blogposts/${post.id}`, { title, content });
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
