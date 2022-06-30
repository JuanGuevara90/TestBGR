import {Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProductos} from '../api/getdummyjson';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos()
      .then(response => {
        setProducts(response.data);
      })
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <>
      <Text>Product</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <Text>No hay productos</Text>}
      />
    </>
  );
};

export default Product;
