import { Scissors, Syringe, CarTaxiFront, Hotel } from "lucide-react";

export const services = [
  {
    title: "Banho e Tosa",
    description:
      "Deixe seu pet limpo, cheiroso e bem cuidado com nossos serviços de banho e tosa profissional.",
    duration: "60 minutos",
    price: "R$ 50,00",
    icon: <Scissors size={32} />,
    linkText: "Agendar agora",
  },
  {
    title: "Vacinação",
    description:
      "Proteja a saúde do seu pet com vacinas essenciais aplicadas por profissionais qualificados.",
    duration: "30 minutos",
    price: "R$ 80,00",
    icon: <Syringe size={32} />,
    linkText: "Saiba mais",
  },
  {
    title: "Transporte Pet",
    description:
      "Precisa levar seu pet para um compromisso? Oferecemos transporte seguro e confortável.",
    duration: "Variável",
    price: "A partir de R$ 30,00",
    icon: <CarTaxiFront size={32} />,
    linkText: "Solicitar agora",
  },
  {
    title: "Hospedagem",
    description:
      "Vai viajar? Deixe seu pet em um ambiente seguro e acolhedor enquanto você estiver fora.",
    duration: "Diária",
    price: "R$ 100,00 por noite",
    icon: <Hotel size={32} />,
    linkText: "Reservar vaga",
  },
  // {
  //   title: "Navegação entre Serviços",
  //   description: "Explore nossos serviços de forma intuitiva e fácil.",
  //   duration: "Instantâneo",
  //   price: "Grátis",
  //   icon: <ChevronLeft size={32} />,
  //   linkText: "Ver mais serviços",
  // },
  // {
  //   title: "Próximo Serviço",
  //   description: "Confira outros serviços que podem ser do seu interesse.",
  //   duration: "Instantâneo",
  //   price: "Grátis",
  //   icon: <ChevronRight size={32} />,
  //   linkText: "Avançar",
  // },
];

export const testimonials = [
  {
    content:
      "Ótimo atendimento! Meu pet foi super bem tratado e voltou muito feliz. Recomendo para todos!",
    author: "Ana Souza",
    role: "Tutora do Max",
    image: "/images/testimonials/tutor1.jpg",
  },
  {
    content:
      "Equipe muito profissional e cuidadosa. Levo meu gato sempre para o banho e tosa, e ele adora!",
    author: "Carlos Mendes",
    role: "Tutor da Luna",
    image: "/images/testimonials/tutor2.jpg",
  },
  {
    content:
      "A hospedagem foi incrível! Meu cachorro ficou super confortável e bem cuidado enquanto eu viajava.",
    author: "Mariana Lima",
    role: "Tutora do Thor",
    image: "/images/testimonials/tutor3.jpg",
  },
  {
    content:
      "Serviço de transporte excelente! Chegaram pontualmente e meu pet foi tratado com muito carinho.",
    author: "Pedro Henrique",
    role: "Tutor da Nina",
    image: "/images/testimonials/tutor4.jpg",
  },
  {
    content:
      "Vacinação segura e rápida. Agora posso ficar tranquilo sabendo que meu pet está protegido.",
    author: "Fernanda Oliveira",
    role: "Tutora do Bob",
    image: "/images/testimonials/tutor5.jpg",
  },
];

export const brands = [
  { name: "Royal Canin", logo: "/images/brands/royal.jpg" },
  { name: "Premier", logo: "/images/brands/premier.jpg" },
  { name: "Whiskas", logo: "/images/brands/whiskas.jpeg" },
  { name: "Golden", logo: "/images/brands/golden.png" },
  { name: "Fórmula Natural", logo: "/images/brands/formula.png" },
];
