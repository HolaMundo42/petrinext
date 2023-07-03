import Image from 'next/image';
import Login from './login/page';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="bg-txtbox_bg_color_2">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </main>
    </div>
  );
}

