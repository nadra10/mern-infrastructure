import { getToken } from "./users-service";

const BASE_URL = "/api/users";

let token = getToken();

const sendRequest = async function (url, method = "GET", payload = null) {
  const options = { method };

  console.log(payload);

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);

  if (res.ok) return res.json();

  throw new Error("Bad Request");
};

export const signUp = async function (userData) {
  // const res = await fetch(BASE_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(userData),
  // });
  // const res = await axios({
  //   url: "/api/users",
  //   method: "POST",
  //   data: userData,
  // });
  // if (res.status === 200) {
  //   return res.json();
  // } else {
  //   throw new Error("Invalid Sign Up");
  // }

  return sendRequest(BASE_URL, "POST", userData);
};

export async function login(credentials) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  // const res = await fetch(BASE_URL + "/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   // Fetch requires data payloads to be stringified
  //   // and assigned to a body property on the options object
  //   body: JSON.stringify(credentials),
  // });
  // // Check if request was successful
  // if (res.ok) {
  //   // res.json() will resolve to the JWT
  //   return res.json();
  // } else {
  //   throw new Error("Invalid Sign In");
  // }
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export const checkToken = function () {
  return sendRequest(`${BASE_URL}/check-token`);
};