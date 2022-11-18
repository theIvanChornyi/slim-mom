import DiaryProductsItem from 'components/DiaryProductsItem';
import { ListProducts, Text } from './DiaryProductsList.styled';

export default function DiaryProductsList({ products }) {
  return (
    <>
      {products.length > 0 ? (
        <ListProducts>
          {products.map(product => (
            <DiaryProductsItem
              key={product.eatenProducts.id}
              name={product.eatenProducts.title}
              weight={product.eatenProducts.weight}
              kcal={product.eatenProducts.kcal}
            />
          ))}
        </ListProducts>
      ) : (
        <Text>Please, add product!</Text>
      )}
    </>
  );
}
