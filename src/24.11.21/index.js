const Axios = {};

const validateUrl = (url) => {
  if (url && typeof url === "string") {
    return true;
  }
  throw new Error("invalid url");
};

Axios.baseRequest = (url, method, body) => {
  if (validateUrl(url)) {
    const reqConfig = { method: method };
    if (method === "POST" || method === "PUT") {
      reqConfig.body = JSON.stringify(body);
    }

    return fetch(url, reqConfig)
      .then((res) => res.json())
      .catch((err) => err);
  }
};

Axios.get = (url) => Axios.baseRequest(url, "GET");

Axios.post = (url, body) => Axios.baseRequest(url, "POST", body);

Axios.put = (url, body) => Axios.baseRequest(url, "PUT", body);

Axios.delete = (url) => Axios.baseRequest(url, "DELETE");

export default Axios;
