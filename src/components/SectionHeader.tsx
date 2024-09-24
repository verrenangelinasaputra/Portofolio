export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {title: string;
    eyebrow: string;
    description: string;}) => {
    return (
    <>
        <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">{eyebrow}</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
        <p className="text-center md:text-lg lg:mt-2 text-white/60 mt4 max-w-md mx-auto">{description}</p>
     </>
    );
};