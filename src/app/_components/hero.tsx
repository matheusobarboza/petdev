'use client'

import { WhatsappLogo } from "@phosphor-icons/react"

export const Hero = () => {
  return (
    <section className="bg-[#FFFAE5] relative overflow-hidden">
      <div>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Seu Pet merece cuidade, carinho e atenção especial.</h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
            </p>

            <a href="#" className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
              <WhatsappLogo className="w-5 h-5" />
              Contato via whatsapp
            </a>

            <div className="mt-8">
              <p className="tex-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra!
              </p>
            </div>
          </div>

          <div>
            <h1>foto do cachorro</h1>
          </div>
        </article>
      </div>
    </section>
  )
}