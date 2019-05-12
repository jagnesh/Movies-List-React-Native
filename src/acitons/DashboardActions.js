import { HTTPRequest, log } from "../helpers";
import ApiConstants from "../globals/ApiConstants";
import { COMMON_ERROR, PROCESS_START, REQUEST_SUCCESS, REQUEST_FAIL } from "../globals/Strings";

// Get list data from API
export const getListData = () => {
    return (dispatch) => {
        dispatch({ type: PROCESS_START })
        HTTPRequest(
            ApiConstants.SERVER_URL,
            'GET'
        ).then((response) => {
            log(`Response : ${JSON.stringify(response)}`)
            dispatch({ type: REQUEST_SUCCESS, payload: response })
        }).catch((e) => {
            dispatch({ type: REQUEST_FAIL, payload: COMMON_ERROR })
            log(`Error: ${e}`)
        })
    }

}
