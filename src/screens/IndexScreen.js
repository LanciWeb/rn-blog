import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const IndexScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const { state, fetchBlogPosts, deleteBlogPost } = React.useContext(
    BlogContext
  );

  React.useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate('Show', { postId: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;

const styles = StyleSheet.create({
  icon: { fontSize: 24 },
  title: { fontSize: 18 },
  row: {
    borderColor: 'gray',
    paddingVertical: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
