import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Event
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
