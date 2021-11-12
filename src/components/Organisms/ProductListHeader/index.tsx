import { OrderMenu } from '@components/Molecules/OrderMenu';
import { ProductListTabFilter, ProductListType } from '@components/Atoms/ProductListTabFilter';
import { useProducts } from '@hooks/useProducts';
import { Container } from './styles';

type TabSelectItem = {
  id: ProductListType,
  text: string;
}

export const ProductListHeader = () => {
  const { selectedCategory, setSelectedCategory } = useProducts();
  const tabSelectIdList: TabSelectItem[] = [
    { id: 'all', text: 'todos os produtos' },
    { id: 't-shirts', text: 'camisetas' },
    { id: 'mugs', text: 'camisetas' },
  ];

  return (
    <Container>
      <ul>
        {tabSelectIdList.map((item) => (
          <ProductListTabFilter
            key={item.id}
            id={item.id}
            name="tab-select"
            text={item.text}
            checked={item.id === selectedCategory}
            onChange={setSelectedCategory}
          />
        ))}
      </ul>
      <OrderMenu />
    </Container>
  );
};
