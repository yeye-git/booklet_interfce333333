import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const BookletModalWrap = ({ open, children, onOk, onCancel, ...props }) => {
    return (
        <Modal visible={open} {...props} style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.main}>
                    <View style={styles.content}>{children}</View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btn} onPress={onOk}>
                            <Text style={styles.btnText}>Ok</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={onCancel}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        width: '95%',
        backgroundColor: '#ADD8E6',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOpacity: '0.25',
        shadowRadius: 4,
        elevation: 5,
    },
    content: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#f6cefc',
        padding: 20,
    },
    footer: {
        width: '100%',
        height: 100,
        backgroundColor: '#DCBDCB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#ECE5FF',
        padding: 5,
        borderRadius: 10,
        width: '30%',
        height: '90%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
