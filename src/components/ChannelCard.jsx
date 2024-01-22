import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = (channelDetail) => {
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
    }}
  >
    <Link to={`/channel/${channelDetail?.channelDetail?.snippet?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={
            channelDetail?.channelDetail?.snippet?.thumbnails?.high?.url ||
            demoProfilePicture
          }
          alt={channelDetail?.channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 200,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant="h6">
          {channelDetail?.channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
        </Typography>
      </CardContent>
    </Link>
  </Box>;
};
export default ChannelCard;
