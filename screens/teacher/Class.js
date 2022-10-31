import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { getClassListBySid, apiCreateClass, apiDeleteClass, apiBindClass } from '~/common-file/apis';
import { BookletModalWrap } from '~/components/BookletModalWrap';

export const ClassFrame = (props) => {
    const { sid = '', pid } = props.route?.params || {};

    const [classList, setClassList] = useState([]);
    const [editable, setEditable] = useState(false);
    const [addVisible, setAddVisible] = useState(false);
    const [className, setClassName] = useState('');

    const [selectedClass, setSelectClass] = useState({});

    useEffect(() => {
        handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getClassListBySid(sid);
        setClassList(result || []);
    };

    const handleModalConfirm = async () => {
        if (!className) {
            Alert.alert('Please enter your Class Name!');
            return;
        }

        const result = await apiCreateClass({
            sid,
            className,
        });
        console.log('🚀 ~ file: Class.js ~ line 34 ~ handleModalConfirm ~ result', result);

        if (result) {
            handleModalCancel();

            setTimeout(() => {
                handleSearchList();
            }, 200);
        }
    };

    const handleDeleteClass = async (item) => {
        const result = await apiDeleteClass(item.cid);

        if (result) {
            handleModalCancel();

            setTimeout(() => {
                handleSearchList();
            }, 200);
        }
    };

    const handleModalCancel = () => {
        setClassName('');
        setAddVisible(false);
        setEditable(!editable);
    };

    const handleBindPaper = async () => {
        if (!selectedClass.cid) {
            Alert.alert('Please select a class!');
            return;
        }
        const result = await apiBindClass({
            pid,
            cid: [selectedClass.cid],
        });

        if (result) {
            props.navigation.push('SendBooklet', { ...selectedClass });
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('~/assets/Title2.png')} />
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Class List</Text>
                </View>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('11');
                        setEditable(!editable);
                    }}
                >
                    <Image
                        style={styles.settingIcon}
                        source={editable ? require('~/assets/Settings-alt.png') : require('~/assets/Settings.png')}
                        onClick={() => {
                            console.log('111');
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {classList.map((o) => (
                    <View style={styles.item} key={o.cid}>
                        {editable && (
                            <TouchableOpacity
                                onPress={() => {
                                    handleDeleteClass(o);
                                }}
                            >
                                <View style={styles.minus}>
                                    <Text style={styles.minusText}>-</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity
                            onPress={() => {
                                if (pid) {
                                    setSelectClass(o);
                                } else {
                                    props.navigation.push('SendBooklet', { ...o });
                                }
                            }}
                        >
                            <View
                                style={{
                                    ...styles.class,
                                    backgroundColor: selectedClass.cid === o.cid ? '#5141B6' : '#ECE5FF',
                                }}
                            >
                                <Text style={styles.classText}>{o.className}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
                {editable ? (
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.add} onPress={() => setAddVisible(true)}>
                                <Text style={styles.minusText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ) : null}
            </View>

            <BookletModalWrap
                open={addVisible}
                animationType="slide"
                transparent={true}
                onOk={handleModalConfirm}
                onCancel={handleModalCancel}
            >
                <View styles={styles.wrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Please enter the class name'}
                        placeholderTextColor={'black'}
                        keyboardType={'default'}
                        value={className}
                        onChangeText={setClassName}
                    />
                </View>
            </BookletModalWrap>

            {pid ? (
                <TouchableOpacity style={styles.publishWrap} onPress={handleBindPaper}>
                    <View style={styles.publishBtn}>
                        <Text style={styles.btnText}>Publish</Text>
                    </View>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
        paddingTop: 73,
    },
    icon: {
        position: 'absolute',
        width: 130,
        height: 76,
        right: 0,
        top: 50,
    },
    title: {
        width: 150,
        height: 40,
        marginTop: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#90EBFF',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: 'bold',
    },
    setting: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 24,
        paddingBottom: 12,
        borderBottomColor: '#5141B6',
        borderBottomWidth: 3,
    },
    settingIcon: {
        width: 24,
        height: 24,
    },
    content: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 20,
        height: 70,
    },
    minus: {
        width: 26,
        height: 26,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    minusText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    class: {
        width: 100,
        height: 40,
        borderRadius: 14,
        backgroundColor: '#ECE5FF',
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    classText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    add: {
        width: 26,
        height: 26,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    publishWrap: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginHorizontal: 'auto',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    publishBtn: {
        padding: 10,
        backgroundColor: '#EAE1FA',
        borderRadius: 10,
    },
    btnText: {
        fontSize: 30,
    },
});
