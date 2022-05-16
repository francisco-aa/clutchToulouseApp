import React from 'react';
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import NotificationsHandler from "./src/screens/alerts/notifications/NotificationsHandler";
import AppNavigation from "./src/routes/AppNavigation";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const MyTheme = {
  dark: false,
  colors: {
    background: '#fff'
  }
}

const App = () => {
  return (
          <Provider store={store}>
              <NotificationsHandler/>
                  <AppNavigation/>
          </Provider>


  );
}

export default App
