import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Admin() {
    return (
        <AppLayout>
            <Head title="Admin" />
            <div className="p-6 text-white">
                <h1 className="text-2xl mb-4">Admin oldal</h1>
                <p>Admin funkciók kezelése.</p>
            </div>
        </AppLayout>
    );
}
