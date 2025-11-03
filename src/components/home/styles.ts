import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
  },
  cardView: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tituloView: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  subTituloView: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
  },

  // 🎯 Área dos botões abaixo dos cards
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  actionButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
});
