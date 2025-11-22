import { Head, usePage } from '@inertiajs/react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Tooltip, Legend);

export default function Diagram() {
    const { chartData } = usePage().props as any;
    const labels = chartData.map((i:any)=>i.voice);
    const values = chartData.map((i:any)=>i.count);
    const data = { labels, datasets:[{ data: values }] };

    return (
        <>
            <Head title="Diagram" />
            <div className="p-6 text-white space-y-10 max-w-3xl mx-auto">
                <h1 className="text-2xl">Diagramok</h1>
                <div className="bg-white/10 p-4 rounded"><Bar data={data}/></div>
                <div className="bg-white/10 p-4 rounded"><Pie data={data}/></div>
                <div className="bg-white/10 p-4 rounded"><Line data={data}/></div>
            </div>
        </>
    );
}
