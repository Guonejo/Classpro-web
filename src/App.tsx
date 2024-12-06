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
import QRCode from 'react-qr-code'; // Importa la biblioteca react-qr-code

function App() {
  // URL directa al archivo APK en GitHub
  const apkUrl = "https://raw.githubusercontent.com/tu_usuario/tu_repositorio/rama/assets/ClassProAppV1.2.apk";

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
                Descargar ahora
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

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Descarga nuestra app
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Escanea el código QR con tu teléfono para descargar la APK directamente.
          </p>
          <div className="flex justify-center">
            {/* Genera el QR Code */}
            <QRCode
              value={apkUrl} // URL directa al archivo APK
              size={200} // Tamaño del QR
              bgColor="#ffffff" // Color de fondo
              fgColor="#000000" // Color del QR
            />
          </div>
          <div className="mt-6">
            <a 
              href={apkUrl} 
              download="ClassProAppV1.2.apk" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Download className="w-6 h-6" />
              Descargar APK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
