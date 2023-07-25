import axios from 'axios';
import queryString from 'query-string';
import { WealthProductInterface, WealthProductGetQueryInterface } from 'interfaces/wealth-product';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWealthProducts = async (
  query?: WealthProductGetQueryInterface,
): Promise<PaginatedInterface<WealthProductInterface>> => {
  const response = await axios.get('/api/wealth-products', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWealthProduct = async (wealthProduct: WealthProductInterface) => {
  const response = await axios.post('/api/wealth-products', wealthProduct);
  return response.data;
};

export const updateWealthProductById = async (id: string, wealthProduct: WealthProductInterface) => {
  const response = await axios.put(`/api/wealth-products/${id}`, wealthProduct);
  return response.data;
};

export const getWealthProductById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/wealth-products/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWealthProductById = async (id: string) => {
  const response = await axios.delete(`/api/wealth-products/${id}`);
  return response.data;
};
