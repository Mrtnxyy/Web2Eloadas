import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Magyar Opera Archívum">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-[#050509] via-[#0b0b11] to-[#15151f] text-[#f5f5f5]">
                <div className="mx-auto flex max-w-6xl flex-col px-4 py-6 lg:px-8">
                    
                    {/* HEADER */}
                    <header className="mb-6 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wide">
                                MOA
                            </div>
                            <div className="leading-tight">
                                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Magyar Opera Archívum</div>
                                <div className="text-[11px] text-white/40">Énekesek, szerepek, művek, repertoár egy helyen</div>
                            </div>
                        </div>

                        <nav className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white transition hover:border-white/30 hover:bg-white/10"
                                >
                                    Vezérlőpult
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 transition hover:border-white/40 hover:bg-white/5"
                                    >
                                        Bejelentkezés
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="rounded-full bg-[#F97316] px-4 py-1.5 text-xs font-semibold tracking-wide text-black shadow-lg shadow-orange-500/30 transition hover:bg-[#FB923C]"
                                    >
                                        Regisztráció
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    {/* MAIN */}
                    <main className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center">
                        
                        {/* LEFT SIDE */}
                        <section className="flex-1">

                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Élő repertoár-statisztikák énekesekről és szerepekről
                            </div>

                            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Digitális opera adatbázis
                                <span className="block text-lg font-normal text-white/70 sm:text-xl">
                                    énekesek, művek és szerepek kapcsolatainak interaktív felfedezéséhez.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">
                                Az oldal célja, hogy egy helyen gyűjtse össze az operai repertoár fontosabb adatait: melyik énekes
                                milyen szerepeket alakított, milyen művekben lépett fel és mikor játszották utoljára ezeket.
                            </p>

                            {/* BUTTONS */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:bg-[#FB923C]"
                                    >
                                        Tovább a vezérlőpultra
                                    </Link>
                                ) : (
                                    <Link
                                        href={register()}
                                        className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:bg-[#FB923C]"
                                    >
                                        Fiók létrehozása
                                    </Link>
                                )}

                                {/* THIS IS THE BUTTON YOU WANTED TO FIX */}
                                <Link
                                    href="/singers"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/5"
                                >
                                    Adatbázis áttekintése
                                </Link>
                            </div>

                            {/* 3 info cards */}
                            <div className="mt-8 grid gap-4 text-xs text-white/70 sm:grid-cols-3">
                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60">Énekesek</div>
                                    <div className="mt-1 text-sm text-white">Részletes lista a szerepkörökkel és születési évvel.</div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60">Művek</div>
                                    <div className="mt-1 text-sm text-white">Szerzők, címek és a hozzájuk tartozó szerepek.</div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60">Repertoár</div>
                                    <div className="mt-1 text-sm text-white">Mikor játszották utoljára az adott szerepet.</div>
                                </div>
                            </div>
                        </section>

                        {/* RIGHT demo cards */}
                        <section className="flex-1">
                            <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                                <div className="mb-3 flex items-center justify-between text-xs text-white/70">
                                    <span>Énekes – Szerep – Mű</span>
                                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-200">Interaktív nézet</span>
                                </div>

                                <div className="space-y-2 rounded-2xl bg-black/60 p-3">
                                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
                                        <div>
                                            <div className="text-[11px] uppercase tracking-wide text-white/50">Énekes</div>
                                            <div className="text-sm font-medium text-white">Staviczky Zinajda</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[11px] uppercase tracking-wide text-white/50">Szerep</div>
                                            <div className="text-sm text-white">Donna Anna</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
                                        <div>
                                            <div className="text-[11px] uppercase tracking-wide text-white/50">Mű</div>
                                            <div className="text-sm font-medium text-white">Mozart: Don Giovanni</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[11px] uppercase tracking-wide text-white/50">Utolsó év</div>
                                            <div className="text-sm text-white">2004</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
                                        <div>
                                            <div className="text-[11px] uppercase tracking-wide text-white/50">Énekes</div>
                                            <div className="text-sm font-medium text-white">Halmy Elina</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[11px] uppercase tracking-wide text-white/50">Szerep</div>
                                            <div className="text-sm text-white">Aida</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-[11px] text-white/70">
                                    Az adatokat az operai szerep-, mű- és énekes-listákból töltjük fel. A későbbi lépésekben
                                    szűrhető táblázatok és diagramok jelennek meg ugyanebből az adatbázisból.
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Bottom info section */}
                    <section id="adatbazis-attekintes" className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
                        <h2 className="text-sm font-semibold text-white">Az adatbázis tartalma</h2>
                        <p className="mt-2 max-w-2xl">
                            A rendszer három fő táblából épül fel: énekesek, művek és szerepek, amelyeket egy repertoár tábla köt össze.
                            Ezekre épülnek majd a listázó oldalak, a CRUD felület, az üzenetküldés és a diagramok.
                        </p>
                    </section>

                </div>
            </div>
        </>
    );
}
