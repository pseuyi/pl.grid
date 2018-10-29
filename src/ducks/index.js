// @flow

export type Post = {
  id: number,
  url: string,
  source: string,
};

type State = {|
  posts: Post[],
  loading: bool,
  loaded: bool,
  error: ?Object,
|};

export const postState: State = {
  posts: [],
  loading: false,
  loaded: false,
  error: null,
};

export const postReducer = (state = postState, action): State => {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        loaded: true,
        error: null,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
        loaded: true,
        error: null,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      }
    default:
      return state;
  }
}
