import { SET_NOTIFICATION_ELEM } from "../Constants"

export const setNotificationMenuElem = (event) => {
    return {
        type: SET_NOTIFICATION_ELEM,
        payload:event.currentTarget
    }
}