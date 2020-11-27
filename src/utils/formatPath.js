export default function formatPath(path, values) {
  return Object.keys(values).reduce(
    (p, key) => p.replace(`:${key}`, values[key]),
    path
  );
}
