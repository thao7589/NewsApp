import * as TYPE from './types';

export const updateField = (key, input) => dispatch => {
    const action = {
        type: TYPE.UPDATE_FIELD,
        payload: { key: key, value: input }
    };
    dispatch(action);
};

export const submitLogin = () => dispatch => {
    const action = {
        type: TYPE.LOGIN
    };
    dispatch(action);
};

export const submitSignUp = () => dispatch => {
    const action = {
        type: TYPE.SIGNUP
    };
    dispatch(action);
};

export const deletePost = (id) => dispatch => {
    const action = {
        type: TYPE.DELETE_POST
    };
    dispatch(action);
};
