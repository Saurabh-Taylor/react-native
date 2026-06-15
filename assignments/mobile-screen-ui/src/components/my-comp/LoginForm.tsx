import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const LoginForm = () => {
  const [activeInput, setActiveInput] = useState(''); // tracks which input is active

  return (
    <View>
      {/* Email Input */}
      <View style={[styles.container, activeInput === 'email' && styles.active]}>
        <Ionicons name="mail-outline" size={20} color={activeInput === 'email' ? 'green' : 'gray'} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onFocus={() => setActiveInput('email')}
          onBlur={() => setActiveInput('')}
        />
      </View>

      {/* Password Input */}
      <View style={[styles.container, activeInput === 'password' && styles.active]}>
        <Ionicons name="lock-closed-outline" size={20} color={activeInput === 'password' ? 'green' : 'gray'} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onFocus={() => setActiveInput('password')}
          onBlur={() => setActiveInput('')}
        />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  active: {
    borderColor: 'green',
  },
  input: {
    flex: 1,
  },
});