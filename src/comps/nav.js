import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

function Nav(props) {
  let input = useRef(null);
  let history = useHistory();

  const getInput = () => {
    if (input.current.value === "") return alert("must enter value");
    history.push(`/country/${input.current.value}`);
  };

  return (
    <div className="nav container-fluid row justify-content-between align-items-center bg-dark">
      <input className="ml-3" ref={input} type="text" />
      <button className="btn btn-warning float-left" onClick={getInput}>
        Search
      </button>
      <Link className="text-white" to="/country/thailand">
        Thailand
      </Link>
      <Link className="text-white" to="/country/israel">
        Israel
      </Link>
      <Link className="text-white" to="/country/france">
        France
      </Link>
      <Link className="text-white" to="/country/United States of America">
        USA
      </Link>
    </div>
  );
}

export default Nav;
