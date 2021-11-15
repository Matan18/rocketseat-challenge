import Image from 'next/image';
import { useState } from 'react';
import chevronDown from '@assets/icons/chevron-down.svg';
import { OrderMenuItem } from '@components/Atoms/OrderMenuItem';
import { IMenuItems } from '@types';
import { Container } from './styles';

export const OrderMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuItems: IMenuItems[] = [
    {
      key: 'news',
      text: 'Novidades',
    },
    {
      key: 'higher',
      text: 'Preço: Maior - menor',
    },
    {
      key: 'lower',
      text: 'Preço: Menor - maior',
    },
    {
      key: 'sellest',
      text: 'Mais vendidos',
    },
  ];

  return (
    <Container role="menu" isOpen={isVisible} onMouseLeave={() => setIsVisible(false)}>
      <label htmlFor="filter-dropdown-toggle">
        <input
          id="filter-dropdown-toggle"
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
        />
        <small>Organizar por</small>
        <Image src={chevronDown} width={24} height={24} />
      </label>
      <ul>
        {menuItems.map((item) => (
          <OrderMenuItem id={item.key} text={item.text} key={item.key} />
        ))}
      </ul>
    </Container>
  );
};
