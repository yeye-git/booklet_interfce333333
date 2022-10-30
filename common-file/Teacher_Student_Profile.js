import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Provider, Appbar, Paragraph, Portal, Button } from 'react-native-paper';
import Tags from 'react-native-tags';
import { Dialog } from '@rneui/themed';

const { Header, Content, Action, BackAction } = Appbar;

import useStore from '~/common-file/store';
import { updateUser } from '~/common-file/apis';

const tagColors = ['#ab8ff6', '#85adea', '#e29be1', '#ab8ff6', '#85adea', '#ab8ff6'];
const ProfilePage = (props) => {
    const user = useStore((state) => state.user);
    console.log('🚀 ~ file: Teacher_Student_Profile.js ~ line 15 ~ ProfilePage ~ user', user);
    const setUser = useStore((state) => state.setUser);

    const { width, height, scale } = Dimensions.get('window');

    const [skillReadOnly, setSkillReadOnly] = useState(true);

    const [userNameVisible, setUserNameVisible] = useState(false);
    const [userName, setUserName] = useState(user.username);

    const [tags, setTags] = useState(user.label || []);

    const handleUpdateUser = async (key, value) => {
        const res = await updateUser({
            ...user,
            [key]: value,
        });

        if (res) {
            setUser({
                ...user,
                [key]: value,
            });
            setSkillReadOnly(true);
        }
    };
    return (
        <View style={styles.container}>
            <Header style={{ width: width, backgroundColor: '#8d58f0' }}>
                <BackAction />
                <Content title="My Profile" />
                <Action icon="dots-vertical" onPress={() => {}} />
                <Action icon="magnify" onPress={() => {}} />
            </Header>
            <View style={styles.header}>
                <View style={styles.headContent}>
                    <View style={styles.profileCont}>
                        <TouchableOpacity onPress={() => setUserNameVisible(true)}>
                            <Text style={styles.name}>{user.username || '11'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.type}>Teacher</Text>
                    </View>
                    <View style={styles.avatar}>
                        <Image source={require('~/assets/Teacher.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>About Me</Text>
                <Text style={styles.desc}>{user?.description}</Text>
                <View style={styles.skills}>
                    <Text style={styles.title}>Skills</Text>
                    <View style={styles.action}>
                        <TouchableOpacity>
                            <Text style={styles.actionItem} onPress={() => setSkillReadOnly(false)}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUpdateUser('label', [...tags])}>
                            <Text style={styles.actionItem}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Tags
                    initialText=""
                    initialTags={tags}
                    containerStyle={{ justifyContent: 'center' }}
                    inputStyle={{ backgroundColor: '#fff' }}
                    readonly={skillReadOnly}
                    onChangeTags={setTags}
                    renderTag={({ tag, index, onPress }) => (
                        <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                            <View
                                style={{
                                    backgroundColor: tagColors[index % 3],
                                    borderRadius: 20,
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    marginRight: 10,
                                    marginBottom: 10,
                                }}
                            >
                                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>{tag}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Dialog isVisible={userNameVisible} onBackdropPress={() => setUserNameVisible(false)}>
                <Dialog.Title title="Edit UserName" />
                <TextInput
                    onChangeText={setUserName}
                    value={userName}
                    placeholder="Please input your user name"
                    keyboardType="default"
                ></TextInput>
                <Dialog.Actions>
                    <Dialog.Button
                        title="Confirm modify"
                        onPress={() => {
                            handleUpdateUser('username', userName);
                        }}
                    />
                    <Dialog.Button title="CANCEL" onPress={() => setUserNameVisible(false)} />
                </Dialog.Actions>
            </Dialog>
        </View>
    );
};

export default ProfilePage;

//backgroundColor: #f2f2f2;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2',
        paddingBottom: 100,
    },
    header: {
        width: '100%',
        height: 150,
        paddingTop: 170,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#8d58f0',
        justifyContent: 'center',
    },
    headContent: {
        width: 330,
        height: 250,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#7435C4',
    },
    profileCont: {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#7435C4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    name: {
        fontSize: 30,
        padding: 30,
        color: '#fff',
    },
    type: {
        fontSize: 16,
        color: '#fff',
    },
    avatar: {
        width: 120,
        height: 135,
    },
    main: {
        paddingHorizontal: 20,
        marginTop: 120,
    },
    title: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 12,
        fontSize: 20,
        color: 'gray',
    },
    skills: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actionItem: {
        marginLeft: 5,
    },
});
