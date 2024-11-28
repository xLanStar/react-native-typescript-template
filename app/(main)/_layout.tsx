import { useGetSessionQuery } from "@/services/auth.service";
import { Text, View } from "react-native";

const MainLayout: React.FC = () => {
  const { data: sessionData } = useGetSessionQuery(undefined);
  return (
    <>
      <View>
        <Text>Home</Text>
        <Text>{JSON.stringify(sessionData)}</Text>
      </View>
    </>
  );
};

export default MainLayout;
