import Image from 'next/image';
import { useState } from 'react';
import searchIcon from '@assets/icons/search-loupe.svg';
import { Container, IconContainer } from './styles';

export const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => setIsFocused(false);

  return (
    <Container isFocused={isFocused}>
      <legend>Procurando por algo específico?</legend>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Procurando por algo específico?"
        />
        <IconContainer>
          <Image src={searchIcon} width={20} height={20} objectFit="none" />
        </IconContainer>
      </label>
    </Container>
  );
};
