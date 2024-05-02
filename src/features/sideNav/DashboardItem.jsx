import { useEffect, useState } from "react";
import classes from "./DashboardItem.module.scss";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function DashboardItem(props) {
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    !props.show && setMenuClicked(false);
  }, [props.show]);
  const onMenuClickHandler = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <div
      className={`${classes["dashboard-item"]} ${
        props.show ? classes.active : classes.hidden
      } ${menuClicked ? classes["button-clicked"] : ""}`}
    >
      {props.items.length === 1 &&
        props.items.map((item) => (
          <NavLink
            to={`/${item}`}
            className={classes["nav-link"]}
            key={Math.random()}
          >
            <div className={classes.container}>
              {props.icon}
              <p className={classes["button-text"]}>{props.type}</p>
            </div>
          </NavLink>
        ))}
      {props.items.length > 1 && (
        <>
          <button
            className={classes.button}
            onClick={onMenuClickHandler}
            disabled={!props.show}
          >
            <div className={classes.container}>
              {props.icon}
              <p className={classes["button-text"]}>{props.type}</p>
            </div>
            <FaAngleDown className={classes["dropDown-icon"]} />
          </button>
          <ul className={`${classes["sub-down-menu"]} ${classes["list"]}`}>
            {props.items.map((item) => (
              <li key={Math.random()}>{item}</li>
            ))}
          </ul>

          <ul
            className={`${classes["sub-side-menu"]} ${classes["list"]}
        }`}
          >
            {props.items.map((item) => (
              <li key={Math.random()}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DashboardItem;
