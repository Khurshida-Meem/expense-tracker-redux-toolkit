import axios from "../../utils/axios";

export const getTransactions = async (search, type) => {
  let queryString = "";
  if (type !== "") {
    queryString += `type_like=${type}`;
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axios.get(`/transactions/?${queryString}`);

  return response.data;
};

export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);

  return response.data;
};
export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);

  return response.data;
};
export const deleteTransaction = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);

  return response.data;
};
