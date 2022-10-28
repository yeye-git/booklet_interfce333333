import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommonBar = (props) => {
    const [selectedTab, setSelectedTab] = useState('homeWork');

    return (
        <View style={{ height: '100%' }}>
            <TabNavigator tabBarStyle={{ height: 70 }}>
                <TabNavigator.Item
                    tabStyle={{ margin: 10 }}
                    titleStyle={{ fontSize: 13 }}
                    selected={selectedTab === 'Home'}
                    title="Home"
                    renderIcon={() => (
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/icon.png')} />
                    )}
                    renderSelectedIcon={() => (
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/icon.png')} />
                    )}
                    onPress={() => setSelectedTab('Home')}
                >
                    <View>
                        {/* <HomePageC/> */}
                        {/* {props.home} */}
                        {props.home({
                            setSelectedTab: () => {
                                setSelectedTab('homeWork');
                            },
                        })}
                    </View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    tabStyle={{ margin: 10 }}
                    titleStyle={{ fontSize: 13 }}
                    selected={selectedTab === 'homeWork'}
                    title="Bookshelf"
                    name="Bookshelf"
                    renderIcon={() => (
                        <Image
                            style={{ width: 34.5, height: 33, paddingBottom: 1 }}
                            source={require('../assets/Book-open.png')}
                        />
                    )}
                    renderSelectedIcon={() => (
                        <Image style={{ width: 34.5, height: 33 }} source={require('../assets/Book-open.png')} />
                    )}
                    // badgeText="1"
                    onPress={() => setSelectedTab('homeWork')}
                >
                    <View>{props.bookself}</View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    tabStyle={{ margin: 10 }}
                    titleStyle={{ fontSize: 13 }}
                    selected={selectedTab === 'Message'}
                    title="Message"
                    renderIcon={() => (
                        <Image
                            style={{ width: 35, height: 29, paddingBottom: 1 }}
                            source={require('../assets/Notification.png')}
                        />
                    )}
                    renderSelectedIcon={() => (
                        <Image
                            style={{ width: 35, height: 29, paddingBottom: 1 }}
                            source={require('../assets/Notification.png')}
                        />
                    )}
                    onPress={() => setSelectedTab('Message')}
                >
                    <View>{props.message}</View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    tabStyle={{ margin: 10 }}
                    titleStyle={{ fontSize: 13, marginTop: 6 }}
                    selected={selectedTab === 'Profile'}
                    title="Profile"
                    renderIcon={() => (
                        <Image
                            style={{ width: 28, height: 28, paddingTop: 10 }}
                            source={require('../assets/User.png')}
                        />
                    )}
                    renderSelectedIcon={() => (
                        <Image
                            style={{ width: 28, height: 28, paddingBottom: 3 }}
                            source={require('../assets/User.png')}
                        />
                    )}
                    onPress={() => setSelectedTab('Profile')}
                >
                    <View>{props.profile}</View>
                </TabNavigator.Item>
            </TabNavigator>
        </View>
    );
};
export default CommonBar;
