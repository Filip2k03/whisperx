import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = async (user) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export const getUser = async () => {
  const user = await AsyncStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem("user");
};
