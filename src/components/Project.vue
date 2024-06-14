<template>
    <section id="project" class="pt-32 pb-16 transition-all duration-500 bg-slate-50 dark:bg-dark">
        <div class="container mx-auto px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">Portofolio</h4>
                <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">My Latest Project</h2>
                <p class="font-medium text-md text-secondary dark:text-secondary-light">
                    Here are some recent projects I've worked on.
                </p>

            </div>
            <div class="flex flex-wrap justify-center">
                <!-- Card 1 -->
                <div class="w-5/6 lg:w-1/3 px-2 mb-10">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 transition-all duration-500 flex flex-col h-full">
                        <div class="rounded-lg overflow-hidden">
                            <img src="../assets/port1.png" alt="porto 1" class="max-h-70 sm:h-60 w-full object-cover">
                        </div>
                        <a href="https://liburans-web.vercel.app/" target="_blank"
                            class="font-semibold text-xl text-primary mt-5 mb-3 dark:text-white">Liburans Landing
                            Page</a>
                        <p class="font-medium text-base text-secondary mb-auto dark:text-secondary-light">
                            A travel site that provides various travel-related services, such as booking plane tickets,
                            hotels, holiday packages, car rentals and tourist activities.
                        </p>
                        <div class="mt-4 flex flex-wrap">
                            <span
                                class="mt-1 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-100">HTML</span>
                            <span
                                class="mt-1 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-800 dark:text-yellow-100">JavaScript</span>
                            <span
                                class="mt-1 bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-800 dark:text-purple-100">TailwindCSS</span>
                        </div>
                    </div>
                </div>
                <!-- End Card 1 -->

                <!-- Card 2 -->
                <div class="w-5/6 lg:w-1/3 px-2 mb-10">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 transition-all duration-500 flex flex-col h-full">
                        <div class="rounded-lg overflow-hidden">
                            <img src="../assets/port2.png" alt="porto 2" class="max-h-70 sm:h-60 w-full object-cover">
                        </div>
                        <a href="https://github.com/olisuside/Point-Of-Sale.git" target="_blank"
                            class="font-semibold text-xl text-primary mt-5 mb-3 dark:text-white">Point of Sale Web</a>
                        <p class="font-medium text-base text-secondary mb-auto dark:text-secondary-light">
                            Point of Sale (POS) web application used by businesses to manage their sales processes and
                            financial transactions. This system uses a payment gateway to facilitate the payment
                            process.
                        </p>
                        <div class="mt-4 flex flex-wrap">
                            <span
                                class="mt-1 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-800 dark:text-red-100">Laravel</span>
                            <span
                                class="mt-1 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-800 dark:text-yellow-100">JavaScript</span>
                            <span
                                class="mt-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-100">Mazer
                                Bootstrap</span>
                        </div>
                    </div>
                </div>
                <!-- End Card 2 -->
            </div>
        </div>
    </section>
</template>
