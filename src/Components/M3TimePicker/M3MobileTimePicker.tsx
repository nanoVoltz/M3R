import {MobileTimePicker, MobileTimePickerProps } from '@mui/x-date-pickers';
import React from 'react';

const M3MobileTimePicker = (props: Omit<MobileTimePickerProps<never>, 'children'> & { children: React.ReactNode }) => {
  return (
    <MobileTimePicker {...props}/>
  );
};

export default M3MobileTimePicker;
