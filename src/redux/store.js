import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: "What up", likesCount: 3 },
                { id: 2, post: "It's my second fucking post", likesCount: 2 },
                { id: 3, post: "Well, it's coming", likesCount: 5 },
                { id: 4, post: "you didn't see it's coming", likesCount: 0 },
                { id: 5, post: "Cock", likesCount: 7 },
                { id: 6, post: "AssEater", likesCount: 5 },
            ],
            newPostText: 'what the fuck man?'
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: "Bitch" },
                { id: 2, name: "FUck" },
                { id: 3, name: "Fahuk" },
                { id: 4, name: "Cunt" },
                { id: 5, name: "Cock" },
                { id: 6, name: "AssEater" },
            ],
            messages: [
                { id: 1, message: "What the fuck, man?" },
                { id: 2, message: "I'll finish you off" },
                { id: 3, message: "Don't make me run" },
                { id: 4, message: "I want some coffee" },
                { id: 5, message: "Gimme a break" },
                { id: 6, message: "I hope you like the words 'pick up the cell'" },
            ],
            newMessageBody: 'go to the fucking gym'
        },
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this.state.profilePage = profileReducer(this._state.profilePage, action);
        this.state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.state.sideBar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};
export default store;
window.store = store;
