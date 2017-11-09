import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './WelcomeScreen';
import About from './About';
import Users from './Users';
import UsersAdd from './UsersAdd';
import UsersEdit from './UsersEdit';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('example.About', () => About);
  Navigation.registerComponent('example.Users', () => Users);
  Navigation.registerComponent('example.UsersAdd', () => UsersAdd);
  Navigation.registerComponent('example.UsersEdit', () => UsersEdit);
}
