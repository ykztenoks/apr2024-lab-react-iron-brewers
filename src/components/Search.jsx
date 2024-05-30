import axios from "axios";
import { useEffect, useState } from "react";

function Search({ setBeers, backup }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setBeers(
      e.target.value
        ? backup.filter((beer) =>
            beer.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : backup
    );
  };

  // useEffect(() => {
  //   const fetchBeer = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ih-beers-api2.herokuapp.com/beers/search?q=" + search
  //       );

  //       setBeers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchBeer();
  // }, [search]);

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          // onChange={(e) => setSearch(e.target.value)}
          onChange={handleSearch}
          type="text"
          // value={search}
          className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;
