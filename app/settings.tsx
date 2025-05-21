import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import Header from "../components/Header";
import ThemeToggle from "../components/ThemeToggle";
import { logoutUser } from "../utils/auth";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ fontSize: 22, padding: 20 }}>⚙️ Settings</Text>
      <ThemeToggle />
      <Button title="Logout" onPress={() => { logoutUser(); router.replace("/login"); }} color="#6A057F" />
    </View>
  );
}
