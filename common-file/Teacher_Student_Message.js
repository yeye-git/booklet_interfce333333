import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, TextInput, Platform } from 'react-native';
import { Appbar, Avatar, Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const windowHeight = Dimensions.get('window').height;

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Tom Anderson',
        avatar: require('../assets/avatar1.jpg'),
        time: '11:43 AM',
        text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Jimmy',
        avatar: require('../assets/avatar2.jpg'),
        time: '11:43 AM',
        text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.m',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Tom Anderson',
        avatar: require('../assets/avatar3.jpg'),
        time: '11:49 AM',
        text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    },
];
const TeacherStudentMessage = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={styles.messageItem}>
            <View style={styles.messageItemLeft}>
                <View style={styles.messageItemHeader}>
                    <Avatar.Image size={53} source={item.avatar} />
                    <Text style={styles.messageItemName}>{item.name}</Text>
                    <Text style={styles.messageItemTime}>{item.time}</Text>
                </View>
                <View style={styles.messageItemText}>
                    <Text>
                        {item.text}
                    </Text>
                </View>
            </View>
            <View>
                <Button mode="contained" onPress={() => navigation.push('TeacherStudentConversation')} buttonColor="#a1bbb9" textColor="#000">
                    REPLY
                </Button>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.messageContainer}>
                <Appbar.Content title="Message" titleStyle={styles.messageHeaderTitle} />
                <Appbar.Action icon={() => <SimpleLineIcons name="menu" size={25} color="#ffffff" />} />
            </Appbar.Header>
            <View style={styles.userList}>
                <View style={styles.userItem}>
                    <View  style={styles.userItemInner}>
                        <MaterialIcons name="add" size={40} color="#ffffff" />
                    </View>
                </View>
                <View style={styles.userItem}>
                    <View  style={styles.userItemInner}>
                        <Avatar.Image size={53} source={require('../assets/avatar1.jpg')} />
                    </View>
                </View>
                <View style={styles.userItem}>
                    <View  style={styles.userItemInner}>
                        <Avatar.Image size={53} source={require('../assets/avatar2.jpg')} />
                    </View>
                </View>
                <View style={styles.userItem}>
                    <View  style={styles.userItemInner}>
                        <Avatar.Image size={53} source={require('../assets/avatar3.jpg')} />
                    </View>
                </View>
            </View>
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
        height: windowHeight - 20
    },
    messageContainer: {
        color: '#ffffff',
        backgroundColor: '#6354bd',
    },
    messageHeaderTitle: {
        color: '#ffffff',
    },
    userList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    userItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 65,
        height: 65,
        borderRadius: 65,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#7db1c1',
        padding: 5
    },
    userItemInner: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 53,
        height: 53,
        borderRadius: 53,
        backgroundColor: '#7db1c1'
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
        backgroundColor: '#dcd1fa',
        borderRadius: 20,
        padding: 10,
        marginBottom: 30
    },
    messageItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageItemName: {
        width: 100,
        marginLeft: 10
    },
    messageItemTime: {
        fontWeight: 'bold'
    },
    messageItemText: {
        marginTop: 5
    },
    messageItemLeft: {
        flex: 1,
        marginRight: 10
    },
    sendWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fdfcff',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10,
        marginBottom: Platform.OS === 'ios' ? 60 : 10
    },
    input: {
        flex: 1,
        marginHorizontal: 10,
        color: "#5083a3"
    }
});

export default TeacherStudentMessage;
