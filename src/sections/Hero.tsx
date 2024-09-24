import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
// import ArrowDown from '@assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
  <div className='py-32 md:py-48 lg:py-55 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5' style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>

      {/* star icons */}
      <HeroOrbit size={700} rotation={-75}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={10}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={610} rotation={120}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      {/* white stars */}
      <HeroOrbit size={750} rotation={-20}>
        <SparkleIcon className="size-8 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={800} rotation={90}>
        <SparkleIcon className="size-5 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={765} rotation={150}>
        <SparkleIcon className="size-10 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={200}>
        <SparkleIcon className="size-6 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={830} rotation={250}>
        <SparkleIcon className="size-9 text-emerald-300/2" />
      </HeroOrbit>
    </div>

    <div className="container">
      <div className='flex flex-col items-center'>
      <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop"/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2.5 rounded-full'></div>
        <div className='text-sm font-medium'>Open to work</div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building exceptional user experiences</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button className='inline-flex items-center ga-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore My Projects</span>
          {/* <ArrowDown/> */}
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>🧑🏻‍💻</span>
          <span className='font-semibold '>Let's connect</span>
        </button>
      </div>
      </div>
    </div>
  </div>
  );
};
