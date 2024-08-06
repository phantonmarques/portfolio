<script setup>
    import { translate, useLanguage } from '@/i18n/i18n.js';
</script>

<template>
    <section id="about" aria-label="About me">
        <div class="container">
            <div class="about-photo">
                <img src="@/assets/images/about-me.jpg" height="260" width="260" alt="About me">
            </div>
            <article class="about-content">
                <h2 class="subtitle-default">
                    {{ translate('about_title') }}
                </h2>
                <p>
                    {{ translate('about_description') }}
                </p>
            </article>
        </div>
    </section>
</template>

<style scoped>
    /** Dark Theme */

    .dark #about {
        background-color: var(--bg-color-dark);
    }

    .dark .about-photo img {
        border: 1px solid rgba(28, 28, 28, .1);
        box-shadow: 1px 1px 2px 0 rgba(28, 28, 28,0.2);
    }

    .dark .about-content p {
        color: var(--color-secondary-4);
    }

    /** Light Theme */

    .light .about-photo img {
        border: 1px solid rgba(61, 61, 61, .1);
        box-shadow: 1px 1px 2px 0 rgba(61,61,61,0.2);
    }

    .light .about-content p {
        color: var(--color-secondary-11);
    }

    /** About me */

    #about {
        padding: 5.5rem 0 10rem 0;
    }

    #about .container {
        display: grid;
        grid-template-columns: 260px auto;
        gap: 40px;
    }

    .about-photo {
        max-width: 100%;
    }

    .about-photo img {
        border-radius: 5px;
        max-width: 100%;
        height: 100%;
        width: auto;
        object-fit: cover;
        object-position: center center;
    }

    .about-content p {
        font-size: 1rem;
        line-height: 1.5;
    }
    
    /** Media queries */

    @media (max-width: 900px) {
        #about {
            padding: 3.75rem 0 2.5rem 0;
        }

        #about .container {
            grid-template-columns: 1fr;
        }

        .about-photo {
            text-align: center;
        }

        .about-photo img {
            width: calc(100vw - 40%);
        }
    }

    @media (max-width: 400px) {
        .about-content p {
            font-size: 0.75rem;
        }
    }
</style>