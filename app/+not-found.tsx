import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Link href="/">Go to home screen</Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotFoundScreen;
