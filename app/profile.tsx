import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { getUser, logoutUser } from "../utils/auth";

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getUser().then((u) => {
      if (u) setUser(u);
      else router.replace("/login");
    });
  }, []);

  if (!user) return null;

  const logout = async () => {
    await logoutUser();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Username: {user.username}</Text>
      <Text style={styles.label}>Email: {user.email}</Text>
      <Text style={styles.label}>Birthday: {user.birthday}</Text>

      <Button title="Logout" onPress={logout} color="#6A057F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 28, textAlign: "center", marginBottom: 40 },
  label: { fontSize: 18, marginBottom: 10 },
});
