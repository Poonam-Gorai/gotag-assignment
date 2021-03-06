import React from "react";
import "../../pages/employees/employees.css";

function BreadCrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <>
      <div className="Breadcrums">
        {props.crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "" ;
          return (
            <span key={ci}>
              <button
                className={`btnbread ${disabled}`}
                onClick={() => props.selected(crumb)}
              >
                {crumb}&nbsp;
              </button>
            </span>
          );
        })}
      </div>
    </>
  );
}
export default BreadCrumb;
