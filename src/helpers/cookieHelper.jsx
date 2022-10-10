export const getCookie = (name) => {
  return (
    document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || ""
  );
};

export const setCookie = (name, value, options = {}) => {
  let cookie = name + "=" + value;
  for (let optionKey in options) {
    cookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      cookie += "=" + optionValue;
    }
  }
  document.cookie = cookie;
};

export const deleteCookie = (name) => {
  setCookie(name, "", {
    "max-age": 0,
  });
};
