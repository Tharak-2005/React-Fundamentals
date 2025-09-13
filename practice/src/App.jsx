import ProductCard from "./components/ProductCard.jsx"
import Profile from "./Profile1.jsx"
import Greeting from "./Greeting.jsx"
import Id from "./Id.jsx"
import "./Product.css"
function App() {
  
  return (
    <div className="box" >
      {/* <ProductCard productName="Banana" price={30} isAvailable={true}/>
      <ProductCard productName="Banana" price={30} isAvailable={false} /> */}
      <Id course="B.Tech" rollnumber="23VV1A0563" />
      
    </div>
  )
}

export default App;
