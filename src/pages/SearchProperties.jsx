import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import PropertyCard from '../components/properties/PropertyCard';
import { Filter, ArrowUpDown } from 'lucide-react';

import { ALL_PROPERTIES } from '../data/mockProperties';

export default function SearchProperties() {
    const location = useLocation();
    const initialFilters = location.state?.filters || null;

    const [properties, setProperties] = useState(ALL_PROPERTIES);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState('recent');

    const handleSearch = (filters) => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            let filtered = ALL_PROPERTIES.filter(p => {
                if (filters.tipo && p.tipo !== filters.tipo) return false;
                if (filters.zona && p.zona !== filters.zona) return false;
                if (filters.minPrecio && p.precio < parseInt(filters.minPrecio)) return false;
                if (filters.maxPrecio && p.precio > parseInt(filters.maxPrecio)) return false;
                if (filters.residencial && !p.residencial.toLowerCase().includes(filters.residencial.toLowerCase())) return false;
                return true;
            });
            setProperties(filtered);
            setLoading(false);
        }, 600);
    };

    // Run search on mount if initial filters exist
    useEffect(() => {
        if (initialFilters) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            handleSearch(initialFilters);
        }
    }, [initialFilters]);

    const sortProperties = (props, method) => {
        switch (method) {
            case 'price_asc':
                return [...props].sort((a, b) => a.precio - b.precio);
            case 'price_desc':
                return [...props].sort((a, b) => b.precio - a.precio);
            case 'recent':
            default:
                // Assuming desc IDs roughly equivalent to recency for dummy data
                return [...props].sort((a, b) => b.id.localeCompare(a.id));
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProperties(prev => sortProperties(prev, sortBy));
    }, [sortBy]);

    return (
        <div className="space-y-8 pb-12">
            <div className="bg-indigo-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 text-white text-center mb-16 rounded-b-[3rem] shadow-inner">
                <h1 className="text-3xl font-bold mb-4">Buscar Propiedades en Comayagua</h1>
                <p className="text-indigo-200 max-w-2xl mx-auto">Encuentra casas, apartamentos y cuartos de manera fácil y rápida.</p>
            </div>

            <SearchBar onSearch={handleSearch} />

            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 mt-8">
                <p className="text-slate-600 mb-4 sm:mb-0">
                    Mostrando <span className="font-bold text-slate-900">{properties.length}</span> resultados
                </p>

                <div className="flex items-center gap-2">
                    <ArrowUpDown className="w-5 h-5 text-slate-400" />
                    <select
                        className="bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 text-sm"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="recent">Más recientes</option>
                        <option value="price_asc">Precio: Menor a Mayor</option>
                        <option value="price_desc">Precio: Mayor a Menor</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-slate-200 aspect-[4/3] rounded-2xl w-full"></div>
                    ))}
                </div>
            ) : (
                <>
                    {properties.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-slate-900 mb-2">No se encontraron propiedades</h3>
                            <p className="text-slate-500">Intenta ajustar tus filtros de búsqueda.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.map(prop => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
