import Image from "next/image";
import dogimg from '../../public/dog.jpg'

export default function Home() {
  return (
    <main>
      <div className="font-thin">Hello</div>
      <Image
      src={'https://picsum.photos/seed/picsum/200/300'}
      alt="Picture"
      width={200}
      height={200}
      quality={100}
    />
    </main>
  );
}
