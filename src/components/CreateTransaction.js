import React, { useState } from 'react';

const CreateTransaction = ({ onSubmit, summary }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({
        ...formData,
        amount: Number(formData.amount)
      });
      setIsOpen(false);
      setFormData({
        type: 'expense',
        amount: '',
        category: '',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
    } catch (error) {
      console.error('Failed to create transaction:', error);
    }
  };

  return (
    <div className="mb-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add New Transaction
        </button>
      ) : (
        <div className="bg-card rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-card-foreground">New Transaction</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-muted-foreground">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg bg-background text-foreground"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-muted-foreground">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border rounded-lg bg-background text-foreground"
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-muted-foreground">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg bg-background text-foreground"
                >
                  <option value="">Select Category</option>
                  {summary?.categories?.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-muted-foreground">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-muted-foreground">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-background text-foreground"
                rows="2"
                placeholder="Add a description..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border rounded-lg hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Create Transaction
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateTransaction; 