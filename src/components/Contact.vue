<script setup>
    import { ref } from 'vue';
    import { translate } from '@/i18n/i18n.js';

    import axios from 'axios';

    import Swal from 'sweetalert2';

    const name = ref('');
    const email = ref('');
    const message = ref('');
    const isSubmitting = ref(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name.value || !email.value || !message.value) {
            Swal.fire({
                title: translate('contact_error_title'),
                text: translate('contact_error_fields'),
                icon: 'error',
                showConfirmButton: false,
                timer: 5000
            });
            return;
        }

        if (!validateEmail(email.value)) {
            Swal.fire({
                title: translate('contact_error_title'),
                text: translate('contact_error_email'),
                icon: 'error',
                showConfirmButton: false,
                timer: 5000
            });
            return;
        }

        isSubmitting.value = true;

        try {
            await axios.post('/send.php', {
                name: name.value,
                email: email.value,
                message: message.value
            });

            Swal.fire({
                title: translate('contact_success_title'),
                text: translate('contact_success'),
                icon: 'success',
                showConfirmButton: false,
                timer: 5000
            });
        } catch (error) {
            Swal.fire({
                title: translate('contact_error_title'),
                text: translate('contact_error'),
                icon: 'error',
                showConfirmButton: false,
                timer: 5000
            });
        } finally {
            isSubmitting.value = false;
        }
    };
</script>

