import actionCreatorFactory from 'typescript-fsa';

import { VolumeList } from 'models/Volume';

const actionCreator = actionCreatorFactory('GoogleBooks');

export const GoogleBooksActions = {
  getVolumes: actionCreator('getVolumes'),
  setVolumes: actionCreator<VolumeList>('setVolumes'),
};
