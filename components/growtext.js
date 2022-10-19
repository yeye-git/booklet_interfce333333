import * as React from 'react';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { MCQButtons } from './styles';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export var Q1 = '';
export var A1 = '';
export var D1 = '';
export var BD1 = '';
export var MCQuestion = '';
export var MC1 = '';
export var MC2 = '';
export var MC3 = '';
export var MC4 = '';
export var ImgQ = '';
export var ImgA = '';
export var subduedate = '';
export var qcolor = [false, false, false, false];

export function clearColor() {
    qcolor = [false, false, false, false];
}

export const GrowTextQuestion = (props) => {
    const [Question, onChangeQuestion] = useState(null);
    const { onChange, value } = props;
    React.useEffect(() => {
        onChangeQuestion(value);
    }, [value]);
    return (
        <AutoGrowingTextInput
            placeholder={'Enter Your Question'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeQuestion(text);
                Q1 = text;
                console.log('change', text, onChange);
                if (onChange) {
                    onChange(text);
                }
            }}
            value={Question}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextAnswer = (props) => {
    const [Answer, onChangeAnswer] = useState(null);
    const { onChange, value } = props;
    React.useEffect(() => {
        onChangeAnswer(value);
    }, [value]);
    return (
        <AutoGrowingTextInput
            placeholder={'Enter Your Answer'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeAnswer(text);
                A1 = text;
                if (onChange) {
                    onChange(text);
                }
            }}
            value={Answer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextDisplay = () => {
    const [DisAnswer, onChangeDisAnswer] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeDisAnswer(text);
            }}
            value={DisAnswer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextMcQuestion = () => {
    const [McQuestion, onChangeMcQuestion] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Enter Your Question'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeMcQuestion(text);
                MCQuestion = text;
            }}
            value={McQuestion}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextMC1 = () => {
    const [Answer, onChangeAnswer] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Answer A'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeAnswer(text);
                MC1 = text;
            }}
            value={Answer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextMC2 = () => {
    const [Answer, onChangeAnswer] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Answer B'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeAnswer(text);
                MC2 = text;
            }}
            value={Answer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextMC3 = () => {
    const [Answer, onChangeAnswer] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Answer C'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeAnswer(text);
                MC3 = text;
            }}
            value={Answer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextMC4 = () => {
    const [Answer, onChangeAnswer] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Answer D'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeAnswer(text);
                MC4 = text;
            }}
            value={Answer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};
export function setColors(qnum, selection) {
    if (selection == false) {
        // green
        qcolor[qnum] = true;
    } else {
        // trans
        qcolor[qnum] = false;
    }

    console.log(qcolor);
}

export const OptionMC1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <View style={styles.optionView}>
            <TouchableOpacity
                onPress={() => {
                    setSelected(!selected);
                    setColors(0, selected);
                }}
                style={{ backgroundColor: selected ? 'green' : 'transparent' }}
            >
                <MCQButtons />
            </TouchableOpacity>
        </View>
    );
};
export const OptionMC2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <View style={styles.optionView}>
            <TouchableOpacity
                onPress={() => {
                    setSelected(!selected);
                    setColors(1, selected);
                }}
                style={{ backgroundColor: selected ? 'green' : 'transparent' }}
            >
                <MCQButtons />
            </TouchableOpacity>
        </View>
    );
};
export const OptionMC3 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <View style={styles.optionView}>
            <TouchableOpacity
                onPress={() => {
                    setSelected(!selected);
                    setColors(2, selected);
                }}
                style={{ backgroundColor: selected ? 'green' : 'transparent' }}
            >
                <MCQButtons />
            </TouchableOpacity>
        </View>
    );
};
export const OptionMC4 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <View style={styles.optionView}>
            <TouchableOpacity
                onPress={() => {
                    setSelected(!selected);
                    setColors(3, selected);
                }}
                style={{ backgroundColor: selected ? 'green' : 'transparent' }}
            >
                <MCQButtons />
            </TouchableOpacity>
        </View>
    );
};

export const GrowTextImageQuestion = () => {
    const [ImageQuestion, onChangeImageQuestion] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Enter Your Question'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeImageQuestion(text);
                ImgQ = text;
            }}
            value={ImageQuestion}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextImageAnswer = () => {
    const [ImageAnswer, onChangeImageAnswer] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Enter Your Answer'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeImageAnswer(text);
                ImgA = text;
            }}
            value={ImageAnswer}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

export const GrowTextDescription = () => {
    const [Description, onChangeDescription] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'Enter your image description'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeDescription(text);
                D1 = text;
            }}
            value={Description}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};
export const GrowTextDate = () => {
    const [Date, onChangeDate] = useState(null);
    return (
        <AutoGrowingTextInput
            placeholder={'YYYY-MM-DD HH-mm-ss'}
            onChangeText={(text) => {
                onChangeDate(text);
                subduedate = text;
            }}
            value={Date}
            style={styles.textInput}
            keyboardType={'numeric'}
        ></AutoGrowingTextInput>
    );
};
export const GrowTextBookletDescription = (props) => {
    const [BDescription, onChangeBookDescription] = useState(null);
    const { onChange } = props;
    return (
        <AutoGrowingTextInput
            placeholder={'Enter your booklet description'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
                onChangeBookDescription(text);
                BD1 = text;
                if (onChange) {
                    onChange(text);
                }
            }}
            value={BDescription}
            style={styles.textInput}
            keyboardType={'default'}
        ></AutoGrowingTextInput>
    );
};

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        margin: 5,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: 'purple',
        backgroundColor: 'white',
        minHeight: 60,
        maxHeight: 60,
        width: '100%',
        alignItems: 'center',
    },
    optionView: {
        width: '30%',
        alignItems: 'center',
        marginTop: '6%',
        margin: 1,
    },
});
export function clearDate() {
    subduedate = '';
}
