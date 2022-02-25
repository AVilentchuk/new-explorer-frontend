const customFetch = (url, properties) =>
  fetch(url, properties).then((response) => {
    if (response.ok) return response.json();
    return Promise.reject(
      `Failed with status:( ${response.status} ${response.message} )`
    );
  });

class Api {
  constructor({ token, baseUrl }) {
    this.token = token;
    this.baseUrl = baseUrl;
  }

  getInitialCards() {
    return customFetch(`${this.baseUrl}/articles`, {
      headers: {
        authorization: `${this.token}`,
        "Content-Type": "application/json",
      },
    });
  }

  addArticle(articleData) {
    return customFetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        authorization: `${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
  }

  deleteArticle(id) {
    return customFetch(`${this.baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${this.token}`,
      },
    });
  }

  removeSavedArticle(articleData) {
    return customFetch(`${this.baseUrl}/articles/`, {
      method: "DELETE",
      headers: {
        authorization: `${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
  }

  updateToken() {
    this.token = `Bearer ${localStorage.getItem("jwt")}`;
  }
}
const options = {
  baseUrl: "http://localhost:3000",
  token: `Bearer ${localStorage.getItem("jwt")}`,
};

const api = new Api(options);
export { customFetch };
export default api;
