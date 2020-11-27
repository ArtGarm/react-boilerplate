export const defaultState = {
  start: null,
  end: null,
  error: null,
};

function createAction(obj, parent = "") {
  return Object.keys(obj).reduce(
    (acc, item) => ({
      ...acc,
      [item]: obj[item]
        ? createAction(obj[item], `${parent}${item}_`)
        : `${parent}${item}`.toUpperCase(),
    }),
    {}
  );
}

export default createAction;
