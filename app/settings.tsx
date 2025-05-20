import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import Header from "../components/Header";
import ThemeToggle from "../components/ThemeToggle";
import { logoutUser } from "../utils/auth";

export default function SettingsScreen() {
  const router = useRouter();

  const logout = async () => {
    await logoutUser();
    router.replace("/login");
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ fontSize: 24, padding: 20 }}>⚙️ Settings</Text>
      <ThemeToggle />
      <Button title="Logout" onPress={logout} color="#6A057F" />
    </View>
  );
}
