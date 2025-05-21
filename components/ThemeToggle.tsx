import { useState } from "react";
import { Switch, Text, View } from "react-native";

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 20 }}>
      <Text>{enabled ? "🌙 Dark Mode" : "☀️ Light Mode"}</Text>
      <Switch value={enabled} onValueChange={() => setEnabled(!enabled)} />
    </View>
  );
}
