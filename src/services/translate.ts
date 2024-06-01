class Translate {
  private list: string[];
  private origin: string;
  private target: string;
  private endpoint = "https://translate-pa.googleapis.com/v1/translateHtml";
  constructor(list: string[], origin: string, target: string) {
    this.list = list;
    this.origin = origin;
    this.target = target;
  }
  private headers() {
    return {
      Accept: "*/*",
      "X-Goog-Api-Key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520",
      "Content-Type": "application/json+protobuf"
    };
  }
  private body() {
    return JSON.stringify([[this.list, this.origin, this.target], "te_lib"]);
  }
  async get() {
    const resp = await fetch(this.endpoint, {
      method: "POST",
      headers: this.headers(),
      body: this.body()
    });
    const data = await resp.json();
    return data[0];
  }
}

export {Translate};
