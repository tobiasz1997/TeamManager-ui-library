import { IOption } from './option.interface';

export interface IFilterItem {
  name: string;
  placeholder: string;
  type: 'date' | 'select';
  options?: Array<IOption<string>>;
}
