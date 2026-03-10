import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Calendar, Shield, Home as HomeIcon } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';

export default function Profile() {
    const { user, role } = useAuth();

    // Dummy properties if user is owner
    const myProperties = role === 'owner' ? [
        {
            id: 'prop-102',
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
    ] : [];

    // Safely get user info with fallbacks
    const name = user?.name || user?.displayName || 'Usuario';
    const email = user?.email || '';
    const phone = user?.phone || 'No registrado';

    const formatDate = (dateValue) => {
        if (!dateValue) return 'Reciente';
        try {
            // Handle Firestore timestamp
            if (dateValue.toDate) return dateValue.toDate().toLocaleDateString('es-HN');
            return new Date(dateValue).toLocaleDateString('es-HN');
        } catch {
            return 'Fecha desconocida';
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-12 animate-slide-up">
            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full z-0"></div>

                <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 z-10 border-4 border-white shadow-lg">
                    <User className="w-16 h-16" />
                </div>

                <div className="flex-1 text-center md:text-left z-10">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{name}</h1>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                        <span className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold capitalize border border-indigo-100">
                            <Shield className="w-4 h-4" /> Rol: {role}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <Mail className="w-5 h-5 text-indigo-400" />
                            <span className="truncate">{email}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <Phone className="w-5 h-5 text-indigo-400" />
                            <span>{phone}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-slate-50 p-3 rounded-xl border border-slate-100 sm:col-span-2">
                            <Calendar className="w-5 h-5 text-indigo-400" />
                            <span>Miembro desde: {formatDate(user?.fechaRegistro || new Date())}</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-auto z-10">
                    <button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-slate-200">
                        Editar Perfil
                    </button>
                </div>
            </div>

            {role === 'owner' && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                        <HomeIcon className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Mis Propiedades</h2>
                        <span className="bg-slate-100 text-slate-600 text-sm font-bold px-3 py-1 rounded-full ml-2">
                            {myProperties.length}
                        </span>
                    </div>

                    {myProperties.length === 0 ? (
                        <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-100">
                            <p className="text-slate-500 mb-4 text-lg">Aún no tienes propiedades publicadas.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {myProperties.map(prop => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {role === 'tenant' && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                        <Shield className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Mis Reseñas</h2>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-100">
                        <p className="text-slate-500 text-lg">Aún no has escrito reseñas en ninguna propiedad.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
