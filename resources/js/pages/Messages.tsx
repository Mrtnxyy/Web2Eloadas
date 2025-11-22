import { Head, usePage } from '@inertiajs/react';

export default function Messages() {
    const { items } = usePage().props as any;

    return (
        <>
            <Head title="Üzenetek" />
            <div className="p-6 text-white max-w-4xl mx-auto">
                <h1 className="mb-4 text-2xl font-semibold">Üzenetek</h1>
                <div className="overflow-x-auto rounded-xl bg-black/40 border border-white/10">
                    <table className="min-w-full text-sm">
                        <thead className="bg-white/10 text-left">
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Tárgy</th>
                                <th className="px-4 py-2">Üzenet</th>
                                <th className="px-4 py-2">Küldés ideje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.length > 0 ? (
                                items.map((m: any) => (
                                    <tr key={m.id} className="border-t border-white/5">
                                        <td className="px-4 py-2 align-top text-xs text-white/70">{m.id}</td>
                                        <td className="px-4 py-2 align-top text-sm font-medium">{m.subject}</td>
                                        <td className="px-4 py-2 align-top text-sm text-white/80">
                                            {m.body.length > 120 ? m.body.slice(0, 120) + '…' : m.body}
                                        </td>
                                        <td className="px-4 py-2 align-top text-xs text-white/60">
                                            {m.created_at ? new Date(m.created_at).toLocaleString('hu-HU') : ''}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="px-4 py-4 text-center text-sm text-white/70" colSpan={4}>
                                        Még nincs egyetlen üzenet sem.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
