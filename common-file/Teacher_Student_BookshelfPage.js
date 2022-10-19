import { View, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import { BookshelfS, BookshelfT } from '../screens/teacher/Bookshelf';
// import BookshelfT from '../screens/teacher/Bookshelf';
const DismissKeyboard = ({children}) =>(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
const Teacher_Student_BookshelfPage = (props) => {
    return (
        <DismissKeyboard>
            <View>
                {props.roleVariable === 'roleStudent' ? (
                    <BookshelfS navigation={props.navigation} />
                ) : (
                    <BookshelfT navigation={props.navigation} />
                )}
            </View>
        </DismissKeyboard>
    );
};

export default Teacher_Student_BookshelfPage;
