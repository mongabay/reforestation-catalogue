import React from 'react';

export interface CheckboxProps {
  id: string;
  name: string;
  disabled: boolean;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
  className: string;
}
