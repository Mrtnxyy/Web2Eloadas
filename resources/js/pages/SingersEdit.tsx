import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function SingersEdit() {
    const { item } = usePage().props as any;
    const { data, setData, put, processing, errors } = useForm({
        name: item.name || '',
        birth_year: item.birth_year || '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(`/singers-crud/${item.id}`);
    }

    return (
        <AppLayout>
            <Head title="Énekes szerkesztése" />
            <div className="p-6 max-w-xl">
                <h1 className="mb-4 text-2xl font-semibold">Énekes szerkesztése</h1>
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm text-white/80">Név</label>
                        <input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-orange-400"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm text-white/80">Születési év</label>
                        <input
                            value={data.birth_year}
                            onChange={(e) => setData('birth_year', e.target.value)}
                            className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-orange-400"
                        />
                        {errors.birth_year && <p className="mt-1 text-xs text-red-400">{errors.birth_year}</p>}
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 disabled:opacity-60"
                        >
                            Mentés
                        </button>
                        <Link
                            href="/singers-crud"
                            className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                        >
                            Mégse, vissza a listához
                        </Link>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
