import Image from 'next/image';
import Login from './components/Login';

export default function Home() {
  return (
    <div>
      <main className="bg-txtbox_bg_color_2">
        <Login />
      </main>
    </div>
  );
}

