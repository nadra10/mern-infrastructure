import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import  NewOrderPage  from "./pages/NewOrderPage";
import { OrderHistoryPage } from "./pages/OrderHistoryPage";
import { NavBar } from "./components/NavBar";
import { getUser } from "./utilities/users-service";

function App() {
  // Create a user state
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;