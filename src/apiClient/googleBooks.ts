import { ApiClient } from 'apiClient';
import { JSObject } from 'types/Common';

const baseURL = 'https://www.googleapis.com/books/v1';
const apiClient = new ApiClient(baseURL);

const VOLUME_PATH = '/volumes';

export class VolumeApi {
  static get(params: JSObject): Promise<{}> {
    return apiClient.get(VOLUME_PATH, params);
  }
}
