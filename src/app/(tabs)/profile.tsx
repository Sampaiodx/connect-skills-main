import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    console.log('Salvando dados:', { name, email, password });
    alert('Informações atualizadas com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      {/* Nome */}
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Seu nome completo"
          value={name}
          onChangeText={setName}
          style={[styles.input, focused === 'name' && styles.inputFocused]}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
        />
      </View>

      {/* Email */}
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="voce@exemplo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, focused === 'email' && styles.inputFocused]}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
        />
      </View>

      {/* Senha */}
      <View style={styles.form}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="********"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={[styles.inputPassword, focused === 'password' && styles.inputFocused]}
            onFocus={() => setFocused('password')}
            onBlur={() => setFocused(null)}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: '#007bff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 12,
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
