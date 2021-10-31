import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
  width: 100%;
  height: 8rem;
  padding: 2rem;
`;

export const StyledHeaderContent = styled.div`
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;
