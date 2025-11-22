import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function SingersCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        birth_year: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/singers-crud');
    }

    return (
        <AppLayout>
            <Head title="Új énekes" />
            <div className="p-6 max-w-xl">
                <h1 className="mb-4 text-2xl font-semibold">Új énekes felvétele</h1>
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
