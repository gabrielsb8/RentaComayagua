import { useState } from 'react';
import { BadgeCheck, AlertCircle, XCircle, CheckCircle2 } from 'lucide-react';

export default function AdminPanel() {
    // Dummy data representing properties pending review
    const [pendingProperties, setPendingProperties] = useState([
        {
            id: 'prop-102',
            título: 'Cuarto para Estudiante en Brisas del Humuya',
            propietario: 'Juan Perez',
            precio: 4500,
            fecha: '2023-11-01',
            estado: 'pending'
        },
        {
            id: 'prop-105',
            título: 'Apartamento de Lujo Centro Histórico',
            propietario: 'Inmobiliaria Comayagua',
            precio: 15000,
            fecha: '2023-11-02',
            estado: 'pending'
        }
    ]);

    const handleAction = (id, action) => {
        // In real app, update firestore document field `estadoVerificacion`
        setPendingProperties(prev => prev.filter(p => p.id !== id));
        alert(`Propiedad ${id} ha sido ${action === 'verify' ? 'VERIFICADA' : 'RECHAZADA'}`);
    };

    return (
        <div className="max-w-6xl mx-auto pb-12 animate-slide-up">
            <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-100 p-3 rounded-xl">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Panel de Administración</h1>
                    <p className="text-slate-500 mt-1">Gestión y verificación de propiedades publicadas.</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                    <h2 className="text-xl font-semibold text-slate-900">Propiedades Pendientes de Verificación ({pendingProperties.length})</h2>
                </div>

                {pendingProperties.length === 0 ? (
                    <div className="p-12 text-center text-slate-500">
                        <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        Todo está al día. No hay propiedades pendientes.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold">ID / Fecha</th>
                                    <th className="p-4 font-semibold">Propiedad</th>
                                    <th className="p-4 font-semibold">Propietario</th>
                                    <th className="p-4 font-semibold">Precio</th>
                                    <th className="p-4 font-semibold text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pendingProperties.map((prop) => (
                                    <tr key={prop.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4">
                                            <div className="font-mono text-xs text-slate-400">{prop.id}</div>
                                            <div className="text-sm text-slate-600">{prop.fecha}</div>
                                        </td>
                                        <td className="p-4 font-medium text-slate-900">{prop.título}</td>
                                        <td className="p-4 text-slate-600">{prop.propietario}</td>
                                        <td className="p-4 font-bold text-slate-900">L. {prop.precio}</td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleAction(prop.id, 'verify')}
                                                    className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors"
                                                >
                                                    <BadgeCheck className="w-4 h-4" /> Verificar
                                                </button>
                                                <button
                                                    onClick={() => handleAction(prop.id, 'reject')}
                                                    className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors"
                                                >
                                                    <XCircle className="w-4 h-4" /> Rechazar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
