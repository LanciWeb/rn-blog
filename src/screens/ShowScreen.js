import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  if (!postId) return null;

  const { state } = React.useContext(BlogContext);
  const post = state.find((p) => p.id === postId);

  if (!post) return null;

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const { navigate, getParam } = navigation;
  const postId = getParam('postId');

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigate('Edit', { postId })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({});
