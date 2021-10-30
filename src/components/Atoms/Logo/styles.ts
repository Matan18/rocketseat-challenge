import styled from 'styled-components';

export const LogoText = styled.a`
  h1 {
    font-size: 40px;
    line-height: 150%;
    color: ${(props) => props.theme.colors.text.logo};
    font-family: ${(props) => props.theme.fonts.sairaStencileOne};
  }
`;
