import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";

export default function Dropdown({
  options,
  prompt,
  value,
  onChange,
  id
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  //to close the dropdown on clicking outside
  function close(e) {
    setOpen(e && e.target === ref.current);
  }
  //filter
  function filter(options) {
    return options?.filter(
      (option) => option.manager_name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }


  function displayValue() {
      if(query.length >0) return query;
      if(value) return value.manager_name;
      return "";
  }
  return (
    <>
      <div className="dropdown">
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">
            <input
              type="text"
              className="inputfield"
              ref={ref}
              placeholder={value ? value.manager_name : prompt}
              value={displayValue()}
              onChange={e => {
                  setQuery(e.target.value)
                  onChange(null)
              }}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={`drop ${open ? "open" : null}`} />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {filter(options)?.map((option) => (
            <div
              key={option.id}
              className={`option ${value === option ? "selected" : null}`}
              onClick={() => {
                  setQuery("");
                onChange(option);
                setOpen(false);
              }}
            >
             <div> {option.manager_name}</div>
             <div>+</div> 
            </div>
          ))}
          <div className="option"></div>
        </div>
      </div>
    </>
  );
}
