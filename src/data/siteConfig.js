/** Configuración central del sitio — espíritu Beecura Tordesillas */

export const site = {
  name: 'Beecura Tordesillas',
  tagline: 'Api-terapia natural respirando Aire de las Colmenas',
  location: 'Tordesillas, Valladolid, España',
}

export const apiterapeuta = {
  name: 'Ramón Regalado Rico',
  role: 'Apiterapeuta',
  photo: '/images/ramon-regalado-apiterapeuta.jpeg',
  bio: 'Apiterapeuta y referente de Beecura de Aire de Colmena en Tordesillas. Formación continua en apiterapia y apipuntura durante más de siete años, con docentes de referencia en España y China — sin llegar al Tíbet.',
  note: 'Agradecimiento a los maestros y docentes con los que me he formado a lo largo de estos años.',
}

export const videoBaoan = {
  src: '/videos/baoan-aire-colmena-mtc.mp4',
  eyebrow: 'Experiencia internacional',
  title: 'Aire de Colmena y Medicina Tradicional China',
  subtitle:
    "Sesión en el hospital Bao'an de Shenzhen (China) con una de nuestras usuarias, en el marco de la medicina tradicional china y la terapia Beecura.",
  videoTitle: "Hospital Bao'an · Shenzhen (China)",
  caption: 'Aire de Colmena integrado con medicina tradicional china.',
}

export const drAcosta = {
  name: 'Prof. MSc. Dr. Bernardo Julián Acosta Martínez',
  shortName: 'Dr. Bernardo J. Acosta',
  role: 'Dirección del programa de pérdida y control de peso',
  note: 'Programa alojado en Beecura Tordesillas. La actividad principal del centro es Beecura de Aire de Colmena.',
}

export const google = {
  /** Enlace a reseñas en Google Maps — actualizar si hay ficha propia */
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Beecura+Tordesillas+apiterapia+aire+colmena',
  writeReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=Beecura+Tordesillas',
  /** Embed del mapa (búsqueda). Sustituir por embed de ficha si el cliente lo facilita */
  mapEmbedUrl:
    'https://www.google.com/maps?q=Beecura+Tordesillas+Valladolid&output=embed',
  /** Opcional: Place ID + VITE_GOOGLE_PLACES_API_KEY para cargar reseñas en vivo */
  placeId: import.meta.env.VITE_GOOGLE_PLACE_ID || '',
}

export const beecuraEuropeMap = {
  title: 'Estaciones Beecura en Europa',
  description:
    'Referencia de calidad e implantación de api-terapias respirando Aire de Colmena (AdC) con el sistema Beecura. En Alemania y Austria, médicos de distintas especialidades prescriben estas terapias naturales complementarias.',
  embedUrl:
    'https://www.google.com/maps/d/u/0/embed?mid=1jdQ1qW1e8Axe7tdOZyGOEZTGoV3Ah1U&ehbc=2E312F&noprof=1',
  sourceUrl: 'https://www.beecura.com/kontakt/#karte',
}

export const vegg = {
  name: "Vegg's Alimentación Ecológica",
  role: 'Establecimiento colaborador y representante en Valladolid capital',
  address: 'C. Tahonas, 5, 47003 Valladolid',
  mapsUrl: 'https://maps.app.goo.gl/qcFsoRzC1AbcuVSW7',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Calle+Tahonas+5+47003+Valladolid+Veggs+Alimentacion+Ecologica&output=embed',
  description:
    "Vegg's es nuestro establecimiento colaborador y punto de representación en Valladolid capital, donde puedes conocer el enfoque Beecura y la medicina de la respiración con Aire de Colmena.",
}

export const medicinaRespiracion = {
  title: 'La medicina de la respiración',
  subtitle: 'Respiración reparadora y técnicas conscientes con Aire de Colmena',
  paragraphs: [
    'La respiración reparadora o medicina de la respiración. Técnicas largas y lentas abiertas a todo el mundo, jóvenes y viejos, sanos y enfermos.',
    'El Aire de la Colmena aporta los compuestos que enriquecen nuestra respiración para multiplicar el efecto reparador de la respiración consciente.',
    'Estas técnicas de respiración se han practicado en el hinduismo, el budismo, el cristianismo y otras religiones desde tiempos inmemoriales.',
    'Hasta tiempos recientes en los que hemos podido conocer y aprender cómo pueden reducir la presión arterial, potenciar el rendimiento deportivo y equilibrar el sistema nervioso.',
    'Queda mucho por conocer y aprender de sus efectos terapéuticos.',
    'Hasta que la neurociencia y los más avanzados instrumentos de medición revelen el detalle de su acción en nuestros sistemas neuronales y en el cerebro, además de su acción directa en las vías y en el sistema respiratorio.',
  ],
  audio: {
    src: '/videos/medicina-respiracion-castellanos.mp4',
    speaker: 'N. Castellanos — neurocientífica',
    title: 'Eje respiración / cerebro',
    caption: 'La medicina de la Respiración (audio)',
  },
  image: {
    src: '/images/ramon-regalado-apiterapeuta.jpeg',
    alt: 'Ramón Regalado Rico — medicina de la respiración y apiterapia',
    caption: 'Ramón Regalado Rico · Apiterapeuta · Beecura Tordesillas',
  },
}

export const galeriaApiterapia = [
  {
    id: 'ramon',
    src: '/images/ramon-regalado-apiterapeuta.jpeg',
    alt: 'Ramón Regalado Rico — Apiterapeuta',
    caption: 'Ramón Regalado Rico · Apiterapeuta',
  },
  {
    id: 'wan-bin',
    src: '/images/ramon-dr-wan-bin-apipuntura.jpeg',
    alt: 'Ramón Regalado Rico con el Dr. Wan Bin y cajas de abejas para apipuntura',
    caption: 'Con el Dr. Wan Bin y nuestras cajas de abejas para apipuntura',
  },
  {
    id: 'baoan',
    src: '/images/equipo-baoan-shenzhen.jpeg',
    alt: "Equipo médico del hospital Bao'an en Shenzhen (China)",
    caption: "Equipo médico y enfermería del ala de Apiterapia del hospital Bao'an, Shenzhen (China)",
  },
]
