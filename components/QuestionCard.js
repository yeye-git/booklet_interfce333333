import { View, Text, StyleSheet } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export const QuestionCard = ({ children }) => {
    return (
        <View style={styles.card}>
            <View style={styles.head}>
                <Text style={styles.label}>Question:</Text>
                <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
                    Which of the fWhich of the following is not a rock?
                </Text>
            </View>
            <AutoGrowingTextInput style={styles.textArea} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 'auto',
        padding: 20,
        fontSize: 12,
        borderRadius: 10,
        backgroundColor: '#CBBBF7',
    },
    head: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
    },
    label: {
        fontWeight: 'bold',
        flex: '0 0 200',
    },
    title: {
        width: '80%',
    },
    textArea: {
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'purple',
        backgroundColor: 'white',
        minHeight: 160,
        width: '100%',
        alignItems: 'center',
    },
});
