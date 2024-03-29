import { IDisabled } from "./IDisabled";
import { SelectChangeEvent } from '@mui/material/Select';

interface ISelectItems {
  label: string;
  value: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItems[];
}