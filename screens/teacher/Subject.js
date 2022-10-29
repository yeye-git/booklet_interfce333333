import React, { useEffect } from 'react';
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
    useEffect(() => {
        handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getSubjects();
        console.log('🚀 ~ file: Class.js ~ line 26 ~ handleSearchList ~ result', result);
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

            <ClassSubjects>
                <ClassRow>
                    <SubjectButtons>
                        <ClassButtonText>Geography</ClassButtonText>
                    </SubjectButtons>
                    <SubjectButtons>
                        <ClassButtonText>History</ClassButtonText>
                    </SubjectButtons>
                </ClassRow>
                <ClassRow>
                    <SubjectButtons>
                        <ClassButtonText>English</ClassButtonText>
                    </SubjectButtons>
                    <SubjectButtons>
                        <ClassButtonText>Maths</ClassButtonText>
                    </SubjectButtons>
                </ClassRow>
                <ClassRow>
                    <SubjectButtons>
                        <ClassButtonText>SOSE</ClassButtonText>
                    </SubjectButtons>
                    <SubjectButtons>
                        <ClassButtonText>PE</ClassButtonText>
                    </SubjectButtons>
                </ClassRow>
                <ClassRow>
                    <SubjectButtons>
                        <ClassButtonText>Music</ClassButtonText>
                    </SubjectButtons>
                    <SubjectButtons>
                        <ClassButtonText>Drama</ClassButtonText>
                    </SubjectButtons>
                </ClassRow>
                <ClassRow>
                    <SubjectButtons>
                        <ClassButtonText>Science</ClassButtonText>
                    </SubjectButtons>
                    <SubjectButtons>
                        <ClassButtonText>Technology</ClassButtonText>
                    </SubjectButtons>
                </ClassRow>
            </ClassSubjects>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(180deg, rgba(153, 232, 236, 0.9) 28.65%, rgba(255, 255, 255, 0.9) 100%)',
    },
    searchWrap: {},
    search: {
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
