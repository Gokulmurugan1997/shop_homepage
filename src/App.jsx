
import React,{useState} from "react";
import Navbar from "./Component/navbar";
import Card from "./Component/Card";

function App() {
let[cart,setcart]=useState(0);
let product = [
  {
    name:"mobile",
    price:50
  },
  {
    name:"TV",
    price:55
  },
  {
    name:"Washing Machine",
    price:70
  },
  {
    name:"Fridge",
    price:65
  },
  {
    name:"Fan",
    price:10
  },
]

  return <>
  <Navbar cart={cart} setcart={setcart}/>
 <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    product.map((e,i)=>{
                      return <Card cart={cart} setcart={setcart} product={e} key={i}/>
                    })
                  }
                  
                </div>
            </div>
  </section>

    </>
  
}

export default App
