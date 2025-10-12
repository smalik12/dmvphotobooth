import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: string; // default: left
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imagePosition = 'left',
}: ServiceCardProps) {
  const isImageLeft = imagePosition === 'left';

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 my-8 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        isImageLeft ? '' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-[200px] shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );
}
