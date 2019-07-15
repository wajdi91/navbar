import React from "react";

function Nav(props) {
  return (
    <div className="menu">
      <ul>
        {props.arr.map((el, i) => (
          <li className="menuItem" key={i}>
            <a href="/">{el.menu}</a>
            {el.sm && (
              <ul className="subMenuBlock">
                {el.sm.map((elm, i) => (
                  <li key={i} className="subMenuItem">
                    {elm}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
