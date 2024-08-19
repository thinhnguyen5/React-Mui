import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";

const MuiLayout = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1723227300708-1ff74add4195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
          alt="unplash image"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>

          <Typography variant="body2" color="text.secondary">
            It is like that since it may be that other customer has multiple
            account so we need to then know from which specific account we can
            take service fees if there are any We will take the message into
            processing within 1-3 working days. When you cannot log in to the
            online bank any more the customer relationsship is ended. You can
            also check then later if the money has arrived to the account you
            mentioned in the message
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiLayout;
