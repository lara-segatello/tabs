import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const ONGS_DATA = [
  { id: '1',  nome: 'Amigos dos Animais',  cidade: 'São Paulo',  emoji: '🏠'},
  { id: '2', nome: 'Patinhas Felizes', cidade: 'Campinas', emoji: '🏠'},
  { id: '3', nome: 'Lar Animal', cidade: 'Santos', emoji: '🏠'},
  { id: '4', nome: 'Vida Pet', cidade: 'Sorocaba', emoji: '🏠'},
];

export default function Ongs() {

  const renderItem = ({ item }: { item: typeof ONGS_DATA[0] }) => (
    <View style={styles.card}>
      <Text style={styles.emoji}>
        {item.emoji}
      </Text>

      <Text style={styles.nome}>
        {item.nome}
      </Text>

      <Text style={styles.cidade}>
        📍 {item.cidade}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        ONGs Parceiras
      </Text>

      <FlatList
        data={ONGS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  card: {
    backgroundColor: '#DFF6E4',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    borderLeftWidth: 6,
    borderLeftColor: '#2E8B57',
  },

  emoji: {
    fontSize: 30,
    marginBottom: 10,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E5631',
  },

  cidade: {
    fontSize: 16,
    marginTop: 5,
    color: '#444',
  },
});