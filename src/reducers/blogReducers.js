import uuid from 'react-uuid';
export default (state, action) => {
  const { type, payload } = action;
  const prevState = Object.assign([], state);
  switch (type) {
    case 'fetch':
      return payload;

    case 'edit':
      return prevState.map((p) =>
        p.id === payload.id ? { ...p, ...payload } : p
      );

    case 'delete':
      return prevState.filter((post) => post.id !== payload);
    default:
      return prevState;
  }
};
