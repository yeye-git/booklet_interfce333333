import { View, Text, StyleSheet } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const renderContent = (data) => {
    switch (data.type) {
        case 'single':
            return <Text>{data.answer}</Text>;
        case 'multiple':
            return (
                <View>
                    {(data.answer || []).map((o) => (
                        <View style={styles.row}>
                            <View style={{ ...styles.circle, backgroundColor: o.checked ? '#5141B6' : '#fff' }} />
                            <Text style={styles.textInput}>{o.label}</Text>
                        </View>
                    ))}
                </View>
            );
    }
};

export const QuestionCard = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.head}>
                <Text style={styles.label}>Question:</Text>
                <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
                    {data?.question || ''}
                </Text>
            </View>
            <View style={styles.textArea}>
                <Text>{renderContent(data)}</Text>
            </View>
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
        marginBottom: 20,
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
    circle: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'white',
    },
    textInput: {
        padding: 10,
        margin: 5,
        height: 40,
        width: '100%',
    },
});
