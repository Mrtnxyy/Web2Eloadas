import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function SingersCrud() {
    const { items } = usePage().props as any;
    const { delete: destroy } = useForm({});

    return (
        <AppLayout>
            <Head title="Énekesek CRUD" />
            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Énekesek kezelése</h1>
                    <Link
                        href="/singers-crud/create"
                        className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
                    >
                        Új énekes
                    </Link>
                </div>
                <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40">
                    <table className="min-w-full text-sm text-white">
                        <thead className="bg-white/10 text-left text-xs uppercase tracking-wide">
                            <tr>
                                <th className="px-3 py-2">ID</th>
                                <th className="px-3 py-2">Név</th>
                                <th className="px-3 py-2">Születési év</th>
                                <th className="px-3 py-2 text-right">Műveletek</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items &&
                                items.map((s: any) => (
                                    <tr key={s.id} className="border-t border-white/10">
                                        <td className="px-3 py-2 align-middle text-xs text-white/70">{s.id}</td>
                                        <td className="px-3 py-2 align-middle">{s.name}</td>
                                        <td className="px-3 py-2 align-middle text-white/80">
                                            {s.birth_year ? s.birth_year : '–'}
                                        </td>
                                        <td className="px-3 py-2 align-middle text-right space-x-2">
                                            <Link
                                                href={`/singers-crud/${s.id}/edit`}
                                                className="rounded-md border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/40 hover:bg-white/10"
                                            >
                                                Szerkesztés
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => destroy(`/singers-crud/${s.id}`)}
                                                className="rounded-md border border-red-500/40 px-3 py-1 text-xs text-red-200 hover:bg-red-600/20"
                                            >
                                                Törlés
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            {(!items || items.length === 0) && (
                                <tr>
                                    <td colSpan={4} className="px-3 py-4 text-center text-sm text-white/60">
                                        Még nincs egyetlen énekes sem.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
