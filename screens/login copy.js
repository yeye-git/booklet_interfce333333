import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Formik } from "formik"
import TabNavigator from "react-native-tab-navigator"
import { View, Text, Image, StyleSheet } from "react-native"

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  BookS,
} from "../components/styles"

const Login = ({ navigation }) => {
  const [homeWorkView, sethomeView] = useState("123")
  const [HomeView, setHomeView] = useState("456")
  const [profileView, setProfileView] = useState("456")
  const [MessageView, setMessageView] = useState("456")
  return (
    <StyledContainer>
      <Image></Image>
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 50,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ backgroundColor: "blue", height: 30, width: 30 }}></View>

        <Text style={{}}>bookShelf</Text>
      </View>
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 50,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ backgroundColor: "blue", height: 30, width: 30 }}></View>

        <Text style={{}}>Quiz</Text>
      </View>
      <InnerContainer>
        <PageTitle> Fieldtrip111122pr</PageTitle>
        <SubTitle>Account Logins</SubTitle>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea></StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
      <TabNavigator>
        <TabNavigator.Item
          selected={selectedTab === "homeWork"}
          title="HomeWork"
          renderIcon={() => (
            <Image source={require("./../assets/Book-open.png")} />
          )}
          renderSelectedIcon={() => (
            <Image source={require("./../assets/Book-open.png")} />
          )}
          badgeText="1"
          onPress={() => setSelectedTab("homeWork")}
        >
          {homeWorkView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === "Home"}
          title="Home"
          renderIcon={() => <Image source={require("./../assets/icon.png")} />}
          renderSelectedIcon={() => (
            <Image source={require("./../assets/icon.png")} />
          )}
          onPress={() => setSelectedTab("Home")}
        >
          {HomeView}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedTab === "Message"}
          title="Message"
          renderIcon={() => (
            <Image source={require("./../assets/Notification.png")} />
          )}
          renderSelectedIcon={() => (
            <Image source={require("./../assets/Notification.png")} />
          )}
          onPress={() => setSelectedTab("Message")}
        >
          {MessageView}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedTab === "profile"}
          title="Profile"
          renderIcon={() => <Image source={require("./../assets/icon.png")} />}
          renderSelectedIcon={() => (
            <Image source={require("./../assets/icon.png")} />
          )}
          onPress={() => setSelectedTab("profile")}
        >
          {profileView}
        </TabNavigator.Item>
      </TabNavigator>
    </StyledContainer>
  )
}

const MyTextInput = ({ label, icon, ...props }) => {
  return <View></View>
}

export default Login
