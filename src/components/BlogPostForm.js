import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);

  const submitForm = () => {
    if (!title || !content) return;
    onSubmit(title, content);
  };

  return (
    <View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save blog post" onPress={submitForm} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: { title: '', content: '' },
};

export default BlogPostForm;

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 5,
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: 'black',
  },
  label: { fontSize: 20, marginLeft: 5, marginBottom: 5 },
});
