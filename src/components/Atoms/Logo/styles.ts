import styled from 'styled-components';
import Link from 'next/link';

export const LogoText = styled(Link)`
  font-size: 40px;
  line-height: 1.5em;
  color: ${(props) => props.theme.colors.text.logo};
  font-family: ${(props) => props.theme.fonts.sairaStencileOne};
`;
