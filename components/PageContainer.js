import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PageContainer = ({ children }) => {
    return <View>{children}</View>;
};

export default PageContainer;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
});
