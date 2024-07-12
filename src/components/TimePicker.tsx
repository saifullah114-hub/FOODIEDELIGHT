import React from 'react';
import TimePicker from 'react-time-picker';
import { Box } from '@chakra-ui/react';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
}

export const TimePickerWrapper: React.FC<TimePickerProps> = ({ value, onChange }) => {
  const handleChange = (time: string | null) => {
    if (time) {
      onChange(time);
    }
  };

  return (
    <Box>
      <TimePicker
        onChange={handleChange}
        value={value}
        clearIcon={null}
        disableClock={true}
        format="HH:mm"
      />
    </Box>
  );
};