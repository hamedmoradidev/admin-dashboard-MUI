import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const Cards = () => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Customers</Typography>
              <Typography variant="h4">{formatNumber(1234)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Revenue</Typography>
              <Typography variant="h4">${formatNumber(5000000)}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Website Traffic</Typography>
              <Typography variant="h4">{formatNumber(350000)}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Monthly Revenue</Typography>
              <Typography variant="h4">${formatNumber(5000000)}</Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Cards;
