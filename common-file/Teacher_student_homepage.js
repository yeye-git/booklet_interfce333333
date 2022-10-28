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

const Teacher_student_HomePage = ({ navigation, setSelectedTab }) => {
    const user = useStore((state) => state.user);
    return (
        <HomeContentPane>
            <HomePageProfileImage>
                {user.role === 'roleTeacher' && <Image source={require('../assets/Teacher.png')}></Image>}
                {user.role === 'roleStudent' && <Image source={require('../assets/Student.png')}></Image>}
            </HomePageProfileImage>
            <StudentNamePane>
                {user.role === 'roleTeacher' && (
                    <StudentNameButton title={`Teacher Name: ${user?.name}`} color="#9EE30A" />
                )}
                {user.role === 'roleStudent' && (
                    <StudentNameButton title={`Student Name: ${user?.name}`} color="#9EE30A" />
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
                    {user.role === 'roleTeacher' && (
                        <TouchableHighlight>
                            <HomePageButtons />
                        </TouchableHighlight>
                    )}
                    {user.role === 'roleStudent' && (
                        <TouchableHighlight>
                            <HomePageButtons />
                        </TouchableHighlight>
                    )}
                    {user.role === 'roleTeacher' && <StudButtonText>Classes</StudButtonText>}
                    {user.role === 'roleStudent' && <StudButtonText>Class Join Code</StudButtonText>}
                </HomePageButtonTextCont>
            </HomePageButtonsContainer>
        </HomeContentPane>
    );
};

export default Teacher_student_HomePage;
