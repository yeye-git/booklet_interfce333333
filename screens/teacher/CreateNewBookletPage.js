import * as React from 'react';
import { useState } from 'react';
import { View, Alert, Text, Keyboard, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
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
    BookletModal,
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
import { publishBooklet, saveBooklet } from './Bookshelf';
import moment from 'moment';
import { clearDate, subduedate } from '../../components/growtext';
import Utils from '../../utils/utils';
import baseUrl from '../../common-file/config';
var itemno = 0;
export var noofques = 0;
var listkey = 0;
export var questions = [];
var selected = -1;
var questiontype = [];
var heading = '';
var duedate = null;
var duedateset = false;
const CreatNewBookletPage = (props) => {


    const [Heading, onChangeHeading] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive((current) => !current);
    };
    const [questionAnswer, setQuestionAnswer] = useState({});
    const [description, setDescription] = useState('');

    React.useEffect(() => {
        const questionInfo = Utils.currentQuestion;
        console.log('useEffect --Utils.currentQuestion:', Utils.currentQuestion);
        if (!questionInfo) {
            return;
        }
        onChangeHeading(questionInfo.title || '');
        console.log('----detail', Utils.questionId);
    }, []);

    const handleItem1 = (options) => {
        console.log('options:', options);
        setQuestionAnswer(options);
    };
    const handlePublishValue = (val) => {
        setDescription(val);
    };

    const notify = () => {
        DeviceEventEmitter.emit('update');
    };

    function setContent(itemno) {
        if (itemno == 1) {
            return <SRModal onChange={handleItem1} />;
        } else if (itemno == 2) {
            return MCModal();
        } else if (itemno == 3) {
            return IMGModal();
        } else if (itemno == 4) {
            return DueDateModal();
        } else if (itemno == 5) {
            return DeleteModal();
        } else if (itemno == 6) {
            return SaveModal();
        } else if (itemno == 7) {
            return <PublishModal onChange={handlePublishValue} />;
        }
    }

    function setQuestion(itemno) {
        if (itemno == 1) {
            addQuestion();
        } else if (itemno == 2) {
            addQuestion();
        } else if (itemno == 3) {
            addQuestion();
        } else if (itemno == 4) {
            addDueDate();
        } else if (itemno == 5) {
            handleDeleteQuestion();
            deleteQuestion();
            setModalOpen(false);
            itemno = 0;
        } else if (itemno == 6) {
            saveQuestion();
            saveBooklet(heading);
            setModalOpen(false);
            itemno = 0;
        } else if (itemno == 7) {
            handleUpdateQuestion();
            publishBooklet(heading);
            heading = '';
            setModalOpen(false);
            itemno = 0;
        } else {
        }
    }

    function scrollViewQuestion() {
        if (itemno == 1) {
            questiontype = scrollSR(SRQ, SRA);
            setModalOpen(false);
            itemno = 0;
        } else if (itemno == 2) {
            questiontype = scrollMC(MCQ1, MCA1, MCA2, MCA3, MCA4, MCOption1);
            setModalOpen(false);
            itemno = 0;
        } else if (itemno == 3) {
            questiontype = scrollIMG(ImageQ, ImageA);
            setModalOpen(false);
            itemno = 0;
        } else if (itemno == 4) {
            setModalOpen(false);
            itemno = 0;
        }
    }

    const saveQuestion = async () => {
        let data = {
            params: {
                user_id: Utils.userId,
            },
            ...questionAnswer,
            title: heading,
        };
        console.log('---call api', data);
        let url = `${baseUrl}/teach/questionAnswer`;
        let method = 'POST';
        const { id, questions, answer } = Utils.currentQuestion || {};
        if (id) {
            url = `${baseUrl}/teach/questionAnswer/${id}`;
            method = 'PUT';

            data.questions = questions;
            data.answer = answer;
        }

        let response = await fetch(url, {
            method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        });
        console.log('method:', method, url, data);

        let responseJson = await response.json();

        if (responseJson[0].code === 200) {
            Alert.alert('Successful');
            const { data: id } = responseJson[0];
            Utils.questionId = id;
            console.log('question id', Utils.questionId);

            notify();
        } else {
            Alert.alert(responseJson[0].message);
        }
    };

    const handleUpdateQuestion = async () => {
        if (!Utils.questionId) {
            return;
        }
        const data = { params: { user_id: Utils.userId }, id: Utils.questionId, description };
        console.log('----update question', data);

        let response = await fetch(`${baseUrl}/teach/questionAnswer`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        });

        let responseJson = await response.json();

        if (responseJson[0].code === 200) {
            Alert.alert('Successful');
            const { data: id } = responseJson[0];
            Utils.questionId = id;
            console.log('question id', Utils.questionId);
            notify();
        } else {
            Alert.alert(responseJson[0].message);
        }
    };
    const handleDeleteQuestion = async () => {
        const id = Utils.questionId || Utils.currentQuestion.id;
        if (!id) {
            return;
        }
        const data = { params: { user_id: Utils.userId } };
        console.log('----delete question', data);

        let response = await fetch(`${baseUrl}/teach/questionAnswer/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        });

        let responseJson = await response.json();

        if (responseJson[0].code === 200) {
            Utils.questionId = null;
            Utils.currentQuestion = null;

            notify();
            setDescription('    ')
            setDescription('')

            Alert.alert('Successful');
        } else {
            Alert.alert(responseJson[0].message);
        }
    };

    function addQuestion() {
        noofques = noofques + 1;
        storeData(itemno);
        scrollViewQuestion();
        questions.push(
            <QuestionContentPane
                style={{ backgroundColor: isActive ? '#a88df2' : '#CBBBF7' }}
                key={listkey}
                activeOpacity={0.5}
                onLongPress={() => {
                    selected = listkey;
                    handleClick;
                }}
            >
                {questiontype}
            </QuestionContentPane>,
        );
        listkey = listkey + 1;
        questiontype = [];
        clearData();

        // ---
        console.log('----add question----', questionAnswer);

        // saveQuestion();
    }
    const allPossibleFormats = ['YYYY-MM-DD HH-mm-ss'];
    function dateValid() {
        if (moment(subduedate, allPossibleFormats, true).isValid()) {
            let k = moment(subduedate, 'YYYY-MM-DD HH-mm-ss');
            if (k.isAfter(moment())) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }
    function addDueDate() {
        if (dateValid()) {
            storeData(itemno);
            scrollViewQuestion();
            let m = moment(subduedate, 'YYYY-MM-DD HH-mm-ss');
            let formdate = m.format('lll');
            duedate = (
                <DateContentPane>
                    <DateSub>Due: {formdate}</DateSub>
                </DateContentPane>
            );
        } else {
            let l = moment(subduedate, 'YYYY-MM-DD HH-mm-ss');
            if (!l.isAfter(moment())) {
                Alert.alert('Date has already passed');
            } else {
                Alert.alert("Invalid date. Use 'YYYY-MM-DD HH-mm-ss' format.");
            }
        }
        clearDate();
        duedateset = true;
    }
    function setHeading(headtext) {
        if ((heading = !'')) {
            heading = headtext;
        }
    }
    function isDateSet() {
        if (duedateset == false) {
            setModalOpen(true);
            itemno = 4;
        } else {
            Alert.alert('Due Date already set');
        }
    }

    function deleteQuestion() {
        questions.pop();
        noofques = noofques - 1;
    }
    function homeScreen() {
        console.log('test');
    }

    return (
        <BookletContentPane>
            <BookletModal visible={modalOpen} animationType="slide" transparent={true}>
                <CenterModalView>
                    <ModalStyle>
                        <ContentModalButtonCont>{setContent(itemno)}</ContentModalButtonCont>
                        <ModalButtonCont>
                            <ModalButtons
                                onPress={() => {
                                    setQuestion(itemno);
                                }}
                            >
                                <ModalButtonText>Ok</ModalButtonText>
                            </ModalButtons>
                            <ModalButtons
                                onPress={() => {
                                    setModalOpen(false);
                                    itemno = 0;
                                }}
                            >
                                <ModalButtonText>Cancel</ModalButtonText>
                            </ModalButtons>
                        </ModalButtonCont>
                    </ModalStyle>
                </CenterModalView>
            </BookletModal>
            <BookletPaddingBar></BookletPaddingBar>
            <BookletHomeBar>
                <BookletHomeIconCont>
                    <BookletHomeIconContBTN
                        onPress={() => {
                            homeScreen;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/General/Home.png')}
                        />
                    </BookletHomeIconContBTN>
                </BookletHomeIconCont>

                <BookletHeadingTextInput
                    onChangeText={(text) => {
                        onChangeHeading(text);
                        setHeading(text);
                    }}
                    value={Heading}
                    placeholder="Enter Booklet Heading"
                    keyboardType="default"
                />
            </BookletHomeBar>
            <BookletMainBar>
                <BookletIconBar>
                    <SBButtonCont
                        onPress={() => {
                            setModalOpen(true);
                            itemno = 1;
                        }}
                    >
                        <SBIcon resizeMode="cover" source={require('./../../assets/icons/text.png')} />
                    </SBButtonCont>
                    <SBButtonCont
                        onPress={() => {
                            setModalOpen(true);
                            itemno = 2;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/Interface/Layout.png')}
                        />
                    </SBButtonCont>
                    <SBButtonCont
                        onPress={() => {
                            setModalOpen(true);
                            itemno = 3;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/Devices/Camera.png')}
                        />
                    </SBButtonCont>
                    <SBButtonCont
                        onPress={() => {
                            isDateSet(duedateset);
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/Interface/History.png')}
                        />
                    </SBButtonCont>
                    <SBButtonCont
                        onPress={() => {
                            setModalOpen(true);
                            itemno = 5;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/Interface/Trash.png')}
                        />
                    </SBButtonCont>
                    <SBButtonCont
                        onPress={() => {
                            setModalOpen(true);
                            itemno = 6;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/Interface/Save.png')}
                        />
                    </SBButtonCont>
                    <SBButtonCont
                        onPress={() => {
                            setModalOpen(true);
                            itemno = 7;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/Files/Upload.png')}
                        />
                    </SBButtonCont>
                </BookletIconBar>
                <ScrollablePane>
                    {duedate}
                    {!Utils.currentQuestion && questions.map((arr, listkey) => <View key={listkey}>{arr}</View>)}
                    {Utils.currentQuestion && Utils.currentQuestion.id && (
                        <QuestionContentPane
                            style={{ backgroundColor: isActive ? '#a88df2' : '#CBBBF7' }}
                            activeOpacity={0.5}
                        >
                            <View>{scrollSR(Utils.currentQuestion.questions, Utils.currentQuestion.answer)}</View>
                        </QuestionContentPane>
                    )}
                </ScrollablePane>
            </BookletMainBar>
        </BookletContentPane>
    );
};

export default  CreatNewBookletPage;
