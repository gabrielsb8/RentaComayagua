import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';

// Pages
import Home from './pages/Home';
import SearchProperties from './pages/SearchProperties';
import PublishProperty from './pages/PublishProperty';
import PropertyDetail from './pages/PropertyDetail';
import AdminPanel from './pages/AdminPanel';
import Profile from './pages/Profile';
import Login from './pages/Login';

// Protected Route Wrapper
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role, loading } = useAuth();

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600"></div>
    </div>
  );

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return children;
};

function AppRoutes() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchProperties />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route
              path="/publish"
              element={
                <ProtectedRoute allowedRoles={['owner', 'admin']}>
                  <PublishProperty />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Simple Footer */}
        <footer className="bg-white border-t border-slate-200 py-12 text-center mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-2xl text-slate-800 tracking-tight mb-4">
              Renta<span className="text-indigo-600">Comayagua</span>
            </h2>
            <p className="text-slate-500">
              La plataforma confiable de alquileres locales con propiedades verificadas.
            </p>
            <p className="text-slate-400 text-sm mt-8">
              &copy; {new Date().getFullYear()} RentaComayagua. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
