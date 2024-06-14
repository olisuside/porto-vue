<template>
   <section id="project" class="pt-32 pb-16 transition-all duration-500 bg-slate-50 dark:bg-dark">
        <div class="container mx-auto px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">Portofolio</h4>
                <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">Project Terbaru</h2>
                <p class="font-medium text-md text-secondary dark:text-secondary-light">
                    Berikut adalah beberapa proyek terbaru yang telah saya kerjakan.
                </p>
            </div>
            <div class="flex flex-wrap justify-center">
                <!-- Card 1 -->
                <div class="w-5/6 lg:w-1/3 px-2 mb-10">
                    <div class="bg-white dark:bg-gray-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 transition duration-500 flex flex-col h-full">
                        <div class="rounded-lg overflow-hidden">
                            <img src="../assets/port1.png" alt="porto 1" class="max-h-70 sm:h-60 w-full object-cover">
                        </div>
                        <a href="https://github.com/olisuside/liburans-web.git" target="_blank" class="font-semibold text-xl text-primary mt-5 mb-3 dark:text-white">Landing Page Liburans</a>
                        <p class="font-medium text-base text-secondary mb-auto dark:text-secondary-light">
                            Sebuah situs travel yang menyediakan berbagai layanan terkait perjalanan, seperti pemesanan tiket pesawat, hotel, paket liburan, penyewaan mobil, dan aktivitas wisata.
                        </p>
                        <div class="mt-4 flex flex-wrap">
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90">HTML</span>
                            <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90">JavaScript</span>
                            <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90">TailwindCSS</span>
                        </div>
                    </div>
                </div>
                <!-- End Card 1 -->

                <!-- Card 2 -->
                <div class="w-5/6 lg:w-1/3 px-2 mb-10">
                    <div class="bg-white dark:bg-gray-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 transition duration-500 flex flex-col h-full">
                        <div class="rounded-lg overflow-hidden">
                            <img src="../assets/port2.png" alt="porto 2" class="max-h-70 sm:h-60 w-full object-cover">
                        </div>
                        <a href="https://github.com/olisuside/Point-Of-Sale.git" target="_blank" class="font-semibold text-xl text-primary mt-5 mb-3 dark:text-white">Web Point of Sale</a>
                        <p class="font-medium text-base text-secondary mb-auto dark:text-secondary-light">
                            Sebuah web aplikasi Point of Sale (POS) yang digunakan oleh bisnis untuk mengelola proses penjualan dan transaksi keuangan mereka. Sistem ini menggunakan payment gateway untuk memudahkan prosesi pembayaran.
                        </p>
                        <div class="mt-4 flex flex-wrap">
                            <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90">Laravel</span>
                            <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90">JavaScript</span>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90">Mazer Bootstrap</span>
                        </div>
                    </div>
                </div>
                <!-- End Card 2 -->
            </div>
        </div>
    </section>
</template>
