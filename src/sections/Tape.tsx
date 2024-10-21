import StarIcon from '@/assets/icons/star.svg';

const words = [
  "Figma",
  "Smojo",
  "Deep Learning",
  "Machine Learning",
  "Transformer",
  "Python",
  "MySQL",
  "SQL Server",
  "R",
  "Android",
  "React",
  "Tailwind CSS",
]

export const TapeSection = () => {
  return <div>
    <div className='py-16 lg:mt-60'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-2'>
        <div className='flex [max-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]'>    
          <div className='flex flex-none gap-4 py-3'>
            {words.map(word => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className="size-6 text-gray-900"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>;
};
