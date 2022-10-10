import { useState, useEffect } from "react";
import {getCookie} from "../helpers/cookieHelper";

const useFetch = (endpoint, options = {}) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      const url = "http://blog.api/" + endpoint;
      options.credentials = "include";
      options.headers = {
        Authorization: getCookie("blog"),
      };
      try {
        const resp = await fetch(url, options);
        const textValue = await resp.text();
        setText(textValue);
        setLoading(false);
        try {
          const json = JSON.parse(textValue);
          setData(json);
        } catch (e) {
          setError(e);
        }
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error, text };
};

export default useFetch;




//"http://localhost:80/blog-api/"