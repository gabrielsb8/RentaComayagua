import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchBar({ onSearch }) {
    const [filters, setFilters] = useState({
        keyword: '',
        tipo: '',
        zona: '',
        minPrecio: '',
        maxPrecio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(filters);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-3 md:p-4 mt-8 md:-mt-12 relative z-10 w-full max-w-5xl mx-auto border border-slate-100">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                {/* keyword search */}
                <div className="flex-grow flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                    <Search className="h-5 w-5 text-slate-400 mr-2 shrink-0" />
                    <input
                        type="text"
                        name="keyword"
                        placeholder="Buscar por zona, residencial..."
                        className="w-full bg-transparent border-none focus:outline-none text-slate-700 placeholder:text-slate-400"
                        value={filters.keyword}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                    {/* Tipo Property */}
                    <select
                        name="tipo"
                        className="bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 min-w-[140px]"
                        value={filters.tipo}
                        onChange={handleChange}
                    >
                        <option value="">Cualquier Tipo</option>
                        <option value="casa">Casas</option>
                        <option value="apartamento">Apartamentos</option>
                        <option value="cuarto">Cuartos</option>
                    </select>

                    {/* Zona */}
                    <select
                        name="zona"
                        className="bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 min-w-[160px]"
                        value={filters.zona}
                        onChange={handleChange}
                    >
                        <option value="">Cualquier Zona</option>
                        <option value="centro">Centro Histórico</option>
                        <option value="palmerola">Cerca de Palmerola</option>
                        <option value="brisas">Brisas del Humuya</option>
                        <option value="escalante">Barrio Escalante</option>
                        <option value="otros">Otras Zonas</option>
                    </select>

                    {/* Price Range (Simplified for top bar) */}
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 min-w-[200px]">
                        <input
                            type="number"
                            name="minPrecio"
                            placeholder="Min L."
                            className="w-full bg-transparent border-none focus:outline-none text-slate-700 placeholder:text-slate-400 text-sm"
                            value={filters.minPrecio}
                            onChange={handleChange}
                        />
                        <span className="text-slate-300">-</span>
                        <input
                            type="number"
                            name="maxPrecio"
                            placeholder="Max L."
                            className="w-full bg-transparent border-none focus:outline-none text-slate-700 placeholder:text-slate-400 text-sm"
                            value={filters.maxPrecio}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 font-semibold transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md shadow-indigo-200"
                >
                    <Filter className="h-5 w-5 md:hidden" />
                    <span className="md:inline">Buscar</span>
                </button>
            </form>
        </div>
    );
}
