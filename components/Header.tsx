import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>WhisperX</Text>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/chat")}>
          <Text style={styles.link}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <Text style={styles.link}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", justifyContent: "space-between",
    padding: 12, backgroundColor: "#6A057F", alignItems: "center"
  },
  logo: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  menu: { flexDirection: "row", gap: 20 },
  link: { color: "#FFD580", fontWeight: "bold", fontSize: 16 }
});
