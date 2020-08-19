import React from 'react';
import BlogContext from '../context/BlogContext';
import { StyleSheet, Button, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen = () => {
  const { data, addBlogPost } = React.useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
