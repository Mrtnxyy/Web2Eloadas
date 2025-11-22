import { Head, usePage } from '@inertiajs/react';

export default function Roles() {
    const { items } = usePage().props as any;
    return (
        <>
            <Head title="Szerepek" />
            <div className="p-6 text-white">
                <h1 className="text-2xl mb-4">Szerepek</h1>
                <table className="w-full text-sm">
                    <thead><tr><th>ID</th><th>Név</th><th>Hang</th><th>Mű ID</th></tr></thead>
                    <tbody>
                        {items.map((s:any)=>(
                            <tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.voice}</td><td>{s.work_id}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
