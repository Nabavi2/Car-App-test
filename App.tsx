import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

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
      <SafeAreaProvider>
        <MenuProvider>
          <Navigation colorScheme={colorScheme} />
        </MenuProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
