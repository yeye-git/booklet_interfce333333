import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import {
    ModalHeadingText,
    ModalQuestionBodyText,
    ModalAnswerBodyText,
    ModalMCQAnswerBodyText,
    ModalSuperHeadingText,
    BookletButtonsContainer,
    BookletButtonTextCont,
    MCQButtonsScroll,
    MCQRadioButton,
    MCQButtons,
    ScrollImage,
} from './styles';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { OptionMC1, OptionMC2, OptionMC3, GrowTextAnswer, GrowTextQuestion, OptionMC4, qcolor } from './growtext';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SRQ, SRA, ImageQ, ImageA } from './modals';
import { chosenimage } from './imageselection';
import { Image } from 'react-native';
import Utils from '../utils/utils';
export const scrollSR = (questions = '', answer = '') => {
    console.log('question:', questions);
    console.log('answer:', answer);
    const handleChange = (field, value) => {
        Utils.currentQuestion[field] = value;
        console.log('Utils.currentQuestion', Utils.currentQuestion);
    };
    return (
        <View>
            <ModalQuestionBodyText>Question:</ModalQuestionBodyText>
            {questions ? (
                <GrowTextQuestion value={questions} onChange={(val) => handleChange('questions', val)} />
            ) : (
                <ModalAnswerBodyText>{SRQ}</ModalAnswerBodyText>
            )}

            <ModalQuestionBodyText>Answer:</ModalQuestionBodyText>
            {answer ? (
                <GrowTextAnswer value={answer} onChange={(val) => handleChange('answer', val)} />
            ) : (
                <ModalAnswerBodyText>{SRA}</ModalAnswerBodyText>
            )}
        </View>
    );
};

function green() {
    return (
        <MCQRadioButton>
            <TouchableWithoutFeedback style={{ backgroundColor: 'green' }}>
                <MCQButtons />
            </TouchableWithoutFeedback>
        </MCQRadioButton>
    );
}
function trans() {
    return (
        <MCQRadioButton>
            <TouchableWithoutFeedback style={{ backgroundColor: 'transparent' }}>
                <MCQButtons />
            </TouchableWithoutFeedback>
        </MCQRadioButton>
    );
}

function radioButtonColorSet(quesnum) {
    if (qcolor[quesnum] == true) {
        return green();
    } else {
        return trans();
    }
}
export const scrollMC = (MCQ1, MCA1, MCA2, MCA3, MCA4, MCOption1, MCOption2, MCOption3, MCOption4) => {
    return (
        <View>
            <ModalQuestionBodyText>Question:</ModalQuestionBodyText>
            <ModalAnswerBodyText>{MCQ1}</ModalAnswerBodyText>

            <BookletButtonsContainer>
                <BookletButtonTextCont>
                    {radioButtonColorSet(0)}
                    <ModalAnswerBodyText>A - {MCA1}</ModalAnswerBodyText>
                </BookletButtonTextCont>

                <BookletButtonTextCont>
                    {radioButtonColorSet(1)}
                    <ModalAnswerBodyText>B - {MCA2}</ModalAnswerBodyText>
                </BookletButtonTextCont>

                <BookletButtonTextCont>
                    {radioButtonColorSet(2)}
                    <ModalAnswerBodyText>C - {MCA3}</ModalAnswerBodyText>
                </BookletButtonTextCont>

                <BookletButtonTextCont>
                    {radioButtonColorSet(3)}
                    <ModalAnswerBodyText>D - {MCA4}</ModalAnswerBodyText>
                </BookletButtonTextCont>
            </BookletButtonsContainer>
        </View>
    );
};
export const scrollIMG = (ImageQ, ImageA) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <ScrollImage source={{ uri: chosenimage }}></ScrollImage>
            <ModalQuestionBodyText>Question:</ModalQuestionBodyText>
            <ModalAnswerBodyText>{ImageQ}</ModalAnswerBodyText>
            <ModalQuestionBodyText>Answer:</ModalQuestionBodyText>
            <ModalAnswerBodyText>{ImageA}</ModalAnswerBodyText>
        </View>
    );
};
