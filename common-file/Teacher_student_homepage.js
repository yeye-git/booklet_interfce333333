import { TouchableHighlight, Text, Image, Alert, StyleSheet } from 'react-native';

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
import useStore from '~/common-file/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Teacher_student_HomePage = ({ navigation, setSelectedTab }) => {
    const user = useStore((state) => state.user);

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
                    {user.role === 'student' && <StudButtonText>Class Join Code</StudButtonText>}
                </HomePageButtonTextCont>
            </HomePageButtonsContainer>
        </HomeContentPane>
    );
};

export default Teacher_student_HomePage;
