import { createSelector } from 'reselect';
import { userInfo } from 'os';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);


