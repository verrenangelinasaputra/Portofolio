import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/verrenangelinasaputra',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/verrenangelina/',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/verrenangelinasaputra/',
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@verrenangelinasaputra/videos',
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={{
          maskImage: 'linear-gradient(transparent, black)',
          WebkitMaskImage: 'linear-gradient(transparent, black)',
        }}
      ></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40 sm:justify-center sm:text-center'>&copy; 2024 Built with passion by Verren. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map(link => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.title} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4'/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
