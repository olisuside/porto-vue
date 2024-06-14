<template>
    <section id="contact" class="pt-36 pb-32 dark:bg-slate-900 transition-all duration-500">
        <div class="container">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
                    <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">Contact Me</h2>
                    <p class="font-medium text-md text-secondary">
                        Send a message if you are interested, or just want to exchange stories.
                    </p>
                </div>
            </div>
            
            <!-- Wrap the form with transition -->
            <transition name="fade">
                <form v-if="showForm" key="contact-form" @submit.prevent="submitForm" class="md:w-1/2 md:mx-auto">
                    <div class="w-full px-4 mb-8">
                        <label for="name" class="text-base font-bold text-primary dark:text-white" >Name</label>
                        <input type="text" id="name" v-model="formData.name" class="w-full bg-slate-200 text-dark p-3 rounded-md 
                            focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none dark:bg-slate-600" required>
                    </div>
                    <div class="w-full px-4 mb-8">
                        <label for="email" class="text-base font-bold text-primary dark:text-white">Email</label>
                        <input type="email" id="email" v-model="formData.email" class="w-full bg-slate-200 text-dark p-3 rounded-md 
                            focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none dark:bg-slate-600" required>
                    </div>
                    <div class="w-full px-4 mb-8">
                        <label for="pesan" class="text-base font-bold text-primary dark:text-white">Message</label>
                        <textarea type="text" id="pesan" v-model="formData.message" class="w-full bg-slate-200 text-dark p-3 rounded-md 
                            focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none h-32 dark:bg-slate-600" required></textarea>
                    </div>
                    <div class="w-full px-4">
                        <button type="submit" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full 
                            hover:opacity-80 hover:shadow-lg transition duration-500">Send</button>
                    </div>
                </form>
            </transition>
            
            <!-- Success message after form submission -->
            <div v-if="formSubmitted" key="success-message" class="text-center mt-8">
                <transition name="fade">
                    <p class="font-bold text-xl text-purple-500">Thank you for your message!</p>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showForm: true,
            formSubmitted: false,
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Simulate form submission (replace with actual form handling)
            console.log('Form submitted with data:', this.formData);
            this.showForm = false; // Hide the form
            this.formSubmitted = true; // Show success message
        }
    }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
