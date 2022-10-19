import React from 'react';
import { SafeAreaView,Alert,Button } from 'react-native';
import { StyledContainer, InnerContainer, PageTitle, SubTitle } from '../../components/styles';

const TeacherHome = ({navigation}) => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageTitle> Home Page</PageTitle>
                <SubTitle>Teacher Name: </SubTitle>
                <Button title="Bookshelf" onPress={() => navigation.navigate("BookletT")}/>
                <Button title="Class" onPress={() => Alert.alert("Class")}/>
            </InnerContainer>
        </StyledContainer>

                
        


    );
}
export default TeacherHome;