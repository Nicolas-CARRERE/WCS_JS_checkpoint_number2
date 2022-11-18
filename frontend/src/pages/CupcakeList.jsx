import Cupcake from "@components/Cupcake";
import cupcakeFetcher from "@services/cupcakeFetcher";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakesList, setCupcakesList] = useState([]);
  useEffect(() => {
    cupcakeFetcher.getCupcakes().then((response) => {
      const cupcakes = response;
      setCupcakesList(cupcakes);
    });
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    cupcakeFetcher.getAccessories().then((response) => {
      const cupcakes = response;
      setAccessories(cupcakes);
    });
  }, []);

  // Step 5: function filter
  const [cupCakesSelected, setCupcakesSelected] = useState("");
  const [cupCakesSelectedInArray, setCupcakesSelectedInArray] =
    useState(cupcakesList);

  const handleSelect = (e) => setCupcakesSelected(e.target.value);

  useEffect(() => {
    const cupcakes = cupcakesList.filter((x) =>
      cupCakesSelected ? x.accessory_id === cupCakesSelected : x
    );
    setCupcakesSelectedInArray(cupcakes);
  }, [cupCakesSelected]);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleSelect}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupCakesSelected
          ? cupCakesSelectedInArray.map((cupcake) => (
              <Link key={cupcake.id} to={`/cupcakes/${cupcake.id}`}>
                <li className="cupcake-item">
                  <Cupcake cupcake={cupcake} />
                </li>
              </Link>
            ))
          : cupcakesList.map((cupcake) => (
              <Link key={cupcake.id} to={`/cupcakes/${cupcake.id}`}>
                <li className="cupcake-item">
                  <Cupcake cupcake={cupcake} />
                </li>
              </Link>
            ))}
        {/* end of block */}
      </ul>
    </>
  );
}
