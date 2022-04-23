import { View, Text, FlatList } from "react-native";
import React from "react";

export default function PlacesList({ places }) {
 
 if (!places || places.length === 0) {
   return (
     <View style={styles.fallbackContainer}>
       <Text style={styles.fallBackText}>No places found</Text>
     </View>
   );
 }

  
    
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
    renderItem={({ item }) => <PlaceItem place={item}/>}
    />
  );
}

const styles = StyleSheet.create({
 fallbackContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
 fallBackText: {
  fontSize: 20,
 },
  
})