import request from '../../utils/request';
import { baseUrl } from '../config/index';

export const login = async (data) => {
    const response = await request({
        url: `/api/login`,
        method: 'POST',
        data,
    });

    if (response.code === 200) {
        return response.data;
    }
};

/**
 * 根据id获取问题详情
 *
 * @export
 * @param {*} id
 */
export const queryQuestionDetail = async (id) => {
    const response = await request({
        url: `${baseUrl}/teach/questionAnswer/${id}`,
    });

    if (response.code === 200) {
        return response.data;
    }
};

/**
 * 保存问题
 * @param {*} id
 * @returns
 */
export const apiSaveTeachQuestion = async (data) => {
    const response = await request({
        url: `${baseUrl}/teach/questionAnswer`,
        method: 'POST',
        data,
    });

    if (response.code === 200) {
        return true;
    }
};

/**
 * 编辑问题
 * @param {*} id
 * @returns
 */
export const apiUpdateTeachQuestion = async ({ id, ...data }) => {
    const response = await request({
        url: `${baseUrl}/teach/questionAnswer/${id}`,
        method: 'PUT',
        data,
    });

    if (response.code === 200) {
        return true;
    } else {
        Alert.alert(response.message);
    }
};

/**
 * 删除整个问题列表
 * @param {*} id
 * @returns
 */
export const apiDeleteAllQuestion = async ({ id, ...data }) => {
    const response = await request({
        url: `${baseUrl}/teach/questionAnswer/${id}`,
        method: 'DELETE',
        data,
    });

    if (response.code === 200) {
        return true;
    } else {
        Alert.alert(response.message);
    }
};
