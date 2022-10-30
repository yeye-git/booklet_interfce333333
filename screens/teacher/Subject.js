import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import CommonBar from '../../common-file/NavigationBar';
import {
    ClassButtonText,
    ClassHeadText,
    ClassRow,
    ClassSubjects,
    ClassView,
    ClassViewHeading,
    ClassViewSearchBar,
    ClassViewTopPad,
    SubjectButtons,
    TitleView,
} from '../../components/styles';
import { getSubjects } from '~/common-file/apis';
export default SubjectPage = ({ navigation }) => {
    const [subjectList, setSubjectList] = useState([]);
    useEffect(() => {
        handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getSubjects();

        setSubjectList(result);
    };

    return (
        <View style={styles.container}>
            <ClassViewTopPad></ClassViewTopPad>
            <ClassViewHeading>
                <TitleView>
                    <ClassHeadText>Subjects</ClassHeadText>
                </TitleView>
            </ClassViewHeading>
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>

            <View style={styles.content}>
                {(subjectList || []).map((o) => (
                    <View key={o.sid} style={styles.item}>
                        <SubjectButtons onPress={() => navigation.push('Class', { sid: o.sid })}>
                            <ClassButtonText>{o.name}</ClassButtonText>
                        </SubjectButtons>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 30,
    },
});
