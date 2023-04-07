import { Paper, Typography } from '@mui/material';

const Widget = () => {
  return (
    <div>
      <Paper
        elevation={2}
        sx={{ marginBottom: '12px', width: '200px', height: '200px' }}
      >
        <Typography
          variant="h6"
          sx={{
            marginLeft: '12px',
            verticalAlign: 'center',
            alignContent: 'center',
          }}
        >
          Paper 1
        </Typography>
      </Paper>
      <Paper elevation={2}>Paper 2 </Paper>
    </div>
  );
};

export default Widget;
