import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Alert, Text, Keyboard, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
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
    apiSaveTeachQuestion,
    apiDeleteAllQuestion,
    apiUpdateTeachQuestion,
} from '~/common-file/apis/index';
import moment from 'moment';

const CreateNewBookletPage = (props) => {
    const id = props.route?.params?.id;

    const [detail, setDetail] = useState({});
    const [heading, setHeading] = useState();
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
    });

    const init = async () => {
        // 路由跳转是否携带id（id为编辑态，否则是create）
        if (id) {
            const result = await queryQuestionDetail(id);

            if (result) {
                onChangeHeading(result.title || '');
                setDetail(result);
            }
        }
    };

    const notify = () => {
        DeviceEventEmitter.emit('update');
    };

    const handlePublishValue = (val) => {
        // setDescription(val);
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

    const validateDueDate = (date) => {
        const allPossibleFormats = ['YYYY-MM-DD HH-mm-ss'];

        if (moment(date, allPossibleFormats, true).isValid()) {
            let k = moment(date, 'YYYY-MM-DD HH-mm-ss');
            if (k.isAfter(moment())) {
                return true;
            }
            return false;
        } else {
            return false;
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
        if (id) {
            const result = await apiDeleteAllQuestion({
                id: detail?.questionId,
                data: {
                    params: {
                        user_id: Utils.userId,
                    },
                },
            });

            if (result) {
                Alert.alert('Delete Successful');
            }
        } else {
            setQuestionList([]);
        }
    };

    /**
     * 保存问题
     */
    const handleSaveQuestion = async () => {
        const payload = {
            params: {
                user_id: Utils.userId,
            },
            title: heading,
            questionAnswerList: questionList,
        };

        let result;

        if (id) {
            payload['id'] = id;
            result = await apiUpdateTeachQuestion(payload);
        } else {
            result = await apiSaveTeachQuestion(payload);
        }

        if (result) {
            notify();
        }
    };

    const handleModalConfirm = () => {
        const nextQuestionList = [...questionList];

        switch (currentTab) {
            case 1:
                nextQuestionList.push({
                    type: 'single',
                    key: nextQuestionList.length + 1,
                    question: selectedQuestionValue.question,
                    answer: selectedQuestionValue.answer,
                });
                setQuestionList([...nextQuestionList]);
                handleModalCancel();
                break;
            case 2:
                nextQuestionList.push({
                    type: 'multiple',
                    key: nextQuestionList.length + 1,
                    question: multiQuestionValue,
                    answer: multiQuestionOptions,
                });
                setQuestionList([...nextQuestionList]);
                handleModalCancel();
                break;
            case 3:
                nextQuestionList.push({
                    type: 'image',
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
            case 7:
                console.log('publish');
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
                <BookletIconBar>
                    {tabs.map((item) => (
                        <SBButtonCont key={item.key} onPress={() => handleTabPress(item)}>
                            <SBIcon resizeMode="cover" source={item.icon} />
                        </SBButtonCont>
                    ))}
                </BookletIconBar>
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
                                },
                                {
                                    text: 'Edit',
                                    type: 'secondary',
                                },
                            ]}
                        >
                            <QuestionCard data={item} />
                        </Swipeout>
                    ))}
                </ScrollablePane>
            </BookletMainBar>

            <View>
                <DateTimePickerModal
                    isVisible={dateVisible}
                    mode="datetime"
                    date={new Date()}
                    onConfirm={handleSetDueDate}
                    onCancel={() => {}}
                />
            </View>
        </BookletContentPane>
    );
};

export default CreateNewBookletPage;
