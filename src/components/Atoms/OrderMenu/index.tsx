import Image from 'next/image';
import { useState } from 'react';
import chevronDown from '@assets/icons/chevron-down.svg';
import { Container } from './styles';

export const OrderMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <li>
          <button type="button" role="menuitem">
            <small>Novidades</small>
          </button>
        </li>
        <li>
          <button type="button" role="menuitem">
            <small>Preço: Maior - menor</small>
          </button>
        </li>
        <li>
          <button type="button" role="menuitem">
            <small>Preço: Menor - maior</small>
          </button>
        </li>
        <li>
          <button type="button" role="menuitem">
            <small>Mais vendidos</small>
          </button>
        </li>
      </ul>
    </Container>
  );
};
