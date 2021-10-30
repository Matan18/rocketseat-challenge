import Image from 'next/image';
import Link from 'next/link';
import shoppinBagIcon from '@assets/icons/shopping-bag.svg';
import { Container } from './styles';

export const ShippingBag = () => (
  <Link href="/cart" passHref>
    <Container>
      <a>
        <Image src={shoppinBagIcon} width={24} height={24} />
      </a>
      <span>2</span>
    </Container>
  </Link>
);
