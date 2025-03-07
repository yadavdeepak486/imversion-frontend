import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const SummaryCards = ({ summary }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#e8f5e9'
          }}
        >
          <Typography variant="h6">Total Income</Typography>
          <Typography variant="h4" color="success.main">
            ${summary.totalIncome.toFixed(2)}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffebee'
          }}
        >
          <Typography variant="h6">Total Expenses</Typography>
          <Typography variant="h4" color="error.main">
            ${summary.totalExpense.toFixed(2)}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#e3f2fd'
          }}
        >
          <Typography variant="h6">Net Balance</Typography>
          <Typography 
            variant="h4" 
            color={summary.netBalance >= 0 ? 'success.main' : 'error.main'}
          >
            ${summary.netBalance.toFixed(2)}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SummaryCards; 