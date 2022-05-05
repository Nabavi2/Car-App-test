import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStoreHook, Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import carReducer from "./store/reducer/car";

const rootReducer = combineReducers({
  cars: carReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const isLoaded = useFonts({
    tur: "./assets/fonts/trueno.otf",
  });

  if (!isLoadingComplete && !isLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <MenuProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </MenuProvider>
      </Provider>
    );
  }
}
