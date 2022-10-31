import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dialog } from '@rneui/themed';

import { Searchbar } from 'react-native-paper';
import { getPaperListByClass } from '~/common-file/apis';
import {
    BookshelfBorder,
    BookshelfContPane,
    BookshelfIcon,
    BookshelfImage,
    BSButtonSubText,
    BSIconCont,
    BSRecentBar,
    BSTitleBarCont,
    CompletedBooklets,
    CompletedBookletsScroll,
    HorizontalCont,
    PlusImage,
    SearchBarBSCont,
} from '../../components/styles';

const SendBookletPage = (props) => {
    const params = props.route?.params || {};

    const [bookletList, setBookletList] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getPaperListByClass({
            cid: params.cid,
        });
        console.log('🚀 ~ file: SendBooklet.js ~ line 20 ~ handleSearchList ~ result', result);
        setBookletList(result || []);
    };
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('~/assets/Title2.png')} />
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{params.className} - Booklet</Text>
                </View>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.push('HomeName');
                    }}
                >
                    <Image style={styles.settingIcon} source={require('~/assets/icon.png')} />
                </TouchableOpacity>
            </View>
            <CompletedBookletsScroll>
                <HorizontalCont>
                    {/* {isinFocus} */}
                    {(bookletList || []).map((item, index) => {
                        return (
                            <BSIconCont key={item.pid}>
                                <BookshelfIcon
                                    onPress={() => {
                                        setVisible(true);
                                    }}
                                >
                                    <BookshelfImage source={require('~/assets/books.png')} />
                                </BookshelfIcon>
                                <BSButtonSubText>{item.papername}</BSButtonSubText>
                            </BSIconCont>
                        );
                    })}
                </HorizontalCont>
            </CompletedBookletsScroll>

            <Dialog isVisible={visible} onBackdropPress={() => setVisible(false)}>
                <View>
                    <Text style={styles.codeText}>Class Join Code:</Text>
                    <Text style={styles.codeText}>CJC#{params.code}</Text>
                </View>
            </Dialog>
        </View>
    );
};

export default SendBookletPage;

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
    codeText: {
        color: '#6354BD',
        fontSize: 24,
        textAlign: 'center',
    },
});
