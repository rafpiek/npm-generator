import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen, LoadingScreen, DashboardScreen } from 'screens';

const AuthFlow = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
  }
);

const MainFlow = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: ''
  }
);

const Router = createSwitchNavigator(
  {
    LoadingScreen,
    AuthFlow,
    MainFlow
  },
  {
    initialRouteName: 'LoadingScreen'
  }
);

export default Router;
