import Restrauntcard from "./RestrauntCard"
import Herosection from "./herosection"
import { useState } from "react"
import { useEffect } from "react"
import Shimmer from "./Shimer"
import { Link } from "react-router-dom"
import RestaurantMenu from "./RestaurantMenu"

function filterData(searchText, allrest){
  const filterdata = allrest.filter((res) => res?.name?.toLowerCase().includes(searchText.toLowerCase()));
  return filterdata === 0 ?<h1>no match found</h1>:filterdata;
}


const Body = () => {
  const[searchText,setsearchText] = useState("");
  const [restraunt,setrestraunt] = useState([]);
  const [allrest, setallrest] = useState([])
  const [isLoded,setisLoded] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    

    const json = await data.json();
    // console.log(json);

    // Optional Chaining
    setrestraunt(
      json?.recipes
    );
    
    setisLoded(true);
    setallrest(
      json?.recipes
    );
    
  };

   return (
        <>
        <Herosection/>
        <div className="search-container">
          <input 
          type="text" 
          className="search-input" 
          placeholder="Search here" 
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value)
          }}
          onKeyDown={(e) => {
             if(e.key === "Enter"){
              const filterdata = filterData(searchText,allrest);
            setrestraunt(filterdata);
             }
          }}
           />
          <button 
          className="search-btn" 
          onClick={() => {
            const filterdata = filterData(searchText,allrest);
            setrestraunt(filterdata);
          }}> Search</button>
           </div>
         {!isLoded ? <Shimmer/> :
        <div className="body">
          {restraunt?.length === 0 ? <h1>no match found!</h1> :
          restraunt?.map((res,i) =>
           <Link key={i} className="link" to={"/recipes/"+res?.id}><Restrauntcard  restraunt={res}/></Link>
           )}
        </div>
        }
        </>
    )
}

export default Body;