<script setup>
    // Import the sections on page
    import Header from '@/components/Header.vue';
    import Introduction from "@/components/Introduction.vue";
    import About from "@/components/About.vue";
    import Projects from "@/components/Projects.vue";
    import Skills from "@/components/Skills.vue";
    import Contact from "@/components/Contact.vue";
    import Footer from "@/components/Footer.vue";

    // Import Icons
    import IconMoon from '@/components/icons/Moon.vue';
    import IconSun from '@/components/icons/Sun.vue';
    import IconWhatsapp from '@/components/icons/contacts/Whatsapp.vue';

    import { ref } from 'vue';
    import { isBrazilian } from '@/i18n/i18n.js';

    // Choose theme
    const theme = ref('dark');

    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
    };

</script>

<template>
    <div :class="`theme ${theme}`">
        <Header />
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <span class="theme-turn" @click="toggleTheme">
            <IconSun />
            <IconMoon />
        </span>
        <a v-if="isBrazilian()" href="https://wa.me/41991566235" target="_blank" class="whatsapp" rel="noopener noreferrer" aria-label="Contact for whatsapp">
            <IconWhatsapp />
        </a>
    </div>
</template>

<style scoped>
    /** Theme Dark */

    .dark .whatsapp {
        background-color: var(--color-secondary-4);
    }

    .dark .whatsapp::before {
        border: 5px solid var(--bg-color-light);
    }

    .dark .whatsapp svg {
        fill: var(--bg-color-dark);
    }

    .dark .theme-turn {
        background-color: var(--color-secondary-4);
    }

    .dark .theme-turn::after {
        background-color: var(--bg-color-dark);
        left: 40px;
    }

    .dark .theme-turn svg:first-child,
    .dark .theme-turn svg:last-child {
        fill: var(--color-secondary-10);
    }

    /** Light Theme */

    .light .whatsapp {
        background-color: var(--color-secondary-10);
    }

    .light .whatsapp::before {
        border: 5px solid var(--bg-color-dark);
    }

    .light .whatsapp svg {
        fill: var(--bg-color-light);
    }

    .light .theme-turn {
        background-color: var(--color-secondary-11);
    }

    .light .theme-turn::after {
        background-color: var(--bg-color-light);
        left: 4px;
    }

    .light .theme-turn svg:first-child,
    .light .theme-turn svg:last-child {
        fill: var(--color-secondary-10);
    }

    /** Whatsapp Fixed */

    .whatsapp {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        bottom: 20px;
        right: 20px;
        height: 48px;
        width: 48px;
        z-index: 3;
    }

    .whatsapp svg {
        height: 36px;
        width: auto;
    }

    .whatsapp::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        padding: 24px;
        opacity: 0.75;
        animation: pulse-border 1.5s ease-out infinite;
    }

    /** Theme Turn Fixed */

    .theme-turn {
        position: fixed;
        display: block;
        border-radius: 100px;
        cursor: pointer;
        bottom: 20px;
        left: 20px;
        height: 36px;
        width: 72px;
        z-index: 3;
    }

    .theme-turn::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        bottom: 4px;
        transition: .5s ease-in-out;
        width: 28px;
        height: 28px;
    }

    .theme-turn svg:first-child,
    .theme-turn svg:last-child {
        position: absolute;
        bottom: 8px;
        height: 20px;
        width: 20px;
        z-index: 4;
    }

    .theme-turn svg:first-child {
        left: 8px;
    }

    .theme-turn svg:last-child {
        left: 44px;
    }

    /** Animations */

    @keyframes pulse-border {
        0% {
            padding: 28px;
            opacity: 0.75;
        }
        75% {
            padding: 36px;
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
</style>