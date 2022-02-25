const apiKey = "5130f0df5c8941a0876029dba6267b20";
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
const ApiNotes = [
  //Endpoints :
  //Endpoint Everything /v2/everything - GET https://newsapi.org/v2/everything?q={keyword}&apiKey=5130f0df5c8941a0876029dba6267b20
  //q={String ,keywords, "+" for inclusion af few, "-" keyword for exclusion,alterative AND / OR / NOT keywords can be combined with parenthesis max length 500chars  }
  //searchIn{String, title/description/content(default=all)separate with comas}
  //from={String,date ISO 8601 format }
  //to={String,date ISO 8601 format }
  //language={String,Possible options: ar,de,en,es,fr,he,it,nl,no,pt,ru,se,ud,zh. default = all}
  //sortBy={String, Possible options: relevancy, popularity, publishedAt default=PublishedAt . most new/popular/relevant come first}
  //pageSize={Int , The number of results to return per page. default = 100, maximum=100}
  //Endpoint Top headlines /v2/top-headlines - GET https://newsapi.org/v2/top-headlines?country=us&apiKey=5130f0df5c8941a0876029dba6267b20
  //country={The 2-letter ISO 3166 Possible options: ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za !default=all}
  //category={Possible options: business,entertainment,general,health,science,sports,technology. !default=all}
  //sources={A comma-seperated string of identifiers for the news sources or blogs you want headlines from the /top-headlines/sources endpoint !! can't be mixed with country or category params !default=all}
  //q={same as before}
  //apiKey= {same as before}
  //Endpoint Sources /v2/top-headlines/sources GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
  //category={same as before}
  //language={same as before}
  //country={same as before}
  //response
  // {
  //     "status": "ok",
  //     "totalResults": int,
  //     "articles": [{article,article...}]
  // }
  // article = {
  //   source: {
  //     id: "String" || null,
  //     name: "String",
  //   },
  //   author: "String" || null,
  //   title: "String",
  //   description: "String",
  //   url: "URI",
  //   urlToImage: "URI",
  //   PublishedAt: "Date ISO 8601 format",
  //   content:
  //     "String",
  // };
  // {
  //     "status": "error",
  //     "code": "apiKeyMissing",
  //     "message": "Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTP header."
  // }
  //statusCodes
  // 200 - OK. The request was executed successfully.
  // 400 - Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.
  // 401 - Unauthorized. Your API key was missing from the request, or wasn't correct.
  // 429 - Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.
  // 500 - Server Error. Something went wrong on our side.
  //Errors
  //codes
  // [
  //     apiKeyDisabled - Your API key has been disabled.
  //     apiKeyExhausted - Your API key has no more requests available.
  //     apiKeyInvalid - Your API key hasn't been entered correctly. Double check it and try again.
  //     apiKeyMissing - Your API key is missing from the request. Append it to the request with one of these methods.
  //     parameterInvalid - You've included a parameter in your request which is currently not supported. Check the message property for more details.
  //     parametersMissing - Required parameters are missing from the request and it cannot be completed. Check the message property for more details.
  //     rateLimited - You have been rate limited. Back off for a while before trying the request again.
  //     sourcesTooMany - You have requested too many sources in a single request. Try splitting the request into 2 smaller requests.
  //     sourceDoesNotExist - You have requested a source which does not exist.
  //     unexpectedError - This shouldn't happen, and if it does then it's our fault, not yours. Try the request again shortly.
];
class NewsApi {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._endpoint = options.endpoint ? options.endpoint : "v2/everything";
    this._from = formatDate(options.from) || null;
    this._to = formatDate(options.to) || null;
    this._pageSize = options.pageSize || 100;
  }
  getArticles(keywords) {
    return fetch(
      `${this._baseUrl}${this._endpoint}?q=${keywords}&pageSize=${this._pageSize}&from=${this._from}&to=${this._to}&sortBy=PublishedAt&apiKey=${apiKey}`
    ).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(
        `Failed with status:( ${response.status} ${response.message} )`
      );
    });
  }
}
const to = new Date();
const from = new Date(to);
from.setDate(from.getDate() - 7);

const newsApi = new NewsApi("https://newsapi.org/", {
  from,
  to,
  endpoint: "v2/everything",
});

export default newsApi;
