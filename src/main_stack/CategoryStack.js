import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ProductFiltered from '../components/product_screen/ProductFiltered';
// import ProductDetails from '../components/product_screen/ProductDetails';
import CategoryList from '../components/product_screen/CategoryList';
// import ProductReview from '../components/product_screen/ProductReview';

const Stack = createNativeStackNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category List"
        component={CategoryList}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
}

export default CategoryStack;
