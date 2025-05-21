import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { API } from "../config/api";

export default function RegisterScreen() {
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
        Alert.alert("Registration Successful", "Please check your email to verify your account.");
        router.replace("/login");
      } else {
        Alert.alert("Registration Failed", res.data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      Alert.alert("Error", "An unexpected error occurred during registration. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        onChangeText={(e) => setForm({ ...form, email: e })}
        value={form.email}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={(e) => setForm({ ...form, password: e })}
        value={form.password}
        placeholder="Enter your password"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        onChangeText={(e) => setForm({ ...form, username: e })}
        value={form.username}
        placeholder="Choose a unique username"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={(e) => setForm({ ...form, birthday: e })}
        value={form.birthday}
        placeholder="Enter your birthday (YYYY-MM-DD)"
        keyboardType="numbers-and-punctuation"
      />

      <Button title="Register" onPress={register} color="#6A057F" />

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.linkText}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 28, textAlign: "center", marginBottom: 40, color: "#333" },
  input: { height: 50, borderColor: "#ddd", borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, marginBottom: 20 },
  loginText: { textAlign: "center", fontSize: 16, color: "#666" },
  linkText: { color: "#6A057F", fontWeight: "bold" },
});
