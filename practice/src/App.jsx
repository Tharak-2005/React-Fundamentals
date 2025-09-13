import ProductCard from "./components/ProductCard.jsx"
import Profile from "./Profile1.jsx"
import Greeting from "./Greeting.jsx"
function App() {
  const myName="Tharaka Ram"
  return (
    <div>
      <ProductCard />
      <Profile />
      <Greeting receivedName={myName} age={22} />
    </div>
  )
}

export default App
