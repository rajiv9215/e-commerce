import { useEffect, useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Shimer2 from "./shimer2";





const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [fetched,setFetched] = useState(false);
  const {id} = useParams();
  
  useEffect(() => {
    fetchresData();
  }, []);

  const fetchresData = async () => {
    const data = await fetch('https://dummyjson.com/recipes/'+id)
    const json = await data.json();
    // console.log(json);
    setResMenu(json);
    setFetched(() => true);
    console.log(fetched);
  };
  if(!fetched){
  return <Shimer2/>
  }
  return(
    <ScrollToTop>
    <div className="di">
      <div className="salogan">
        <h2>🍇hey, lets make {resMenu?.name} with the love of tastyCook🫐</h2>
      </div>
      <div className="menures">
        <div className="menuHero-1">
          <img className="menuimage" src={resMenu?.image} alt="" />
          <h1 className="foodname">{resMenu?.name}</h1>
          <p>[{resMenu?.tags?.join(" , ")}]</p>
          <p>cuisine: {resMenu?.cuisine}</p>
          <p>Rating {resMenu?.rating} stars</p>
        </div>
        <div className="menuHero-2">
          <h1>Ingredients:</h1>
          {resMenu?.ingredients?.map((ingd, i) => (
            <h3 key={i} className="ingd">
              ▶︎{ " "+ingd}
            </h3>
          ))}
        </div>
      </div>
      <div className="instruction">
      <div className="faltu">
        <h2>⚡︎⚡︎Steps to make {resMenu?.name} : {resMenu?.mealType?.join(" , ")}</h2>
          <h2>▶︎ Difficulty Level:{resMenu?.difficulty}</h2>
         <h2>▶︎ Cooking Time : {resMenu?.cookTimeMinutes}minutes</h2>
        </div>
        <div className="steps">
            {resMenu?.instructions?.map((step, i) => (
              <h4 key={i}>
                {i + 1}: {step}
              </h4>
            ))}
          </div>
      </div>
      </div>
      </ScrollToTop>
  );
};
export default RestaurantMenu;
