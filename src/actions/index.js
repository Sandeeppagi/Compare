import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPosts =  () => {
    return async (dispatch) => {
        const res = await jsonPlaceHolder.get('/posts');
        dispatch({ type: 'FETCH_POST', payload: res.data});
    }
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const res = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        })
    }
};

export const fetchPostandUser = () => {
    return async(dispatch, getState) => {
        await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().post, 'userId'));
        userIds.forEach(id => dispatch(fetchUser(id)));
    }
};
