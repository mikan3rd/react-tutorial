import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('GoogleBooks');

export const GoogleBooksActions = {
  initialize: actionCreator('initialize'),
};
