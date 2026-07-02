/** Configuración central del sitio — espíritu Beecura Tordesillas */

export const site = {
  name: 'Beecura® Tordesillas',
  brand: 'Beecura',
  tagline: 'Api-terapia natural respirando Aire de las Colmenas',
  location: 'Tordesillas, Valladolid, España',
}

export const dolenciasAdC = {
  intro:
    'El Aire de Colmena enriquece la respiración con propóleo, miel y compuestos bioactivos. Terapia complementaria muy valorada en:',
  items: [
    {
      id: 'alergias',
      line1: 'ALERGIAS',
      line2: 'respiratorias',
      icon: 'wind',
      hint: 'Polen, ácaros y entornos sensibles',
    },
    {
      id: 'asma',
      line1: 'ASMA',
      icon: 'activity',
      hint: 'Bienestar de las vías respiratorias',
    },
    {
      id: 'pulmonares',
      line1: 'Enfermedades',
      line2: 'PULMONARES',
      icon: 'heart-pulse',
      hint: 'Apoyo respiratorio complementario',
    },
    {
      id: 'epoc',
      line1: 'EPOC',
      icon: 'lungs',
      hint: 'Calidad de vida respiratoria',
    },
    {
      id: 'estres',
      line1: 'ESTRÉS',
      icon: 'brain',
      hint: 'Relajación profunda y equilibrio',
    },
    {
      id: 'insomnio',
      line1: 'INSOMNIO',
      icon: 'moon',
      hint: 'Descanso y respiración reparadora',
    },
    {
      id: 'rinitis',
      line1: 'RINITIS',
      icon: 'droplets',
      hint: 'Congestión nasal y molestias estacionales',
    },
  ],
}

export const sampleReviews = {
  rating: 5.0,
  total: 26,
  items: [
    {
      author: 'Carmen R.',
      rating: 5,
      text: 'Una experiencia maravillosa. Después de varias sesiones de Aire de Colmena noto mucha mejoría en mi respiración y en el estado de ánimo.',
      date: 'hace 3 meses',
    },
    {
      author: 'José M.',
      rating: 5,
      text: 'Ramón es un profesional excelente. El ambiente de la cabana es único y muy relajante. Totalmente recomendable para alergias respiratorias.',
      date: 'hace 5 meses',
    },
    {
      author: 'Laura P.',
      rating: 5,
      text: 'Llevaba años con rinitis y el Aire de Colmena me ha ayudado muchísimo. Un complemento natural que de verdad funciona.',
      date: 'hace 2 meses',
    },
    {
      author: 'Antonio V.',
      rating: 5,
      text: 'Muy contento con la apiterapia y la atención recibida. Instalaciones impecables y trato cercano en Tordesillas.',
      date: 'hace 1 mes',
    },
    {
      author: 'Isabel T.',
      rating: 5,
      text: 'Mi padre con EPOC ha mejorado su calidad de vida con las sesiones guiadas. Gracias por vuestro trabajo.',
      date: 'hace 4 meses',
    },
    {
      author: 'Marta S.',
      rating: 5,
      text: 'Terapia diferente y muy efectiva para el estrés y el insomnio. Sin duda volveré.',
      date: 'hace 6 meses',
    },
  ],
}

export const contact = {
  email: 'ramon@apipuntura-tordesillas.com',
  whatsapp: '34609426793',
  whatsappDisplay: '609 426 793',
  phone: '+34 609 426 793',
  phoneHref: 'tel:+34609426793',
}

export function whatsappUrl(message) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export const heroImage = {
  src: '/images/nuevas/cabana-campo-tordesillas.png',
  alt: 'Cabana Beecura de Aire de Colmena en el campo de Tordesillas',
}

export const apiterapeuta = {
  name: 'Ramón Regalado Rico',
  role: 'Apiterapeuta',
  photo: '/images/ramon-regalado-apiterapeuta.jpeg',
  bio: 'Apiterapeuta y referente de Beecura de Aire de Colmena en Tordesillas. Formación continua en apiterapia y apipuntura durante más de siete años, con docentes de referencia en España y China — sin llegar al Tíbet.',
  note: 'Agradecimiento a los maestros y docentes con los que me he formado a lo largo de estos años.',
}

export const alessioMunzi = {
  name: 'Alessio Munzi',
  role: 'Apiterapeuta colaborador',
  bio: 'Apiterapeuta colaborador especializado en apiterapia y apipuntura con veneno de abeja. Se encarga de todas las sesiones y atenciones a domicilio en Valladolid capital y provincia.',
  website: 'https://www.apiterapiavalladolid.com',
  websiteLabel: 'apiterapiavalladolid.com',
}

