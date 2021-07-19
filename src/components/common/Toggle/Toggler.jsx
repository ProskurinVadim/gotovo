import React from "react";

const Toggle = ({toggleValue=[],initialValue,setToggleValue}) => {
  return (
      <ul className="toggle">
          {
              toggleValue.map(elem =>
                  <li className={`toggle-item ${elem.isActive ? "active" : ""}`}
                      onClick={()=>setToggleValue(elem._id)}>
                      {elem.name}
                  </li>
              )
          }
      </ul>
  )
};

export default Toggle