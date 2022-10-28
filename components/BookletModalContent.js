import { View, Text, StyleSheet } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export const SingleQuestion = ({ value = {}, onChange }) => {
    const { question, answer } = value;
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Short Response</Text>
            <Text style={styles.headText}>Question:</Text>
            <AutoGrowingTextInput
                style={styles.input}
                placeholder={'Enter Your Question'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={question}
                onChange={(t) => onChange({ ...value, question: t })}
            />
            <Text style={styles.headText}>Answer:</Text>
            <AutoGrowingTextInput
                // editable={false}
                style={styles.input}
                placeholder={'Enter Your Answer'}
                placeholderTextColor={'black'}
                keyboardType={'default'}
                value={answer}
                onChange={(t) => onChange({ ...value, answer: t })}
            />
        </View>
    );
};

export const MultiSelectQuestion = ({ options = [] }) => {
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
                value={question}
                onChange={(t) => onChange({ ...value, question: t })}
            />
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
});
