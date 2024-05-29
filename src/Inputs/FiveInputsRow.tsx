import React, { useState, useRef } from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import styles from './ButtonsStyle';

type InputRef = {
  [key: number]: React.RefObject<TextInput>;
};

const FiveInputsRow = () => {
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']);
  const inputRefs = useRef<InputRef>({});

  // Create refs for each input field
  for (let i = 0; i < 5; i++) {
    inputRefs.current[i] = useRef<TextInput>(null);
  }

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // Move to the next input field
    if (value && index < 4) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  return (
    <View style={styles.fiveInputsCont}>
      {inputs.map((currentEl, index) => (
        <TextInput
          key={index}
          ref={inputRefs.current[index]}
          style={styles.fiveInputsInput}
          maxLength={1}
          keyboardType="numeric"
          value={currentEl}
          placeholder="-"
          onChangeText={(text) => handleChange(index, text)}
          onSubmitEditing={() => {}}
        />
      ))}
    </View>
  );
};

export default FiveInputsRow;
