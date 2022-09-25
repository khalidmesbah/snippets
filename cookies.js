/* NOTES 
- 5kb bytes only available
- cookies get sent to and from the server on every request
*/

const setCookie = (name, value, DaysToLive) => {
  const date = new Date();
  date.setTime(date.getTime() + DaysToLive * 24 * 60 * 60 * 1000);
  let expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};
const deleteCookie = (name) => {
  setCookie(name, null, null);
};
const getCookie = (name) => {
  const cookieDecoded = decodeURIComponent(document.cookie);
  const cookies = cookieDecoded.split(";");
  const value = cookies.find((e) => e.includes(name));
  if (value) return value.split("=")[1];
  return null;
};
