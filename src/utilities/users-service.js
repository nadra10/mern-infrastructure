import * as usersAPI from "./users-api";

export const signUp = async function (userData) {
  const token = await usersAPI.signUp(userData);

  localStorage.setItem("token", token);

  // Change the token return to a call to getUser
  return getUser();
};

// Create a function to retrieve token from local storage
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

// Create a function to retrieve a user based on the token
export const getUser = function () {
  const token = getToken();

  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export const logOut = function () {
  localStorage.removeItem("token");
};

export const login = async function (credentials) {
  const token = await usersAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem("token", token);
  return getUser();
};

export const checkToken = async function () {
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
};