export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      {/* p-0.5 means padding */}
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {/* className calls the global variables instead of local that isn't efficient to use */}
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        {/* overrides specific design for active button */}
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
