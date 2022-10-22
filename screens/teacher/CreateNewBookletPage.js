import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Alert, Text, Keyboard, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
import Swipeout from 'react-native-swipeout';
import {
    DeleteModal,
    DueDateModal,
    IMGModal,
    MCModal,
    SaveModal,
    SRModal,
    PublishModal,
    storeData,
    SRQ,
    SRA,
    MCQ1,
    MCA1,
    MCA2,
    MCA3,
    MCA4,
    ImageQ,
    ImageA,
    clearData,
    MCOption1,
} from '../../components/modals';
import { scrollIMG, scrollMC, scrollSR } from '../../components/scrollforms';
import {
    BookletContentPane,
    BookletHomeBar,
    BookletIconBar,
    BookletMainBar,
    BookletPaddingBar,
    QuestionContentPane,
    ScrollablePane,
    SBButtonCont,
    SBIcon,
    BookletHomeIconCont,
    BookletSideBar,
    ModalStyle,
    CenterModalView,
    ContentModalButtonCont,
    ModalButtonCont,
    ModalButtons,
    ModalButtonText,
    BookletHeadingText,
    BookletHeadingTextInput,
    DateContentPane,
    BSIconCont,
    BookshelfIcon,
    BookshelfImage,
    BSButtonSubText,
    BookletHomeIconContBTN,
    BookshelfContPane,
    DateSub,
} from '../../components/styles';
import { BookletModalWrap } from '../../components/BookletModalWrap';
import { SingleQuestion } from '../../components/BookletModalContent';
import { QuestionCard } from '../../components/QuestionCard';
import { publishBooklet, saveBooklet } from './Bookshelf';
import Utils from '../../utils/utils';
import {
    queryQuestionDetail,
    apiSaveTeachQuestion,
    apiDeleteAllQuestion,
    apiUpdateTeachQuestion,
} from '../../common-file/apis/index';
import moment from 'moment';
import { clearDate, subduedate } from '../../components/growtext';
export var noofques = 0;
export var questions = [];
const CreateNewBookletPage = (props) => {
    const id = props.route?.params?.id;

    const [detail, setDetail] = useState({});
    const [heading, setHeading] = useState();
    const [currentTab, setCurrentTab] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState();

    // 单选弹窗Input change事件
    const [selectedQuestionValue, setSelectedQuestionValue] = useState({});

    const [questionList, setQuestionList] = useState([]);
    const [currentDueDate, setCurrentDueDate] = useState();
    const [isActive, setIsActive] = useState(false);

    const tabs = [
        {
            key: 1,
            icon: require('./../../assets/icons/text.png'),
            modal: <SingleQuestion value={selectedQuestionValue} onChange={setSelectedQuestionValue} />,
        },
        {
            key: 2,
            icon: require('./../../assets/icons/48px/Outline/Interface/Layout.png'),
            modal: MCModal(),
        },
        {
            key: 3,
            icon: require('./../../assets/icons/48px/Outline/Devices/Camera.png'),
            modal: IMGModal(),
        },
        {
            key: 4,
            icon: require('./../../assets/icons/48px/Outline/Interface/History.png'),
            modal: DueDateModal(),
        },
        {
            key: 5,
            icon: require('./../../assets/icons/48px/Outline/Interface/Trash.png'),
            modal: DeleteModal(),
        },
        {
            key: 6,
            icon: require('./../../assets/icons/48px/Outline/Interface/Save.png'),
            modal: SaveModal(),
        },
        {
            key: 7,
            icon: require('./../../assets/icons/48px/Outline/Files/Upload.png'),
            modal: <PublishModal onChange={handlePublishValue} />,
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
        setCurrentModal(item.modal);
        setModalOpen(true);
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
    const handleSetDueDate = () => {
        if (validateDueDate(subduedate)) {
            setCurrentDueDate(subduedate);
            handleModalCancel();
        } else {
            let l = moment(subduedate, 'YYYY-MM-DD HH-mm-ss');
            if (!l.isAfter(moment())) {
                Alert.alert('Date has already passed');
            } else {
                Alert.alert("Invalid date. Use 'YYYY-MM-DD HH-mm-ss' format.");
            }
        }
        clearDate();
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
                storeData(1);
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
                storeData(2);
                nextQuestionList.push({
                    type: 'multiple',
                    key: nextQuestionList.length + 1,
                    question: MCQ1,
                    answer: [MCA1, MCA2, MCA3, MCA4],
                });
                setQuestionList([...nextQuestionList]);
                handleModalCancel();
                break;
            case 3:
                storeData(3);
                nextQuestionList.push({
                    type: 'image',
                    key: nextQuestionList.length + 1,
                    question: ImageQ,
                    answer: ImageA,
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

    const renderQuestion = (record) => {
        switch (record.type) {
            case 'single':
                return scrollSR(record.question, record.answer);
            case 'multiple':
                return scrollMC(record.question, ...record.answer);
            case 'image':
                return scrollIMG(record.question, record.answer);
            default:
                break;
        }
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
                {tabs[0].modal}
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
                    <DateContentPane>
                        <DateSub>Due: {currentDueDate}</DateSub>
                    </DateContentPane>
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
                            backgroundColor="#fff"
                            right={[
                                {
                                    text: 'Delete',
                                    type: 'delete',
                                },
                                {
                                    text: '编辑',
                                    type: 'secondary',
                                },
                            ]}
                        >
                            <QuestionCard />
                        </Swipeout>
                    ))}
                </ScrollablePane>
            </BookletMainBar>
        </BookletContentPane>
    );
};

export default CreateNewBookletPage;
