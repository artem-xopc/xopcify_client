import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface VolumeProps {
  left: number;
  right: number;
  change: () => void;
}

const Volume: React.FC<VolumeProps> = ({ left, right, change }) => {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <Box sx={{ height: 50 }}>
      <Slider
        min={left}
        max={right}
        onChange={change}
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        defaultValue={50}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={preventHorizontalKeyboardNavigation}
        size="small"
      />
    </Box>
  );
};

export default Volume;
