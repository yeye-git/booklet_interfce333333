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

const Teacher_student_HomePage = (props) => {
    const user = useStore((state) => state.user);
    console.log('🚀 ~ file: Teacher_student_homepage.js ~ line 19 ~ role', user);
    return (
        <HomeContentPane>
            <HomePageProfileImage>
                {props.role === 'roleTeacher' && <Image source={require('../assets/Teacher.png')}></Image>}
                {props.role === 'roleStudent' && <Image source={require('../assets/Student.png')}></Image>}
            </HomePageProfileImage>
            <StudentNamePane>
                {props.role === 'roleTeacher' && <StudentNameButton title="Teacher Name: Kelly" color="#9EE30A" />}
                {props.role === 'roleStudent' && <StudentNameButton title="Student Name: Serena" color="#9EE30A" />}
            </StudentNamePane>
            <HomePageButtonsContainer>
                <HomePageButtonTextCont>
                    <TouchableHighlight
                        onPress={() => {
                            console.log('props222 = ', props);
                            props.setSelectedTab();
                            // props.navigation.navigate('HomeName', { screen: 'Bookshelf' });
                            // console.log(123)
                        }}
                    >
                        <HomePageButtons />
                    </TouchableHighlight>
                    <StudButtonText>Bookshelf</StudButtonText>
                </HomePageButtonTextCont>
                <HomePageButtonTextCont>
                    <HomePageButtons />
                    <StudButtonText>Quiz</StudButtonText>
                </HomePageButtonTextCont>
                <HomePageButtonTextCont>
                    {props.role === 'roleTeacher' && (
                        <TouchableHighlight onPress={() => props.navigation.push('Class', { a: 1 })}>
                            <HomePageButtons />
                        </TouchableHighlight>
                    )}
                    {props.role === 'roleStudent' && (
                        <TouchableHighlight>
                            <HomePageButtons />
                        </TouchableHighlight>
                    )}
                    {props.role === 'roleTeacher' && <StudButtonText>Classes</StudButtonText>}
                    {props.role === 'roleStudent' && <StudButtonText>Class Join Code</StudButtonText>}
                </HomePageButtonTextCont>
            </HomePageButtonsContainer>
        </HomeContentPane>
    );
};

export default Teacher_student_HomePage;
