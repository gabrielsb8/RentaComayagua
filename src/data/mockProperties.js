export const ALL_PROPERTIES = [
    {
        id: '1',
        título: 'Casa Residencial moderna en Zona Centro',
        descripcion: 'Espectacular residencia de diseño contemporáneo en el corazón de Comayagua. Disfrute de la cercanía a la catedral y zonas comerciales con la tranquilidad de una zona segura. Cuenta con amplios espacios iluminados naturalmente, acabados de primera calidad y un hermoso patio trasero ideal para reuniones familiares. Seguridad garantizada.',
        precio: 15000,
        tipo: 'casa',
        zona: 'centro',
        residencial: 'Centro Histórico',
        estadoVerificacion: 'verified',
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.8,
        totalResenas: 12,
        propietario: { nombre: 'Carlos Martínez' },
        servicios: ['Agua potable', 'Electricidad 220V', 'Internet de fibra', 'Parqueo techado', 'Mantenimiento de áreas verdes'],
        resenas: [
            { id: 'r1', autor: 'Ana García', calificacion: 5, comentario: 'Una casa preciosa, muy segura y cerca de todo en el centro. Recomiendo este alquiler.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '2',
        título: 'Apartamento Amueblado Cerca de Palmerola',
        descripcion: 'Práctico y elegante apartamento completamente amueblado, estratégicamente ubicado a escasos minutos del Aeropuerto Internacional Palmerola. Perfecto para ejecutivos o parejas que buscan comodidad inmediata. Incluye línea blanca completa, aire acondicionado central, acceso controlado y estacionamiento techado.',
        precio: 12000,
        tipo: 'apartamento',
        zona: 'palmerola',
        residencial: 'Colonia Palmerola',
        estadoVerificacion: 'verified',
        habitaciones: 2,
        banos: 1,
        promedioCalificacion: 4.5,
        totalResenas: 8,
        propietario: { nombre: 'Laura Mendoza' },
        servicios: ['Agua', 'Internet de alta velocidad', 'Aire Acondicionado', 'Parqueo asignado'],
        resenas: [
            { id: 'r2', autor: 'Jorge Luis Pérez', calificacion: 4, comentario: 'Excelente atención al detalle. El apartamento tenía todo lo necesario para mudarse de inmediato.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502672260266-1c1e5250ce07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '3',
        título: 'Cuarto para Estudiante en Brisas del Humuya',
        descripcion: 'Cómoda habitación independiente, ideal para estudiantes universitarios o profesionales solteros. Ubicada en una zona residencial muy tranquila y de fácil acceso al transporte público. El alquiler incluye servicios básicos de agua y luz. Espacio seguro y acogedor para tus estudios y descanso.',
        precio: 4500,
        tipo: 'cuarto',
        zona: 'brisas',
        residencial: 'Brisas del Humuya',
        estadoVerificacion: 'pending',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 0,
        totalResenas: 0,
        propietario: { nombre: 'Héctor Fúnez' },
        servicios: ['Agua', 'Electricidad'],
        resenas: [
            { id: 'r3', autor: 'Luis Alvarenga', calificacion: 4, comentario: 'Lugar tranquilo para estudiar, precio accesible y con buena privacidad.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '4',
        título: 'Casa amplia en Barrio Escalante',
        descripcion: 'Magnífica propiedad familiar de amplias dimensiones situada en el tradicional Barrio Escalante. Destaca por su generoso porche frontal, techos altos que mantienen la frescura y una sala de estar de concepto abierto. Cerca de supermercados y farmacias, ofrece la máxima comodidad para una vida familiar plena.',
        precio: 18000,
        tipo: 'casa',
        zona: 'escalante',
        residencial: 'Barrio Escalante',
        estadoVerificacion: 'verified',
        habitaciones: 4,
        banos: 3,
        promedioCalificacion: 5.0,
        totalResenas: 2,
        propietario: { nombre: 'Familia Valladares' },
        servicios: ['Agua potable', 'Seguridad privada', 'Recolección de basura', 'Internet'],
        resenas: [
            { id: 'r4', autor: 'Sofía Castellanos', calificacion: 5, comentario: 'Espectacular para familias grandes. El porche es súper fresco por las tardes.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '5',
        título: 'Apartamento céntrico, ideal para parejas',
        descripcion: 'Acogedor apartamento de una habitación ubicado a pasos de los mejores restaurantes y cafés de la ciudad. Su distribución inteligente aprovecha cada metro cuadrado, ofreciendo una cocina equipada, área de lavandería interna y balcón privado con vista a la calle. Excelente seguridad y ambiente vecinal.',
        precio: 8500,
        tipo: 'apartamento',
        zona: 'centro',
        residencial: 'Barrio Torondón',
        estadoVerificacion: 'verified',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 4.2,
        totalResenas: 15,
        propietario: { nombre: 'Ricardo Pineda' },
        servicios: ['Agua', 'Internet', 'Vigilancia Múltiple'],
        resenas: [
            { id: 'r5', autor: 'Milton Suárez', calificacion: 4, comentario: 'Súper bien ubicado. Puedes ir caminando a tomarte un café por las tardes tranquilamente.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502005097973-1561125fc5de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '6',
        título: 'Hermosa Casa en Colonia Fiallos',
        descripcion: 'Vivienda de ensueño en una de las colonias más cotizadas de Comayagua. Esta propiedad cuenta con un jardín frontal meticulosamente cuidado, área de barbacoa en la parte posterior y estacionamiento para dos vehículos. Sus amplios ventanales aseguran una iluminación inmejorable durante todo el día.',
        precio: 20000,
        tipo: 'casa',
        zona: 'otros',
        residencial: 'Colonia Fiallos',
        estadoVerificacion: 'verified',
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.9,
        totalResenas: 5,
        propietario: { nombre: 'Mario Castellón' },
        servicios: ['Agua', 'Electricidad', 'Cable TV', 'Internet de alta velocidad', 'Parqueo para 2 autos'],
        resenas: [
            { id: 'r6', autor: 'Andrea Zúñiga', calificacion: 5, comentario: 'Realmente hermosa y amplia. La colonia es súper tranquila para pasear a los niños.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583847268964-b28ce8fba18e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '7',
        título: 'Habitación con baño compartido en Cabañas',
        descripcion: 'Opción económica y funcional en el popular Barrio Cabañas. Esta habitación bien ventilada ofrece un ambiente pintoresco y seguro, a corta distancia del mercado municipal. Ideal para trabajadores o estudiantes que buscan minimizar costos sin sacrificar la excelente conectividad con la ciudad.',
        precio: 3000,
        tipo: 'cuarto',
        zona: 'otros',
        residencial: 'Barrio Cabañas',
        estadoVerificacion: 'pending',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 3.8,
        totalResenas: 3,
        propietario: { nombre: 'Doña Teresa' },
        servicios: ['Agua', 'Electricidad compartida'],
        resenas: [
            { id: 'r7', autor: 'Kevin Montoya', calificacion: 3, comentario: 'Bastante funcional si solo llegas a dormir. Doña Teresa es muy atenta.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '8',
        título: 'Estudio Ejecutivo en Residencial Los Laureles',
        descripcion: 'Moderno estudio tipo loft concebido para un estilo de vida exigente y minimalista. Situado en una residencial de circuito cerrado con vigilancia 24 horas, cuenta con cocina empotrada, clósets de madera de caoba y estacionamiento privado. Su diseño favorece el confort y la privacidad total.',
        precio: 10000,
        tipo: 'apartamento',
        zona: 'otros',
        residencial: 'Residencial Los Laureles',
        estadoVerificacion: 'verified',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 4.7,
        totalResenas: 22,
        propietario: { nombre: 'Inversiones Inmobiliarias HND' },
        servicios: ['Agua', 'Internet', 'Vigilancia 24/7', 'Parqueo'],
        resenas: [
            { id: 'r8', autor: 'Patricia Cruz', calificacion: 5, comentario: 'Espacio pequeño pero excelentemente aprovechado. Acabados premium increíbles.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502672260266-1c1e5250ce07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '9',
        título: 'Espaciosa Casa Familiar en Villa Universitaria',
        descripcion: 'Casa de gran atractivo ubicada a corta distancia del CURC, perfecta para catedráticos o familias numerosas. Cuenta con un extenso muro perimetral, cerca eléctrica y cisterna de alta capacidad. Su distribución incluye estudio privado, amplia sala-comedor y un corredor exterior techado.',
        precio: 14000,
        tipo: 'casa',
        zona: 'otros',
        residencial: 'Villa Universitaria',
        estadoVerificacion: 'verified',
        habitaciones: 4,
        banos: 2,
        promedioCalificacion: 4.6,
        totalResenas: 7,
        propietario: { nombre: 'Oscar Domínguez' },
        servicios: ['Agua', 'Electricidad', 'Internet', 'Cibercable', 'Seguridad Perimetral'],
        resenas: [
            { id: 'r9', autor: 'Familia Reyes', calificacion: 5, comentario: 'Cisterna enorme, nunca falta el agua, y la universidad está súper cerca.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '10',
        título: 'Moderno Complejo de Apartamentos en Barrio Abajo',
        descripcion: 'Fantástico apartamento ubicado en un complejo residencial de reciente construcción. Ofrece acabados modernos como pisos de porcelanato y ventanearía de PVC insonorizada. Ubicación excepcional con rápido acceso a la zona histórica y cercanía inmediata a bancos, gimnasios y centros de salud.',
        precio: 11000,
        tipo: 'apartamento',
        zona: 'centro',
        residencial: 'Barrio Abajo',
        estadoVerificacion: 'verified',
        habitaciones: 2,
        banos: 1,
        promedioCalificacion: 4.3,
        totalResenas: 11,
        propietario: { nombre: 'Grupo Residencial Comayagua' },
        servicios: ['Agua', 'Parqueo privado', 'Mantenimiento de áreas comúnes'],
        resenas: [
            { id: 'r10', autor: 'David Enamorado', calificacion: 4, comentario: 'Moderno y bien situado. Solo que el parquéo puede ser un poco apretado si tienes camioneta.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1628592102851-c0f54f15d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '11',
        título: 'Cuarto independiente Barrio San Francisco',
        descripcion: 'Habitación completamente independiente, diseñada para respetar tu privacidad. Situada en una calle peatonal libre de ruido vehicular, cuenta con entrada separada de la casa principal, lavabo privado y rejas de seguridad. Acceso fácil a taxis y rutas de transporte durante todo el día.',
        precio: 3500,
        tipo: 'cuarto',
        zona: 'otros',
        residencial: 'Barrio San Francisco',
        estadoVerificacion: 'pending',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 0,
        totalResenas: 0,
        propietario: { nombre: 'María Izaguirre' },
        servicios: ['Agua potable', 'Luz eléctrica'],
        resenas: [
            { id: 'r11', autor: 'Gabriela M.', calificacion: 5, comentario: 'Muy seguro y callado por la noche, excelente si trabajas madrugadas.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '12',
        título: 'Casa Pequeña en Colonia La Sabana',
        descripcion: 'Hermosa y compacta casa ideal para familias pequeñas o recién casados. Ubicada en una colonia de gran crecimiento y plusvalía, la vivienda cuenta con un encantador diseño rústico-moderno, protecciones de hierro forjado en toda la estructura y un pequeño patio interno que brinda mucha luz y ventilación natural.',
        precio: 9000,
        tipo: 'casa',
        zona: 'otros',
        residencial: 'Colonia La Sabana',
        estadoVerificacion: 'verified',
        habitaciones: 2,
        banos: 1,
        promedioCalificacion: 4.1,
        totalResenas: 4,
        propietario: { nombre: 'Antonio Bueso' },
        servicios: ['Agua', 'Extracción de basura', 'Conexión para lavadora/secadora'],
        resenas: [
            { id: 'r12', autor: 'Karla Paz', calificacion: 4, comentario: 'La casa es muy bella. La colonia suele ser ruidosa los fines de semana, pero dentro apenas se nota.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '13',
        título: 'Lujoso Apartamento en Residencial Los Almendros',
        descripcion: 'Experimenta un elevado estilo de vida en este apartamento de tres habitaciones. Condominio exclusivo que ofrece tranquilidad absoluta y una vecindad selecta. Características sobresalientes incluyen amplios closets walk-in, cocina con top de granito, calentador de agua central y climatización instalada.',
        precio: 16000,
        tipo: 'apartamento',
        zona: 'otros',
        residencial: 'Residencial Los Almendros',
        estadoVerificacion: 'verified',
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.9,
        totalResenas: 19,
        propietario: { nombre: 'Roberto Zelaya' },
        servicios: ['Agua', 'Internet de banda ancha', 'Seguridad privada', 'Parqueo cerrado y techado'],
        resenas: [
            { id: 'r13', autor: 'Héctor Guillén', calificacion: 5, comentario: 'Pura elegancia, el ambiente y las instalaciones valen cada lempira.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '14',
        título: 'Casa Colonial Cerca de la Catedral',
        descripcion: 'Joya arquitectónica que mezcla el inigualable estilo colonial tradicional con comodidades modernas. Cuenta con techos de doble altura con vigas de madera vista, paredes de adobe tratado para mantener espacios frescos, y un espectacular patio central con fuente. Perfecta para quienes aman la cultura y la historia.',
        precio: 25000,
        tipo: 'casa',
        zona: 'centro',
        residencial: 'Barrio Arriba',
        estadoVerificacion: 'verified',
        habitaciones: 5,
        banos: 4,
        promedioCalificacion: 5.0,
        totalResenas: 2,
        propietario: { nombre: 'Javier Fonseca' },
        servicios: ['Agua', 'Electricidad 220V', 'Jardinería quincenal', 'Aire acondicionado'],
        resenas: [
            { id: 'r14', autor: 'Turismo HN', calificacion: 5, comentario: 'Exquisita propiedad, ideal si planeas recibir a grupos diplomáticos o familia extranjera.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '15',
        título: 'Apartamento Básico en Colonia 21 de Abril',
        descripcion: 'Alternativa funcional, accesible y muy acogedora localizada en una colonia altamente transitada y de fácil comunicación. Este espacio fue recientemente pintado y acondicionado, ofreciendo ventanas con balconería y un excelente abasto de agua potable constante. Ideal para presupuestos iniciales.',
        precio: 6500,
        tipo: 'apartamento',
        zona: 'otros',
        residencial: 'Colonia 21 de Abril',
        estadoVerificacion: 'pending',
        habitaciones: 2,
        banos: 1,
        promedioCalificacion: 3.5,
        totalResenas: 6,
        propietario: { nombre: 'Silvia Barahona' },
        servicios: ['Agua', 'Parqueo al aire libre'],
        resenas: [
            { id: 'r15', autor: 'Pedro Lanza', calificacion: 3, comentario: 'Bastante normal, no tiene lujos pero sirve perfectamente y el agua nunca falla.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595521624992-48a69aef95e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '16',
        título: 'Habitación cerca de Base Aérea',
        descripcion: 'Habitación segura y de cómodo acceso con baño privado interno. Ubicada en ruta directa a Palmerola, lo que la hace altamente conveniente para personal aeroportuario, de la base o contratistas. Zona caracterizada por su tranquilidad extrema y orden. Parqueo para vehiculo liviano disponible fuera.',
        precio: 4000,
        tipo: 'cuarto',
        zona: 'palmerola',
        residencial: 'Colonia Palmerola',
        estadoVerificacion: 'verified',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 4.0,
        totalResenas: 9,
        propietario: { nombre: 'Daniel Mejía' },
        servicios: ['Agua', 'Electricidad', 'Internet básico'],
        resenas: [
            { id: 'r16', autor: 'Marco F.', calificacion: 4, comentario: 'Me salvó la vida trabajando temporalmente cerca de Palmerola. Práctico y directo.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '17',
        título: 'Casa Moderna en Residencial Portal del Bosque',
        descripcion: 'Deslumbrante propiedad de acabados vanguardistas insertada en un ambiente rodeado de naturaleza. Las instalaciones de la residencial brindan acceso a áreas verdes y parque de juegos infantil. La casa impresiona con un concepto de espacios abiertos interconectados y finos detalles en madera y vidrio.',
        precio: 18500,
        tipo: 'casa',
        zona: 'otros',
        residencial: 'Residencial Portal del Bosque',
        estadoVerificacion: 'verified',
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.8,
        totalResenas: 14,
        propietario: { nombre: 'Constructora Portales' },
        servicios: ['Agua', 'Internet', 'Seguridad en circuito cerrado', 'Acceso a canchas polideportivas'],
        resenas: [
            { id: 'r17', autor: 'Diana Santos', calificacion: 5, comentario: 'El parque enfrente es ideal para los niños. La casa está espectacularmente bien diseñada.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '18',
        título: 'Mini Apartamento en Barrio Lourdes',
        descripcion: 'Práctico anexo en segunda planta habilitado como un mini apartamento independiente. Cuenta con excelente iluminación natural cruzada, un balconcillo personal y vistas a las calles del encantador Barrio Lourdes. Destaca por su ubicación privilegiada y su ambiente calmado y tradicional.',
        precio: 7000,
        tipo: 'apartamento',
        zona: 'otros',
        residencial: 'Barrio Lourdes',
        estadoVerificacion: 'pending',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 0,
        totalResenas: 0,
        propietario: { nombre: 'Luisa Cárdenas' },
        servicios: ['Agua', 'Internet wifi compartido'],
        resenas: [
            { id: 'r18', autor: 'José E.', calificacion: 4, comentario: 'Bonito. Subir las gradas cansa un poco al final del día pero vale la pena por la vista.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '19',
        título: 'Casa de Esquina en Colonia Iván Betancourt',
        descripcion: 'Preciosa propiedad construida en esquina, asegurando abundante terreno y excelente privacidad. Con calles pavimentadas y a pocos metros del área comercial de la colonia. Ideal parar operar combinadamente vivienda y, si se desea, un pequeño emprendimiento gracias a su gran visibilidad externa.',
        precio: 13500,
        tipo: 'casa',
        zona: 'otros',
        residencial: 'Colonia Iván Betancourt',
        estadoVerificacion: 'verified',
        habitaciones: 3,
        banos: 2,
        promedioCalificacion: 4.4,
        totalResenas: 8,
        propietario: { nombre: 'Fernando Cálix' },
        servicios: ['Agua', 'Electricidad', 'Parqueo lateral pavimentado'],
        resenas: [
            { id: 'r19', autor: 'Néstor D.', calificacion: 4, comentario: 'Tuvimos que reparar un par de llaves, pero el dueño Fernando lo cubrió enseguida. Muy cumplidor.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583847268964-b28ce8fba18e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '20',
        título: 'Habitación Amueblada, Todos los Servicios',
        descripcion: 'Espaciosa habitación premium en el sector céntrico, bellamente decorada y equipada. Incluye cama queen, televisor inteligente, internet de alta velocidad por fibra óptica, y limpieza semanal opcional. Entorno altamente cuidado y pacífico; es el refugio ideal luego de una larga jornada de trabajo.',
        precio: 5000,
        tipo: 'cuarto',
        zona: 'centro',
        residencial: 'Barrio San Blas',
        estadoVerificacion: 'verified',
        habitaciones: 1,
        banos: 1,
        promedioCalificacion: 4.8,
        totalResenas: 16,
        propietario: { nombre: 'Doris Rodríguez' },
        servicios: ['Agua', 'Luz Eléctrica', 'Internet', 'Cable HD', 'Limpieza semanal ($ extra)'],
        resenas: [
            { id: 'r20', autor: 'Ericka V.', calificacion: 5, comentario: 'Absolutamente recomendable, un lugar de descanso perfecto y cerca de todo.' }
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    }
];
