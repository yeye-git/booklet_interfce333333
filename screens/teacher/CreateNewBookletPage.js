import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Alert, Text, Keyboard, TouchableHighlight, DeviceEventEmitter, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
    BookletContentPane,
    BookletHomeBar,
    BookletIconBar,
    BookletMainBar,
    BookletPaddingBar,
    ScrollablePane,
    SBButtonCont,
    SBIcon,
    BookletHomeIconCont,
    BookletHeadingTextInput,
    DateContentPane,
    BookletHomeIconContBTN,
    BookshelfContPane,
    DateSub,
} from '../../components/styles';
import { BookletModalWrap } from '~/components/BookletModalWrap';
import {
    SingleQuestion,
    MultiSelectQuestion,
    ImageQuestion,
    DeleteContent,
    SaveContent,
    PublishContent,
} from '~/components/BookletModalContent';
import { QuestionCard } from '~/components/QuestionCard';
import Utils from '../../utils/utils';
import {
    queryQuestionDetail,
    apiDeleteAllQuestion,
    apiCreateTeachQuestion,
    apiSaveAndPublishTeachQuestion,
} from '~/common-file/apis/index';
import moment from 'moment';

const CreateNewBookletPage = (props) => {
    const { pid, status, title } = props.route?.params || {};
    const [heading, setHeading] = useState(title);
    const [currentTab, setCurrentTab] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState();

    // single question Input change event
    const [selectedQuestionValue, setSelectedQuestionValue] = useState({});

    const [multiQuestionValue, setMultiQuestionValue] = useState('');

    const [multiQuestionOptions, setMultiQuestionOptions] = useState([
        { label: '', checked: false },
        { label: '', checked: false },
        { label: '', checked: false },
        { label: '', checked: false },
    ]);

    const [questionList, setQuestionList] = useState([]);
    const [dateVisible, setDateVisible] = useState(false);
    const [currentDueDate, setCurrentDueDate] = useState();

    const handleMultiQuestionChang = (optionValue) => {
        setMultiQuestionOptions(optionValue);
    };

    const tabs = [
        {
            key: 1,
            icon: require('~/assets/icons/text.png'),
            modal: <SingleQuestion value={selectedQuestionValue} onChange={setSelectedQuestionValue} />,
        },
        {
            key: 2,
            icon: require('~/assets/icons/48px/Outline/Interface/Layout.png'),
            modal: (
                <MultiSelectQuestion
                    question={multiQuestionValue}
                    options={multiQuestionOptions}
                    onChange={setMultiQuestionValue}
                    onOptionChange={handleMultiQuestionChang}
                />
            ),
        },
        {
            key: 3,
            icon: require('~/assets/icons/48px/Outline/Devices/Camera.png'),
            modal: <ImageQuestion value={selectedQuestionValue} onChange={setSelectedQuestionValue} />,
        },
        {
            key: 4,
            icon: require('~/assets/icons/48px/Outline/Interface/History.png'),
        },
        {
            key: 5,
            icon: require('~/assets/icons/48px/Outline/Interface/Trash.png'),
            modal: <DeleteContent />,
        },
        {
            key: 6,
            icon: require('~/assets/icons/48px/Outline/Interface/Save.png'),
            modal: <SaveContent />,
        },
        {
            key: 7,
            icon: require('~/assets/icons/48px/Outline/Files/Upload.png'),
            modal: <PublishContent />,
        },
    ];

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        // 路由跳转是否携带id（id为编辑态，否则是create）
        if (pid) {
            const result = await queryQuestionDetail(pid);

            if (result) {
                setQuestionList(result);
            }
        }
    };

    const notify = () => {
        DeviceEventEmitter.emit('update');
    };

    const handleTabPress = (item) => {
        setCurrentTab(item.key);
        if (item.modal) {
            console.log(item.modal);
            setCurrentModal(item.modal);
            setModalOpen(true);
        }
        if (item.key === 4) {
            setDateVisible(true);
        }
    };

    /**
     * 截止日期弹窗确定事件
     */
    const handleSetDueDate = (v) => {
        let curDate = moment(v);

        if (!curDate.isAfter(moment())) {
            Alert.alert('Date has already passed');
        } else {
            setCurrentDueDate(curDate.format('YYYY-MM-DD HH-mm-ss'));
            setDateVisible(false);
        }
    };

    /**
     * 删除整个问题列表事件
     */
    const handleDeleteQuestion = async () => {
        if (pid) {
            const result = await apiDeleteAllQuestion(pid);

            if (result) {
                Alert.alert('Delete Successful');
                handleBack();
            }
        } else {
            setQuestionList([]);
            handleBack();
        }
    };

    const handleSaveQuestion = async (isPublish) => {
        if (!heading) {
            Alert.alert('Please enter your Booklet Heading!');

            return;
        }

        const payload = {
            title: heading,
            questions: questionList,
        };

        if (pid) {
            payload['pid'] = pid;
        }

        let res = await apiCreateTeachQuestion(payload);

        if (res) {
            if (isPublish) {
                let result = await apiSaveAndPublishTeachQuestion({
                    pid,
                    type: '2',
                });

                if (result) {
                    handleBack();
                }
            } else {
                Alert.alert(pid ? 'Update Success!' : 'Create Success!');

                setTimeout(() => {
                    handleBack();
                }, 2000);
            }
        }
        // return;
    };

    const handleDeleteItem = (i) => {
        const nextList = questionList.filter((_, index) => index !== i);

        setQuestionList([...nextList]);
    };

    const handleEditItem = (item, index) => {
        switch (item.type) {
            case 1:
                break;
        }
    };

    const handleBack = () => {
        notify();

        handleModalCancel();

        props.navigation.goBack();
    };

    const handleToSubjectPage = () => {
        props.navigation.push('Subject', { pid });
    };

    const handleModalConfirm = () => {
        const nextQuestionList = [...questionList];

        switch (currentTab) {
            case 1:
                nextQuestionList.push({
                    type: 1,
                    key: nextQuestionList.length + 1,
                    question: selectedQuestionValue.question,
                    answer: selectedQuestionValue.answer,
                });
                setQuestionList([...nextQuestionList]);
                handleModalCancel();
                break;
            case 2:
                nextQuestionList.push({
                    type: 2,
                    key: nextQuestionList.length + 1,
                    question: multiQuestionValue,
                    answer: multiQuestionOptions,
                });
                setQuestionList([...nextQuestionList]);
                handleModalCancel();
                break;
            case 3:
                nextQuestionList.push({
                    type: 3,
                    key: nextQuestionList.length + 1,
                    question: selectedQuestionValue.question,
                    answer: selectedQuestionValue.answer,
                });
                setQuestionList([...nextQuestionList]);
                handleModalCancel();
                break;
            case 4:
                handleSetDueDate();
                break;
            case 5:
                handleDeleteQuestion();
                break;
            case 6:
                handleSaveQuestion();
                break;
            case 7:
                handleSaveQuestion(true);
                break;

            default:
                break;
        }
    };

    const handleModalCancel = () => {
        setModalOpen(false);
        setCurrentTab(0);
    };

    const handleToHomePage = () => {};

    return (
        <View style={styles.wrap}>
            <BookletContentPane>
                <BookletModalWrap
                    open={modalOpen}
                    animationType="slide"
                    transparent={true}
                    onOk={handleModalConfirm}
                    onCancel={handleModalCancel}
                >
                    {currentModal}
                </BookletModalWrap>
                <BookletPaddingBar />
                <BookletHomeBar>
                    <BookletHomeIconCont>
                        <BookletHomeIconContBTN onPress={handleToHomePage}>
                            <SBIcon
                                resizeMode="cover"
                                source={require('./../../assets/icons/48px/Outline/General/Home.png')}
                            />
                        </BookletHomeIconContBTN>
                    </BookletHomeIconCont>

                    <BookletHeadingTextInput
                        onChangeText={(text) => {
                            setHeading(text);
                        }}
                        value={heading}
                        placeholder="Enter Booklet Heading"
                        keyboardType="default"
                    />
                </BookletHomeBar>
                <BookletMainBar>
                    {status !== '2' ? (
                        <BookletIconBar>
                            {tabs.map((item) => (
                                <SBButtonCont key={item.key} onPress={() => handleTabPress(item)}>
                                    <SBIcon resizeMode="cover" source={item.icon} />
                                </SBButtonCont>
                            ))}
                        </BookletIconBar>
                    ) : null}
                    <ScrollablePane style={{ padding: 10 }}>
                        {currentDueDate && (
                            <DateContentPane>
                                <DateSub>Due: {currentDueDate}</DateSub>
                            </DateContentPane>
                        )}
                        {questionList.map((item, index) => (
                            // <QuestionContentPane
                            //     style={{ backgroundColor: isActive ? '#a88df2' : '#CBBBF7' }}
                            //     key={item.key}
                            //     activeOpacity={0.5}
                            //     onLongPress={() => {
                            //         // selected = listkey;
                            //         setIsActive(!isActive);
                            //     }}
                            // >
                            //     {renderQuestion(item)}
                            // </QuestionContentPane>
                            <Swipeout
                                key={index}
                                backgroundColor="#fff"
                                right={[
                                    {
                                        text: 'Delete',
                                        type: 'delete',
                                        onPress: () => {
                                            handleDeleteItem(index);
                                        },
                                    },
                                    {
                                        text: 'Edit',
                                        type: 'secondary',
                                        onPress: () => {
                                            handleEditItem(item, index);
                                        },
                                    },
                                ]}
                            >
                                <QuestionCard data={item} />
                            </Swipeout>
                        ))}
                    </ScrollablePane>
                </BookletMainBar>
            </BookletContentPane>
            <View>
                <DateTimePickerModal
                    isVisible={dateVisible}
                    mode="datetime"
                    date={new Date()}
                    onConfirm={handleSetDueDate}
                    onCancel={() => {}}
                />
            </View>
            {status === '2' ? (
                <TouchableHighlight style={styles.publishWrap} onPress={handleToSubjectPage}>
                    <View style={styles.publishBtn}>
                        <Text style={styles.btnText}>Publish</Text>
                    </View>
                </TouchableHighlight>
            ) : null}
        </View>
    );
};

export default CreateNewBookletPage;

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        paddingBottom: 100,
        height: '100%',
    },
    publishWrap: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginHorizontal: 'auto',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    publishBtn: {
        padding: 10,
        backgroundColor: '#EAE1FA',
        borderRadius: 10,
    },
    btnText: {
        fontSize: 30,
    },
});
