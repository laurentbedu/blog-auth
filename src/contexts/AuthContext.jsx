import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const getCookieValue = (name) => {
    return document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";
  }

  const [auth, setAuth] = useState({ role: 0 });

  useEffect(() => {
    fetch("http://blog.api/auth/check", {
      // credentials: "include",
      headers: {
        Authorization: getCookieValue("blog"),
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result) {
          setAuth({ role: +json.role });
        } else {
          setAuth({ role: 0 });
          document.cookie = `blog=null;max-age=0`;
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
