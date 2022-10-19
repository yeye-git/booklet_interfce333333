import React from 'react';
import { Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import CommonBar from '../../common-file/NavigationBar';
import { ClassButtonText, ClassHeadText, ClassRow, ClassSubjects, ClassView, ClassViewHeading, ClassViewSearchBar, ClassViewTopPad, SubjectButtons, TitleView } from '../../components/styles';
var headtext = 'Subjects';
export const ClassFrame = ({ navigation }) => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];
    return(
        <ClassView>
            <ClassViewTopPad>

            </ClassViewTopPad>
            <ClassViewHeading>
                <TitleView>
                    <ClassHeadText>{headtext}</ClassHeadText>
                </TitleView>
            </ClassViewHeading>
            <ClassViewSearchBar>
                <Searchbar placeholder='Search'>

                </Searchbar>
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