import { Head, usePage } from '@inertiajs/react';

export default function Works() {
    const { items } = usePage().props as any;
    return (
        <>
            <Head title="Művek" />
            <div className="p-6 text-white">
                <h1 className="text-2xl mb-4">Művek</h1>
                <table className="w-full text-sm">
                    <thead><tr><th>ID</th><th>Szerző</th><th>Cím</th></tr></thead>
                    <tbody>
                        {items.map((s:any)=>(
                            <tr key={s.id}><td>{s.id}</td><td>{s.composer}</td><td>{s.title}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
