import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('tenant');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, register, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            await loginWithGoogle(role);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError(err.message || 'Error al autenticar con Google.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                await login(email, password);
                navigate('/');
            } else {
                await register(email, password, name, '', role);
                navigate('/');
            }
        } catch (err) {
            console.error(err);
            setError(err.message || 'Ocurrió un error. Verifica tus credenciales.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center -mx-4 sm:mx-0 animate-slide-up">
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-slate-100 w-full max-w-md w-full relative overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-indigo-50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                            {isLogin ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
                        </h2>
                        <p className="text-slate-500">
                            {isLogin ? 'Inicia sesión para continuar' : 'Únete a RentaComayagua'}
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm border border-red-100 font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                            <input
                                type="password"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Quiero usar la app como:</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className={`border rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all ${role === 'tenant' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                                        <input type="radio" name="role" value="tenant" className="hidden" checked={role === 'tenant'} onChange={() => setRole('tenant')} />
                                        <span className="font-semibold mb-1">Inquilino</span>
                                        <span className="text-xs text-center">Busco alquilar</span>
                                    </label>
                                    <label className={`border rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all ${role === 'owner' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                                        <input type="radio" name="role" value="owner" className="hidden" checked={role === 'owner'} onChange={() => setRole('owner')} />
                                        <span className="font-semibold mb-1">Propietario</span>
                                        <span className="text-xs text-center">Tengo propiedad</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3.5 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-lg shadow-indigo-200 mt-8"
                        >
                            {loading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : isLogin ? (
                                <><LogIn className="w-5 h-5" /> Entrar</>
                            ) : (
                                <><UserPlus className="w-5 h-5" /> Registrarme</>
                            )}
                        </button>
                    </form>

                    <div className="relative flex items-center justify-center mt-8 mb-6">
                        <div className="border-t border-slate-200 w-full"></div>
                        <span className="bg-white px-4 text-sm font-semibold text-slate-500 absolute">O</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full bg-white border border-slate-200 hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 text-slate-700 font-bold py-3.5 px-4 rounded-xl flex justify-center items-center gap-3 transition-colors shadow-sm"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        Continuar con Google
                    </button>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        {isLogin ? (
                            <>
                                ¿No tienes cuenta? <button onClick={() => setIsLogin(false)} className="text-indigo-600 font-bold hover:underline">Regístrate</button>
                            </>
                        ) : (
                            <>
                                ¿Ya tienes cuenta? <button onClick={() => setIsLogin(true)} className="text-indigo-600 font-bold hover:underline">Inicia Sesión</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
