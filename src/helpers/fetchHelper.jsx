import { getCookie } from "../helpers/cookieHelper";

const doFetch = async (endpoint, options = {}) => {
  options.credentials = "include";
  options.headers = {
    Authorization: getCookie("blog"),
  };
  const url = "http://blog.api/" + endpoint;
  let data = null, loading = true, error = null, text = null;
  try {
    const resp = await fetch(url, options);
    text = await resp.text();
    loading = false;
    try {
      data = JSON.parse(text);
    } catch (e) {
      error = e;
    }
  } catch (e) {
    error = e;
  }
  return { data, loading, error, text };
};

export default doFetch;
