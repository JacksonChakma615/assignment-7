const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-bold text-lg">CS — Ticket System</h1>
          </div>

          {/* Menu for desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Changelog</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Download</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
          </div>

          {/* New Ticket Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-tr from-purple-500/90 to-violet-600/90 text-white px-3 py-2 font-semibold rounded-lg">
              + New Ticket
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              {/* Hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
