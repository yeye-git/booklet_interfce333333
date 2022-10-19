import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Formik } from "formik"
import TabNavigator from "react-native-tab-navigator"
import { View, Text, Image, StyleSheet, Alert } from "react-native"
import StudentProfile from "./Profile-Student"

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  HomePageProfileImage,
  HomePageButtons,
  HomePageButtonsContainer,
  ProfileImage,
  HomeContentPane,
  StudentNamePane,
  StudentNameButton,
  HomePageButtonTextCont,
  StudButtonText,
} from "../../components/styles"
import { TouchableHighlight } from "react-native-gesture-handler"

function LogoTitle1() {
  return (
    <View>
      <Text>12312312</Text>
    </View>
  )
}

function LogoTitle2() {
  return (
    <View>
      <Text>7890</Text>
    </View>
  )
}

const PageMessage = () => {
  return (
    <View>
      <Text style={{ fontSize: 35, paddingTop: 300, paddingLeft: 30 }}>
        This is Message Page
      </Text>
    </View>
  )
}

const HomePage = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("homeWork")

  const [homeWorkView, sethomeView] = useState("123")
  const [HomeView, setHomeView] = useState("456")
  const [profileView, setProfileView] = useState("456")
  const [MessageView, setMessageView] = useState("456")

  const TabHomePage = () => {
    const styles = StyleSheet.create({
      backViewStyle: {
        backgroundColor: "rgba(81, 65, 182, 0.72)",
        height: 200,
        width: "100%",
        position: "relative",
        borderRadius: "360%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      },
      backImageStyle: {
        width: 215,
        height: 170,
      },
    })
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
              <Text>123</Text>
            {/* <HomePageButtons > 
            </HomePageButtons> */}
            </TouchableHighlight>
            <StudButtonText>Class Join Code</StudButtonText>
          </HomePageButtonTextCont>
        </HomePageButtonsContainer>
      </HomeContentPane>
    )
  }

   const handleSignOff = () => {
    navigation.push("LoginName", { name: "xaiohei" })
  }

   const handleSetting = (val) => {
    navigation.push("SettingName", { name: val })
  }
  //  style={{ position: "absolute", bottom: 0 }}
  return (
    <View style={{ height: "100%" }}>
      <TabNavigator>
        <TabNavigator.Item
          tabStyle={{ margin: 10 }}
          titleStyle={{ fontSize: 13 }}
          selected={selectedTab === "homeWork"}
          title="HomeWork"
          renderIcon={() => (
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/Book-open.png")}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/Book-open.png")}
            />
          )}
          badgeText="1"
          onPress={() => setSelectedTab("homeWork")}
        >
          <View>
            <Text style={{ fontSize: 35, paddingTop: 300, paddingLeft: 20 }}>
              This is homeWork Page
            </Text>
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item
          tabStyle={{ margin: 10 }}
          titleStyle={{ fontSize: 13 }}
          selected={selectedTab === "Home"}
          title="Home"
          renderIcon={() => (
            <Image
              style={{ width: 38, height: 38 }}
              source={require("../../assets/icon.png")}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/icon.png")}
            />
          )}
          onPress={() => setSelectedTab("Home")}
        >
          <View>
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item
          tabStyle={{ margin: 10 }}
          titleStyle={{ fontSize: 13 }}
          selected={selectedTab === "Message"}
          title="Message"
          renderIcon={() => (
            <Image
              style={{ width: 40, height: 30 }}
              source={require("../../assets/Notification.png")}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={{ width: 40, height: 30 }}
              source={require("../../assets/Notification.png")}
            />
          )}
          onPress={() => setSelectedTab("Message")}
        >
          <PageMessage></PageMessage>
        </TabNavigator.Item>

        <TabNavigator.Item
          tabStyle={{ margin: 10 }}
          titleStyle={{ fontSize: 13 }}
          selected={selectedTab === "Profile"}
          title="Profile"
          renderIcon={() => (
            <Image
              style={{ width: 38, height: 38 }}
              source={require("../../assets/User.png")}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={{ width: 45, height: 45 }}
              source={require("../../assets/User.png")}
            />
          )}
          onPress={() => setSelectedTab("Profile")}
        >
          <View>
            <StudentProfile/>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    </View>
  )
}
const MyTextInput = ({ label, icon, ...props }) => {
  return <View></View>
}
export default HomePage
