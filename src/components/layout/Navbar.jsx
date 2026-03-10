import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Home, Search, PlusCircle, User, Shield, LogOut, LogIn } from 'lucide-react';

export default function Navbar() {
    const { user, role, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <Home className="h-6 w-6 text-indigo-600" />
                            <span className="font-bold text-xl text-slate-800 tracking-tight">Renta<span className="text-indigo-600">Comayagua</span></span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link to="/search" className="text-slate-600 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
                            <Search className="h-4 w-4" /> Buscar
                        </Link>

                        {user ? (
                            <>
                                {(role === 'owner' || role === 'admin') && (
                                    <Link to="/publish" className="hidden md:flex items-center gap-1 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                                        <PlusCircle className="h-4 w-4" /> Publicar
                                    </Link>
                                )}

                                {role === 'admin' && (
                                    <Link to="/admin" className="hidden md:flex items-center gap-1 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                                        <Shield className="h-4 w-4" /> Admin
                                    </Link>
                                )}

                                <Link to="/profile" className="text-slate-600 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
                                    <User className="h-4 w-4" /> Perfil
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="ml-2 text-slate-500 hover:text-red-500 flex items-center gap-1 font-medium transition-colors"
                                    title="Cerrar Sessión"
                                >
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm">
                                <LogIn className="h-4 w-4" /> Entrar
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
