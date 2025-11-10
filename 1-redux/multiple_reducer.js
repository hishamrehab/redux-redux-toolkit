const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const ORDER_PIZZA = "ORDER_PIZZA"
const ORDER_BURGER = "ORDER_BURGER"



function orderPizza() {
    return {
    type : ORDER_PIZZA,
    
    }
}

const initialStateForPizza = {
    pizzaBase : 100,
}

const initialStateForBurger = {
    burgerBuns : 200
}

function orderBurger() {
    return  {
        type :ORDER_BURGER
    }
}


const reducerPizza = (state = initialStateForPizza , action) => {
  switch(action.type) {
    case ORDER_PIZZA: 
    return {
      ...state,
      pizzaBase: state.pizzaBase - 1
    }
    default:
      return state;
  }
}



const reducerBurger = (state = initialStateForBurger , action) => {
  switch(action.type) {
    case ORDER_BURGER: 
    return {
      ...state,
      burgerBuns: state.burgerBuns - 1
    }
    default:
      return state;
  }
}



// Combine Reducers
const rootReducer = combineReducers({
  reducerPizza,
  reducerBurger,
});
const store = createStore(rootReducer);


console.log("Initial State" , store.getState());

const unsubscripe = store.subscribe(() => console.log("Updated State" , store.getState()));

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
unsubscripe();
