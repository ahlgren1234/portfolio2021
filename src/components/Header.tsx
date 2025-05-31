import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-3xl">
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Peter Ahlgren
              </h1>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-75"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-75"></div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Software Engineer & Web Developer
            </p>
            <p className="text-xl text-gray-400">
              Jag skapar moderna och användarvänliga webbapplikationer med fokus på prestanda och användarupplevelse.
            </p>
          </div>
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-75 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-75 animate-pulse animation-delay-1000"></div>
            <Image
              src="/hi.png"
              alt="Peter Ahlgren"
              fill
              className="rounded-full object-cover border-4 border-gray-700 relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 