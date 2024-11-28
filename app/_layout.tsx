import store, { persistor } from "@/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Slot, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="388742713943-l62d1jmm6kgtuskil4glmsrvpmfkho33.apps.googleusercontent.com">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Stack>
              <Stack.Screen
                name="(main)"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="(auth)/login"
                options={{
                  headerShown: false,
                }}
              />
              <Slot />
            </Stack>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default RootLayout;
