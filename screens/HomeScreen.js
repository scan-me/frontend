import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scan Me</Text>
        <Text style={styles.subtitle}>Pig Health Detector</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/pig-icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Quickly assess your pig's health with a simple scan. Our AI-powered
          technology can detect signs of illness and provide instant results.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate("Scan")}
      >
        <Text style={styles.scanButtonText}>Start Scanning</Text>
      </TouchableOpacity>
      {/* 
      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => navigation.navigate("History")}
      >
        <Text style={styles.historyButtonText}>View Scan History</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
  },
  header: {
    backgroundColor: "#006400",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 5,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  scanButton: {
    backgroundColor: "#006400",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    margin: 20,
  },
  scanButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  historyButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: "#006400",
  },
  historyButtonText: {
    color: "#006400",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
