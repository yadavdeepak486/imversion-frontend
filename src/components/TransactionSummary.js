import React from 'react';

const TransactionSummary = ({ summary }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-card rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-5 bg-primary/5">
          <h3 className="text-sm font-medium text-primary">Total Income</h3>
          <p className="mt-2 text-3xl font-bold text-primary">
            ${summary.totalIncome.toLocaleString()}
          </p>
        </div>
        <div className="px-6 py-2 bg-primary/10">
          <p className="text-xs text-primary/80">+{((summary.totalIncome / (summary.totalIncome + summary.totalExpense)) * 100).toFixed(1)}% of total</p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-5 bg-destructive/5">
          <h3 className="text-sm font-medium text-destructive">Total Expense</h3>
          <p className="mt-2 text-3xl font-bold text-destructive">
            ${summary.totalExpense.toLocaleString()}
          </p>
        </div>
        <div className="px-6 py-2 bg-destructive/10">
          <p className="text-xs text-destructive/80">-{((summary.totalExpense / (summary.totalIncome + summary.totalExpense)) * 100).toFixed(1)}% of total</p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-5 bg-accent">
          <h3 className="text-sm font-medium text-accent-foreground">Net Balance</h3>
          <p className={`mt-2 text-3xl font-bold ${
            summary.netBalance >= 0 ? 'text-primary' : 'text-destructive'
          }`}>
            ${summary.netBalance.toLocaleString()}
          </p>
        </div>
        <div className="px-6 py-2 bg-muted">
          <p className="text-xs text-muted-foreground">Current balance</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary; 