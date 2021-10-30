import { Logo } from '../../Atoms/Logo';
import { SearchBox } from '../../Atoms/SearchBox';
import { ShippingBag } from '../../Atoms/ShippingBag';
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
