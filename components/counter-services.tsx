import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-auto my-8 max-w-3xl">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div
                    key={id}
                    className={`flex flex-col items-center ${lineRight ? 'border-r-2 border-gray-100 pr-4' : ''} ${lineRightMobile ? 'border-r-2 border-gray-100' : ''}`}
                >
                    <p className="text-6xl font-bold text-secondary mb-2">
                        + <CountUp end={endCounter} start={0} duration={5} />
                    </p>
                    <p className="text-black text-xl uppercase text-center">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;
