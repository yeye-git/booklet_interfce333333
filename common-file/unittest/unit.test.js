import CreatNewBookletPage, { noofques } from '../../screens/teacher/CreateNewBookletPage';
import {questions} from '../../screens/teacher/CreateNewBookletPage';
import {sum} from './sum';
import React from 'react'
import renderer from 'react-test-renderer';
import App from '../../App'
import { GrowTextAnswer } from '../../components/growtext';
describe('sum', () => {   
    test('should sum 2 nums', () => {
        expect(sum(1,2)).toBe(3);
    });
});

describe('Ensure no of questions is empty', () => {   
    test('questions array should be fuller', () => {
        
        expect(noofques).toBe(0);
    });
});
describe('Ensure no of questions array is empty', () => {   
    test('questions array should be fuller', () => {
        
        expect(questions).toStrictEqual([]);
    });
});


