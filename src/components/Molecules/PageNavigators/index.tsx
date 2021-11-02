import { PageButton } from '@components/Atoms/PageButton';
import Image from 'next/image';
import ChevronDown from '../../../assets/icons/chevron-down.svg';
import { Container } from './styles';

type Props = {
  pages: number;
}

export const PageNavigators = ({ pages }: Props) => (
  <Container>
    {Array
      .from({ length: pages }, (_, i) => i)
      .map((item) => (
        <PageButton key={item} isSelect={item + 1 === 1}>{item + 1}</PageButton>
      ))}
    <PageButton>
      <Image className="left" src={ChevronDown} width={20} height={20} />
    </PageButton>
    <PageButton>
      <Image className="right" src={ChevronDown} width={20} height={20} />
    </PageButton>
  </Container>
);
