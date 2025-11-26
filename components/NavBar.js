import Link from 'next/link';

const NavBar = () => (
  <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
    <Link href="/">Home</Link>{' | '}
    <Link href="/survey">Survey</Link>{' | '}
    <Link href="/dashboard">Dashboard</Link>{' | '}
    <Link href="/chat">Chat</Link>{' | '}
    <Link href="/login">Login</Link>{' | '}
    <Link href="/subscribe">Subscribe</Link>
  </nav>
);

export default NavBar;
