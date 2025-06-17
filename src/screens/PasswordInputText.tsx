import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';

const PasswordInputText = (props: any) => {
  const [isPassword, setIsPassword] = useState(true);
  const { label, style, value, setValue, iconColor } = props;

  const togglePasswordVisibility = () => {
    setIsPassword(prev => !prev);
  };

  return (
    <View style={styles.view}>
      <TextInput
        {...props}
        label={label}
        value={value}
        onChangeText={setValue}
        secureTextEntry={isPassword}
        style={style}
        right={
          <TextInput.Icon
            icon={isPassword ? 'eye-off' : 'eye'}
            onPress={togglePasswordVisibility}
            forceTextInputFocus={false}
            color={iconColor}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
  },
});

PasswordInputText.defaultProps = {
  label: 'Password',
  iconColor: '#222222',
};

PasswordInputText.propTypes = {
  label: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  placeholderTextColor: PropTypes.string,
};

export default PasswordInputText;
