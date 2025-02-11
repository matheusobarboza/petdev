"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { services } from "../utils";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] select-none"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1 select-none">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>

                      <a
                        href={`https://wa.me/5582981799088?text=Olá vim pelo site e gostaria de mais informações sobre ${service.title}`}
                        target="_blank"
                        className="flex items-center justify-center gap-2 hover:bg-[#FFFAE5] px-4 py-1 rounded-md hover:text-[#1e293b]  duration-300"
                      >
                        <WhatsappLogo className="h-5 w-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="bg-white absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 flex items-center justify-center rounded-full shadow-lg w-10 h-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={scrollNext}
            className="bg-white absolute right-1 -translate-y-1/2 translate-x-1/2 top-1/2 z-10 flex items-center justify-center rounded-full shadow-lg w-10 h-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-b from-white to-orange-200" />
    </section>
  );
}
