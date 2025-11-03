// src/components/home/index.tsx
import React, { useRef, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { styles } from './styles';

const UserCard = ({ usuario }: { usuario: { nome: string; aprender: string; ensinar: string } }) => (
  <View style={styles.cardView}>
    <Text style={styles.tituloView}>{usuario.nome}</Text>
    <Text style={styles.subTituloView}>
      Aprender: {usuario.aprender} | Ensinar: {usuario.ensinar}
    </Text>
  </View>
);

export function Home() {
  // Dados fictícios para testar o Swiper (3-6 itens)
  const [usuarios] = useState([
    { id: '1', nome: 'Lucas Silva', aprender: 'Inglês', ensinar: 'Violão' },
    { id: '2', nome: 'Mariana Costa', aprender: 'Fotografia', ensinar: 'Espanhol' },
    { id: '3', nome: 'Pedro Oliveira', aprender: 'Programação', ensinar: 'Basquete' },
    { id: '4', nome: 'Ana Pereira', aprender: 'Design', ensinar: 'Yoga' },
    { id: '5', nome: 'Rafael Souza', aprender: 'Espanhol', ensinar: 'Culinária' },
  ]);

  const swiperRef = useRef<any>(null);

  const handleSwipeRight = (index: number) => {
    const u = usuarios[index];
    Alert.alert('🎉 Combinação!', `${u.nome} gostou de você!`);
  };

  const handleSwipeLeft = (index: number) => {
    const u = usuarios[index];
    // alerta simples de rejeição (pode trocar por outro comportamento)
    Alert.alert('❌ Rejeitado', `Você passou por ${u.nome}.`);
  };

  // Quando todos os cards foram swipados
  const handleOnSwipedAll = () => {
    Alert.alert('Fim', 'Você já viu todos os usuários.');
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={usuarios}
        renderCard={(card) => <UserCard usuario={card} />}
        onSwipedRight={(i) => handleSwipeRight(i)}
        onSwipedLeft={(i) => handleSwipeLeft(i)}
        onSwipedAll={handleOnSwipedAll}
        verticalSwipe={false}
        backgroundColor="#f3f4f6"
        stackSize={3}
        useViewOverflow={false}
        cardVerticalMargin={50}
      />

      <View style={styles.buttonContainer}>
  <TouchableOpacity
    onPress={() => swiperRef.current && swiperRef.current.swipeLeft()}
    style={[styles.actionButton, { backgroundColor: '#ff6b6b' }]}
  >
    <Text style={styles.buttonText}>❌</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => swiperRef.current && swiperRef.current.swipeRight()}
    style={[styles.actionButton, { backgroundColor: '#34d399' }]}
  >
    <Text style={styles.buttonText}>💖</Text>
  </TouchableOpacity>
</View>

    </View>
  );
}
