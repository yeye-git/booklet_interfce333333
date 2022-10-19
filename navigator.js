import react from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/login";
import StudentHome from "./screens/student/Home-Student";
import TeacherHome from "./screens/teacher/Home-Teacher";
import BookletT from "./screens/teacher/Booklet";

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>

        <Navigator  screenOptions={{ headerShown: false }}>
            <Screen name = "Login" component = {Login}></Screen>
            <Screen name = "StudentHome" component = {StudentHome}></Screen>
            <Screen name = "TeacherHome" component = {TeacherHome}></Screen>
            <Screen name = "BookletT" component = {BookletT}></Screen>
        </Navigator>
    </NavigationContainer>

)

export default AppNavigator;