import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export const CustomTextField = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      label={label}
      render={({ field: { onChange, label } }) => (
        <>
          <TextField
            onChange={onChange}
            label={label}
            variant="standard"
            fullWidth
            required
          />
        </>
      )}
    />
  );
};
