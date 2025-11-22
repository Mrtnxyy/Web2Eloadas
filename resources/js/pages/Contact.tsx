import { Head, useForm } from '@inertiajs/react';

export default function Contact() {
    const { data, setData, post } = useForm({ subject:'', body:'' });

    return (
        <>
            <Head title="Kapcsolat" />
            <div className="p-6 text-white max-w-xl mx-auto">
                <h1 className="text-2xl mb-4">Kapcsolat</h1>
                <form onSubmit={e=>{e.preventDefault(); post('/contact');}} className="space-y-4">
                    <input className="w-full p-2 bg-white/10" placeholder="Tárgy"
                        value={data.subject} onChange={e=>setData('subject',e.target.value)} />
                    <textarea className="w-full p-2 bg-white/10 h-40" placeholder="Üzenet"
                        value={data.body} onChange={e=>setData('body',e.target.value)} />
                    <button className="px-4 py-2 bg-orange-500">Küldés</button>
                </form>
            </div>
        </>
    );
}
