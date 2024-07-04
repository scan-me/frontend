import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultScreen = ({ route }) => {
  //   const { result } = route.params;
  const result = {
    success: true,
    title: "Healthy Pig Detected",
    description:
      "The scanned pig appears to be in good health with no visible signs of disease or infection.",
    confidence: 95,
    processingTime: 1200,
    recommendations: [
      "Continue with regular feeding schedule",
      "Maintain a clean and comfortable living environment",
      "Consider scheduling a routine veterinary check-up in the next 2-3 weeks",
    ],
  };

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Scan Results</Text>
        <View
          style={[
            styles.statusIndicator,
            { backgroundColor: result.success ? "#006400" : "#FFD700" },
          ]}
        />
      </View>

      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>{result.title}</Text>
        <Text style={styles.resultDescription}>{result.description}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{result.confidence}%</Text>
          <Text style={styles.statLabel}>Confidence</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{result.processingTime}ms</Text>
          <Text style={styles.statLabel}>Processing Time</Text>
        </View>
      </View>

      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>Recommendations</Text>
        <Text style={styles.recommendationItem}>
          • {result.recommendations[0]}
        </Text>
        <Text style={styles.recommendationItem}>
          • {result.recommendations[1]}
        </Text>
        <Text style={styles.recommendationItem}>
          • {result.recommendations[2]}
        </Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Take Action</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: "#006400",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#006400",
  },
  statusIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  resultCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#006400",
    marginBottom: 10,
  },
  resultDescription: {
    fontSize: 16,
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#006400",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  recommendationsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006400",
    marginBottom: 10,
  },
  recommendationItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  actionButton: {
    backgroundColor: "#006400",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultScreen;
