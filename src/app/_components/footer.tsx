import Image from "next/image";
import { brands } from "../utils";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#FFFAE5] p-16">
      <div className="container mx-auto px-4">
        <div className="border-b border-zinc-100 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              href={`https://wa.me/5582981799088?text=Olá vim pelo site e gostaria de mais informações.`}
              target="_blank"
              className="bg-green-500 px-4 py-2 rounded-md text-white"
            >
              Contato via Whatsapp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (82) 9846348300</p>
            <p>Rua Dev, centro, Delmiro Gouveia | AL</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank">
                <InstagramLogo className="h-8 w-8" />
              </a>
              <a href="#" target="_blank">
                <FacebookLogo className="h-8 w-8" />
              </a>
              <a href="#" target="_blank">
                <YoutubeLogo className="h-8 w-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
