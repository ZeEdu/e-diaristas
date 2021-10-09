import React, { FC } from "react";
import TextField from "ui/components/inputs/TextField/TextField";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

export interface Props extends OutlinedTextFieldProps {
  mask: string;
  value: string;
}

const TextFieldMask: FC<Props> = ({ mask, value, onChange, ...props }) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => <TextField {...props} />}
    </InputMask>
  );
};

export default TextFieldMask;
