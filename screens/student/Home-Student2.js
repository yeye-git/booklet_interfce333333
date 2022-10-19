import React from 'react';
import { TouchableHighlight, Text, Image, Alert } from 'react-native';
import {
    HomePageProfileImage,
    HomePageButtons,
    HomePageButtonsContainer,
    HomeContentPane,
    StudentNamePane,
    StudentNameButton,
    HomePageButtonTextCont,
    StudButtonText,
  } from "../../components/styles"
const HomePageC = () => {
    return (
        <HomeContentPane>
        <HomePageProfileImage>
          <Image source={require("../../assets/Student.png")}></Image>
        </HomePageProfileImage>
        <StudentNamePane>
          <StudentNameButton title="Student Name: Serena" color="#9EE30A" />
        </StudentNamePane>
        <HomePageButtonsContainer>
          <HomePageButtonTextCont>
            <HomePageButtons >
            </HomePageButtons>
              <StudButtonText >Bookshelf</StudButtonText>
          </HomePageButtonTextCont>
          <HomePageButtonTextCont>
            <HomePageButtons/>
              <StudButtonText >Quiz</StudButtonText>
          </HomePageButtonTextCont>
          <HomePageButtonTextCont>
            <TouchableHighlight onPress={() => props.navigation.navigate("Bookshelf")}>
              <Text>456</Text>
            {/* <HomePageButtons >
            </HomePageButtons> */}
            </TouchableHighlight>
            <StudButtonText>Class Join Code</StudButtonText>
          </HomePageButtonTextCont>
        </HomePageButtonsContainer>
      </HomeContentPane>
    )
}
export default HomePageC;