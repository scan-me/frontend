import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const API_URL = "http://10.0.2.2:8000";

const ScanScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setAnalyzing(true);
      await analyzeImage(result.assets[0].uri);
    }
  };

  const analyzeImage = async (uri) => {
    const formData = new FormData();
    formData.append("file", {
      uri: uri,
      type: "image/jpeg",
      name: "image.jpg",
    });

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      navigation.navigate("Results", { result });
    } catch (error) {
      console.error("Error analyzing image:", error);
      Alert.alert("Error", "Failed to analyze the image. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pig Scanner</Text>
      </View>

      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>No image captured</Text>
          </View>
        )}
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>
          Tap the button below to take a picture of your pig for analysis.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.scanButton}
        onPress={pickImage}
        disabled={analyzing}
      >
        <Text style={styles.scanButtonText}>
          {analyzing ? "Analyzing..." : "Take Picture"}
        </Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  imageContainer: {
    aspectRatio: 4 / 3,
    overflow: "hidden",
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#666",
  },
  instructionsContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 20,
  },
  instructionsText: {
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
});

export default ScanScreen;
