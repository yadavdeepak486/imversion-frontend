import React from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Grid,
  CircularProgress,
  Alert
} from '@mui/material';
import TransactionFilters from './TransactionFilters';
import TransactionTable from './TransactionTable';
import SummaryCards from './SummaryCards';
import useTransactions from '../hooks/useTransactions';

const Dashboard = () => {
  const { 
    transactions, 
    loading, 
    error, 
    filters, 
    setFilters, 
    summary 
  } = useTransactions();

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Transaction Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <SummaryCards summary={summary} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <TransactionFilters filters={filters} setFilters={setFilters} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <TransactionTable transactions={transactions} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 