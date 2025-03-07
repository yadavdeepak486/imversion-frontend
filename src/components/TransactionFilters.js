import React from 'react';

const TransactionFilters = ({ filters, onFilterChange, summary }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Transaction Type
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {summary?.categories?.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters; 