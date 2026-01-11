import Image from "next/image";
import { Linkedin } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative w-full h-32 py-2">
        <hr className="border-t-1 border-gray mb-20" />
      {/* Bottom-right container for text and icons */}
      <div className="absolute bottom-4 right-4 flex items-center gap-4">
        {/* "More Information" text */}
        <h2 className="text-black italic text-sm">More Information</h2>

        {/* Realiza image link */}
        <a
          href="https://somosrealiza.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="/realiza3.png"
              width={40}
              height={40}
              alt="Icon Realiza"
              className="object-cover"
            />
          </div>
        </a>

        {/* LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/italo-rojas-b20269b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={28} strokeWidth={1} className="text-black" />
        </a>
      </div>

      {/* Bottom-left author text */}
      <div className="absolute bottom-4 left-4 text-black italic text-sm">
        Italo Rojas 2025
      </div>

      {/* Optional separator line */}
      <hr className="border-t border-gray-300 absolute bottom-0 w-full" />
    </div>
  );
};

export default Banner;
