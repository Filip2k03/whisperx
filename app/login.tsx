import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { API } from "../config/api";
import { loginUser } from "../utils/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    if (!email || !password) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }

    try {
      const res = await API.post("login.php", { email, password });

      if (res.data.status === "success") {
        await loginUser(res.data.user);  // Save user info in AsyncStorage
        router.replace("/");  // Redirect to Feed page after successful login
      } else {
        Alert.alert("Login Failed", res.data.message || "Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to WhisperX</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button title="Login" onPress={login} color="#6A057F" />

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.registerText}>
          Don't have an account? <Text style={styles.linkText}>Register here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 28, textAlign: "center", marginBottom: 40, color: "#333" },
  input: { height: 50, borderColor: "#ddd", borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, marginBottom: 20 },
  registerText: { textAlign: "center", fontSize: 16, color: "#666" },
  linkText: { color: "#6A057F", fontWeight: "bold" },
});
