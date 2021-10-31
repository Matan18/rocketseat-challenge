import Image from 'next/image';
import Link from 'next/link';
import shoppinBagIcon from '@assets/icons/shopping-bag.svg';
import { Container } from './styles';

export const ShippingBag = () => (
  <Container>
    <Link href="/cart" passHref>
      <a>
        <Image src={shoppinBagIcon} width={24} height={24} />
        <span className="bagCount">2</span>
      </a>
    </Link>
  </Container>
);
