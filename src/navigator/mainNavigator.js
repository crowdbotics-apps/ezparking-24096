import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial197159Navigator from '../features/Tutorial197159/navigator';
import NotificationList197131Navigator from '../features/NotificationList197131/navigator';
import Settings197130Navigator from '../features/Settings197130/navigator';
import Settings197122Navigator from '../features/Settings197122/navigator';
import UserProfile197120Navigator from '../features/UserProfile197120/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial197159: { screen: Tutorial197159Navigator },
NotificationList197131: { screen: NotificationList197131Navigator },
Settings197130: { screen: Settings197130Navigator },
Settings197122: { screen: Settings197122Navigator },
UserProfile197120: { screen: UserProfile197120Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
