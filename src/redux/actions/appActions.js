export const appActions = {
    setIsLoading: "SET_IS_LOADING",
    setIsLoginOpen: "SET_IS_LOGIN_OPEN",
    setLoginMessage: "SET_LOGIN_MESSAGE"
}

export const setIsLoading = isLoading => ({
    type: appActions.setIsLoading,
    payload: isLoading
})

export const setLoginMessage = message => ({
    type: appActions.setLoginMessage,
    payload: message
})
