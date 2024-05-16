import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './ButtonsStyle';

export default function FiveInputsRow() {
    const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']);

    const handleChange = (index: number, value: string) => {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
    };

  return (
    <View style={styles.fiveInputsCont}>
        {inputs.map((currentEl, indexofCurrentEl) => (
            <TextInput
            key={indexofCurrentEl}
            style={styles.fiveInputsInput}
            maxLength={1}
            keyboardType="numeric"
            value={currentEl}
            placeholder='-'
            onChangeText={(text) => handleChange(indexofCurrentEl, text)}
            />
        ))}
    </View>
  );
}
