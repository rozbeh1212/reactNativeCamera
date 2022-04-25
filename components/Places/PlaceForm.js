import { View, Text, ScrollView, TextInput, TextInput } from "react-native";
import React from "react";
import { Colors } from " ../../constants/colors";

export default function PlaceForm() {
  const [enteredTitle, seEntereditle] = useState("");

  function changeTitleHandler(enteredText) {
    seEntereditle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>PlaceForm</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 15,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    boarderBottoColor: Colors.primary500,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
