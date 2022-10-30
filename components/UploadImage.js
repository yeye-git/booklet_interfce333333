import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '~/common-file/apis';

const UploadImage = () => {
    const [askGalleryPermission, setAskGalleryPermission] = useState(null);
    const [image, setImage] = useState('');
    console.log('🚀 ~ file: UploadImage.js ~ line 6 ~ UploadImage ~ askGalleryPermission', askGalleryPermission);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setAskGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.allowsEditing,
            aspect: [1, 1],
            quality: 1,
        });
        if (result.cancelled) {
            return;
        }

        let localUri = result.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        formData.append('photo', { uri: localUri, name: filename, type });
        console.log('🚀 ~ file: UploadImage.js ~ line 39 ~ handlePickImage ~ formData', formData);

        const imgPath = await uploadImage({
            data: formData,
        });
        console.log('🚀 ~ file: UploadImage.js ~ line 43 ~ handlePickImage ~ imgPath', imgPath);
    };

    if (!askGalleryPermission) {
        return (
            <View style={styles.wrap}>
                <Text style={styles.text}>No Access to Photo Gallary.</Text>
            </View>
        );
    }

    return (
        <View style={styles.wrap}>
            <TouchableOpacity style={{ margin: '1%', backgroundColor: 'skyblue' }}>
                <Button color="purple" title="Click To Open Photo Gallery" onPress={handlePickImage} />
                {image ? <Image source={{ uri: image }} style={{ flex: 1 / 1, margin: '1%' }} /> : null}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        height: 100,
        width: '100%',
        margin: 5,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#cbbbf7',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default UploadImage;
