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
var headtext = 'Subjects';
export const ClassFrame = ({ navigation }) => {
    useEffect(() => {
        handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getSubjects();
        console.log('🚀 ~ file: Class.js ~ line 26 ~ handleSearchList ~ result', result);
    };
    return (
        <ClassView>
            <ClassViewTopPad></ClassViewTopPad>
            <ClassViewHeading>
                <TitleView>
                    <ClassHeadText>{headtext}</ClassHeadText>
                </TitleView>
            </ClassViewHeading>
            <ClassViewSearchBar>
                <Searchbar placeholder="Search"></Searchbar>
            </ClassViewSearchBar>
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
        </ClassView>
    );
};
