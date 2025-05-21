import { Text, View } from "react-native";
import Header from "../components/Header";

export default function ChatScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ fontSize: 22, padding: 20 }}>💬 Chat Screen</Text>
    </View>
  );
}
