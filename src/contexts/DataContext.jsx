import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

// Generate some initial data
const generateInitialData = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    description: `Description for item ${index + 1}`,
    status: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)],
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));
};

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : generateInitialData();
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
      createdAt: new Date().toISOString(),
    };
    setItems(prev => [...prev, newItem]);
    return newItem;
  };

  const updateItem = (id, updatedItem) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const getItem = (id) => {
    return items.find(item => item.id === id);
  };

  const getFilteredItems = (page, limit, searchTerm = '', sortField = 'createdAt', sortOrder = 'desc') => {
    let filteredItems = [...items];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.status.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    filteredItems.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

    // Calculate pagination
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    return {
      items: paginatedItems,
      totalItems,
      totalPages,
      currentPage: page,
    };
  };

  return (
    <DataContext.Provider value={{
      items,
      addItem,
      updateItem,
      deleteItem,
      getItem,
      getFilteredItems,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}; 