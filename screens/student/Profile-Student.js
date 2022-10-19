import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import {  ProfileAboutMe, ProfileAboutMeText, ProfileBottomContainer, ProfileBottomTextCont, 
    ProfileBottomTextCont2, ProfileButtonsCont, ProfileContentPane, ProfileHeadText, ProfileImage, 
    ProfileImageTextCont, ProfileSubText, ProfileTopContainer, ProfileTopImageCont, ProfileTopTextCont,
HomePageButtonTextCont, HomePageButtons, StudButtonText, AboutMeHeadText } from '../../components/styles';
import handleSignOff from './Home-Student';
import handleSetting from './Home-Student';
const StudentProfile = (props) => {
    const useStore_userName = props.useStore_userName;

    // console.log('0914',useStore_userName)
    return (
        <ProfileContentPane>
            <ProfileTopContainer>
                <ProfileImageTextCont>
                    <ProfileTopTextCont>
                        <ProfileHeadText>{useStore_userName}</ProfileHeadText>
                        <ProfileSubText>Student</ProfileSubText>
                    </ProfileTopTextCont>
                    <ProfileTopImageCont>
                       <ProfileImage source={require("../../assets/Student.png")}></ProfileImage> 
                    </ProfileTopImageCont>
                </ProfileImageTextCont>
                <ProfileAboutMe>
                    <ProfileAboutMeText>
                        About Me
                    </ProfileAboutMeText>
                </ProfileAboutMe>
            </ProfileTopContainer>
            <ProfileBottomContainer>
                <ProfileBottomTextCont>
                    <ProfileBottomTextCont2>
                        <AboutMeHeadText>About Myself</AboutMeHeadText>
                        <Text>I’m a year 7 students and my favourite subject is Geography. 
                            I like to learn about the new types of rocks and the how the tectonic plates move.</Text>      
                    </ProfileBottomTextCont2>
                    <ProfileBottomTextCont2> 
                        <Text>Favourite Subject: Geography!</Text>      
                    </ProfileBottomTextCont2>
                </ProfileBottomTextCont>
                <ProfileButtonsCont>
                    <HomePageButtonTextCont onPress={() => handleSignOff("Profile")}>
                        <TouchableHighlight >
                            <HomePageButtons/>
                        </TouchableHighlight>
                        <StudButtonText >Sign off</StudButtonText>
                    </HomePageButtonTextCont>
                    <HomePageButtonTextCont>
                        <TouchableHighlight  onPress={() => handleSetting("Setting")}>
                            <HomePageButtons/>
                        </TouchableHighlight>
                        <StudButtonText >Settings</StudButtonText>
                    </HomePageButtonTextCont>
                </ProfileButtonsCont>
            </ProfileBottomContainer>

        </ProfileContentPane>
    )
}
export default StudentProfile;