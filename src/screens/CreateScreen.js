import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const { addBlogPost } = React.useContext(BlogContext);

  const savePost = (title, content) => {
    addBlogPost(title, content, () => {
      navigate('Index');
    });
  };

  return <BlogPostForm onSubmit={savePost} />;
};

export default CreateScreen;

const styles = StyleSheet.create({});
