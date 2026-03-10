import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Home as HomeIcon, Star } from 'lucide-react';
import SearchBar from '../components/search/SearchBar';
import PropertyCard from '../components/properties/PropertyCard';

// Dummy data for initial display
const FEATURED_PROPERTIES = [
    {
        id: '1',
        título: 'Casa Residencial moderna en Zona Centro',
        precio: 15000,
        tipo: 'casa',
        zona: 'centro',
        estadoVerificacion: 'verified',
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.8,
        totalResenas: 12,
        imagenes: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']
    },
    {
        id: '2',
        título: 'Apartamento Amueblado Cerca de Palmerola',
        precio: 12000,
        tipo: 'apartamento',
        zona: 'palmerola',
        estadoVerificacion: 'verified',
        habitaciones: 2,
        banos: 1,
        promedioCalificacion: 4.5,
        totalResenas: 8,
        imagenes: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']
    },
    {
        id: '3',
        título: 'Cuarto para Estudiante en Brisas del Humuya',
        precio: 4500,
        tipo: 'cuarto',
        zona: 'brisas',
        estadoVerificacion: 'pending',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 0,
        totalResenas: 0,
        imagenes: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']
    }
];

export default function Home() {
    return (
        <div className="space-y-16 pb-12">
            {/* Hero Section */}
            <section className="relative rounded-3xl overflow-hidden bg-slate-900 mx-[-1rem] sm:mx-0">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Comayagua Cityscape"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="relative px-6 py-24 sm:py-32 lg:px-8 max-w-4xl mx-auto text-center animate-slide-up">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Encuentra tu hogar ideal en <span className="text-indigo-400">Comayagua</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto">
                        La plataforma de alquileres locales con propiedades verificadas. Cerca del Aeropuerto Palmerola, el centro histórico y las mejores zonas residenciales.
                    </p>
                </div>
            </section>

            {/* Floating Search Bar */}
            <section className="px-4">
                <SearchBar />
            </section>

            {/* Features / Trust signals */}
            <section className="py-8 bg-white rounded-3xl shadow-sm border border-slate-100 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="bg-indigo-50 p-4 rounded-full mb-4 text-indigo-600">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Propiedades Verificadas</h3>
                        <p className="text-slate-500 text-sm">Validamos la autenticidad de los anuncios para tu seguridad.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-indigo-50 p-4 rounded-full mb-4 text-indigo-600">
                            <HomeIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Trato Directo</h3>
                        <p className="text-slate-500 text-sm">Contacta a los propietarios directamente por WhatsApp.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-indigo-50 p-4 rounded-full mb-4 text-indigo-600">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Reseñas Reales</h3>
                        <p className="text-slate-500 text-sm">Lee opiniones de otros inquilinos antes de decidir.</p>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Propiedades Destacadas</h2>
                        <p className="mt-2 text-slate-500">Excelentes opciones verificadas en las mejores zonas.</p>
                    </div>
                    <Link to="/search" className="hidden sm:block text-indigo-600 hover:text-indigo-700 font-medium font-semibold flex items-center gap-1">
                        Ver todas &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_PROPERTIES.map(prop => (
                        <PropertyCard key={prop.id} property={prop} />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link to="/search" className="text-indigo-600 hover:text-indigo-700 font-semibold inline-flex items-center gap-1">
                        Ver todas las propiedades &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
}
