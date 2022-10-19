import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, TextInput, Platform } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Tom Anderson',
        avatar: require('../assets/avatar1.jpg'),
        time: '11:43 AM',
        text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
        user: 1,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Jimmy',
        avatar: require('../assets/avatar2.jpg'),
        time: '11:43 AM',
        text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.m',
        user: 2,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Tom Anderson',
        avatar: require('../assets/avatar1.jpg'),
        time: '11:43 AM',
        text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
        user: 1,
    },
];
const TeacherStudentConversation = (props) => {

    const renderItem = ({ item }) => (
        <View style={[styles.messageItem, item.user === 1 ? styles.messageItemMe: null]}>
            <Avatar.Image size={53} source={item.avatar} />
            <View style={[styles.messageContent, item.user === 1 ? styles.messageContentMe: null]}>
                <Text>{item.text}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.messageContainer}>
                <Appbar.Content title="Conversation" titleStyle={styles.messageHeaderTitle} />
                <Appbar.Action icon={() => <MaterialIcons name="keyboard-control" size={25} color="#ffffff" />} />
            </Appbar.Header>
            <View style={styles.messageList}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.sendWrapper}>
                <EntypoIcons name="emoji-happy" size={30} color="#5083a3" />
                <TextInput style={styles.input} placeholder="Message" />
                <EntypoIcons name="chevron-small-up" size={30} color="#5083a3" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight
    },
    messageContainer: {
        color: '#ffffff',
        backgroundColor: '#6354bd',
    },
    messageHeaderTitle: {
        color: '#ffffff',
    },
    messageList: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        paddingHorizontal: 10
    },
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 30,
    },
    messageItemMe: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    messageContent: {
        flex: 1,
        marginLeft: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        maxWidth: windowWidth * 0.6
    },
    messageContentMe: {
        marginLeft: 0,
        marginRight: 10,
        backgroundColor: '#89d961'
    },
    sendWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fdfcff',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10,
        // marginBottom: Platform.OS === 'ios' ? 60 : 10
    },
    input: {
        flex: 1,
        marginHorizontal: 10,
        color: "#5083a3"
    }
});

export default TeacherStudentConversation;
