import { checkToken } from "../utilities/users-service";

export const OrderHistoryPage = function () {
  const handleCheckToken = async function () {
    checkToken();
  };

  return (
    <div>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
};
