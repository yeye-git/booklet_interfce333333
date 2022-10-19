import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, DeviceEventEmitter } from 'react-native';
import baseUrl from '../../common-file/config';
import {
    BookshelfBorder,
    BookshelfContPane,
    BookshelfIcon,
    BookshelfImage,
    BSButtonSubText,
    BSIconCont,
    BSRecentBar,
    BSTitleBarCont,
    CompletedBooklets,
    CompletedBookletsScroll,
    HorizontalCont,
    PlusImage,
    SearchBarBSCont,
} from '../../components/styles';
import { Searchbar } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import Utils from '../../utils/utils';
var completedbooklets = [];
var nocompbook = 0;
var incompletebooklets = [];
var noincompbook = 0;
var horizontalcontno = 0;

export const BookshelfT = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [questionAnswerInfo, setQuestionAnswerInfo] = React.useState({
        complete: [],
        inProgress: [],
    });

    const onChangeSearch = (query) => setSearchQuery(query);

    const popBooklet = (response) => {
        navigation.pop();
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Recent');
    const [items, setItems] = useState([
        { label: 'Recent', value: 'Recent' },
        { label: 'Week', value: 'Week' },
        { label: 'Month', value: 'Month' },
        { label: 'Year', value: 'Year' },
    ]);

    const styles = StyleSheet.create({
        TitleBarstyle: {
            backgroundColor: '#5141B6',
            opacity: 0.87,
            height: 150,
            width: '100%',
            flexDirection: 'row',
            lineHeight: 138,
            alignItems: 'flex-end',
        },
        viewShadow: {
            elevation: 6.5,
            shadowColor: '#5141B6',
            shadowOffset: { width: 40, height: 30 },
            shadowOpacity: 1,
            shadowRadius: 1.5,
            height: 50,
            marginTop: 15,
            //backgroundColor: 'red',
        },
    });

    const getQuestionAnswerList = async () => {
        console.log('----4------2--------', Utils.getValue('user_id'));
        if (!Utils.userId) {
            console.log('user id empty');
            return;
        }

        try {
            console.log('---call api');
            let response = await fetch(`${baseUrl}/teach/questionAnswer?user_id=${Utils.userId}`, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
                referrer: 'no-referrer',
            });

            let responseJson = await response.json();

            const { data } = responseJson[0];
            console.log('res:', data);
            const tmp = { ...questionAnswerInfo };
            tmp.complete = data.filter((p) => p.release_time);
            tmp.inProgress = data.filter((p) => !p.release_time);
            setQuestionAnswerInfo(tmp);
        } catch (ex) {
            console.log(ex);
        }
    };

    React.useEffect(() => {
        getQuestionAnswerList();

        let device = DeviceEventEmitter.addListener('update', () => {
            getQuestionAnswerList();
        });

        return () => {
            device.remove();
        };
    }, []);

    return (
        <BookshelfContPane>
            <View style={styles.TitleBarstyle}>
                <Image source={require('../../assets/Title1.png')}></Image>
                <Image source={require('../../assets/Title2.png')}></Image>
            </View>
            <SearchBarBSCont>
                <Searchbar
                    //  style={{ padding: 7, elevation: 2, shadowColor: '#a52a2a' }}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                {/* </View> */}
            </SearchBarBSCont>
            <BSRecentBar>
                <View style={{ backgroundColor: 'red', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {/* <Text>fanhui1</Text>
                    <Text>fanhui</Text>
                    <Text>tian</Text> */}
                </View>
            </BSRecentBar>
            <CompletedBooklets>
                <BSTitleBarCont>
                    <BSButtonSubText>Completed Booklets</BSButtonSubText>
                </BSTitleBarCont>
                <CompletedBookletsScroll>
                     <HorizontalCont>
                        {isinFocus()}
                    </HorizontalCont>
                    {/*<HorizontalCont>
                        {isinFocus}
                        {questionAnswerInfo.complete &&
                            questionAnswerInfo.complete.length > 0 &&
                            questionAnswerInfo.complete.map((item, index) => {
                                return (
                                    <BSIconCont key={index}>
                                        <BookshelfIcon>
                                            <BookshelfImage source={require('../../assets/books.png')} />
                                        </BookshelfIcon>
                                        <BSButtonSubText>{item.title}</BSButtonSubText>
                                    </BSIconCont>
                                );
                            })}
                    </HorizontalCont>
                        */}
                </CompletedBookletsScroll>
                <BookshelfBorder />
                <BSTitleBarCont>
                    <BSButtonSubText>In Progress</BSButtonSubText>
                </BSTitleBarCont>
                <HorizontalCont>
                    {/* {questionAnswerInfo.inProgress &&
                        questionAnswerInfo.inProgress.length > 0 &&
                        questionAnswerInfo.inProgress.map((item, index) => {
                            return (
                                <BSIconCont key={index}>
                                    <BookshelfIcon
                                        onPress={() => {
                                            console.log('-----item,', item, index);
                                            Utils.currentQuestion = item;
                                            Utils.questionId = item.id;
                                            navigation.push('CreateNewBookletPage', { params: item });
                                        }}
                                    >
                                        <BookshelfImage source={require('../../assets/books.png')} />
                                    </BookshelfIcon>
                                    <BSButtonSubText>{item.title}</BSButtonSubText>
                                </BSIconCont>
                            );
                        })}
                    */}
                    {createBooklet(navigation)}

                  {isinFocus2()}
                </HorizontalCont>
            </CompletedBooklets>
        </BookshelfContPane>
    );
};
export const BookshelfS = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [list, setList] = React.useState([]);

    const onChangeSearch = (query) => setSearchQuery(query);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Recent');
    const [items, setItems] = useState([
        { label: 'Recent', value: 'Recent' },
        { label: 'Week', value: 'Week' },
        { label: 'Month', value: 'Month' },
        { label: 'Year', value: 'Year' },
    ]);

    const styles = StyleSheet.create({
        TitleBarstyle: {
            backgroundColor: '#5141B6',
            opacity: 0.87,
            height: 150,
            width: '100%',
            flexDirection: 'row',
            lineHeight: 138,
            alignItems: 'flex-end',
        },
        viewShadow: {
            elevation: 6.5,
            shadowColor: '#5141B6',
            shadowOffset: { width: 40, height: 30 },
            shadowOpacity: 1,
            shadowRadius: 1.5,
            height: 50,
            marginTop: 15,
            //backgroundColor: 'red',
        },
    });
    const getQuestionList = async () => {
        console.log('------------------22------2-----');
        let response = await fetch(`${baseUrl}/student/questionAnswer`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrer: 'no-referrer',
        });
        console.log('------------------2-----------');

        let responseJson = await response.json();
        console.log('responseJson:', responseJson);
        setList(responseJson[0].data);
    };

    React.useEffect(() => {
        console.log('----------1-------');
        getQuestionList();
    }, []);

    return (
        <BookshelfContPane>
            <View style={styles.TitleBarstyle}>
                {/* <Text>123123132</Text> */}
                <Image source={require('../../assets/Title1.png')}></Image>
                <Image source={require('../../assets/Title2.png')}></Image>
            </View>
            <SearchBarBSCont>
                {/* <View style={[{}, styles.viewShadow]}> */}
                <Searchbar
                    //  style={{ padding: 7, elevation: 2, shadowColor: '#a52a2a' }}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                {/* </View> */}
            </SearchBarBSCont>
            <BSRecentBar>
                <View style={{ backgroundColor: 'red', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {/* <Text>fanhui1</Text>
                    <Text>fanhui</Text>
                    <Text>tian</Text> */}
                </View>
            </BSRecentBar>
            <CompletedBooklets>
                <BSTitleBarCont>
                    <BSButtonSubText>Completed Booklets</BSButtonSubText>
                </BSTitleBarCont>
                <CompletedBookletsScroll>
                    <HorizontalCont>
                        {isinFocus()}
                    </HorizontalCont>
                </CompletedBookletsScroll>
                <BookshelfBorder />
                <BSTitleBarCont>
                    <BSButtonSubText>To Be Completed </BSButtonSubText>
                </BSTitleBarCont>
                <HorizontalCont>
                    {demoBooklet(navigation)}
                    {list &&
                        list.map((item, index) => {
                            return (
                                <BSIconCont key={index}>
                                    <BookshelfIcon>
                                        <BookshelfImage source={require('../../assets/inProgress.png')} />
                                    </BookshelfIcon>
                                    <BSButtonSubText>{item.title}</BSButtonSubText>
                                </BSIconCont>
                            );
                        })}
                </HorizontalCont>
            </CompletedBooklets>
        </BookshelfContPane>
    );
};
export function publishBooklet(head) {
    nocompbook = nocompbook + 1;
    completedbooklets.push(
        <BSIconCont key={nocompbook}>
            <BookshelfIcon>
                <BookshelfImage source={require('../../assets/books.png')} />
            </BookshelfIcon>
            <BSButtonSubText>{head}</BSButtonSubText>
        </BSIconCont>,
    );
}
function isinFocus() {
    if (useIsFocused()) {
        return completedbooklets.map((arr2, nocompbook) => <View key={nocompbook}>{arr2}</View>);
    } else {
    }
}
export function saveBooklet(head) {
    noincompbook = noincompbook + 1;
    incompletebooklets.push(
        <BSIconCont>
            <BookshelfIcon>
                <BookshelfImage source={require('../../assets/inProgress.png')} />
            </BookshelfIcon>
            <BSButtonSubText>{head}</BSButtonSubText>
        </BSIconCont>,
    );
}
function isinFocus2() {
    if (useIsFocused()) {
        return incompletebooklets.map((arr2, noincompbook) => <View key={noincompbook}>{arr2}</View>);
    } else {
    }
}
function createBooklet(navigation) {
    const handleNewBooklet = (response) => {
        Utils.currentQuestion = null;
        Utils.questionId = null;
        navigation.push('CreateNewBookletPage', { a: 1 });
    };
    return (
        <BSIconCont>
            <BookshelfIcon onPress={handleNewBooklet}>
                <PlusImage source={require('../../assets/AddButton.png')} />
            </BookshelfIcon>
            <BSButtonSubText>Create Booklet</BSButtonSubText>
        </BSIconCont>
    );
}
function demoBooklet(navigation) {
    const demo = (response) => {
        Utils.currentQuestion = null;
        Utils.questionId = null;
        navigation.push('StudentDemo', { a: 1 });
    };
    return (
        <BSIconCont>
            <BookshelfIcon onPress= {demo}>
                <BookshelfImage source={require('../../assets/inProgress.png')} />
            </BookshelfIcon>
            <BSButtonSubText>Demo Book</BSButtonSubText>
        </BSIconCont>
    );
}
