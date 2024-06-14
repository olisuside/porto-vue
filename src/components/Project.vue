<template>
    <section id="project" class="pt-32 pb-16 bg-slate-50 dark:bg-dark transition-all duration-500 ">
        <div class="container">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary mb-2 dark:text-primary-light">Portofolio</h4>
                    <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">Project Terbaru</h2>
                    <p class="font-medium text-md text-secondary dark:text-secondary-light">
                        Berikut adalah beberapa proyek terbaru yang telah saya kerjakan sambil rebahan.
                    </p>
                </div>
            </div>
            <div class="flex flex-wrap justify-center px-4">
                <div v-for="porto in portos" :key="porto.id" class="w-5/6 px-2 mb-10 lg:w-1/3">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 transition duration-500 flex flex-col h-full">
                        <div class="rounded-lg overflow-hidden">
                            <img :src="`./src/assets/${porto.imageSrc}`" :alt="porto.imageAlt"
                                class="max-h-70 sm:h-60 w-full object-cover">
                        </div>
                        <a :href="porto.link" target="_blank"
                            class="font-semibold text-xl text-primary mt-5 mb-3 dark:text-white">{{ porto.title }}</a>
                        <p class="font-medium text-base text-secondary mb-auto dark:text-secondary-light">
                            {{ porto.description }}
                        </p>
                        <div class="mt-4 flex flex-wrap">
                            <span v-for="tech in porto.technologies" :key="tech.name"
                                :class="[tech.bgClass, tech.textClass, 'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-dark dark:text-opacity-90']">{{
                                tech.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            portos: [
                {
                    id: 1,
                    imageSrc: 'port1.png',
                    imageAlt: 'porto 1',
                    title: 'Landing Page Liburans',
                    link: 'https://github.com/olisuside/liburans-web.git',
                    description: 'Sebuah situs travel yang menyediakan berbagai layanan terkait perjalanan, seperti pemesanan tiket pesawat, hotel, paket liburan, penyewaan mobil, dan aktivitas wisata.',
                    technologies: [
                        { name: 'HTML', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
                        { name: 'JavaScript', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
                        { name: 'TailwindCSS', bgClass: 'bg-purple-100', textClass: 'text-purple-800' }
                    ]
                },
                {
                    id: 2,
                    imageSrc: 'port2.png',
                    imageAlt: 'porto 2',
                    title: 'Web Point of Sale',
                    link: 'https://github.com/olisuside/Point-Of-Sale.git',
                    description: 'Sebuah web aplikasi Point of Sale (POS) yang digunakan oleh bisnis untuk mengelola proses penjualan dan transaksi keuangan mereka. Sistem ini menggunaan payment gateway untuk memudahkan prosesi pembayaran.',
                    technologies: [
                        { name: 'Laravel', bgClass: 'bg-red-100', textClass: 'text-red-800' },
                        { name: 'JavaScript', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
                        { name: 'Mazer Bootstrap', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
                    ]
                }
            ]
        };
    }
};
</script>