import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { navigate, getParam } = navigation;
  const postId = getParam('postId');
  if (!postId) return null;

  const { state, editBlogPost } = React.useContext(BlogContext);
  const post = state.find((post) => post.id === postId);
  if (!post) return null;

  const savePost = (title, content) => {
    editBlogPost(
      {
        title,
        content,
        id: postId,
      },
      () => {
        navigate('Index');
      }
    );
  };

  return (
    <BlogPostForm
      onSubmit={savePost}
      initialValues={{ title: post.title, content: post.content }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
