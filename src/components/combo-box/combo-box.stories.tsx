import { useState } from 'react';
import ComboBox from './combo-box';

export default {
  title: 'ComboBox',
  component: ComboBox
};

export function Default() {
  const [selected, setSelected] = useState('');
  return <ComboBox selected={selected} setSelected={setSelected} />;
}

export function withOptions(args) {
  const [selected1, setSelected1] = useState('');
  return <ComboBox {...args} selected={selected1} setSelected={setSelected1} />;
}

withOptions.args = {
  options: ['BMW', 'AUDI', 'MERCEDES', 'TESLA'],
  placeholder: 'Select car'
};
