import { CREATE_POST, FETCH_POSTS, SHOW_LOADER , HIDE_LOADER, SHOW_ALERT, HIDE_ALERT} from "./types";

export function createPost(postItem){
    return {
        type: CREATE_POST,
        payload: postItem
    }
}

export function showLoader() {
    return {
        type : SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type : HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload:text
        })
        setTimeout( ()=> {
            dispatch(hideAlert())
        }, 3000)
    }
    
}
export function hideAlert() {
    return {
        type : HIDE_ALERT
    }
}

export function fetchPosts(){
    return async dispatch => {
        try{
            dispatch(showLoader())
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts? limit=5')
            const json = await response.json()
            setTimeout( () => {
            dispatch({type: FETCH_POSTS, payload: json})
            dispatch(hideLoader())
        }, 500)
        } catch (e){
             dispatch(showAlert('что-то пошло не так'))
             dispatch(hideLoader())
        }
    }
}