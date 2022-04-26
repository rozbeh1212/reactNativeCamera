
import { View, Text, Button, Image } from 'react-native'
import {launchCameraAsync} from 'expo-image-picker'


function ImagePicker() {
      const [pickedImage, setPickedImage] = useState();
   async function takeImageHandler(){
     const image = await launchCameraAsync({
       allowsEditing: true,
       aspect: [16, 9],
       quality: 0.5
        
     })
      setPickedImage(image.uri); // image.uri is the uri of the image we just took with the camera
   }
   
  let imagePreview = <Text> no image</Text>
  if (pickedImage) {
    imagePreview = <Image style={s.image} source={{ uri: pickedImage }} />
  }
  
  return (
    <View>
      <View  style={s.imagePreview}>
         {imagePreview}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  )
  
}
  
const s = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightBlue
  },
  image: {
    width: '100%',
    height: '100%',
  },

})
export default ImagePicker;