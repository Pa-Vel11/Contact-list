import { Tel } from "./Tel";
import { useState } from "react";
import "./PersonInfo.css";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];
  const [showFragment, setShowFragment] = useState(true);

  const handleDeleteFragment = () => {
    setShowFragment(false);
  };

  const buttonEl = (
    <>
      <button
        className="show-btn"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Schowaj" : "Pokaż"}
      </button>

      <button className="delete-btn" onClick={handleDeleteFragment}>
        Usuń kontakt
      </button>
    </>
  );
  return (
    <>
      {showFragment && (
        <li className={isExpanded ? "active" : ""}>
          <h2>{props.name}</h2>
          {buttonEl}
          {isExpanded && (
            <>
              <h3>
                Tel: <Tel tel={props.tel} />
              </h3>
              {props.city && <h3>Miasto: {props.city}</h3>}
            </>
          )}
        </li>
      )}
    </>
  );
};
