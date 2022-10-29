import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import UploadImage from './UploadImage';

export const SingleQuestion = ({ value = {}, onChange }) => {
    const { question, answer } = value;
    const [qsValue, setQsValue] = useState({ ...value });

    const handleInputChange = (key, v) => {
        const tmp = {
            ...qsValue,
            [key]: v,
        };
        setQsValue(tmp);
        onChange(tmp);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Short Response</Text>
            <Text style={styles.headText}>Question:</Text>
            <AutoGrowingTextInput
                style={styles.input}
                placeholder={'Enter Your Question'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={qsValue.question}
                onChangeText={(t) => handleInputChange('question', t)}
            />
            <Text style={styles.headText}>Answer:</Text>
            <AutoGrowingTextInput
                // editable={false}
                style={styles.input}
                placeholder={'Enter Your Answer'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={qsValue.answer}
                onChangeText={(t) => handleInputChange('answer', t)}
            />
        </View>
    );
};

export const MultiSelectQuestion = ({ question = '', options = [], onChange, onOptionChange }) => {
    const [value, setValue] = useState(question);
    const [localOptions, setLocalOptions] = useState(options);

    const handleQuestionChange = (v) => {
        setValue(v);
        onChange(v);
    };

    const handleOptionChange = (i, v, key) => {
        const tmp = [...localOptions];
        tmp[i][key] = v;

        setLocalOptions(tmp);
        onOptionChange(tmp);
    };
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Multiple Choice</Text>
            <Text style={styles.headText}>Question:</Text>
            <AutoGrowingTextInput
                // editable={false}
                style={styles.input}
                placeholder={'Enter Your Answer'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={value}
                onChangeText={handleQuestionChange}
            />
            {localOptions.map((o, i) => (
                <View key={i} style={styles.row}>
                    <TouchableOpacity onPress={() => handleOptionChange(i, !o.checked, 'checked')}>
                        <View style={{ ...styles.circle, backgroundColor: o.checked ? '#5141B6' : '#fff' }} />
                    </TouchableOpacity>

                    <AutoGrowingTextInput
                        placeholder={'Answer A'}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            handleOptionChange(i, text, 'label');
                        }}
                        value={o.label}
                        style={styles.textInput}
                        keyboardType={'default'}
                    />
                </View>
            ))}
        </View>
    );
};

export const ImageQuestion = ({ value = {}, onChange }) => {
    const { question, answer } = value;
    const [qsValue, setQsValue] = useState({ ...value });

    const handleInputChange = (key, v) => {
        const tmp = {
            ...qsValue,
            [key]: v,
        };
        setQsValue(tmp);
        onChange(tmp);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Image</Text>
            <UploadImage />
            <AutoGrowingTextInput
                style={styles.input}
                placeholder={'Enter Your Question'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={qsValue.question}
                onChangeText={(t) => handleInputChange('question', t)}
            />
            <AutoGrowingTextInput
                // editable={false}
                style={styles.input}
                placeholder={'Enter Your Answer'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={qsValue.answer}
                onChangeText={(t) => handleInputChange('answer', t)}
            />
        </View>
    );
};

export const DeleteContent = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Delete</Text>
            <Text style={styles.headText}>Do you want to delete this booklet?</Text>
        </View>
    );
};

export const SaveContent = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Save</Text>
            <Text style={styles.headText}>Would you like to save your booklet?</Text>
        </View>
    );
};

export const PublishContent = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Publish</Text>
            <Text style={styles.headText}>Do you want to publish the booklet?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
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
    row: {
        width: '70%',
        // margin: '0px auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
    },
    check: {
        flex: 3,
        marginTop: 20,
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: '1px solid purple',
    },
    textInput: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'purple',
        backgroundColor: 'white',
        height: 40,
        width: '100%',
        marginLeft: 20,
    },
});
