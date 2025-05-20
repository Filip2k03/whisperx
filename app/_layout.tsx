import { Slot } from "expo-router";
import { useColorScheme, View } from "react-native";
import { darkTheme, lightTheme } from "../theme/theme";

export default function Layout() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Slot />
    </View>
  );
}
