/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const ProductItem = ({title, description}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return <ProductItem {...item} />;
  };

  return (
    <>
      <Text style={styles.pageTitle}>Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={({id}) => id}
      />
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Product />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 6,
  },
  item: {
    backgroundColor: '#38bdf8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});
