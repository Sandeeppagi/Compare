import {combineReducers} from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer'

const blogReducer = () => {
    return [
        { name : 'My first blog', topic : 'science'},
        { name : 'Second blog', topic : 'history'}
    ]
};

export default combineReducers({
    blog: blogReducer,
    user: userReducer,
    post: postReducer
});
