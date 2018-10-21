/* eslint indent: off */
import * as types from '../actions/actions';

const INITIAL_STATE = {
    teams: [],
    groups: [],
    group: {},
    rounds: [],
    match: {},
    comments: [],
};

export default function (state = INITIAL_STATE, action) {
    const newState = { ...state };

    switch (action.type) {
        case types.SET_TEAMS:
            newState.teams = action.data;
            break;

        case types.SET_GROUPS:
            newState.groups = action.data;
            break;

        case types.SET_GROUP:
            newState.group = action.data;
            break;

        case types.SET_ROUNDS:
            newState.rounds = action.data;
            break;

        case types.SET_MATCH:
            newState.match = action.data;
            break;

        case types.SET_NEW_COMMENT:
            newState.comments.push(action.data);
            break;
    }

    return newState;
}
