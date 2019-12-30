import { List, Record } from 'immutable';
import dayjs, { Dayjs } from 'dayjs';

import { JSObject } from 'types/Common';

export class ImageLinks extends Record<{
  smallThumbnail: string;
  thumbnail: string;
}>({
  smallThumbnail: '',
  thumbnail: '',
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    return new ImageLinks(params);
  }
}

export class VolumeInfo extends Record<{
  title: string;
  subtitle: string;
  authors: List<string>;
  publisher: string;
  publishedDate: Dayjs;
  description: string;
  imageLinks: ImageLinks;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}>({
  title: '',
  subtitle: '',
  authors: List(),
  publisher: '',
  publishedDate: dayjs(),
  description: '',
  imageLinks: new ImageLinks(),
  previewLink: '',
  infoLink: '',
  canonicalVolumeLink: '',
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    params.authors = List(params.authors);
    params.publishedDate = dayjs(params.publishedDate);
    params.imageLinks = ImageLinks.fromResponse(params.imageLinks);
    return new VolumeInfo(params);
  }
}

export class Volume extends Record<{
  id: number;
  selfLink: string;
  volumeInfo: VolumeInfo;
}>({
  id: 0,
  selfLink: '',
  volumeInfo: new VolumeInfo(),
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    params.volumeInfo = VolumeInfo.fromResponse(params.volumeInfo);
    return new Volume(params);
  }
}

interface VolumeListRecord {
  kind: string;
  totalItems: number;
  items: List<Volume>;
}

export class VolumeList extends Record<VolumeListRecord>({
  kind: '',
  totalItems: 0,
  items: List(),
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    params.items = List(params.items.map((item: JSObject) => Volume.fromResponse(item)));
    return new VolumeList(params);
  }
}
