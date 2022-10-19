import React, { useState } from 'react';
import {
    ModalHeadingText,
    ModalImageBox,
    ModalSuperHeadingText,
    ModalTextInput,
    ModalTextInputBTM,
    ShortResponseModal,
    BookletButtonsContainer,
    BookletButtonTextCont,
    MCQButtons,
    MCQButtonText,
} from './styles';
import SelectImage, { getMyImage } from './imageselection';
import {
    TouchableHighlight,
    Alert,
    Pressable,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Q1,
    A1,
    D1,
    MCQuestion,
    MC1,
    MC2,
    MC3,
    MC4,
    ImgQ,
    ImgA,
    OptionMC1,
    OptionMC2,
    OptionMC3,
    OptionMC4,
    GrowTextAnswer,
    GrowTextDate,
    GrowTextDescription,
    GrowTextQuestion,
    GrowTextMcQuestion,
    GrowTextMC1,
    GrowTextMC2,
    GrowTextMC3,
    GrowTextMC4,
    GrowTextImageQuestion,
    GrowTextImageAnswer,
    clearColor,
    GrowTextBookletDescription,
} from './growtext';
export var SRQ = '';
export var SRA = '';
export var MCQ1 = '';
export var MCA1 = '';
export var MCA2 = '';
export var MCA3 = '';
export var MCA4 = '';
export var ImageQ = '';
export var ImageA = '';

export const SRModal = (props) => {
    const { onChange } = props;
    const [info, setInfo] = useState({ question: '', answer: '' });

    const handleChange = (field, value) => {
        const tmp = { ...info };
        tmp[field] = value;
        console.log('-----', field, value);
        setInfo(tmp);
        onChange(tmp);
    };
 
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Short Response</ModalSuperHeadingText>
            <ModalHeadingText>Question:</ModalHeadingText>
            <GrowTextQuestion onChange={(value) => handleChange('question', value)} />
            <ModalHeadingText>Answer:</ModalHeadingText>
            <GrowTextAnswer onChange={(value) => handleChange('answer', value)} />
        </ShortResponseModal>
    );
};

export const MCModal = () => {
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Multiple Choice</ModalSuperHeadingText>
            <ModalHeadingText>Question:</ModalHeadingText>
            <GrowTextMcQuestion />
            <BookletButtonsContainer>
                <BookletButtonTextCont>
                    <OptionMC1 />
                    <GrowTextMC1 />
                </BookletButtonTextCont>

                <BookletButtonTextCont>
                    <OptionMC2 />
                    <GrowTextMC2 />
                </BookletButtonTextCont>

                <BookletButtonTextCont>
                    <OptionMC3 />
                    <GrowTextMC3 />
                </BookletButtonTextCont>

                <BookletButtonTextCont>
                    <OptionMC4 />
                    <GrowTextMC4 />
                </BookletButtonTextCont>
            </BookletButtonsContainer>
        </ShortResponseModal>
    );
};

export const IMGModal = () => {
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Image</ModalSuperHeadingText>
            <SelectImage />
            <GrowTextImageQuestion />
            <GrowTextImageAnswer />
        </ShortResponseModal>
    );
};

export const DueDateModal = () => {
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Set Due Date</ModalSuperHeadingText>
            <ModalHeadingText>Enter Due Date and Time:</ModalHeadingText>
            <GrowTextDate />
        </ShortResponseModal>
    );
};
export const DeleteModal = () => {
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Delete</ModalSuperHeadingText>
            <ModalHeadingText>Do you want to delete this question?</ModalHeadingText>
        </ShortResponseModal>
    );
};
export const SaveModal = () => {
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Save</ModalSuperHeadingText>
            <ModalHeadingText>Would you like to save your booklet?</ModalHeadingText>
        </ShortResponseModal>
    );
};
export const PublishModal = ({ onChange }) => {
    return (
        <ShortResponseModal>
            <ModalSuperHeadingText>Publish Modal</ModalSuperHeadingText>
            <ModalHeadingText>Do you want to publish the booklet?</ModalHeadingText>
            <GrowTextBookletDescription onChange={onChange} />
        </ShortResponseModal>
    );
};

export function storeData(itemno) {
    if (itemno == 1) {
        // Short Response
        SRQ = Q1;
        SRA = A1;
    } else if (itemno == 2) {
        // Multiple Choice
        MCQ1 = MCQuestion;
        MCA1 = MC1;
        MCA2 = MC2;
        MCA3 = MC3;
        MCA4 = MC4;
    } else if (itemno == 3) {
        // Image Question
        ImageQ = ImgQ;
        ImageA = ImgA;
    }
}

export function clearData() {
    SRQ = null;
    SRA = null;
    MCQ1 = null;
    MCA1 = null;
    MCA2 = null;
    MCA3 = null;
    MCA4 = null;
    ImageQ = null;
    ImageA = null;
    clearColor();
}
