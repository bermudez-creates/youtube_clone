import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
// may need to change {} to ()
const Feed = () => (
  <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
    <Box
      sx={{
        height: { sx: 'auto', md: '94vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 },
      }}
    >
      <Sidebar />
      <Typography
        className="copyright"
        variant="body2"
        sx={{ color: '#fff', mt: 1.5 }}
      >
        Copyright 2024 @bermudez-creates
      </Typography>
    </Box>
  </Stack>
);

export default Feed;
