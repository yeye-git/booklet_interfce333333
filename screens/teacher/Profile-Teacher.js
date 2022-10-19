import {
    TouchableHighlight, Text, View, Dimensions,
    PixelRatio, StyleSheet, TouchableOpacity, TextInput
} from 'react-native';
import * as React from 'react';
import { Provider, Appbar, Paragraph, Portal, Button } from 'react-native-paper';
import { Alert } from 'react-native-web';
import {
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
} from '@rneui/themed';
import { useStore } from 'zustand';
import Tags from "react-native-tags";
import { useEffect, useRef, useState } from 'react';

import {
    ProfileAboutMe,
    ProfileAboutMeText,
    ProfileBottomContainer,
    ProfileBottomTextCont,
    ProfileBottomTextCont2,
    ProfileButtonsCont,
    ProfileContentPane,
    ProfileHeadText,
    ProfileImage,
    ProfileImageTextCont,
    ProfileSubText,
    ProfileTopContainer,
    ProfileTopImageCont,
    ProfileTopTextCont,
    HomePageButtonTextCont,
    HomePageButtons,
    StudButtonText,
    AboutMeHeadText,
} from '../../components/styles';



const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        width: 220,
        margin: 20,
    },
    buttonContainer: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const TeacherProfile = (props) => {


    const _goBack = () => console.log('Went back');


    const { width, height, scale } = Dimensions.get('window');



    const [modalVisible, setModalVisible] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    const [pageInfo, setpageInfo] = useState({})

    //! user name
    const [email, onChangeNumber] = React.useState('');

    //!
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const [pageTag, setpageTag] = useState(['motivate', "programming", "chicken"])

    const [tagColor, setTagColor] = useState("#fff")  //"#f2f2f2"
    const [inputOpacity, setinputOpacity] = useState(0)

    const onSaveUsername = () => {

        const param = { email: '', username: '', ...pageInfo }


        hideDialog();

    }

    const onSave = () => {

        console.log('newest skill', pageTag)

        setinputOpacity(0)
    }



    const [edit, setEdit] = React.useState({
        name: props.useStore_userName,
        //todo init all data for the teacher
    });

    const handleSave = () => {
        // todo save user info
        // call api to update teacher info
        // update user info in zu store
    };
    const showModal = () => {
        setModalVisible(true);
    };
    const hideModal = () => setModalVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const _handleMore = () => {
        console.log('Shown more');
        setVisible(true);
    };
    const useStore_userName = props.useStore_userName;
    const handleSignOff = () => {
        console.log(props.navigation, '123456');
        props.navigation.push('LoginName');
    };

    useEffect(() => {
        //todo call api to get teacher info
        // setEdit(<teacher info>)
        // setpageInfo
    }, []);

    return (
        <ProfileContentPane>
            <Appbar.Header style={{ width: width, backgroundColor: '#8d58f0' }}>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="My Profile" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>

            <ProfileTopContainer>
                <ProfileImageTextCont>
                    <ProfileTopTextCont>
                        <ProfileHeadText onPress={showDialog} >{useStore_userName}</ProfileHeadText>
                        <ProfileSubText>Teacher2</ProfileSubText>
                    </ProfileTopTextCont>
                    <ProfileTopImageCont>
                        <ProfileImage source={require('../../assets/Teacher.png')}></ProfileImage>
                    </ProfileTopImageCont>
                </ProfileImageTextCont>
                <ProfileAboutMe>
                    <ProfileAboutMeText style={{ fontSize: 23, fontWeight: 'bold', marginHorizontal: 40 }}>About Me</ProfileAboutMeText>
                </ProfileAboutMe>
            </ProfileTopContainer>
            <View style={{ marginTop: 170, fontSize: 12, marginLeft: 20, marginRight: 20 }}>
                <ProfileAboutMeText style={{ fontSize: 20, color: 'grey' }}>
                    I’m a year 7 students and my favourite subject is Geography. I like to learn about the new types of
                    rocks and the how the tectonic plates move.{' '}
                </ProfileAboutMeText>
            </View>
            <ProfileAboutMe>
                <ProfileAboutMeText style={{ fontSize: 23, fontWeight: 'bold', marginLeft: 40 }}>Skills
                </ProfileAboutMeText>
                {/* <View style={{ fontSize: 14, paddingLeft: 50 }} ><Text>编辑</Text></View> */}
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ marginRight: 10 }} onPress={() => setinputOpacity(true)} >Edit</Text>
                    <Text onPress={onSave}  >Save</Text>
                </View>
            </ProfileAboutMe>
            <Tags
                initialText=""
                textInputProps={{
                    placeholder: ""
                }}
                style={{}}
                initialTags={pageTag}
                onChangeTags={tags => { console.log('tags', tags), setpageTag(tags) }}
                onTagPress={(index, tagLabel, event, deleted) => {
                    console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                }
                }
                containerStyle={{ justifyContent: "center" }}
                inputStyle={{ backgroundColor: tagColor }}
                inputContainerStyle={{ opacity: inputOpacity }}
                renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => {
                    let tagColor = '#ab8ff6'
                    switch (index) {
                        case 0:
                            tagColor = '#ab8ff6'
                            break;
                        case 1:
                            tagColor = '#85adea'
                            break;
                        case 2:
                            tagColor = '#e29be1'
                            break;
                        case 3:
                            tagColor = '#ab8ff6'
                            break;
                        case 4:
                            tagColor = '#85adea'
                            break;
                        case 4:
                            tagColor = '#ab8ff6'
                            break;
                        default:
                            console.log("null");
                    }
                    return (
                        <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                            <View
                                style={{
                                    backgroundColor: tagColor,
                                    borderRadius: 20,
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    marginRight: 10,
                                }}
                            >
                                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>{tag}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                }
                }
            />

            {/* //!!!! edit username */}
            <Dialog
                isVisible={visible}
                onBackdropPress={hideDialog}
            >
                <Dialog.Title title="Edit Username" />
                <TextInput
                    onChangeText={(text) => onChangeNumber(text)}
                    value={email}
                    placeholder="Please input your user name"
                    keyboardType="default" ></TextInput>
                <Dialog.Actions>
                    <Dialog.Button
                        title="Confirm modify"
                        onPress={() => {
                            onSaveUsername()

                        }}
                    />
                    {/* <Dialog.Button title="CANCEL" onPress={toggleDialog5} /> */}
                </Dialog.Actions>
            </Dialog>

            {/* //!!! old  tags */}
            {/* <ProfileAboutMe style={{ flexDirection: 'row', alignItems: 'center', height: 'auto' }}>
                <View
                    style={{
                        backgroundColor: '#ab8ff6',
                        borderRadius: 20,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginRight: 10,
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>motivate</Text>
                </View>

                <View
                    style={{
                        backgroundColor: '#e29be1',
                        borderRadius: 20,
                        paddingVertical: 10,
                        paddingHorizontal: 20,

                        marginRight: 10,
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>active</Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#85adea',
                        borderRadius: 20,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>anniu1</Text>
                </View>
            </ProfileAboutMe> */}

        </ProfileContentPane>



    );
};
export default TeacherProfile;
