import { useEffect, useState } from "react";
import { Switch, Text, useColorScheme, View } from "react-native";

export default function ThemeToggle() {
  const colorScheme = useColorScheme();
  const [enabled, setEnabled] = useState(colorScheme === "dark");

  useEffect(() => {
    // Save preference to localStorage or asyncStorage if needed
  }, [enabled]);

  return (
    <View style={{ marginVertical: 20, flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Text>{enabled ? "🌙 Dark Mode" : "☀️ Light Mode"}</Text>
      <Switch value={enabled} onValueChange={() => setEnabled(!enabled)} />
    </View>
  );
}
