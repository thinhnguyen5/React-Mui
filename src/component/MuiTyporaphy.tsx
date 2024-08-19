import { Typography } from "@mui/material";

const MuiTyporaphy = () => {
  return (
    <div>
      {/* Heading */}
      <Typography variant='h1'>Hi</Typography>
      <Typography variant='h2'>Hi</Typography>
      <Typography variant='h3'>Hi</Typography>
      <Typography variant='h4' component='h1' gutterBottom>Hi</Typography>
      <Typography variant='h5'>Hi</Typography>
      <Typography variant='h6'>Hi</Typography>

      {/* P */}
      <Typography variant='body1'>dajdjadjajdjadjajdaj</Typography>
      <Typography variant='body2'>dajdjadjajdjadjajdaj</Typography>
    </div>
  );
};

export default MuiTyporaphy;
