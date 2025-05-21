import AsyncStorage from "@react-native-async-storage/async-storage";

// Save user data to AsyncStorage (after login)
export const loginUser = async (user) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

// Get user data from AsyncStorage (on app load)
export const getUser = async () => {
  const user = await AsyncStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Logout: remove user data from AsyncStorage
export const logoutUser = async () => {
  await AsyncStorage.removeItem("user");
};
