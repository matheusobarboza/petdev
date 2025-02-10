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