<template>
    <section id="contact" aria-label="Contact">
        <div class="container">
            <h2 class="subtitle-default">
                {{ translate('contact_title') }}
            </h2>
            <div class="contact-content">
                <form class="contact-form" @submit="handleSubmit">
                    <div class="form-input-group">
                        <label for="name" class="form-label">
                            {{ translate('contact_label_name') }}<span>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            v-model="name"
                            class="form-input"
                            :placeholder="translate('contact_placeholder_name')"
                            required
                        >
                    </div>
                    <div class="form-input-group">
                        <label for="email" class="form-label">
                            {{ translate('contact_label_email') }}<span>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            v-model="email"
                            class="form-input"
                            :placeholder="translate('contact_placeholder_email')"
                            required
                        >
                    </div>
                    <div class="form-input-group">
                        <label for="message" class="form-label">
                            {{ translate('contact_label_message') }}<span>*</span>
                        </label>
                        <textarea
                            class="form-textarea"
                            id="message"
                            name="message"
                            rows="8"
                            v-model="message"
                            :placeholder="translate('contact_placeholder_message')"
                            required
                        ></textarea>
                    </div>

                    <button class="btn-default">{{ translate('contact_button') }}</button>
                </form>
                <ul class="contact-extra">
                    <li><a href="tel:+5541991566235" aria-label="Contact for phone">+55 41 991566235</a></li>
                    <li><a href="mailto:contact@damc.com" aria-label="Contact for e-mail">contact@damc.com</a></li>
                    <li>{{ translate('contact_locate') }}</li>
                    <li>{{ translate('contact_thanks') }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
    /** Dark Theme */

    .dark #contact {
        background-color: var(--color-secondary-14);
    }

    .dark .form-label {
        color: var(--color-secondary-2);
    }

    .dark .form-label span {
        color: rgb(255, 0, 0);
    }

    .dark .form-input,
    .dark .form-textarea {
        background-color: var(--bg-color-dark);
        border: 1px solid var(--color-secondary-11);
        color: var(--color-secondary-2);
    }

    .dark .form-input::placeholder,
    .dark .form-textarea::placeholder,
    .dark .form-input:-ms-input-placeholder,
    .dark .form-textarea:-ms-input-placeholder,
    .dark .form-input::-ms-input-placeholder,
    .dark .form-textarea::-ms-input-placeholder {
        color: var(--color-secondary-4);
    }

    .dark .form-input:focus,
    .dark .form-textarea:focus {
        background-color: var(--color-secondary-12);
        border-color: var(--color-primary-4);
        box-shadow: 0 0 0 2px var(--color-primary-10);
    }

    .dark .contact-extra::before {
        background-color: var(--color-secondary-12);
    }

    .dark .contact-extra li {
        color: var(--color-secondary-2);
    }

    .dark .contact-extra li:hover a {
        color: var(--color-primary-4);
    }

    /** Light Theme */

    .light #contact {
        background-color: var(--color-secondary-1);
    }

    .light .form-label {
        color: var(--color-secondary-13);
    }

    .light .form-label span {
        color: rgb(255, 0, 0);
    }

    .light .form-input,
    .light .form-textarea {
        background-color: var(--bg-color-light);
        border: 1px solid var(--color-secondary-4);
        color: var(--bg-color-dark);
    }

    .light .form-input::placeholder,
    .light .form-textarea::placeholder,
    .light .form-input:-ms-input-placeholder,
    .light .form-textarea:-ms-input-placeholder,
    .light .form-input::-ms-input-placeholder,
    .light .form-textarea::-ms-input-placeholder {
        color: var(--color-secondary-4);
    }

    .light .form-input:focus,
    .light .form-textarea:focus {
        background-color: var(--bg-color-light);
        border-color: var(--color-primary-10);
        box-shadow: 0 0 0 2px var(--color-primary-4);
    }

    .light .contact-extra::before {
        background-color: var(--color-secondary-2);
    }

    .light .contact-extra li {
        color: var(--color-secondary-11);
    }

    .light .contact-extra li:hover a {
        color: var(--color-primary-8);
    }

    /** Contact */

    #contact {
        padding: 3.75rem 0 0 0;
    }

    #contact h2 {
        margin-bottom: 60px;
    }

    .contact-content {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        padding: 0 0 40px 0;
        justify-content: center;
        align-content: center;
    }

    /** Form */

    .contact-form {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .form-input-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 8px;
    }

    .form-label {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1;
    }

    .form-label span {
        margin-left: 4px;
    }

    .form-input,
    .form-textarea {
        padding: 12px;
    }

    .form-input,
    .form-input::placeholder,
    .form-textarea {
        border-radius: 5px;
        font-family: initial;
        font-size: 1rem;
        letter-spacing: 0;
        line-height: 1.2;
    }

    .form-input,
    .form-input::placeholder {
        resize: vertical;
    }

    .form-input:focus,
    .form-textarea:focus {
        outline: none;
    }

    /** Extra contact list */

    .contact-extra {
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        padding-left: 32px;
        position: relative;
    }

    .contact-extra::before {
        content: '';
        position: absolute;
        inset: auto auto auto 0;
        height: 60%;
        width: 2px;
    }

    .contact-extra li,
    .contact-extra li a {
        font-weight: 500;
        transition: .3s ease-in-out;
    }

    /** Media queries */

    @media (max-width: 900px) {
        #contact h2 {
            margin-bottom: 40px;
        }

        .contact-form {
            gap: 16px;
        }

        .form-input-group {
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        }
    }

    @media (max-width: 640px) {
        #contact {
            padding: 2rem 0 0 0;
        }

        .contact-content {
            flex-direction: column;
        }

        .contact-form {
            width: 100%;
        }

        .form-input-group {
            grid-template-columns: 1fr;
        }

        .form-label {
            font-size: 1rem;
        }

        .form-input,
        .form-input::placeholder {
            font-size: .75rem;
        }

        .contact-extra {
            align-items: center;
            padding-left: 0;
            padding-top: 32px;
        }

        .contact-extra::before {
            inset: 0 auto auto auto;
            height: 2px;
            width: 80%;
        }

        .contact-extra li {
            font-size: .75rem;
        }
    }
    
    @media (max-width: 400px) {
        #contact h2 {
            margin-bottom: 20px;
        }

        .form-label {
            font-size: .75rem;
        }
    }
</style>