import { FC } from 'react';
import { dataAboutPage_More_Conferences, dataAboutPage_More_OtherBackground, dataAboutPage_More_Volunteering } from "@/data";

// Define los tipos de datos
interface TimeLineData {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}

interface TimeLineSectionProps {
    title: string;
    data: TimeLineData[];
    noTopMargin?: boolean;  // Añadido para controlar el margen superior
    style?: React.CSSProperties;  // Añadido para permitir estilos inline
}

const TimeLineSection: FC<TimeLineSectionProps> = ({ title, data, noTopMargin, style }) => (
    <div className={`my-10 ${noTopMargin ? 'mt-0' : 'mt-10'}`}>
        <h2 className="text-black mb-4 text-2xl font-bold" style={style}>{title}</h2>
        <div className="-my-6">
            {data.map((item) => (
                <div key={item.id} className="relative py-6 pl-8 sm:pl-32 group">
                    <h3 className="text-black mb-1 text-2xl font-bold sm:mb-0">{item.title}</h3>
                    <div className="flex flex-col sm:flex-row items-start mb-1 
                                group-last:before:hidden before:absolute 
                                before:left-2 sm:before:left-0 before:h-full
                                before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                before:self-start before:-translate-x-1/2 
                                before:translate-y-3 after:absolute after:left-2 
                                sm:after:left-0 after:w-2 after:h-2 after:bg-600 
                                after:border-4 after:box-content after:border-slate-50 
                                after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                            {item.date}
                        </time>
                        <div className="text-xl font-bold text-gray-400">{item.subtitle}</div>
                    </div>
                    <div className="text-slate-400">{item.description}</div>
                </div>
            ))}
        </div>
    </div>
);

const titleStyle: React.CSSProperties = {
    marginLeft: '8rem', // Ajusta el valor según la longitud deseada
};

const TimeLine: FC = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200 w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
            <TimeLineSection style={titleStyle} title="Other Academic Background" data={dataAboutPage_More_OtherBackground} noTopMargin={true} />
            <TimeLineSection style={titleStyle} title="Conferences" data={dataAboutPage_More_Conferences} />
            <TimeLineSection style={titleStyle} title="Volunteering" data={dataAboutPage_More_Volunteering} />
        </div>
    );
}

export default TimeLine;
