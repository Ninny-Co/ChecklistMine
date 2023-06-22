import React, { useState } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

export const LoginScreen = () => {
  const [selectedCompany, setSelectedCompany] = useState("Tronox");

  const handleCompanyChange = (itemValue) => {
    setSelectedCompany(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Company:</Text>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedCompany}
          onValueChange={handleCompanyChange}
        >
          <Picker.Item label="Tronox" value="Tronox" />
          <Picker.Item label="Example 2" value="Example 2" />
        </Picker>
      </View>
      {/* Add other login components like input fields and buttons here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default LoginScreen;
