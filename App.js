import React from 'react';
import IndexScreen from './src/screens/IndexScreen';
import { createAppContainer } from 'react-navigation';
import { BlogProvider } from './src/context/BlogContext';
import { createStackNavigator } from 'react-navigation-stack';

const navigationMap = { Index: IndexScreen };
const navigationConfig = {
  initialRouteName: 'Index',
  defaultNavigationOptions: { title: 'Blog' },
};

const navigator = createStackNavigator(navigationMap, navigationConfig);

const App = createAppContainer(navigator);

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
);
