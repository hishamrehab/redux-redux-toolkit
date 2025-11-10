import "./App.css"
// import PizzaBox from "./components/PizzaBox.jsx"
import { Provider } from "react-redux"
import store from "./components/redux/store.js"
import HooksContainer from "./components/HooksContainer.jsx"

function App() {
  return (
    <Provider  store={store}>
      {/* <PizzaBox /> */}
   <HooksContainer />
    </Provider>
  )
}

export default App
