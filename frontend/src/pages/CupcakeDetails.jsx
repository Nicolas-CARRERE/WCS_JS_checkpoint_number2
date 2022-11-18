import cupcakeFetcher from "@services/cupcakeFetcher";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cupcake from "@components/Cupcake";

function CupcakeDetails() {
  const params = useParams();
  console.log("params id", params.id);

  const [cupcake, setCupcake] = useState([]);
  useEffect(() => {
    cupcakeFetcher.getCupcakeByID(`${params.id}`).then(function (response) {
      setCupcake(response);
    });
  }, []);

  return (
    <div className="cupcake-item">
      <Cupcake key={cupcake.id} cupcake={cupcake} />
    </div>
  );
}

export default CupcakeDetails;
