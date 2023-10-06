import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

export const NavBar = function ({ user, setUser }) {
  const handleLogOut = function () {
    userService.logOut();

    setUser(null);
  };
  return (
    <div>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
      </nav>
    </div>
  );
};