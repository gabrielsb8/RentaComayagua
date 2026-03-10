import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, BadgeCheck, Phone, Star, Shield, Image as ImageIcon } from 'lucide-react';

export default function PropertyDetail() {
    const { id } = useParams();

    // Dummy property data based on ID
    const property = {
        id,
        título: 'Casa Residencial moderna en Zona Centro',
        descripcion: 'Hermosa casa recién remodelada en el corazón de Comayagua. Cuenta con amplios espacios, acabados de lujo, y está a 5 minutos de la catedral. Seguridad 24/7 en residencial circuito cerrado.',
        precio: 15000,
        tipo: 'casa',
        zona: 'centro',
        estadoVerificacion: 'verified',
        servicios: ['Agua', 'Internet', 'Estacionamiento 2 vehiculos', 'Seguridad Privada'],
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.8,
        totalResenas: 12,
        imagenes: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600607687931-cecebd803400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ]
    };

    const isVerified = property.estadoVerificacion === 'verified';
    const whatsappMessage = encodeURIComponent(`Hola, vi tu propiedad "${property.título}" en RentaComayagua y me gustaría más información.`);

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-12 animate-slide-up">
            {/* Photo Gallery Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm">
                <div className="h-full">
                    <img
                        src={property.imagenes[0]}
                        alt="Main property view"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="hidden md:grid grid-rows-2 gap-4 h-full">
                    {property.imagenes.slice(1, 3).map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Property view ${i + 2}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    ))}
                </div>
            </div>

            {/* Main Content Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                {property.tipo}
                            </span>
                            {isVerified && (
                                <span className="flex items-center gap-1 bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                                    <BadgeCheck className="w-4 h-4" /> Verificado por Admin
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{property.título}</h1>

                        <div className="flex flex-wrap items-center text-slate-600 gap-x-6 gap-y-2 font-medium">
                            <span className="flex items-center gap-1.5"><MapPin className="w-5 h-5 text-indigo-500" /> {property.zona}, Comayagua</span>
                            <span className="flex items-center gap-1.5"><Bed className="w-5 h-5 text-indigo-500" /> {property.habitaciones} Habitaciones</span>
                            <span className="flex items-center gap-1.5"><Bath className="w-5 h-5 text-indigo-500" /> {property.banos} Baños</span>
                        </div>
                    </div>

                    <hr className="border-slate-200" />

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Descripción</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {property.descripcion}
                        </p>
                    </div>

                    <hr className="border-slate-200" />

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Servicios Incluidos</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {property.servicios.map((s, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <BadgeCheck className="w-5 h-5 text-indigo-600" /> {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="border-slate-200" />

                    {/* Reviews Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">Reseñas</h2>
                            <div className="flex items-center gap-1 text-lg font-semibold text-slate-800 bg-amber-50 px-3 py-1 rounded-lg">
                                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                {property.promedioCalificacion} <span className="text-slate-500 text-sm font-normal">({property.totalResenas} reseñas)</span>
                            </div>
                        </div>
                        {/* Dummy Review */}
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-indigo-200 rounded-full flex justify-center items-center text-indigo-700 font-bold">M</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">María López</h4>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600">Excelente ubicación y la casa estaba en perfectas condiciones. El dueño fue muy amable durante el contrato.</p>
                        </div>
                    </div>
                </div>

                {/* Sticky Action Card */}
                <div className="lg:col-span-1 relative">
                    <div className="sticky top-24 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 mt-8 lg:mt-0">
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">Precio Mensual</p>
                        <p className="text-4xl font-bold text-indigo-700 mb-6 font-mono">L. {property.precio.toLocaleString()}</p>

                        <a
                            href={`https://wa.me/50400000000?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-200"
                        >
                            <Phone className="w-6 h-6" /> Contactar Propietario
                        </a>

                        <div className="mt-6 flex items-start gap-3 text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <Shield className="w-6 h-6 text-slate-400 flex-shrink-0" />
                            <p>Recomendamos siempre verificar la propiedad en persona antes de realizar cualquier tipo de depósito.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
