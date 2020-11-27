import requestClient from './requestClient';

export default {
  getOne: (resource, data) => requestClient('GET', resource, data),
  getList: (resource, data) => requestClient('GET', resource, data),
  createOne: (resource, data) => requestClient('POST', resource, data),
  updateOne: (resource, data) => requestClient('PUT', resource, data),
  deleteOne: (resource, data) => requestClient('DELETE', resource, data),
};
