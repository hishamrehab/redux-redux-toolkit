const FETCH_REQUEST ="FETCH_REQUEST";
const FETCH_SUCCESS ="FETCH_SUCCESS";
const FETCH_ERROR ="FETCH_ERROR";
const redux = require("redux");
const applyMiddleware=redux.applyMiddleware;
const axios=require("axios");
const thunk = require("redux-thunk").thunk;
const createStore = redux.createStore;


// State
const initialState = {
    loading : false,
    products: [],
    error: false
}

// Actions

function fechRequest() {
    return {
        type: FETCH_REQUEST
    }
}



function fechSuccess(products) {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

function fechError() {
    return {
        type: FETCH_ERROR
    }
}


// Reducers
const reducer = (state=initialState,action) => {
    switch(action.type) {
        case FETCH_REQUEST: 
        return {
            ...state,
            loading: true
        }
    case FETCH_SUCCESS: 
    return {
        ...state,
        loading: false,
        products: action.payload,
    }
    case FETCH_ERROR : 
    return {
        ...state,
        loading: false,
        error: true
    }
    default: 
    return state;
    } 
}
// Thunk Action craroe
const fetchProducts = () => {
    return function(dispatch) {
     dispatch(fechRequest());
        axios.get("https://fakestoreapi.com/products")
     .then((res) => {
    //   res.data
    const products = res.data.map((product) => product.title);
        dispatch(fechRequest(products))
    console.log(products);
     }).catch((error) =>fechError())
     }
}


// Create Store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() =>console.log(store.getState()));
store.dispatch(fetchProducts())
