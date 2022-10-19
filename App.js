import * as React from 'react';
import { Button, Text, View, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/signup';
import Setting from './screens/settings';
import Login from './screens/login';
import CommonBar from './common-file/NavigationBar';
import Teacher_student_HomePage from './common-file/Teacher_student_homepage';
import TeacherProfile from './screens/teacher/Profile-Teacher';
import create from 'zustand';
import BookSelf from './common-file/Teacher_Student_BookshelfPage';
import ForgetPassword from './common-file/Forgrt_Password';
import CreateNewBookletPage from './screens/teacher/CreateNewBookletPage';
import TeacherStudentMessage from './common-file/Teacher_Student_Message';
import TeacherStudentConversation from './common-file/Teacher_Student_Conversation';
import { ClassFrame } from './screens/teacher/Class';
import DemoBooklet from './screens/student/Booklet';
function LogoTitle1(props) {
    return (
        <View>
            <View style={{ backgroundColor: 'purple', width: '100%' }}>
                <Text>Message</Text>
            </View>
        </View>
    );
}

function LogoTitle2() {
    return (
        <View>
            <Text>7890</Text>
        </View>
    );
}

const Stack = createStackNavigator();

//main func entry
export default function App() {
    const useStore = create((set) => ({
        roleVariable: 0,
        userName: 'JoJo',
        count: 0,
        inc: () => set((state) => ({ count: state.count + 1 })),
        setRoleVariable: (val) => set((state) => ({ roleVariable: val })),
        setUserName: (val) => set((state) => ({ userName: val })),
        setUser: (val) => set((state) => ({ user: val })),
    }));

    const Bar = (props) => {
        console.log(props, 'pppp');

        return (
            <View>
                <Text>My profile</Text>
            </View>
        );
    };

    function HomeScreen2({ navigation }) {
        const [count, setCount] = React.useState(0);

        React.useLayoutEffect(() => {
            navigation.setOptions({
                headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" />,
            });
        }, [navigation, setCount]);

        return (
            <View style={{}}>
                <StudentCom></StudentCom>
            </View>
        );
    }

    const NewCommonBar = ({ navigation }) => {
        const MessageBar = () => {
            return (
                <View>
                    <TeacherStudentMessage navigation={navigation} />
                </View>
            );
        };

        const BookSelfBar = () => {
            const roleVariable = useStore((state) => state.roleVariable);
            return <BookSelf navigation={navigation} roleVariable={roleVariable}></BookSelf>;
        };

        const ProfileBar = (props) => {
            const roleVariable = useStore((state) => state.roleVariable);
            const useStore_userName = useStore((state) => state.userName);
            const count = useStore((state) => state.count);
            return (
                <View>
                    {/* <Text>111</Text> */}
                    {roleVariable == 'roleStudent' && (
                        // <StudentProfile count={count} useStore_userName={useStore_userName}></StudentProfile>
                        <TeacherProfile
                            navigation={props.navigation}
                            count={count}
                            useStore_userName={useStore_userName}
                        ></TeacherProfile>
                    )}
                    {roleVariable == 'roleTeacher' && (
                        <TeacherProfile
                            navigation={props.navigation}
                            count={count}
                            useStore_userName={useStore_userName}
                        ></TeacherProfile>
                    )}
                </View>
            );
        };

        const bookselfParams = create(navigation.getState().routes.filter((item, index) => item.name === 'HomeName'));

        return (
            <CommonBar
                bookself={<BookSelfBar navigation={navigation}></BookSelfBar>}
                home={(props) => {
                    return (
                        <Teacher_student_HomePage
                            {...props}
                            navigation={navigation}
                            role={useStore((state) => state.roleVariable)}
                        ></Teacher_student_HomePage>
                    );
                }}
                // home={
                //     <Teacher_student_HomePage
                //         navigation={navigation}
                //         role={useStore((state) => state.roleVariable)}
                //     ></Teacher_student_HomePage>
                // }
                message={<MessageBar></MessageBar>}
                profile={<ProfileBar navigation={navigation}></ProfileBar>}
            ></CommonBar>
        );
    };

    const LoginPage = ({ navigation }) => {
        const inc = useStore((state) => state.inc);
        const set_UserName = useStore((state) => state.setUserName);
        // change roleVariable in zustand
        const setRoleVariable = useStore((state) => state.setRoleVariable);
        //inc={inc}
        return <Login navigation={navigation} setRoleVariable={setRoleVariable} set_UserName={set_UserName}></Login>;
    };

    const CreateNewBooklet = ({ navigation, route }) => {
        return <CreateNewBookletPage navigation={navigation} route={route}></CreateNewBookletPage>;
    };

    const Class = ({ navigation }) => {
        return <ClassFrame navigation={navigation}></ClassFrame>;
    };

    const StudentDemo = ({ navigation }) => {
        return <DemoBooklet navigation={navigation}></DemoBooklet>;
    };

    // main func return
    return (
        <NavigationContainer>
            {/*<Text> headerShown:false</Text>*/}
            <Stack.Navigator screenOptions={{ headerMode: false }}>
                <Stack.Screen name="LoginName" component={LoginPage} />
                <Stack.Screen
                    name="HomeName"
                    component={NewCommonBar}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <Bar {...props} />,
                    })}
                />
                <Stack.Screen
                    name="SignUpName"
                    component={SignUp}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <LogoTitle1 {...props} />,
                    })}
                />
                <Stack.Screen
                    name="SettingName"
                    component={Setting}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <LogoTitle1 {...props} />,
                    })}
                />
                <Stack.Screen
                    name="ForgotPasswordName"
                    component={ForgetPassword}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <LogoTitle2 {...props} />,
                    })}
                />
                <Stack.Screen
                    name="CreateNewBookletPage"
                    component={CreateNewBooklet}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <Text>CreateNewBookletPage</Text>,
                    })}
                />
                <Stack.Screen
                    name="TeacherStudentConversation"
                    component={TeacherStudentConversation}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <Text>TeacherStudentConversation</Text>,
                    })}
                />
                <Stack.Screen
                    name="Class"
                    component={Class}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <Text>Class</Text>,
                    })}
                />
                <Stack.Screen
                    name="StudentDemo"
                    component={StudentDemo}
                    options={({ navigation, route }) => ({
                        headerTitle: (props) => <Text>StudentDemo</Text>,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
