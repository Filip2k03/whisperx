import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { API } from "../config/api";
import { darkTheme, lightTheme } from "../theme/theme";

export default function RegisterScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  const [form, setForm] = useState({ email: "", password: "", username: "", birthday: "" });
  const router = useRouter();

  const register = async () => {
    if (!form.email || !form.password || !form.username || !form.birthday) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }

    try {
      const res = await API.post("register.php", form);
      if (res.data.status === "pending") {
        Alert.alert("Registered", "Check your email to verify.");
        router.replace("/login");
      } else {
        Alert.alert("Error", res.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary }]}>Create Your Account</Text>

      {["Email", "Password", "Username", "Birthday (YYYY-MM-DD)"].map((label, idx) => {
        const key = label.toLowerCase().split(" ")[0];
        return (
          <View key={idx}>
            <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={key === "password"}
              keyboardType={key === "birthday" ? "numbers-and-punctuation" : "default"}
              onChangeText={(v) => setForm({ ...form, [key]: v })}
              placeholder={label}
              autoCapitalize="none"
            />
          </View>
        );
      })}

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={register}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={[styles.linkText, { color: theme.accent }]}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", textAlign: "center", marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 6 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: { padding: 15, borderRadius: 8, alignItems: "center", marginVertical: 15 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  linkText: { textAlign: "center", fontSize: 16, marginTop: 10 },
});
