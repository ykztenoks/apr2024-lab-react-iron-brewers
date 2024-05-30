import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import axios from "axios";
const arrBeers = [
  "https://westernstageprops.com/cdn/shop/products/UB02-2.jpg?v=1695682844",
  "https://product-catalogue.alpla.com/sites/default/files/styles/product/public/2021-01/r1561-staropramen.jpg?itok=yLiMFX3g",
  "https://5.imimg.com/data5/SELLER/Default/2022/11/UG/YF/IJ/119533279/untitled-design-8--500x500.png",
  "https://www.ororabeverage.com/sites/default/files/2023-11/ag-118-r07-330ml-flint.png",
];
function RandomBeersPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [randomBeer, setRandomBeer] = useState(beersJSON[0]);

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();

  // TASKS:
  // 1. Set up an effect hook to make a request for a random beer from the Beers API.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );

        setRandomBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomBeer();
  }, []);

  // The logic and the structure for the page showing the random beer. You can leave this as it is.
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={arrBeers[Math.floor(Math.random() * arrBeers.length)]}
            alt="beer"
            height="300px"
            width="auto"
          />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
