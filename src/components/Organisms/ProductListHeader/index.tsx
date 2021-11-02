import { OrderMenu } from '@components/Atoms/OrderMenu';
import { ProductListTabFilter, ProductListType } from '@components/Atoms/ProductListTabFilter';
import { useState } from 'react';
import { Container } from './styles';

type TabSelectItem = {
  id: ProductListType,
  text: string;
}

export const ProductListHeader = () => {
  const [selected, setSelected] = useState<ProductListType>('all');

  const tabSelectIdList: TabSelectItem[] = [
    { id: 'all', text: 'todos os produtos' },
    { id: 'shirt', text: 'camisetas' },
    { id: 'cup', text: 'camisetas' },
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
            checked={item.id === selected}
            onChange={setSelected}
          />
        ))}
      </ul>
      <OrderMenu />
    </Container>
  );
};
