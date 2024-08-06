<script setup>
    import { translate } from '@/i18n/i18n.js';
    import { scroll } from '@/composables/scroll.js';

    const { scrollToSection } = scroll();
</script>

<template>
    <main id="introduction" aria-label="Introduction">
        <div class="container">
            <article class="introduction-content">
                <h1 class="title-default" v-html="translate('introduction_title')"></h1>
                <p>
                    {{ translate('introduction_details') }}
                </p>
                <a href="#contact" @click.prevent="scrollToSection('contact')" aria-label="Know more" class="btn-default">
                    {{ translate('introduction_button') }}
                </a>
            </article>
            <div class="introduction-image">
                <img src="@/assets/images/solutions.jpg" alt="Solutions" height="250" width="370">
            </div>
        </div>
    </main>
</template>

<style scoped>
    /** Dark Theme */

    .dark #introduction {
        background-color: var(--color-secondary-14);
        box-shadow: inset 0 0 black, inset 0 -72px var(--bg-color-dark);
    }

    .dark .introduction-content {
        color: var(--color-secondary-4);
    }

    /** Light Theme */

    .light #introduction {
        background-color: var(--color-secondary-1);
        box-shadow: inset 0 0 black, inset 0 -72px var(--bg-color-light);
    }

    .light .introduction-content {
        color: var(--color-secondary-11);
    }

    /** Introduction */

    #introduction {
        padding-top: 60px;
    }

    #introduction .container {
        box-sizing: border-box;
        display: grid;
        gap: 40px;
        grid-template-columns: 1fr auto;
        margin: auto;
        padding: 0 20px;
        max-width: 1360px;
    }

    /** Introduction Content */

    .introduction-content {
        align-self: end;
        display: block;
        margin: 0 0 4.5rem 5rem;
        max-width: 460px;
        padding-bottom: 20px;
    }

    .introduction-content p {
        font-size: 1rem;
        margin: 0 0 3rem 0;
    }

    /** Image */

    .introduction-image {
        max-width: 100%;
    }

    .introduction-image img {
        border-radius: 5px;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
        object-position: left;
        width: 740px;
    }

    /** Media queries */

    @media (max-width: 900px) {
        .dark #introduction,
        .light #introduction {
            box-shadow: none;
        }

        #introduction .container {
            grid-template-columns: 1fr;
        }

        .introduction-content {
            margin: 0;
            max-width: 500px;
        }

        .introduction-content p {
            margin: 0 0 2rem 0;
        }

        .introduction-image {
            grid-row: 1;
        }

        .introduction-image img {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        .introduction-content p {
            font-size: .75rem;
        }
    }
</style>