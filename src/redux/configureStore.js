import { createStore } from 'redux';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

//initial state
export const state = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

//function that return new state
export const setState = (state = state, action) => {
    return state;
};


export default () => createStore( setState, state )
