import { MaterialIcons } from '@expo/vector-icons'; //for icons
import { useTheme } from "@react-navigation/native"; // Use this if available and configured
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card } from 'react-native-elements'; // For more advanced avatar
import ThemeToggle from "../components/ThemeToggle"; // Assuming this is a custom component

export default function ProfileScreen() {
  const { colors } = useTheme(); // Access theme colors
  const router = useRouter();

  const user = {
    id: 1,
    username: "Thu Ya Kyaw",
    birthday: "2003-02-07",
    email: "thuya@example.com",
    profile_photo: null,
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>👤 My Profile</Text>

        <Card containerStyle={[styles.profileCard, { backgroundColor: colors.card }]}>
          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              size={120}
              source={
                user.profile_photo
                  ? { uri: user.profile_photo }
                  : require("../assets/avatar.png") // use default icon if none
              }
              // You can add an onPress handler to change the avatar
              onPress={() => console.log("Change Avatar")}
              activeOpacity={0.7}
            />
             <TouchableOpacity style={styles.editAvatarButton}
                              onPress={() => console.log("Edit Avatar")}>
                <MaterialIcons name="edit" size={20} color={colors.primary}/>
            </TouchableOpacity>
          </View>

          <Text style={[styles.username, { color: colors.text }]}>{user.username}</Text>
          <Text style={[styles.info, { color: colors.text }]}>
            <MaterialIcons name="email" size={16} color={colors.secondary} /> {user.email}
          </Text>
          <Text style={[styles.info, { color: colors.text }]}>
            <MaterialIcons name="cake" size={16} color={colors.secondary}/> {user.birthday}
          </Text>
        </Card>

        <ThemeToggle />

        <Button
          title="Logout"
          onPress={() => router.replace("/login")}
          buttonStyle={{ backgroundColor: colors.primary, borderRadius: 8 }}
          titleStyle={{ color: colors.buttonText }} // Ensure you have this in your theme
          containerStyle={{ marginTop: 20, width: '90%' }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    paddingBottom: 80
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  profileCard: {
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
    alignItems: 'center'
  },
  avatarContainer: {
    position: 'relative', // Needed for absolute positioning of edit button
    marginBottom: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white
    borderRadius: 15, // Make it round
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 15,
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    flexDirection: 'row', // Use flexbox for icon alignment
    alignItems: 'center',       // Vertically center icon and text
    gap: 5,
  },
});
