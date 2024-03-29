import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.snippet.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
