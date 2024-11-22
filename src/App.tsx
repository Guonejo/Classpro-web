import React from 'react';
import { 
  Download, 
  Shield, 
  Smartphone, 
  Zap,
  Star,
  ChevronRight,
  Github,
  Twitter
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Smartphone className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">ClassPro</span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#screenshots" className="hover:text-purple-400 transition-colors">Screenshots</a>
            <a href="#download" className="hover:text-purple-400 transition-colors">Descargar</a>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
            Gestiona tus horarios académicos de forma simple y eficiente
              <span className="text-purple-500">.</span>
            </h1>
            <p className="text-xl text-gray-300">
            Experimenta la nueva forma de gestionar tus clases con nuestra poderosa e intuitiva aplicación de Android.
            </p>
            <div className="flex gap-4">
              <a 
                href="#download"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Download className="w-5 h-5" />
                Descarga ahora
              </a>
              <a 
                href="#learn-more"
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-purple-500 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1974&q=80" 
              alt="App Preview" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Porqué escogernos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-purple-500" />,
                title: "Rápido como un rayo",
                description: "Optimizado para una experiencia ágil en la gestión de tus clases"
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-500" />,
                title: "Seguro y privado",
                description: "Tus datos están protegidos con seguridad de nivel empresarial"
              },
              {
                icon: <Smartphone className="w-8 h-8 text-purple-500" />,
                title: "Fácil de usar",
                description: "Interfaz intuitiva diseñada para todos los estudiantes"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            App Screenshots
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
            ].map((screenshot, index) => (
              <div key={index} className="rounded-xl overflow-hidden hover:scale-105 transition-transform">
                <img 
                  src={screenshot} 
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comienza hoy.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Únete a miles de estudiantes satisfechos y descarga nuestra app hoy mismo. Disponible en Google Play Store.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://play.google.com"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Download className="w-6 h-6" />
              Descargar aqui
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-gray-400">Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-6 h-6 text-green-500" />
              <span className="text-2xl font-bold">100K+</span>
              <span className="text-gray-400">Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-purple-500" />
              <span className="font-bold">ClassPro</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com" className="hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ClassPro dev. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;