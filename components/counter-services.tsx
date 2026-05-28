// counter-services.tsx
import { dataCounter } from "@/data";
import CountUp from "react-countup";
import Image from "next/image";

const CounterServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto my-12">
      
      {/* Columna izquierda: Foto, nombre, Art | Engineering */}
      <div className="w-48 h-64 flex flex-col items-center mx-auto">
      <div className="w-48 h-48 mb-4 crop-circle">
      <Image
        src="/profile-photo.png"
        alt="Your Name"
        fill
        className="
          crop-img
          scale-115
          object-cover
          object-[50%_50%]   // <-- MOVE the image horizontally
        "
      />

      </div>
        <h2 className="text-2xl font-bold text-primary mb-1">Italo Rojas</h2>
        <p className="text-secondary uppercase tracking-wide">Art | Engineering</p>
      </div>

      {/* Columnas 2 y 3: Texto descriptivo y contadores */}
      <div className="md:col-span-2 flex flex-col gap-6">
        {/* Texto descriptivo */}
        <p className="text-lg text-gray-700 mt-8">
            I blend Art and Engineering to propose a look into a future where
            nature, humans, and technology thrive in synchrony.
        </p>

        {/* Indicadores */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {dataCounter.map(({ id, endCounter, text }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center"
            >
              <p className="text-4xl md:text-4xl font-bold text-secondary mb-1">
                + <CountUp end={endCounter} start={0} duration={5} />
              </p>
              <p className="text-black text-sm md:text-base uppercase">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterServices;
