// import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import Days from './src/components/Days';
import DayDetail from './src/components/DayDetail';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Days: Days,
    DayDetail: DayDetail
  },
  {
    initialRouteName: 'Days',
    defaultNavigationOptions: {
      title: 'Egypte 2019'
    }
  }
);

export default createAppContainer(navigator);
