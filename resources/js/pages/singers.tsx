import { Head, usePage } from '@inertiajs/react';

export default function Singers() {
    const { items } = usePage().props as any;
    return (
        <>
            <Head title="Énekesek" />
            <div className="p-6 text-white">
                <h1 className="text-2xl mb-4">Énekesek</h1>
                <table className="w-full text-sm">
                    <thead><tr><th>ID</th><th>Név</th><th>Születési év</th></tr></thead>
                    <tbody>
                        {items.map((s:any)=>(
                            <tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.birth_year}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
