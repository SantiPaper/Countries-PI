import axios from "axios"
export const GET_COUNTRIES = "GET_COUNTRIES"
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES"
export const ORDER_COUNTRIES = "ORDER_COUNTRIES"
export const ORDER_POPULATION = "ORDER_POPULATION"
export const FILTERED_CONTINENT = "FILTERED_CONTINENT"
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES"
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"



/* export function getCountries() {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/countries")
            .then((e) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: e.data
                })
            }).then((error) => {
                console.log(error);
            })

    }
}
 */
export const getCountries = () => {
    return async (dispatch) => {
        try {
            const marto = await axios.get("http://localhost:3001/api/countries")
            dispatch({
                type: GET_COUNTRIES,
                payload: marto.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

/* export function searchCountries(e) {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/countries?name=" + e)
            .then(e => {
                dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: e.data
                })
            }).then(error => {
                console.log(error);
            })
    }
} */

export const searchCountries = (e) => {
    return async (dispatch) => {
        try {
            const marto = await axios.get("http://localhost:3001/api/countries?name=" + e)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: marto.data
            })
        } catch (error) {
            alert("Pais no encontrado")
        }
    }
}

export const orderCountries = (payload) => {
    return {
        type: ORDER_COUNTRIES,
        payload
    }
}
export const orderPopulation = (payload) => {
    return {
        type: ORDER_POPULATION,
        payload
    }
}

export const filteredContinent = (payload) => {
    return {
        type: FILTERED_CONTINENT,
        payload,
    };
};

/* export const  getCountryById = (e)  => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/countries/${e}`)
            .then((e) => {
                dispatch({
                    type: GET_COUNTRY_BY_ID,
                    payload: e.data,
                });
            })
            .catch((error) => {
                console.log(error)

                return dispatch({ type: GET_COUNTRIES, payload: [] })
            })
    };
} */

export const getCountryById = (e) => {
    return async (dispatch) => {
        try {
            const country = await axios.get(`http://localhost:3001/api/countries/${e}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: country.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

/* export const getActivities = () => async (dispatch) => {
    try {
        const acts = await axios
            .get(`http://localhost:3001/api/activity/`);
        dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: acts.data,
        });
    } catch (error) {
        console.log(error);
    }
}; */

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const seba = await axios.get(`http://localhost:3001/api/activity/`)
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: seba.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

/* export const postActivity = (payload) => {
    return async (dispatch) => {
        let postAct = await axios.post(`http://localhost:3001/api/activity`, payload)
        return dispatch({
            type: CREATE_ACTIVITY,
            payload: postAct
        })
    }
} */

export const postActivity = (payload) => {
    return (dispatch) => {
        axios.post(`http://localhost:3001/api/activity`, payload)
            .then(e => {
                dispatch({
                    type: CREATE_ACTIVITY,
                    payload: e.data
                })
            })

    }
}

export const filterActivity = (payload) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}


export const clearDetail = () => (dispatch) => {
    dispatch({
        type: CLEAR_DETAIL
    })
}

