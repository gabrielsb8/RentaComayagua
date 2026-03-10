import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, BadgeCheck, Star } from 'lucide-react';

export default function PropertyCard({ property }) {
    // Destructure with defaults
    const {
        id,
        imagenes = [],
        título,
        precio,
        tipo,
        zona,
        estadoVerificacion,
        promedioCalificacion = 0,
        totalResenas = 0,
        habitaciones = 1,
        banos = 1
    } = property;

    const isVerified = estadoVerificacion === 'verified';
    const mainImage = imagenes.length > 0 ? imagenes[0] : 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';

    return (
        <Link to={`/property/${id}`} className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={mainImage}
                        alt={título}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm capitalize">
                            {tipo}
                        </span>
                    </div>
                    {isVerified && (
                        <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                            <BadgeCheck className="w-3 h-3" /> Verificado
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                            {título}
                        </h3>
                        {promedioCalificacion > 0 && (
                            <div className="flex items-center gap-1 text-sm font-medium text-slate-700 bg-slate-50 px-2 rounded-md">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                {promedioCalificacion.toFixed(1)}
                                <span className="text-slate-400 font-normal">({totalResenas})</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center text-slate-500 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-1 shrink-0" />
                        <span className="truncate">{zona}, Comayagua</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 mt-auto">
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                            <Bed className="w-4 h-4" /> {habitaciones} Hab
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                            <Bath className="w-4 h-4" /> {banos} Baños
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                        <div>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Precio Mensual</p>
                            <p className="font-bold text-2xl text-indigo-600">L. {precio.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
