const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default: return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT_MESSAGE, newMessageBody: text };
}
export default dialogsReducer;