import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-left">
            <div className="w-full md:pb-4 md:pt-2">
                <div className="-my-6">
                    {dataAboutPage.map((data) => (
                        <div
                            key={data.id}
                            className="relative py-6"
                        >
                            {/* Row 1: Title + Date */}
                            <div className="flex items-center gap-3">
                                <h3 className="text-black text-xl font-bold">
                                    {data.title}
                                </h3>

                                <time className="inline-flex items-center justify-center text-xs font-semibold px-3 h-6 text-emerald-600 bg-emerald-100 rounded-full">
                                    {data.date}
                                </time>
                            </div>

                            {/* Row 2: Subtitle */}
                            <div className="text-lg font-semibold text-gray-400 mt-1">
                                {data.subtitle}
                            </div>

                            {/* Row 3: Description (bullets) */}
                            <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
                                {Array.isArray(data.description) ? (
                                    data.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                ) : (
                                    <li>{data.description}</li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
