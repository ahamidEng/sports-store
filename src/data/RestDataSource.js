import Axios from "axios";
import { RestUrls } from "./Urls";
export class RestDataSource {
  GetData = async(dataType, params) => {
    return this.SendRequest("get", RestUrls[dataType], params)
  }

  StoreData = (dataType, data) => {
    return this.SendRequest("post", RestUrls[dataType], {}, data);
  }

  SendRequest = (method, url, params, data) => Axios.request({ method, url, params, data });
}