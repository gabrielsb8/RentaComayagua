import { useState } from 'react';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

export default function PublishProperty() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call to upload data & images
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            window.scrollTo(0, 0);
        }, 1500);
    };

    if (success) {
        return (
            <div className="max-w-3xl mx-auto mt-12 text-center bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100 animate-slide-up">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Propiedad Enviada Exitosamente!</h2>
                <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto">
                    Tu propiedad ha sido registrada y está en estado <strong>Pendiente</strong>. Un administrador de RentaComayagua la revisará pronto para verificarla.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-indigo-200"
                >
                    Publicar Otra Propiedad
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-12 animate-slide-up">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900">Publicar Nueva Propiedad</h1>
                <p className="text-slate-500 mt-2">Completa la información detallada para atraer mejores inquilinos.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-slate-100 space-y-8">

                {/* Section 1: Basic Info */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-2">Información Básica</h3>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Título del Anuncio</label>
                        <input type="text" required placeholder="Ej: Apartamento amueblado céntrico" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Tipo</label>
                            <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="casa">Casa</option>
                                <option value="apartamento">Apartamento</option>
                                <option value="cuarto">Cuarto</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Zona en Comayagua</label>
                            <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="centro">Centro Histórico</option>
                                <option value="palmerola">Cerca de Palmerola</option>
                                <option value="brisas">Brisas del Humuya</option>
                                <option value="escalante">Barrio Escalante</option>
                                <option value="otros">Otra Zona</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Precio (Lempiras)</label>
                            <input type="number" required placeholder="0" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Habitaciones</label>
                            <input type="number" min="0" required placeholder="1" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Baños</label>
                            <input type="number" min="0" step="0.5" required placeholder="1" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Descripción Detallada</label>
                        <textarea rows="4" required placeholder="Describe las amenidades, reglas, requisitos..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"></textarea>
                    </div>
                </div>

                {/* Section 2: Upload Images */}
                <div className="space-y-6 pt-6">
                    <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-2">Fotografías</h3>
                    <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-indigo-50 transition-colors cursor-pointer">
                        <UploadCloud className="w-12 h-12 text-indigo-400 mb-4" />
                        <p className="font-semibold text-indigo-900 mb-1">Haz clic para subir imágenes o arrástralas aquí</p>
                        <p className="text-sm text-indigo-600/70">Máximo 5 imágenes de hasta 5MB. Ideal Formato Horizontal.</p>
                        <input type="file" multiple accept="image/*" className="hidden" />
                    </div>
                </div>

                <div className="pt-8">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-10 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-lg shadow-indigo-200 text-lg"
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        ) : "Publicar Propiedad"}
                    </button>
                </div>
            </form>
        </div>
    );
}
