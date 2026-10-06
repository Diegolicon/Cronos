export const COLORWAYS = [
  {
    id: 'obsidian',
    name: 'Obsidian Black',
    hex: '#111315',
    type: 'core',
    typeLabel: 'Core Color'
  },
  {
    id: 'navy',
    name: 'Surgical Navy',
    hex: '#152238',
    type: 'core',
    typeLabel: 'Core Color'
  },
  {
    id: 'titanium',
    name: 'Titanium Slate',
    hex: '#7A8595',
    type: 'core',
    typeLabel: 'Core Color'
  },
  {
    id: 'solar',
    name: 'Solar Amber',
    hex: '#E8CA65',
    type: 'limited',
    typeLabel: 'Edição Limitada'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Todos os Itens', count: 18 },
  { id: 'sets', name: 'Conjuntos Completos', count: 6 },
  { id: 'tops', name: 'Tops Cirúrgicos', count: 6 },
  { id: 'pants', name: 'Calças Jogger', count: 4 },
  { id: 'outerwear', name: 'Coletes & Jaquetas', count: 2 }
];

export const STORIES = [
  {
    id: 'story-sets',
    title: 'Conjuntos',
    image: '/imagens/img1.jpeg',
    badge: 'Popular',
    filterCategory: 'sets'
  },
  {
    id: 'story-women',
    title: 'Feminino',
    image: '/imagens/img2.jpeg',
    filterGender: 'women'
  },
  {
    id: 'story-men',
    title: 'Masculino',
    image: '/imagens/img3.jpeg',
    filterGender: 'men'
  },
  {
    id: 'story-limited',
    title: 'Drop Solar',
    image: '/imagens/img2.jpeg',
    badge: 'Novo',
    filterColor: 'solar'
  },
  {
    id: 'story-outerwear',
    title: 'On-Duty',
    image: '/imagens/duo-mobile.jpg',
    filterCategory: 'outerwear'
  }
];

export const PRODUCTS = [
  {
    id: 'cronos-set-women',
    name: 'Conjunto Scrub Cronos Raffaela',
    gender: 'women',
    category: 'sets',
    tagline: 'Top com Gola V Anatômica + Calça Jogger 6 Bolsos',
    price: 389.00,
    originalPrice: 449.00,
    rating: 4.97,
    reviewsCount: 382,
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    fit: 'Slim Fit Ergonômico',
    fabric: 'Bio-Shield™ 4-Way Stretch (72% Poliamida, 21% Rayon, 7% Elastano)',
    pockets: '6 Bolsos Funcionais',
    defaultColor: 'obsidian',
    imagesByColor: {
      obsidian: '/imagens/img1.jpeg',
      solar: '/imagens/img2.jpeg',
      titanium: '/imagens/img4.jpeg',
      navy: '/imagens/duo-mobile.jpg'
    },
    sizes: ['PP', 'P', 'M', 'G', 'GG']
  },
  {
    id: 'cronos-set-men',
    name: 'Conjunto Scrub Cronos Leon',
    gender: 'men',
    category: 'sets',
    tagline: 'Top Tático com Bolso Caneta + Jogger Estruturada',
    price: 399.00,
    originalPrice: 469.00,
    rating: 4.98,
    reviewsCount: 421,
    badge: 'FLAGSHIP',
    badgeType: 'bestseller',
    fit: 'Modern Athletic Fit',
    fabric: 'Bio-Shield™ 4-Way Stretch de Alta Densidade',
    pockets: '7 Bolsos Estruturados',
    defaultColor: 'navy',
    imagesByColor: {
      navy: '/imagens/img3.jpeg',
      obsidian: '/imagens/img6.jpeg',
      titanium: '/imagens/img5.jpeg',
      solar: '/imagens/hero-team.jpg'
    },
    sizes: ['P', 'M', 'G', 'GG', 'XG']
  },
  {
    id: 'cronos-top-women',
    name: 'Top Cirúrgico Cronos Catarina',
    gender: 'women',
    category: 'tops',
    tagline: 'Caimento Ajustado, Gola V com Costura Dupla',
    price: 199.00,
    originalPrice: 229.00,
    rating: 4.94,
    reviewsCount: 194,
    badge: 'CORE ESSENTIAL',
    badgeType: 'core',
    fit: 'Modelagem Conforto Slim',
    fabric: 'Kinetics Micro-Porous Weave',
    pockets: '3 Bolsos Utilitários',
    defaultColor: 'solar',
    imagesByColor: {
      solar: '/imagens/img2.jpeg',
      obsidian: '/imagens/img1.jpeg',
      titanium: '/imagens/img4.jpeg',
      navy: '/imagens/duo-mobile.jpg'
    },
    sizes: ['PP', 'P', 'M', 'G', 'GG']
  },
  {
    id: 'cronos-top-men',
    name: 'Top Cirúrgico Cronos Chisato',
    gender: 'men',
    category: 'tops',
    tagline: 'Passador para Crachá, Bolso Peitoral Reforçado',
    price: 209.00,
    originalPrice: 239.00,
    rating: 4.96,
    reviewsCount: 265,
    badge: 'CORE ESSENTIAL',
    badgeType: 'core',
    fit: 'Caimento Reto com Abertura Lateral',
    fabric: 'Kinetics Micro-Porous Weave',
    pockets: '3 Bolsos Táticos',
    defaultColor: 'titanium',
    imagesByColor: {
      titanium: '/imagens/img5.jpeg',
      obsidian: '/imagens/img6.jpeg',
      navy: '/imagens/img3.jpeg',
      solar: '/imagens/hero-team.jpg'
    },
    sizes: ['P', 'M', 'G', 'GG', 'XG']
  },
  {
    id: 'cronos-pants-women',
    name: 'Calça Jogger Cronos Zamora',
    gender: 'women',
    category: 'pants',
    tagline: 'Cós Canelado Alto, Bolso da Coxa para Celular',
    price: 219.00,
    originalPrice: 249.00,
    rating: 4.98,
    reviewsCount: 310,
    badge: 'TOP RATED',
    badgeType: 'bestseller',
    fit: 'Jogger com Punho Anatômico',
    fabric: 'Bio-Shield™ Fluid-Resistant',
    pockets: '5 Bolsos Profundos',
    defaultColor: 'titanium',
    imagesByColor: {
      titanium: '/imagens/img4.jpeg',
      obsidian: '/imagens/img1.jpeg',
      solar: '/imagens/img2.jpeg',
      navy: '/imagens/duo-mobile.jpg'
    },
    sizes: ['PP', 'P', 'M', 'G', 'GG']
  },
  {
    id: 'cronos-outerwear-vest',
    name: 'Colete On-Duty Cronos Arctic Fleece',
    gender: 'unisex',
    category: 'outerwear',
    tagline: 'Isolamento Térmico Leve para Ambientes Climatizados e Centro Cirúrgico',
    price: 289.00,
    originalPrice: 329.00,
    rating: 4.99,
    reviewsCount: 154,
    badge: 'EDIÇÃO LIMITADA',
    badgeType: 'limited',
    fit: 'Unissex Ergonômico',
    fabric: 'Microfleece Térmico com Painéis Laterais Respiráveis',
    pockets: '4 Bolsos com Fechamento Oculto',
    defaultColor: 'navy',
    imagesByColor: {
      navy: '/imagens/duo-mobile.jpg',
      obsidian: '/imagens/duo-mobile.jpg',
      titanium: '/imagens/hero-team.jpg'
    },
    sizes: ['P', 'M', 'G', 'GG']
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Dra. Camila Vasconcelos',
    role: 'Cirurgia Pediátrica · São Paulo, SP',
    title: 'O único scrub que não sufoca nem amassa no plantão de 24h',
    body: 'Trabalho em bloco cirúrgico e sempre sofri com tecidos que esquentavam demais. O Cronos tem um toque sedoso inexplicável e o caimento da calça jogger é simplesmente perfeito.',
    rating: 5,
    verified: true,
    product: 'Conjunto Cronos Raffaela (Obsidian Black)'
  },
  {
    id: 2,
    name: 'Dr. Lucas Chang',
    role: 'Cardiologia & CTI · Curitiba, PR',
    title: 'Superior aos scrubs importados',
    body: 'Eu costumava pedir marcas de fora, mas o tempo de espera e taxas não compensavam. O tecido da Cronos é tão bom ou melhor que o da FIGS. Os bolsos são pensados exatamente para o estetoscópio e oxímetro.',
    rating: 5,
    verified: true,
    product: 'Conjunto Cronos Leon (Surgical Navy)'
  },
  {
    id: 3,
    name: 'Enf. Mariana Albuquerque',
    role: 'Emergência Geral · Rio de Janeiro, RJ',
    title: 'Repelência a fluidos testada e aprovada na prática',
    body: 'Na primeira semana já caiu solução salina e soro na calça: as gotículas simplesmente escorreram sem manchar ou molhar a minha pele. Vale cada centavo.',
    rating: 5,
    verified: true,
    product: 'Top Catarina + Calça Zamora (Solar Amber)'
  }
];
