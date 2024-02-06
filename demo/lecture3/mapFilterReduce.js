const transactions = [
    { date: '2024-01-15', category: 'Groceries', amount: 30, type: 'expense' },
    { date: '2024-01-20', category: 'Groceries', amount: 100, type: 'income' },
    { date: '2024-01-01', category: 'Car', amount: 200, type: 'expense' },
    { date: '2024-02-01', category: 'Car', amount: 100, type: 'income' },
    { date: '2024-02-15', category: 'Groceries', amount: 25, type: 'expense' },
    { date: '2024-03-20', category: 'Groceries', amount: 130, type: 'income' },
    // ... more transactions throughout the year
  ];
  
  const targetCategory = 'Groceries';
  
  // Function to extract the month from a date string
  const getMonth = date => date.substring(0, 7); // YYYY-MM
  
  const monthlyBalance = transactions
    .filter(transaction => transaction.category === targetCategory)
    .map(transaction => ({
      month: getMonth(transaction.date),
      amount: transaction.type === 'income' ? transaction.amount : -transaction.amount
    }))
    .reduce((acc, { month, amount }) => {
      acc[month] = (acc[month] || 0) + amount;
      return acc;
    }, {});
  
  const annualBalance = Object.values(monthlyBalance).reduce((acc, balance) => acc + balance, 0);
  
  console.log('Monthly Balance:', monthlyBalance);
  console.log('Annual Balance for category', targetCategory, ': $', annualBalance);
  