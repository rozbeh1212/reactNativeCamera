import { View, Text , ScrollView, TextInput} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

export default function PlaceForm() {
  
  const [enteredTitle, seEntereditle] = useState('')

  function changeTitleHandler(enteredText) {
    seEntereditle(enteredText)
  }
  
  return (
    <ScrollView>
      <View>
        <Text>PlaceForm</Text>
        <TextInput  onChangeText={changeTitleHandler} value={enteredTitle}  />
      </View>
  </ScrollView>
  )
}
