import Image from 'next/image';

export const Sheep = () => {
  return (
    <div className="mt-4">
      <Image
        src="/images/logos/sheep.svg"
        alt="sheep"
        width={163}
        height={180}
      />
    </div>
  );
};
