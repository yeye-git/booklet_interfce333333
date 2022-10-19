import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { NoAccessToCameraTextCont, NoAccessToCameraText, HaveAccessToCameraCont } from './styles';
//import Video from 'react-native-video';
export var chosenimage = null;
export default function SelectImage() {
    const [askGalleryPermission, setAskGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    //const [video, setVideo] = useState(null);

    useEffect(() => {
        (async () => {
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setAskGalleryPermission(galleryStatus.status === 'granted');
    })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.allowsEditing,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    if (askGalleryPermission === false) {
        return (
            <NoAccessToCameraTextCont>
                <NoAccessToCameraText>No Access to Photo Gallary.</NoAccessToCameraText>
            </NoAccessToCameraTextCont>
        );

    }
    else{
        clearMyImage();
        return (
            <HaveAccessToCameraCont>
                
                <TouchableOpacity style={{ margin: '1%', backgroundColor: 'skyblue' }}>
                    <Button color="purple"  title="Click To Open Photo Gallery" onPress={() => pickImage()} />
                </TouchableOpacity>
                {image && <Image source={{uri: image}} style={{ flex:1/1, margin: '1%'}}/>}
                {setMyImage(image)}
            </HaveAccessToCameraCont>
        );
    }
}
export function setMyImage(myimage){
    chosenimage = myimage;
}
export function clearMyImage(){
    chosenimage = null;
}


