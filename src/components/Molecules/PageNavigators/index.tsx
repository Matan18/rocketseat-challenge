import { PageButton } from '@components/Atoms/PageButton';
import { useProducts } from '@hooks/useProducts';
import Image from 'next/image';
import ChevronDown from '../../../assets/icons/chevron-down.svg';
import { Container } from './styles';

export const PageNavigators = () => {
  const {
    pages,
    nextPage,
    setParams,
    previousPage,
    params: { page },
  } = useProducts();

  const exactPage = (pageIndex: number) => {
    setParams((prev) => ({
      ...prev,
      page: pageIndex + 1,
    }));
  };

  return (
    <Container>
      {Array
        .from({ length: pages - 1 }, (_, i) => i)
        .map((item) => (
          <PageButton
            key={item}
            onClick={() => exactPage(item)}
            isSelect={item + 1 === page}
          >
            {item + 1}

          </PageButton>
        ))}
      <PageButton onClick={previousPage}>
        <Image className="left" src={ChevronDown} width={20} height={20} />
      </PageButton>
      <PageButton onClick={nextPage}>
        <Image className="right" src={ChevronDown} width={20} height={20} />
      </PageButton>
    </Container>
  );
};
