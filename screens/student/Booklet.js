import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import {
    BookletContentPane,
    BookletHomeBar,
    BookletMainBar,
    BookletPaddingBar,
    QuestionContentPane,
    ScrollablePane,
    SBIcon,
    BookletHomeIconCont,
    BookletHeadingTextInput,
    BookletHomeIconContBTN,
    StudentBookletHeading,
} from '../../components/styles';
import Utils from '../../utils/utils';
import { questions } from '../teacher/CreateNewBookletPage';
var duedate = null;
const DemoBooklet = (props) => {
    React.useEffect(() => {
        const questionInfo = Utils.currentQuestion;
        console.log('useEffect --Utils.currentQuestion:', Utils.currentQuestion);
        if (!questionInfo) {
            return;
        }
        onChangeHeading(questionInfo.title || '');
        console.log('----detail', Utils.questionId);
    }, []);

    return (
        <BookletContentPane>
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

                <StudentBookletHeading>Sample Text</StudentBookletHeading>
            </BookletHomeBar>
            <BookletMainBar>
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

export default DemoBooklet;
