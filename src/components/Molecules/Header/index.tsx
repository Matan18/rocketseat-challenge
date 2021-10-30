import { Logo } from '@atoms/Logo';
import { SearchBox } from '@atoms/SearchBox';
import { ShippingBag } from '@atoms/ShippingBag';
import { StyledHeaderContainer, StyledHeaderContent } from './styles';

export const Header = () => (
  <StyledHeaderContainer>
    <StyledHeaderContent>
      <Logo />
      <div>
        <SearchBox />
        <ShippingBag />
      </div>
    </StyledHeaderContent>
  </StyledHeaderContainer>
);
