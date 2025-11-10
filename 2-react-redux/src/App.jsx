import "./App.css"
import PizzaBox from "./components/PizzaBox.jsx"
import { Provider } from "react-redux"
import store from "./components/redux/store.js"

function App() {
  return (
    <Provider  store={store}>
      <PizzaBox />
    </Provider>
  )
}

export default App
