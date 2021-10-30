import Link from 'next/link';
import { LogoText } from './styles';

export const Logo = () => (
  <Link href="/" passHref>
    <LogoText><h1>capputeeno</h1></LogoText>
  </Link>
);
