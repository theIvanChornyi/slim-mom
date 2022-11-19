import DiaryProductsItem from 'components/DiaryProductsItem';
import { ListProducts, Text } from './DiaryProductsList.styled';

export default function DiaryProductsList({ products }) {
  return (
    <>
      {products?.length > 0 ? (
        <ListProducts>
          {products.map(product => (
            <DiaryProductsItem
              key={product.id}
              name={product.title}
              weight={product.weight}
              kcal={product.kcal}
            />
          ))}
        </ListProducts>
      ) : (
        <Text>Please, add product!</Text>
      )}
    </>
  );
}
