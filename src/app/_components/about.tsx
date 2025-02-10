import Image from "next/image";
import dogAboutImage from "../images/dog-with-bg.png";
import catAboutImage from "../images/cat-eyes.jpg";
import { Check } from "lucide-react";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] overflow-hidden">
              <Image
                src={dogAboutImage}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-3xl border-4 overflow-hidden">
              <Image
                src={catAboutImage}
                alt="Foto do gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Somos apaixonados por animais e acreditamos que eles merecem todo
              o amor e cuidado do mundo. Nossa missão é proporcionar bem-estar,
              segurança e momentos felizes para o seu pet. Seja para banho,
              tosa, hospedagem ou serviços veterinários, oferecemos um
              atendimento especial para garantir que seu amigo de quatro patas
              receba o melhor cuidado possível.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Profissionais qualificados e apaixonados por animais
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Ambiente seguro e confortável para seu pet
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Produtos de alta qualidade para higiene e alimentação
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Atendimento personalizado para cada necessidade
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Amor e carinho em cada detalhe
              </li>
            </ul>

            <div className="flex items-center justify-around">
              <a
                href="#"
                className="bg-white rounded-md flex gap-2 items-center justify-center w-fit px-4 py-2"
              >
                <WhatsappLogo className="w-5 h-5 text-green-400" />
                Contato via Whatsapp
              </a>
              <a
                href="#"
                className="rounded-md flex gap-2 items-center justify-center w-fit px-4 py-2"
              >
                <MapPin className="w-5 h-5 text-orange-400" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
