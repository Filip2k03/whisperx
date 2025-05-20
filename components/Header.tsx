import { MaterialIcons } from "@expo/vector-icons"; // Import icons
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>📱 WhisperX</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/")}>
          <MaterialIcons name="rss-feed" size={24} color="#FFD580" />
          <Text style={styles.link}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/chat")}>
          <MaterialIcons name="chat" size={24} color="#FFD580" />
          <Text style={styles.link}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/profile")}>
          <MaterialIcons name="person" size={24} color="#FFD580" />
          <Text style={styles.link}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Vertically center items
    padding: 10,
    backgroundColor: "#6A057F",
  },
  logo: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    gap: 15,
  },
  menuItem: { // Added for layout of icon and text
    flexDirection: "row",
    alignItems: "center",
    gap: 5, // Space between icon and text
  },
  link: {
    color: "#FFD580",
    fontWeight: "600",
  },
});
