import { createSelector } from 'reselect';
const getUsersFromState = (state) => {
	return state.usersPage.users;
}
export const getUsers = createSelector(getUsersFromState, (users) => {
		return users.filter(u => u);
});

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
}
export const getTotalCount = (state) => {
	return state.usersPage.totalCount;
}
export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
}
export const getLoading = (state) => {
	return state.usersPage.Loading;
}
export const getFollowLoading = (state) => {
	return state.usersPage.FollowLoading;
}
export const getName = (state) => {
	return state.auth.name;
}
export const getMail = (state) => {
	return state.auth.mail;
}
export const getIsAuth = (state) => {
	return state.auth.isAuth;
}
export const getId = (state) => {
	return state.auth.id;
}
export const getFollows = (state) => {
	return state.auth.follows;
}