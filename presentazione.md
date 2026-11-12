---
layout: presentation
title: Presentazione
description: Presentazione della Società Ciclistica Dilettantistica Fanese.
menu-position:
---

<!-- Container Principale Infografica -->
<div class="max-w-4xl mx-auto my-0 sm:my-8 bg-fanese-bg shadow-2xl rounded-none sm:rounded-3xl overflow-hidden border border-slate-700/50">
    <!-- HEADER / TOP BANNER (Rosso Granata) -->
    <header class="hero-pattern text-white text-center px-6 py-10 sm:py-12 relative overflow-hidden border-b-4 border-fanese-gold">
        <!-- Decorative Accent Elements -->
        <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-fanese-gold/10 rounded-full blur-2xl"></div>
        <div class="absolute -left-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10 flex flex-col items-center">
            <!-- LOGO PLACEHOLDER / EMBLEM -->
            <div class="mb-4 bg-white p-3 rounded-2xl shadow-xl border-2 border-fanese-gold flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
              <img src="{% link assets/images/logo-small.png %}" alt="Logo SCD Fanese" />
            </div>
            <!-- TITLE & SUBTITLE -->
            <span class="inline-block bg-fanese-gold text-slate-900 font-extrabold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-3 shadow-md">
                Fano • Dal 1979
            </span>
            <h1 class="font-heading text-3xl sm:text-5xl font-black tracking-tight mb-2 text-white drop-shadow-md">
                S.C.D. FANESE
            </h1>
            <p class="text-slate-100 font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Società Ciclistica Dilettantistica
            </p>
            <div class="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-black/25 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                <i class="fa-solid fa-heart text-fanese-gold"></i> Passione • Gruppo • Ciclismo per Tutti
            </div>
        </div>
    </header>
    <!-- MAIN BODY CONTENT -->
    <main class="p-6 sm:p-10 space-y-10">
        <!-- SECTION 1: CHI SIAMO (STATS & OVERVIEW) -->
        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-fanese-granata/10 text-fanese-granata flex items-center justify-center font-bold text-xl">
                    <i class="fa-solid fa-users"></i>
                </div>
                <div>
                    <h2 class="font-heading text-xl sm:text-2xl font-bold text-slate-900">Chi Siamo</h2>
                    <p class="text-xs text-slate-500">Un grande gruppo unito dalla stessa passione</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Card 1 -->
                <div class="bg-white border border-slate-200 rounded-2xl p-5 card-hover flex flex-col justify-between shadow-sm">
                    <div>
                        <div class="text-3xl font-extrabold font-heading text-fanese-granata mb-1">~70 Soci</div>
                        <p class="text-sm text-slate-600 font-medium">Ciclisti amatoriali di ogni età e livello di esperienza.</p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                        <i class="fa-solid fa-face-smile text-fanese-gold"></i> Ambiente accogliente
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="bg-white border border-slate-200 rounded-2xl p-5 card-hover flex flex-col justify-between shadow-sm">
                    <div>
                        <div class="text-3xl font-extrabold font-heading text-fanese-granata mb-1">Strada +</div>
                        <p class="text-sm text-slate-600 font-medium">Prevalenza Bici da Corsa ma con spazio per <strong>Gravel</strong> e <strong>MTB</strong>.</p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                        <span class="bg-fanese-granata/10 text-fanese-granata font-semibold px-2 py-0.5 rounded">Strada</span>
                        <span class="bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">Gravel</span>
                        <span class="bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">MTB</span>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="bg-white border border-slate-200 rounded-2xl p-5 card-hover flex flex-col justify-between shadow-sm">
                    <div>
                        <div class="text-3xl font-extrabold font-heading text-fanese-granata mb-1">Fano (PU)</div>
                        <p class="text-sm text-slate-600 font-medium">Il punto di partenza delle attività.</p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                        <i class="fa-solid fa-location-dot text-fanese-granata"></i> Raduni e uscite locali
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION 2: ATTIVITÀ ED USCITE -->
        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-fanese-granata/10 text-fanese-granata flex items-center justify-center font-bold text-xl">
                    <i class="fa-solid fa-bicycle"></i>
                </div>
                <div>
                    <h2 class="font-heading text-xl sm:text-2xl font-bold text-slate-900">Cosa Facciamo</h2>
                    <p class="text-xs text-slate-500">Uscite settimanali, gare ed esperienze condivise</p>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Uscite di Gruppo -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-fanese-granata to-fanese-granatadark text-white shadow-md relative overflow-hidden flex flex-col justify-between">
                    <div class="relative z-10 space-y-2">
                        <span class="inline-block bg-fanese-gold text-slate-900 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Tutte le settimane
                        </span>
                        <h3 class="font-heading text-lg font-bold text-white">Uscite di Gruppo</h3>
                        <p class="text-sm text-slate-100 leading-relaxed">
                            Pedaliamo insieme <strong>tutti i Sabati, Domeniche e Festivi</strong>. Gruppi affiatati e giri adatti a tutti.
                        </p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-200">
                        <span><i class="fa-regular fa-calendar-check mr-1 text-fanese-gold"></i> Sab, Dom & Festivi</span>
                        <span><i class="fa-solid fa-users mr-1"></i> Spirito di squadra</span>
                    </div>
                </div>
                <!-- Eventi & Gare -->
                <div class="p-5 rounded-2xl bg-white border border-slate-200 card-hover shadow-sm flex flex-col justify-between">
                    <div class="space-y-2">
                        <span class="inline-block bg-fanese-granata/10 text-fanese-granata text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Sfide & Eventi
                        </span>
                        <h3 class="font-heading text-lg font-bold text-slate-900">Gare & Cicloturistiche</h3>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            Ampia scelta per i soci: partecipazione a <strong>Gran Fondo</strong>, Mediofondo "della crostata", gare in circuito e brevetti <strong>Randonnée</strong>.
                        </p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                        <span class="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-medium">Gran Fondo</span>
                        <span class="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-medium">Medio Fondo</span>
                        <span class="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-medium">Circuito</span>
                        <span class="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-medium">Randonnée</span>
                    </div>
                </div>
                <!-- Vacanza in Montagna -->
                <div class="sm:col-span-2 p-5 rounded-2xl bg-fanese-granata/5 border border-fanese-granata/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-fanese-granata text-fanese-gold flex-shrink-0 flex items-center justify-center text-2xl shadow-md">
                            <i class="fa-solid fa-mountain-sun"></i>
                        </div>
                        <div>
                            <h3 class="font-heading text-base font-bold text-slate-900">Vacanza in Montagna & Uscite Extra</h3>
                            <p class="text-sm text-slate-700"><strong>Un soggiorno estivo in montagna</strong> ogni anno + altre uscite e trasferte da decidere e organizzare insieme.</p>
                        </div>
                    </div>
                    <span class="bg-fanese-granata text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-sm">
                        <i class="fa-solid fa-campground mr-1 text-fanese-gold"></i> Evento Sociale
                    </span>
                </div>
            </div>
        </section>
        <!-- SECTION 3: ISCRIZIONE E QUOTE (CORRETTA STRUTTURA TRIENNALE) -->
        <section class="space-y-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-fanese-granata/10 text-fanese-granata flex items-center justify-center font-bold text-xl">
                        <i class="fa-solid fa-id-card"></i>
                    </div>
                    <div>
                        <h2 class="font-heading text-xl sm:text-2xl font-bold text-slate-900">Iscrizione & Quote</h2>
                        <p class="text-xs text-slate-500">Tesseramento ACSI ufficiale e Kit sociale triennale</p>
                    </div>
                </div>
                <span class="text-xs bg-slate-900 text-white font-semibold px-3 py-1 rounded-full border border-slate-700">
                    ACSI Ciclismo
                </span>
            </div>
            <!-- CARD PROMO STRUTTURA CICLO TRIENNALE -->
            <div class="bg-white border-2 border-fanese-granata/30 rounded-3xl p-6 shadow-md space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                        <span class="inline-block bg-fanese-granata text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                            Ciclo Triennale Tesseramento
                        </span>
                        <h3 class="font-heading text-xl font-extrabold text-slate-900">Come funziona l'iscrizione</h3>
                        <p class="text-sm text-slate-600">L'iscrizione ha una durata basata su un <strong>ciclo triennale</strong> con kit estivo garantito per l'intero triennio.</p>
                    </div>
                    <div class="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center flex-shrink-0">
                        <span class="block text-xs font-bold text-slate-900 uppercase">Kit Estivo Completo</span>
                        <span class="text-xs text-slate-600">Maglia + Pantalone + Guanti + Calzetti</span>
                    </div>
                </div>
                <!-- BREAKDOWN COSTI SENZA PREZZI (ANNO 1 vs ANNO 2 e 3) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- ANNO 1 -->
                    <div class="bg-gradient-to-br from-fanese-granata to-fanese-granatadark text-white rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-lg">
                        <div class="absolute top-3 right-3 bg-fanese-gold text-slate-900 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                            1° Anno del Triennio
                        </div>
                        <div>
                            <div class="text-xs font-medium text-slate-200">Apertura Ciclo Triennale</div>
                            <div class="my-2">
                                <span class="text-2xl sm:text-3xl font-black font-heading text-white leading-tight block">Iscrizione + Kit Estivo</span>
                            </div>
                            <ul class="text-xs space-y-2 text-slate-100 mt-3">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-fanese-gold mt-0.5"></i>
                                    <span>Quota di iscrizione e assicurazione <strong>ACSI Ciclismo</strong></span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-shirt text-fanese-gold mt-0.5"></i>
                                    <span><strong>KIT ESTIVO COMPLETO incluso</strong> (valido per l'intero triennio)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ANNI 2 e 3 -->
                    <div class="bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl p-5 flex flex-col justify-between">
                        <div class="flex justify-between items-center">
                            <span class="text-xs font-bold text-slate-500 uppercase">2° e 3° Anno del Triennio</span>
                            <span class="bg-slate-200 text-slate-700 font-bold text-[10px] px-2 py-0.5 rounded-full">Rinnovi Successivi</span>
                        </div>
                        <div>
                            <div class="my-2">
                                <span class="text-2xl sm:text-3xl font-black font-heading text-fanese-granata leading-tight block">Solo Quota Iscrizione</span>
                            </div>
                            <ul class="text-xs space-y-2 text-slate-600 mt-3">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-600 mt-0.5"></i>
                                    <span>Rinnovo esclusivo della tessera e assicurazione <strong>ACSI Ciclismo</strong></span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-600 mt-0.5"></i>
                                    <span>Utilizzo del kit estivo già in dotazione per tutto il triennio</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-3 text-xs text-slate-600 flex items-center justify-between gap-2">
                    <span><i class="fa-solid fa-info-circle text-fanese-granata mr-1"></i> Kit invernale ed eventuali altri capi di abbigliamento sono ordinabili a parte.</span>
                </div>
            </div>
        </section>
        <!-- SECTION 4: VANTAGGI & VITA SOCIALE (SYSTEM PUNTI) -->
        <section class="bg-gradient-to-r from-fanese-granata via-fanese-granatalight to-fanese-granatadark rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-fanese-gold/30">
            <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl font-black text-white">
                <i class="fa-solid fa-gift"></i>
            </div>
            <div class="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
                <div class="space-y-2 text-center md:text-left">
                    <span class="bg-fanese-gold text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                        Premio Partecipazione
                    </span>
                    <h2 class="font-heading text-2xl sm:text-3xl font-extrabold">Più Pedali, Più Accumuli!</h2>
                    <p class="text-slate-100 text-sm max-w-lg leading-relaxed">
                        Le attività sociali ti permettono di guadagnare <strong>punti sociali</strong>.<br>
                        Al <strong>cenone di fine anno</strong>, la tua costanza e presenza si trasformeranno in <strong>Buoni Spesa</strong>!
                    </p>
                </div>
                <div class="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col items-center justify-center text-center w-full md:w-auto min-w-[210px] border-2 border-fanese-gold">
                    <div class="w-12 h-12 bg-fanese-granata/10 text-fanese-granata rounded-full flex items-center justify-center text-2xl mb-2">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <div class="font-heading font-extrabold text-xl text-fanese-granata">Punti Sociali</div>
                    <span class="text-xs font-bold text-slate-600 mt-0.5">➡ Buoni Spesa a fine anno!</span>
                </div>
            </div>
        </section>
        <!-- SECTION 5: SEDE & RIUNIONI -->
        <section class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-fanese-granata/10 text-fanese-granata flex items-center justify-center font-bold text-xl">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                    <h2 class="font-heading text-xl sm:text-2xl font-bold text-slate-900">Vieni a Trovarci in Sede</h2>
                    <p class="text-xs text-slate-500">Ti aspettiamo per conoscerci ed effettuare l'iscrizione</p>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div class="p-3 bg-fanese-granata text-white rounded-xl text-xl shadow-sm">
                        <i class="fa-solid fa-building"></i>
                    </div>
                    <div>
                        <h4 class="font-heading font-bold text-slate-900 text-sm">Dove Siamo</h4>
                        <p class="text-sm text-slate-600 mt-1">
                            <a href="https://goo.gl/maps/E6Z1BFi2HTECuYQ28" target="_blank">
                              Sede S.C.D. Fanese<br>
                              <strong>Via Metauro - c/o Stadio R.Mancini</strong><br>
                              61032 Fano (PU)
                            </a>
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div class="p-3 bg-fanese-granata text-white rounded-xl text-xl shadow-sm">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                        <h4 class="font-heading font-bold text-slate-900 text-sm">Quando Ci Vediamo</h4>
                        <p class="text-sm text-slate-600 mt-1">
                            Tutti i <strong>Lunedì Sera</strong><br>
                            <span class="text-xs text-slate-500">Apertura settimanale per soci e informazioni!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- FOOTER / CTA -->
    <footer class="bg-slate-950 text-white text-center p-6 border-t border-slate-800">
        <p class="text-sm font-semibold text-slate-200">
            Pronto a salire in sella con la S.C.D. Fanese?
        </p>
        <p class="text-xs text-slate-400 mt-1">
            S.C.D. Fanese • Visita il sito ufficiale su <a href="https://scfanese.com" target="_blank" rel="noopener" class="text-fanese-gold hover:underline font-bold">scfanese.com</a>
        </p>
    </footer>
</div>
