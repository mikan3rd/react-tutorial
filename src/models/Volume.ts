import { List, Record } from 'immutable';
import dayjs, { Dayjs } from 'dayjs';

import { JSObject } from 'types/Common';

interface ImageLinksRecord {
  smallThumbnail: string;
  thumbnail: string;
}

export class ImageLinks extends Record<ImageLinksRecord>({
  smallThumbnail: '',
  thumbnail: '',
}) {
  constructor(data: JSObject = {}) {
    const params = { ...data };
    super(params);
  }
}

interface VolumeInfoRecord {
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
}

export class VolumeInfo extends Record<VolumeInfoRecord>({
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
  constructor(data: JSObject = {}) {
    const params = { ...data };
    params.authors = List(params.authors);
    params.publishedDate = dayjs(params.publishedDate);
    params.imageLinks = new ImageLinks(params.imageLinks);
    super(params);
  }
}

interface VolumeRecord {
  id: number;
  selfLink: string;
  volumeInfo: VolumeInfoRecord;
}

export class Volume extends Record<VolumeRecord>({
  id: 0,
  selfLink: '',
  volumeInfo: new VolumeInfo(),
}) {
  constructor(data: JSObject) {
    const params = { ...data };
    params.volumeInfo = new VolumeInfo(params.volumeInfo);
    super(params);
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
  constructor(data: JSObject) {
    const params = { ...data };
    params.items = List(params.items.map((item: JSObject) => new Volume(item)));
    super(params);
  }
}
