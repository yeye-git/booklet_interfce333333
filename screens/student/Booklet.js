import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import {
    BookletContentPane,
    BookletHomeBar,
    BookletMainBar,
    BookletPaddingBar,
    BookshelfIcon,
    BookshelfImage,
    BSButtonSubText,
    BSIconCont,
    QuestionContentPane,
    ScrollablePane,
    SBIcon,
    BookletHomeIconCont,
    BookletHeadingTextInput,
    BookletHomeIconContBTN,
    StudentBookletHeading,
    CompletedBookletsScroll,
    HorizontalCont,
} from '../../components/styles';

import Utils from '../../utils/utils';
import { getPaperListByCode } from '~/common-file/apis/index';

const DemoBooklet = (props) => {
    const { code } = props.route?.params || {};
    const [data, setData] = useState([]);

    React.useEffect(() => {
        getQuestion();
    }, []);

    const getQuestion = async () => {
        const result = await getPaperListByCode({ code });
        setData(result);
        console.log('🚀 ~ file: Booklet.js ~ line 29 ~ getQuestion ~ result', result);
    };

    const handleToCreatePage = () => {};
    return (
        <BookletContentPane>
            <BookletPaddingBar></BookletPaddingBar>
            <BookletHomeBar>
                <BookletHomeIconCont>
                    <BookletHomeIconContBTN
                        onPress={() => {
                            // homeScreen;
                        }}
                    >
                        <SBIcon
                            resizeMode="cover"
                            source={require('./../../assets/icons/48px/Outline/General/Home.png')}
                        />
                    </BookletHomeIconContBTN>
                </BookletHomeIconCont>

                <StudentBookletHeading>Sample Text</StudentBookletHeading>
            </BookletHomeBar>
            <CompletedBookletsScroll>
                <HorizontalCont>
                    {/* {isinFocus} */}
                    {(data || []).map((item, index) => {
                        return (
                            <BSIconCont key={item.pid}>
                                <BookshelfIcon
                                    onPress={() => {
                                        handleToCreatePage(item);
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
        </BookletContentPane>
    );
};

export default DemoBooklet;
