"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText("23393184");

      alert("Número de cuenta copiado ✨");
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const newOpacity = Math.max(1 - scrollY / 700, 0);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative font-catchy">
      {/* VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden" style={{ opacity }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center text-white">
          {/* FLOR SUPERIOR IZQUIERDA */}
          <Image
            src="/images/floral-corner.png"
            alt="Flores decorativas"
            width={800}
            height={800}
            className="absolute left-[-40] top-[-40] w-[260px] md:w-[600px] opacity-80"
          />

          {/* FLOR INFERIOR DERECHA */}
          <Image
            src="/images/floral-corner.png"
            alt="Flores decorativas"
            width={800}
            height={800}
            className="absolute bottom-[-40] right-[-40] w-[260px] rotate-180 md:w-[600px] opacity-80"
          />

          {/* CONTENIDO HERO */}
          <div className="relative z-10">
            <p className="text-gold-light mb-4 text-sm uppercase tracking-[0.4em]">
              MIS 15 AÑOS
            </p>

            <h1 className="font-gistesy text-navy text-7xl leading-[1.2] md:text-9xl">
              Ariadna
            </h1>

            <div className="bg-gold-light my-8 mx-auto h-[2px] w-24" />

            <p className="max-w-xl text-xl leading-relaxed text-gray-200 md:text-2xl">
              Una noche mágica para celebrar juntos ✨
            </p>

            <p className="mt-10 text-lg text-gray-300">8 de Agosto 2026</p>
          </div>
        </section>

        {/* CONTENIDO */}
        <div className="bg-champagne text-navy relative z-20 rounded-t-[50px]">
          {/* MENSAJE */}
          <section className="px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-gold mb-8 text-4xl font-semibold">
                Te invito
              </h2>

              <p className="text-navy-soft text-lg leading-8">
                Hay momentos que soñamos para siempre…
                <br />
                y este es uno de ellos.
                <br />
                <br />
                Me haría muy feliz compartir esta noche tan especial con vos ✨
              </p>
            </div>
          </section>

          {/* FOTO ARI */}
          <section className="bg-champagne px-6 py-24">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 md:flex-row md:gap-24">
              {/* FOTO */}
              <div className="relative">
                {/* brillo suave */}
                <div className="bg-gold-light/20 absolute inset-0 scale-110 rounded-full blur-3xl" />

                <Image
                  src="/images/ariadna.jpg"
                  alt="Ariadna"
                  width={300}
                  height={400}
                  className="relative z-10 h-[400px] w-[240px] rounded-[50%] border-2 border-[#c6a972] object-cover shadow-2xl"
                />
              </div>

              {/* TEXTO */}
              <div className="max-w-xl text-center md:text-left">
                <p className="text-navy mb-4 text-sm uppercase tracking-[0.3em]">
                  Una noche especial
                </p>

                <p className="text-navy-soft text-lg leading-8">
                  Hay sueños que merecen celebrarse rodeados de las personas más
                  importantes.
                  <br />
                  <br />
                  Gracias por formar parte de este momento tan especial ✨
                </p>
                <br />
                <br />

                <h2 className="font-gistesy text-gold mb-8 text-4xl md:text-6xl">
                  Ariadna Ruibal
                </h2>
              </div>
            </div>
          </section>

          {/* INFO */}
          <section className="bg-ivory px-6 py-24">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="border-soft rounded-3xl border bg-white p-8 text-center shadow-sm">
                <h3 className="text-gold mb-4 text-2xl font-semibold">Fecha</h3>

                <p>8 de Agosto 2026</p>
              </div>

              <div className="border-soft rounded-3xl border bg-white p-8 text-center shadow-sm">
                <h3 className="text-gold mb-4 text-2xl font-semibold">Hora</h3>

                <p>21:00 hs — 02:00 hs</p>
              </div>

              <div className="border-soft rounded-3xl border bg-white p-8 text-center shadow-sm">
                <h3 className="text-gold mb-4 text-2xl font-semibold">Lugar</h3>

                <p>
                  Salón Carrusel
                  <br />
                  Villa Argentina, Canelones
                </p>
              </div>
            </div>
          </section>

          {/* DRESS CODE */}
          <section className="px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-gold mb-6 text-4xl font-semibold">
                Dress Code
              </h2>

              <p className="text-navy-soft mb-12 text-2xl">Semiformal ✨</p>

              <div className="border-soft rounded-3xl border bg-white p-10 shadow-sm">
                <p className="text-navy-soft mb-8 text-lg leading-8">
                  Evitar los siguientes colores:
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <span className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-medium text-white">
                    Dorado
                  </span>

                  <span className="rounded-full bg-[#d6c7b2] px-5 py-3 text-sm font-medium text-navy">
                    Beige
                  </span>

                  <span className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-navy">
                    Blanco
                  </span>

                  <span className="rounded-full bg-[#f3e5c8] px-5 py-3 text-sm font-medium text-navy">
                    Champagne
                  </span>

                  <span className="bg-navy rounded-full px-5 py-3 text-sm font-medium text-white">
                    Azul Marino
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* REGALO */}
          <section className="bg-ivory px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-navy-light mb-4 text-sm uppercase tracking-[0.3em]">
                Regalo
              </p>

              <h2 className="text-gold mb-8 text-4xl font-semibold">
                Tu presencia es mi mejor regalo ✨
              </h2>

              <p className="text-navy-soft mx-auto mb-12 max-w-2xl text-lg leading-8">
                Pero si deseas hacerme un obsequio, puedes colaborar con mi
                sueño a través de la siguiente cuenta:
              </p>

              <div className="border-soft mx-auto max-w-xl rounded-3xl border bg-white p-10 shadow-sm">
                <p className="text-navy-light mb-4 text-2xl font-semibold">
                  Ariadna Ruibal Prex
                </p>

                <button
                  onClick={copyAccount}
                  className="bg-champagne hover:bg-gold-light/20 group w-full rounded-2xl px-6 py-5 transition-all duration-300"
                >
                  <p className="text-navy-light mb-2 text-sm uppercase tracking-[0.2em]">
                    Cuenta
                  </p>

                  <p className="text-gold text-3xl tracking-wider transition-all duration-300 group-hover:scale-105">
                    23393184
                  </p>

                  <p className="mt-3 text-sm text-gray-500">
                    Click para copiar
                  </p>
                </button>
              </div>
            </div>
          </section>

          {/* RSVP */}
          <section className="relative overflow-hidden bg-navy px-6 py-24 text-white">
            {/* VIDEO FONDO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            >
              <source src="/bg.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY NAVY */}
            <div className="absolute inset-0 bg-navy/80" />

            {/* CONTENIDO */}
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <p className="text-gold-light mb-4 text-sm uppercase tracking-[0.3em]">
                RSVP
              </p>

              <h2 className="mb-8 text-4xl font-semibold md:text-5xl">
                Confirmá tu asistencia
              </h2>

              <p className="mb-12 text-lg leading-8 text-gray-300">
                Nos encantaría compartir esta noche tan especial con vos ✨
                <br />
                Por favor confirmá tu asistencia completando el formulario.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe8v8m5raQY5A-VfIue1UXf0qJ7s5I2gB6YiDyYUt-v_sQwjg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-light text-navy inline-flex items-center justify-center rounded-full px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Confirmar asistencia
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
