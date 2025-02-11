"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import dogImage from "../images/smile-dog.png";
import catImage from "../images/cat.png";

export const Hero = () => {
  return (
    <section className="bg-[#FFFAE5] relative overflow-hidden">
      <div>
        <Image
          src={dogImage}
          alt="Foto de um cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-30 lg:hidden" />
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="text-white lg:text-black grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Cuidamos do seu pet como se fosse da família!
            </h1>
            <p className="lg:text-lg" data-aos="fade-right">
              No nosso espaço, seu amigo de quatro patas recebe todo o amor e
              cuidado que merece. Oferecemos serviços de banho, tosa, consultas
              e muito mais para garantir o bem-estar e a felicidade do seu pet.
            </p>

            <a
              data-aos="fade-up"
              href={`https://wa.me/5582981799088?text=Olá vim pelo site e gostaria de mais informações.`}
              target="_blank"
              className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Agende agora mesmo!
            </a>

            <div className="mt-8">
              <p className="tex-sm mb-4">
                🎉 Ganhe{" "}
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra!
              </p>
              <div className="flex">
                <div className="w-32 h-40 hidden lg:block">
                  <Image
                    src={catImage}
                    alt="Imagem de um gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block h-full">
            <Image
              src={dogImage}
              alt="Imagem de um cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
      <div className="absolute -bottom-2 left-0 w-full h-5 bg-gradient-to-b from-[#FFFAE5] to-[#fdf6ec]" />
    </section>
  );
};
