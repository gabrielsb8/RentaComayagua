import { Star } from 'lucide-react';

export default function RatingBadge({ 
    promedioCalificacion = 0, 
    totalResenas = 0, 
    className = "", 
    variant = "default" 
}) {
    const isRatingValid = Number(promedioCalificacion) > 0;
    const areReviewsValid = Number.isInteger(Number(totalResenas)) && Number(totalResenas) > 0;

    // Default styles (PropertyCard)
    let containerStyle = "gap-1 text-sm bg-slate-50 px-2 py-0.5 rounded-md text-slate-700 font-medium";
    let iconSize = "w-3 h-3";
    let textColor = "text-slate-400";
    let missingStyle = "gap-1 text-sm bg-slate-50 px-2 py-0.5 rounded-md text-slate-500 font-medium";

    // Large styles (PropertyDetail)
    if (variant === "large") {
        containerStyle = "gap-1.5 text-lg bg-amber-50 px-3 py-1 rounded-lg text-slate-800 font-semibold";
        iconSize = "w-5 h-5";
        textColor = "text-slate-500 text-sm";
        missingStyle = "gap-1 text-lg bg-slate-50 px-3 py-1 rounded-lg text-slate-600 font-medium";
    }

    if (!isRatingValid) {
        return (
            <div className={`flex items-center whitespace-nowrap shrink-0 ${missingStyle} ${className}`} style={{ whiteSpace: 'nowrap' }}>
                <Star className={`${iconSize} text-slate-400 shrink-0`} />
                <span className="font-normal shrink-0" style={{ whiteSpace: 'nowrap' }}>Sin reseñas</span>
            </div>
        );
    }

    return (
        <div className={`flex items-center whitespace-nowrap shrink-0 ${containerStyle} ${className}`} style={{ whiteSpace: 'nowrap' }}>
            <Star className={`${iconSize} fill-amber-400 text-amber-400 shrink-0`} />
            <span className="shrink-0" style={{ whiteSpace: 'nowrap' }}>{Number(promedioCalificacion).toFixed(1)}</span>
            {areReviewsValid && (
                <span className={`${textColor} font-normal shrink-0 inline-flex items-center`} style={{ whiteSpace: 'nowrap', gap: '4px' }}>
                    <span>{totalResenas}</span>
                    <span>reseñas</span>
                </span>
            )}
        </div>
    );
}
