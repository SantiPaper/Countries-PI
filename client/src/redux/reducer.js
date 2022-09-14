import { GET_COUNTRIES } from "./actions"
import { SEARCH_COUNTRIES } from "./actions"
import { ORDER_COUNTRIES } from "./actions"
import { ORDER_POPULATION } from "./actions"
import { FILTERED_CONTINENT } from "./actions"
import { GET_COUNTRY_BY_ID } from "./actions"
import { CREATE_ACTIVITY } from "./actions"
import { GET_ALL_ACTIVITIES } from "./actions"
import { FILTER_BY_ACTIVITY } from "./actions"



const initialState = {
    countries: [],
    countriesDetail: [],
    activities: [],
    activitiesCreate: [],

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesDetail: action.payload,

            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case ORDER_COUNTRIES:
            let countriesOrder = [...state.countries]
            countriesOrder = countriesOrder.sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === "low" ? -1 : 1;
                }
                if (a.name > b.name) {
                    return action.payload === "top" ? -1 : 1;
                }
                return 0
            })
            return {
                ...state,
                countries: countriesOrder,
            }
        case ORDER_POPULATION:
            let populationOrder = [...state.countries]
            let orderSort = populationOrder.sort((a, b) => {
                if (a.population < b.population) {
                    return action.payload === "low" ? -1 : 1;
                }
                if (a.population > b.population) {
                    return action.payload === "top" ? -1 : 1;
                }
                return 0
            })
            return {
                ...state,
                countries: orderSort,
            }
        case FILTERED_CONTINENT:
            const allCountries = state.countriesDetail;
            const continentFiltered =
                action.payload === "All"
                    ? allCountries
                    : allCountries.filter((el) => el.continent === action.payload);
            return {
                ...state,
                countries: continentFiltered,
            };
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countriesDetail: action.payload,
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                activitiesCreate: action.payload,
            };

        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                activitiesCreate: action.payload,
            };



        case FILTER_BY_ACTIVITY:
            const countriesAct = state.countriesDetail;
            let activityFiltered = (action.payload === 'none' ?
                countriesAct :
                countriesAct.filter((e) => e.activities && e.activities.map((e) => e.name).includes(action.payload)))
            return {
                ...state,
                countries: activityFiltered
            }
        default: return state
    }
}