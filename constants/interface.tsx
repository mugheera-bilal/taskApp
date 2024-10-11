import {ReactNode} from 'react';

type TButtonUser = {
  name: string;
  email: string;
  numb: number;
};

export interface IPrimaryButton {
  children: ReactNode;
  onPressButton?: any;
  disabled?: boolean;
}

export interface CInputHolder {
  placeholder?: string;
  children?: ReactNode;
  value?: any;
  password?: boolean;
  onChangeText?: any;
  // keyboardType? : string
  // autoFocus? : boolean
}

export interface IDetailsCard {
  userName?: string;
  userEmail?: string;
  userPassword?: string;
}

export interface ITaskData {
  id?: string;
  title?: string;
  description?: string;
  priority?: any;
  priorityColor? : any
}

export interface ITasksCardProps {
  title?: string;
  description?: string;
  priority?: string;
  itemColor? : any 
}
