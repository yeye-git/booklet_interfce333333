import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { getPaperListByClass } from '~/common-file/apis';

const StudentAnswerPage = (props) => {
    const { cid } = props.route?.params || {};
    const [questionList, setQuestionList] = useState([]);
    const [answerList, setAnswerList] = useState([]);

    useEffect(() => {
        handleSearchList();
    }, []);

    const handleSearchList = async () => {
        const result = await getPaperListByClass({
            cid,
        });
        console.log('🚀 ~ file: SendBooklet.js ~ line 20 ~ handleSearchList ~ result', result);
        setQuestionList(result || []);
    };

    return (
        <View>
            <Text>1</Text>
        </View>
    );
};

export default StudentAnswerPage;
