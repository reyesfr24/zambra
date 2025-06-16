import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Phone, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-primary-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo + Nombre */}
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Logo Grupo Zambra" className="h-10 w-auto rounded-full object-cover" />
              <h1 className="text-xl font-bold text-primary-800">Grupo Zambra 2.0</h1>
            </div>
            {/* Navegación */}
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-primary-700 hover:text-primary-900 transition-colors">
                Inicio
              </a>
              <a href="#sobre-nosotros" className="text-primary-700 hover:text-primary-900 transition-colors">
                Sobre Nosotros
              </a>
              <a href="#galeria" className="text-primary-700 hover:text-primary-900 transition-colors">
                Galería
              </a>
              <a href="#contacto" className="text-primary-700 hover:text-primary-900 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
      id="inicio"
      className="relative flex items-end justify-center pt-20 pb-6 px-4 overflow-hidden
                h-[70vh] sm:h-[80vh] md:h-screen lg:min-h-screen"
    >
      <style jsx>{`
        @media (min-width: 768px) {
          .hero-image {
            object-position: center 25% !important;
          }
        }
      `}</style>

      <div className="absolute inset-0">
        <img
          src="/portada.webp"
          alt="Grupo Zambra 2.0"
          className="w-full h-full object-cover scale-85 sm:scale-100 md:scale-147 hero-image"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Contenedor del texto: Absoluto y cerca del borde inferior */}
      <div className="absolute bottom-16 left-8 right-8 text-center text-white z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl">
          Grupo Zambra 2.0
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-xl font-medium px-2 sm:px-4">
          Música en vivo para hacer de tu evento una experiencia inolvidable
        </p>
      </div>
    </section>


      {/* About Section */}
      <section id="sobre-nosotros" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary-800 mb-8">Sobre Nosotros</h2>
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-lg text-primary-700 leading-relaxed mb-6">
                Grupo Zambra 2.0 es un grupo musical con una amplia trayectoria en el mundo del entretenimiento.
                Nuestro compromiso es brindar la mejor música en vivo para hacer de cada evento una experiencia única e inolvidable.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed mb-6">
                Con un repertorio que abarca desde los clásicos más queridos hasta los éxitos más actuales, nos adaptamos a los gustos de cada cliente.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                En Grupo Zambra 2.0 entendemos que la música es el alma de cualquier celebración.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 px-4 bg-primary-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-800 text-center mb-12">Galería</h2>

            {/* Photos Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary-700 mb-6 text-center">Fotos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden border-primary-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={`/galeria${i}.webp`}
                        alt={`Foto del grupo ${i}`}
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Videos Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-primary-700 mb-6 text-center">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="overflow-hidden border-primary-200">
                    <CardContent className="p-0">
                      <video
                        controls
                        className="w-full h-64 object-cover"
                        src={`/video${i}.mp4`}
                        poster={`/poster${i}.png`}
                      >
                        Tu navegador no soporta el elemento de video.
                      </video>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary-800 mb-8">Contacto</h2>
            <p className="text-xl text-primary-700 mb-12">
              ¿Listo para hacer de tu evento algo especial? Contáctanos y hablemos de tu celebración
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-primary-200 hover:shadow-lg transition-shadow min-w-[300px]">
                <CardContent className="p-8 text-center">
                  <Instagram className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Instagram</h3>
                  <p className="text-primary-600 mb-4">Síguenos para ver nuestras últimas actuaciones</p>
                  <Button
                    variant="outline"
                    className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                    onClick={() => window.open("https://instagram.com/grupozambra", "_blank")}
                  >
                    @grupozambra
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary-200 hover:shadow-lg transition-shadow min-w-[300px]">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Teléfono</h3>
                  <p className="text-primary-600 mb-4">Llámanos para consultas y reservas</p>
                  <Button
                    variant="outline"
                    className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                    onClick={() => window.open("tel:+34123456789", "_self")}
                  >
                    +34 654 085 517
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary-200 hover:shadow-lg transition-shadow min-w-[300px]">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Email</h3>
                  <p className="text-primary-600 mb-4">Escríbenos para más información</p>
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                      onClick={() => window.open("mailto:contratacioneszambra@gmail.com", "_self")}
                    >
                      contratacioneszambra@gmail.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Grupo Zambra 2.0</h3>
          <p className="text-primary-200 mb-4">Música en vivo para eventos inolvidables</p>
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} Grupo Zambra 2.0. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App