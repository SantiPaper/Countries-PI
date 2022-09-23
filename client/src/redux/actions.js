import axios from "axios"
import { Link } from "react-router-dom"
import Loading from "../components/Loading/loading"
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






export const getCountries = () => {
    return async (dispatch) => {
        try {
            const marto = await axios.get("/api/countries")
            dispatch({
                type: GET_COUNTRIES,
                payload: marto.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}



export const searchCountries = (e) => {
    return async (dispatch) => {
        try {
            const marto = await axios.get("/api/countries?name=" + e)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: marto.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

/* export const searchCountries = (e) => {
    return async (dispatch) => {
        try {
            const marto = await axios.get("http://localhost:3001/api/countries?name=" + e)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: marto.data
            })
        } catch (error) {
            console.log(error);
        }
    }
} */



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



export const getCountryById = (e) => {
    return async (dispatch) => {
        try {
            const country = await axios.get(`/api/countries/${e}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: country.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}



export const getActivities = () => {
    return async (dispatch) => {
        try {
            const seba = await axios.get(`/api/activity/`)
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: seba.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}



export const postActivity = (payload) => {
    return (dispatch) => {
        axios.post(`/api/activity`, payload)
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



