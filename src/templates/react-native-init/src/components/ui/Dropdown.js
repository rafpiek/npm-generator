import React from 'react';
import { Picker } from 'react-native';

const Dropdown = () => {
  return (
    <Picker style={{ height: 50, width: 100 }}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default Dropdown;
