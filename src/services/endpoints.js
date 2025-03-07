import api from './api';

export const endpoints = {
  // GET requests
  getData: () => api.get('/data'),
  getItemById: (id) => api.get(`/items/${id}`),
  
  // POST requests
  createItem: (data) => api.post('/items', data),
  
  // PUT requests
  updateItem: (id, data) => api.put(`/items/${id}`, data),
  
  // DELETE requests
  deleteItem: (id) => api.delete(`/items/${id}`),
}; 