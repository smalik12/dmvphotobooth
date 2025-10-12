import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function PhotoBoothInfoPage() {
  return (
    <div style={{ marginTop: '80px' }}>
      <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Photo Booth Experience</h1>
        <p className="text-lg text-white-700" style={{ marginBottom: '20px' }}>
          Capture your special moments with our state-of-the-art photo booth.
          Perfect for events, parties, and gatherings, our booth offers fun
          props, instant prints, and digital sharing options to make your
          experience unforgettable.
        </p>

        <Image
          src={'/photobooth/1.png'}
          alt={'instructions'}
          width={750}
          height={400}
          className="object-cover shadow-md"
        />

        <Image
          src={'/photobooth/2.png'}
          alt={'instructions'}
          width={750}
          height={400}
          className="object-cover shadow-md"
        />

        <Image
          src={'/photobooth/3.png'}
          alt={'instructions'}
          width={750}
          height={400}
          className="object-cover shadow-md"
        />

        <Image
          src={'/photobooth/4.png'}
          alt={'instructions'}
          width={750}
          height={400}
          className="object-cover shadow-md"
        />
      </section>
    </div>
  );
}
