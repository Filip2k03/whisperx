import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { getUser } from "../utils/auth";

export default function FeedScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((u) => {
      if (!u) {
        router.replace("/login");
      } else {
        setUser(u);
      }
    });
  }, []);

  if (!user) return null;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>👋 Welcome {user.username}</Text>
        {/* FEED CONTENT */}
      </ScrollView>
    </View>
  );
}
