import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import HomeNavigation from './src/navigators/HomeNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './src/redux/actions/theme';
import { colors } from './src/config/colors';

const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const themeType = useSelector(state => state.themeReducer.theme_type);
  const theme = useSelector(state => state.themeReducer.theme);
  const language = useSelector(state => state.languageReducer.language);

  if (themeType === 'system_default') {
    dispatch(setTheme(isDarkMode ? 'dark' : 'light'));
  } else {
    dispatch(setTheme(theme));
  }


  return (
    <>
      <StatusBar backgroundColor={colors(theme).backgroundColor} barStyle='dark-content' />
      <SafeAreaProvider>
        <NavigationContainer
        >
          <HomeNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
/// temp
