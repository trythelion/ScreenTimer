import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
      console.log("Data for: " + key + " added with value: " + value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        throw new Error("Failed to save data.");
    }
};

export const getData = async (key) => {
    try {
      console.log(key);
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (e) {
        throw new Error("Failed to retrieve data.")
    }
};

export const removeData = async (key) => {
    try {
      console.log("Data for: " + key + " removed");
      await AsyncStorage.removeItem(key);
    } catch (e) {
        throw new Error("Failed to delete data.")
    }
};