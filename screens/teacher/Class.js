import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { getSubjects } from '~/common-file/apis';

export const ClassFrame = ({ navigation }) => {
    const [editable, setEditable] = useState(false);
    useEffect(() => {
        // handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getSubjects();
        console.log('🚀 ~ file: Class.js ~ line 26 ~ handleSearchList ~ result', result);
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
                {[1, 2, 3].map((o) => (
                    <View style={styles.item} key={o}>
                        {editable && (
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('11');
                                    setEditable(!editable);
                                }}
                            >
                                <View style={styles.minus}>
                                    <Text style={styles.minusText}>-</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        <View style={styles.class}>
                            <Text style={styles.classText}>7D</Text>
                        </View>
                    </View>
                ))}
                {editable ? (
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={styles.add}>
                                <Text style={styles.minusText}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : null}
            </View>
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
});
