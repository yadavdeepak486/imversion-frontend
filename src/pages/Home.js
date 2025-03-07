import React, { useState } from 'react';
import TransactionList from '../components/TransactionList';
import TransactionSummary from '../components/TransactionSummary';
import TransactionFilters from '../components/TransactionFilters';
import CreateTransaction from '../components/CreateTransaction';
import { useTransactions } from '../hooks/useTransactions';

const Home = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    startDate: '',
    endDate: '',
    category: 'all'
  });

  const { 
    transactions, 
    summary, 
    isLoading, 
    error,
    addTransaction 
  } = useTransactions(filters);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="p-4 rounded-lg bg-red-100 border border-red-300">
          <p className="text-red-700 font-medium">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Financial Dashboard
        </h1>
        
        <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
          <CreateTransaction onSubmit={addTransaction} summary={summary} />
          <TransactionFilters filters={filters} onFilterChange={setFilters} summary={summary} />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <TransactionSummary summary={summary} />
            <TransactionList transactions={transactions} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home; 