import Image from "next/image";
import { Linkedin } from "lucide-react";


const Banner = () => {
    return (
        <div className="relative w-full py-20 text-center">
            <hr className="border-t-2  border-black mb-10" />
            <h2 className="text-black text-3xl mb-8">More Information</h2>
            <div className="flex justify-center gap-5 mb-100">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                    <Image src="/realiza3.png" width={120} height={120} alt="Icon 2" className="object-cover" />
                </div>
                <div>
                    <Linkedin size={40} strokeWidth={1}  />
                </div>

            </div>
            <div className="text-black absolute bottom-5 left-6 italic">
                Italo Rojas 2024
            </div>
        </div>
    );
};

export default Banner;



