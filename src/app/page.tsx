import Image from "next/image";
import dogimg from '../../public/dog.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="font-thin">Hello</div>
      <Image
      src={dogimg}
      alt="Picture"
      width={200}
      height={200}
      quality={100}
    />
    <div>
      <Link href="/login">Login</Link>
    </div>
    <div>
      <Link href="/register">Register</Link>
    </div>
    </main>
  );
}
