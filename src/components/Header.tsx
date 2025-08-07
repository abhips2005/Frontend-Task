import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Beyond UI</span>
          </Link>

          {/* Navigation and Buttons */}
          <div className="flex items-center space-x-8">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Homepage
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                About us
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Features
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Contact us
              </Link>
            </nav>

            {/* Demo Button */}
            <Link 
              href="/demo" 
              className="bg-white text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              Demo
            </Link>

            {/* Get Started Button */}
            <button className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 