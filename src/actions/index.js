import { INCREASE, DECREASE, STOP_COUNTER, FETCH_USER, CANCEL_FETCHING_USER, INCREASE_DONE, SHOW_LOADING_ICON, HIDE_LOADING_ICON, FETCH_USER_SUCCESS } from './type'

export const counterIncrease = () => ({ type: INCREASE })
export const counterDecrease = () => ({ type: DECREASE })
export const stopCounter = () => ({ type: STOP_COUNTER })
export const fetchUser = () => ({ type: FETCH_USER })
export const cancelRequest = () => ({ type: CANCEL_FETCHING_USER })

//export const doneIncrease = () => ({ type: INCREASE_DONE })
//export const showLoadingIcon = () => ({ type: SHOW_LOADING_ICON })
//export const hideLoadingIcon = () => ({ type: HIDE_LOADING_ICON })
//export const fetchUserSuccess = () => ({ type: FETCH_USER_SUCCESS })

//content actions