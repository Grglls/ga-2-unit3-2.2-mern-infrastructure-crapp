// The functions in users-api are responsible for making the 
// AJAX requests to the server.
import sendRequest from "./send-request";
// This is the base path of the Express route:
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
}