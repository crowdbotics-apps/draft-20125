import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard1299191Navigator from '../features/Dashboard1299191/navigator';
import Maps499189Navigator from '../features/Maps499189/navigator';
import Messaging599188Navigator from '../features/Messaging599188/navigator';
import CalendarView699187Navigator from '../features/CalendarView699187/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard1299191: { screen: Dashboard1299191Navigator },
Maps499189: { screen: Maps499189Navigator },
Messaging599188: { screen: Messaging599188Navigator },
CalendarView699187: { screen: CalendarView699187Navigator },

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
