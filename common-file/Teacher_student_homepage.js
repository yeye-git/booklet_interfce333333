import React, { useState } from 'react';
import { TouchableHighlight, View, Text, Image, Modal, StyleSheet, TextInput } from 'react-native';

import {
    HomePageProfileImage,
    HomePageButtons,
    HomePageButtonsContainer,
    HomeContentPane,
    StudentNamePane,
    StudentNameButton,
    HomePageButtonTextCont,
    StudButtonText,
} from '../components/styles';
import { BookletModalWrap } from '~/components/BookletModalWrap';
import useStore from '~/common-file/store';

const Teacher_student_HomePage = ({ navigation, setSelectedTab }) => {
    const user = useStore((state) => state.user);
    const [joinCodeVisible, setJoinCodeVisible] = useState(false);
    const [joinCode, setJoinCode] = useState('');

    const handleModalConfirm = () => {
        if (!joinCode) {
            Alert.alert('Please enter your join code!');

            return;
        }

        handleModalCancel();

        setTimeout(() => {
            navigation.push('StudentDemo', { code: joinCode });
        }, 1000);
    };

    const handleModalCancel = () => {
        setJoinCode('');
        setJoinCodeVisible(false);
    };

    return (
        <HomeContentPane>
            <HomePageProfileImage>{user?.image ? <Image source={{ uri: user.image }} /> : null}</HomePageProfileImage>
            <StudentNamePane>
                {user.role === 'teacher' && (
                    <StudentNameButton title={`Teacher Name: ${user?.username}`} color="#9EE30A" />
                )}
                {user.role === 'student' && (
                    <StudentNameButton title={`Student Name: ${user?.username}`} color="#9EE30A" />
                )}
            </StudentNamePane>
            <HomePageButtonsContainer>
                <HomePageButtonTextCont>
                    <TouchableHighlight onPress={setSelectedTab}>
                        <HomePageButtons />
                    </TouchableHighlight>
                    <StudButtonText>Bookshelf</StudButtonText>
                </HomePageButtonTextCont>
                <HomePageButtonTextCont>
                    <HomePageButtons />
                    <StudButtonText>Quiz</StudButtonText>
                </HomePageButtonTextCont>
                <HomePageButtonTextCont>
                    <TouchableHighlight>
                        <HomePageButtons />
                    </TouchableHighlight>
                    {user.role === 'teacher' && (
                        <StudButtonText onPress={() => navigation.push('Subject')}>Classes</StudButtonText>
                    )}
                    {user.role === 'student' && (
                        <StudButtonText onPress={() => setJoinCodeVisible(true)}>Class Join Code</StudButtonText>
                    )}
                </HomePageButtonTextCont>
            </HomePageButtonsContainer>
            <BookletModalWrap
                open={joinCodeVisible}
                animationType="slide"
                transparent={true}
                onOk={handleModalConfirm}
                onCancel={handleModalCancel}
            >
                <View styles={styles.wrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Class Join Code: (Enter the Code)'}
                        placeholderTextColor={'black'}
                        keyboardType={'default'}
                        value={joinCode}
                        onChangeText={setJoinCode}
                    />
                </View>
            </BookletModalWrap>
        </HomeContentPane>
    );
};

export default Teacher_student_HomePage;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        padding: 10,
        margin: 5,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: 'purple',
        backgroundColor: 'white',
        minHeight: 60,
        maxHeight: 60,
        width: '100%',
        alignItems: 'center',
    },
    row: {
        width: '70%',
        // margin: '0px auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
    },
    check: {
        flex: 3,
        marginTop: 20,
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: '1px solid purple',
    },
    textInput: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'purple',
        backgroundColor: 'white',
        height: 40,
        width: '100%',
        marginLeft: 20,
    },
});
