import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const OrphanageDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Orphanage Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
