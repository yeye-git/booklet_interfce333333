import { Alert } from 'react-native';
import request from '~/utils/request';
import { baseUrl } from '../config/index';

export const login = async (data) => {
    const response = await request({
        url: '/api/login',
        method: 'POST',
        data,
    });

    if (response.token) {
        return response;
    } else {
        Alert.alert(response.errMessage || '');
        return false;
    }
};

export const register = async (data) => {
    const response = await request({
        url: '/api/register',
        method: 'POST',
        data,
    });

    if (response.message === 'register success') {
        Alert.alert(response.message || '');

        return true;
    } else {
        return false;
    }
};

export const updateUser = async (data) => {
    const response = await request({
        url: '/user/updateSelf',
        method: 'POST',
        data,
    });

    if (response.message === 'update success') {
        return true;
    } else {
        return false;
    }
};

export const uploadImage = async (data) => {
    const response = await request({
        url: '/api/upload',
        method: 'POST',
        data,
        isFormData: true,
    });
    console.log('🚀 ~ file: index.js ~ line 57 ~ uploadImage ~ response', response);

    if (response.path) {
        return response.path;
    } else {
        return false;
    }
};

/**
 * query question detail by id
 *
 * @export
 * @param {*} id
 */
export const queryQuestionDetail = async (id) => {
    const response = await request({
        url: `/user/paper?pid=${id}`,
        method: 'GET',
    });

    if (response.data) {
        return response.data;
    }
};

/**
 * create question
 * @param {*} id
 * @returns
 */
export const apiCreateTeachQuestion = async (data) => {
    const response = await request({
        url: '/teacher/v2/createPaper',
        method: 'POST',
        data,
    });
    console.log('🚀 ~ file: index.js ~ line 93 ~ apiCreateTeachQuestion ~ response', response);

    if (response.data) {
        return response.data;
    } else {
        return false;
    }
};

/**
 * save question
 * @param {*} id
 * @returns
 */
export const apiSaveAndPublishTeachQuestion = async (data) => {
    const response = await request({
        url: '/teacher/changeStatus',
        method: 'POST',
        data,
    });

    if (response.message === 'success') {
        return true;
    }
};

/**
 * delete question
 * @param {*} id
 * @returns
 */
export const apiDeleteAllQuestion = async (id) => {
    const response = await request({
        url: `/teacher/v2/deletePaper?pid=${id}`,
    });

    if (response.message === 'delete success') {
        return true;
    } else {
        Alert.alert(response.message);
    }
};

/**
 * get paper list
 * @param {*} name
 */
export const getPaperList = async (data) => {
    const response = await request({
        url: '/user/paperlist',
        method: 'POST',
        data,
    });
    if (response.data) {
        return response.data;
    }
};

/**
 * get subjects list
 * @param {*} name
 */
export const getSubjects = async (data) => {
    const response = await request({
        url: '/teacher/subjects',
        data,
    });
    if (response.data) {
        return response.data;
    }
};

/**
 * get class list by subject id
 * @param {*} name
 */
export const getClassListBySid = async (sid) => {
    const response = await request({
        url: `/teacher/classes?sid=${sid}`,
        method: 'GET',
    });
    if (response.data) {
        return response.data;
    }
};

export const apiCreateClass = async (data) => {
    const response = await request({
        url: `/teacher/createClass`,
        method: 'POST',
        data,
    });
    if (response.message === 'create success') {
        return true;
    }
};

export const apiDeleteClass = async (cid) => {
    const response = await request({
        url: `/teacher/deleteClass?cid=${cid}`,
        method: 'GET',
    });
    console.log('🚀 ~ file: index.js ~ line 197 ~ apiDeleteClass ~ response', response);
    if (response.message === 'delete success') {
        return true;
    }
};

export const getPaperListByClass = async (data) => {
    const response = await request({
        url: `/user/paperlist`,
        method: 'POST',
        data,
    });
    if (response.data) {
        return response.data;
    }
};

/**
 * bind Class for paper
 * @param {*} data
 * @returns
 */
export const apiBindClass = async (data) => {
    const response = await request({
        url: '/teacher/v2/bindClass',
        method: 'POST',
        data,
    });
    if (response.message === 'success') {
        return true;
    }
};

/**
 * getPaperListByCode
 * @param {*} data
 * @returns
 */
export const getPaperListByCode = async (data) => {
    const response = await request({
        url: '/user/paperlist',
        method: 'POST',
        data,
    });
    if (response.data) {
        return response.data;
    }
};

/**
 * getPaperListByCode
 * @param {*} data
 * @returns
 */
export const apiStudentAnswer = async (data) => {
    const response = await request({
        url: '/student/answer',
        method: 'POST',
        data,
    });
    if (response.message === 'success') {
        return true;
    }
};
