
import { View, Text, Button, Image } from 'react-native'
import {launchCameraAsync} from 'expo-image-picker'


function ImagePicker() {
    
   async function takeImageHandler(){
     const image = await launchCameraAsync({
       allowsEditing: true,
       aspect: [16, 9],
       quality: 0.5
        
    })
    console.log(image)
   }
   
 }

export default function ImagePicker() {
  return (
    <View>
      <View>
         <Image source={{}}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  )
}