export const videoBaoan = {
  src: '/videos/baoan-aire-colmena-mtc.mp4',
  eyebrow: 'Experiencia internacional',
  title: 'Aire de Colmena y Medicina Tradicional China',
  subtitle:
    "Sesión en el hospital Bao'an de Shenzhen (China), en el marco de la medicina tradicional china y la terapia Beecura®.",
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
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Beecura+Tordesillas+apiterapia+aire+colmena',
  writeReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=Beecura+Tordesillas',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Beecura+Tordesillas+Valladolid&output=embed',
  placeId: import.meta.env?.VITE_GOOGLE_PLACE_ID || '',
}

export const beecuraEuropeMap = {
  title: 'Estaciones Beecura en Europa',
  description:
    'Referencia de calidad e implantación de api-terapias respirando Aire de Colmena (AdC) con el sistema Beecura. En Alemania y Austria, médicos de distintas especialidades prescriben estas terapias naturales complementarias.',
  embedUrl:
    'https://www.google.com/maps/d/u/0/embed?mid=1jdQ1qW1e8Axe7tdOZyGOEZTGoV3Ah1U&ehbc=2E312F&noprof=1',
  sourceUrl: 'https://www.beecura.com/kontakt/#karte',
}

export const youtube = {
  playlistId: 'PLGH9fLBAJlVViXtgxaiqCu_ueLM3V-kbr',
  playlistUrl:
    'https://youtube.com/playlist?list=PLGH9fLBAJlVViXtgxaiqCu_ueLM3V-kbr&si=dGa0uh4v82hxn5DT',
  channelUrl: 'https://youtube.com/@beecuratordesillas?si=3bcZcniCrFNm2USu',
  channelLabel: '@beecuratordesillas',
}

export const puntosVenta = [
  {
    id: 'beecura-tordesillas',
    name: 'Beecura Tordesillas',
    role: 'Centro de terapia · Aire de Colmena',
    address: 'Tordesillas, Valladolid',
    city: 'Tordesillas',
    mapsUrl: 'https://maps.google.com/?q=Tordesillas,Valladolid',
    mapEmbedUrl: 'https://www.google.com/maps?q=Tordesillas+Valladolid+Beecura&output=embed',
  },
  {
    id: 'herbolario-paula',
    name: 'El Herbolario de Paula',
    role: 'Punto de venta en Tordesillas',
    address: 'Av. Valladolid, 6, 47100 Tordesillas',
    city: 'Tordesillas',
    mapsUrl: 'https://maps.app.goo.gl/b8jDt3VpVHoegtXbA',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Herbolario+Paula+Av+Valladolid+6+Tordesillas&output=embed',
  },
  {
    id: 'veggs',
    name: "Vegg's Alimentación Ecológica",
    role: 'Punto de venta en Valladolid capital',
    address: 'C. Tahonas, 5, 47003 Valladolid',
    city: 'Valladolid capital',
    mapsUrl: 'https://maps.app.goo.gl/qcFsoRzC1AbcuVSW7',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Calle+Tahonas+5+47003+Valladolid+Veggs+Alimentacion+Ecologica&output=embed',
  },
]

/** @deprecated usar puntosVenta */
export const veggs = puntosVenta.find((p) => p.id === 'veggs')

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
  video: {
    src: '/videos/medicina-respiracion-arte-europa.mp4',
    title: 'Medicina de la Respiración - Aire canal TV ARTE Europa',
    caption: 'Reportaje ilustrativo sobre la medicina de la respiración y el Aire de Colmena.',
  },
  image: {
    src: '/images/nuevas/sesion-aire-colmena.png',
    alt: 'Sesión de terapia con Aire de Colmena Beecura',
    caption: 'Terapia Beecura de Aire de Colmena · Tordesillas',
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

export const galeriaBeecura = [
  {
    id: 'campo',
    src: '/images/nuevas/cabana-campo-tordesillas.png',
    alt: 'Cabana Beecura en el campo de Tordesillas',
    caption: 'Nuestra cabana de Aire de Colmena en Tordesillas',
  },
  {
    id: 'interior',
    src: '/images/nuevas/cabana-interior-colmena.png',
    alt: 'Interior de la cabana con colmenas y sillones',
    caption: 'Interior de la cabana · microambiente de colmena',
  },
  {
    id: 'sesion',
    src: '/images/nuevas/sesion-aire-colmena.png',
    alt: 'Usuaria en sesión de Aire de Colmena',
    caption: 'Sesión de respiración con Aire de Colmena',
  },
  {
    id: 'apicultor',
    src: '/images/nuevas/apicultor-beecura.png',
    alt: 'Apicultor con equipo de protección Beecura',
    caption: 'Cuidado de las colmenas y protocolo Beecura',
  },
  {
    id: 'foto-2025',
    src: '/images/nuevas/aire-de-colmena-beecura-tordesillas-2025.jpeg',
    alt: 'Beecura de Aire de Colmena Tordesillas 2025',
    caption: 'Beecura Tordesillas · Aire de Colmena',
  },
]
