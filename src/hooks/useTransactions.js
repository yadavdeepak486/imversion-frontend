import { useState, useEffect } from 'react';
import axios from 'axios';
import { getBaseURL } from '../config/environment';

const API_BASE_URL = `${getBaseURL()}`;

export const useTransactions = (filters) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    netBalance: 0,
    transactionCount: 0,
    categories: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Convert filters to query parameters
        const queryParams = new URLSearchParams({
          ...(filters.type !== 'all' && { type: filters.type }),
          ...(filters.category !== 'all' && { category: filters.category }),
          ...(filters.startDate && { from: filters.startDate }),
          ...(filters.endDate && { to: filters.endDate })
        }).toString();

        // Fetch transactions and summary in parallel
        const [transactionsRes, summaryRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/transactions?${queryParams}`),
          axios.get(`${API_BASE_URL}/transactions/summary?${queryParams}`)
        ]);

        setTransactions(transactionsRes.data.data);
        setSummary(summaryRes.data.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  // Add transaction
  const addTransaction = async (transactionData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/transactions`, transactionData);
      setTransactions(prev => [response.data.data, ...prev]);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to add transaction');
    }
  };

  // Update transaction
  const updateTransaction = async (id, transactionData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/transactions/${id}`, transactionData);
      setTransactions(prev => 
        prev.map(t => t._id === id ? response.data.data : t)
      );
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to update transaction');
    }
  };

  // Delete transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/transactions/${id}`);
      setTransactions(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to delete transaction');
    }
  };

  return {
    transactions,
    summary,
    isLoading,
    error,
    addTransaction,
    updateTransaction,
    deleteTransaction
  };
}; 