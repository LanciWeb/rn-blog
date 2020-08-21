import React from 'react';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigationMap = {
  Show: ShowScreen,
  Edit: EditScreen,
  Index: IndexScreen,
  Create: CreateScreen,
};
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
