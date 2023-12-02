import React from "react";
import ListFavs from "../Components/ListFavs";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  return (
    <>
      {/* <div className="card-grid"> */}
      <ListFavs/>
    </>
  );
};

export default Favs;
