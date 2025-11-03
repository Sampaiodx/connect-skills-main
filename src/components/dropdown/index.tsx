import { Text } from '@react-navigation/elements';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";


export function Dropdown() {

  const [selecionado, setSelecionado] = React.useState("");

  const lista = [{ key: '1', value: 'Programação' },
  { key: '2', value: 'Música' },
  { key: '3', value: 'Culinária' },
  { key: '4', value: 'Ciências' },
  { key: '5', value: 'Exatas' },
  { key: '6', value: 'Ciências' },
  { key: '7', value: 'Humanas' },
  { key: '8', value: 'Edição de imagem' },
  { key: '9', value: 'Edição de vídeo' },
  ]

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Hora da prática!</Text>
      <Text style={styles.subtitle}>O que quer aprender?</Text>
      <SelectList
        dropdownTextStyles={styles.selectListText}
        inputStyles={styles.selectListTextInput}
        setSelected={(val) => setSelecionado(val)}
        data={lista}
        save="value"
        placeholder='Selecione um Aprendizado' />
      <Text style={styles.subtitle}>O que ensina?</Text>
      <SelectList
        dropdownTextStyles={styles.selectListText}
        inputStyles={styles.selectListTextInput}
        setSelected={(val) => setSelecionado(val)}
        data={lista}
        save="value"
        placeholder='Selecione um Treinamento' />
    </SafeAreaView>

  )

}