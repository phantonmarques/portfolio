<script setup>
    // Import Icons
    import IconArrowDown from '@/components/icons/ArrowDown.vue';
    import IconLogo from "@/components/icons/Logo.vue";
    import IconMenuMobile from "@/components/icons/MenuMobile.vue";
    import IconEmail from '@/components/icons/contacts/Email.vue';
    import IconGithub from '@/components/icons/contacts/Github.vue';
    import IconLinkedin from '@/components/icons/contacts/Linkedin.vue';
    import IconPhone from '@/components/icons/contacts/Phone.vue';

    // Import Composables, i18n and Vue
    import { translate, useLanguage } from '@/i18n/i18n.js';
    import { scroll } from '@/composables/scroll.js';
    import { ref } from 'vue';

    const { currentFlagComponent, switchToFlagComponent, changeLanguage } = useLanguage();
    const { scrollToSection } = scroll();
    const sideBarOpen = ref(false);

    const toggleSidebar = () => {
        sideBarOpen.value = !sideBarOpen.value;
        document.body.style.overflow = sideBarOpen.value ? 'hidden' : '';
    };

    const menuItems = ref([
        'about',
        'projects',
        'skills',
        'contact'
    ]);
</script>

<template>
    <header class="header" aria-label="Header">
        <div class="container">
            <div class="nationality">
                <component :is="currentFlagComponent" />
                <IconArrowDown />
                <Transition name="slide">
                    <div class="nationality-switch">
                        <button @click="changeLanguage">
                            {{ translate('switch_language') }}
                            <component :is="switchToFlagComponent" />
                        </button>
                        <ul class="menu-social">
                            <li>
                                <a href="mailto:contact@damc.com" aria-label="Contact for E-mail">
                                    <IconEmail/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/daniel-alexander-marques-cabredo/" target="_blank"  aria-label="Contact for Linkedin"
                                   rel="noopener noreferrer">
                                    <IconLinkedin/>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+5541991566235" aria-label="Contact for Phone">
                                    <IconPhone />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/phantonmarques" target="_blank" rel="noopener noreferrer" aria-label="Contact for Github">
                                    <IconGithub />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>
            <nav class="header-nav" aria-label="primary">
                <IconLogo />
                <IconMenuMobile @click="toggleSidebar" />
                <ul class="menu">
                    <li class="menu-link" v-for="item in menuItems" :key="item">
                        <a :href="`#${item}`" @click.prevent="scrollToSection(item)" :aria-label="translate(item)">
                            {{ translate(item) }}
                        </a>
                    </li>
                </ul>

                <Transition name="slide">
                    <div class="menu-sidebar" v-show="sideBarOpen">
                        <ul class="menu-mobile">
                            <li class="menu-mobile-link" v-for="item in menuItems" :key="item">
                                <a :href="`#${item}`" @click.prevent="scrollToSection(item); toggleSidebar()" :aria-label="translate(item)">
                                    {{ translate(item) }}
                                </a>
                            </li>
                            <li class="menu-mobile-close">
                                <button class="btn-close" @click="toggleSidebar"></button>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    /** Dark Theme */

    .dark .header,
    .dark .menu-sidebar {
        background-color: var(--color-secondary-14);
    }

    .dark .menu-link a,
    .dark .menu-mobile-link a,
    .dark .nationality-switch button {
        color: var(--color-secondary-4);
    }

    .dark .menu-link a:before {
        background: var(--color-primary-4);
    }

    .dark .menu-link a:hover {
        color: var(--color-primary-12);
    }

    .dark .header-nav svg:last-of-type {
        fill: var(--color-secondary-4);
    }

    .dark .menu-mobile-link a:hover {
        color: var(--color-primary-4);
    }

    .dark .menu-mobile-close button::before,
    .dark .menu-mobile-close button::after {
        background-color: var(--color-secondary-4);
    }

    .dark .nationality-switch {
        background-color: var(--bg-color-dark);
        box-shadow: 0 1px 2px 0 rgba(61, 61, 61, .2);
    }

    .dark .menu-social li a svg {
        fill: var(--color-primary-4);
    }

    .dark .menu-social li a:hover svg {
        filter: drop-shadow(1px 1px 10px var(--color-primary-6));
    }

    /** Light Theme */

    .light .header,
    .light .menu-sidebar {
        background-color: var(--color-secondary-1);
    }

    .light .menu-link a,
    .light .menu-mobile-link a,
    .light .nationality-switch button {
        color: var(--color-secondary-11);
    }

    .light .menu-link a:before {
        background: var(--color-primary-12);
    }

    .light .menu-link a:hover {
        color: var(--color-primary-2);
    }

    .light .header-nav svg:last-of-type {
        fill: var(--color-secondary-11);
    }

    .light .menu-mobile-link a:hover {
        color: var(--color-primary-12);
    }

    .light .menu-mobile-close button::before,
    .light .menu-mobile-close button::after {
        background-color: var(--color-secondary-10);
    }

    .light .nationality-switch {
        background-color: var(--bg-color-light);
        box-shadow: 0 1px 2px 0 rgba(61, 61, 61, .2);
    }

    .light .menu-social li a svg {
        fill: var(--color-primary-8);
    }

    .light .menu-social li a:hover svg {
        filter: drop-shadow(1px 1px 10px var(--color-primary-6));
    }

    /** Header */

    .header {
        overflow: hidden;
    }

    /** Nationality */

    .nationality {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 4px;
        padding-top: .5rem;
        position: relative;
    }

    .nationality:hover .nationality-switch {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
    }

    /** Switch nationality and social media */

    .nationality-switch {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 100%;
        right: 0;
        width: 200px;
        padding: 8px;
        border-radius: 5px;
        transition: transform .5s ease-in-out;
        transform: translateX(30%);
        z-index: 2;
    }

    .nationality-switch button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 1rem;
        line-height: 1;
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        width: 100%;
        cursor: pointer;
    }

    .menu-social {
        display: flex;
        gap: 20px;
        justify-content: center;
        padding-top: 16px;
        padding-bottom: 8px;
    }

    .menu-social li a svg {
        height: 32px;
        width: 32px;
        transition: .3s ease-in-out;
    }

    /** Header with menu desktop and menu mobile icon */

    .header-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .header-nav svg:first-of-type {
        margin: .5rem 0;
        height: 84px;
        width: auto;
    }

    .header-nav svg:last-of-type {
        display: none;
        cursor: pointer;
        height: 28px;
        width: auto;
    }

    .menu {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        gap: 20px;
    }

    .menu-link a {
        cursor: pointer;
        font-family: 'Play', serif;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 1;
        position: relative;
        z-index: 1;
    }

    .menu-link a:before {
        content: "";
        display: block;
        position: absolute;
        inset: -8%;
        margin: auto;
        border-radius: 5px;
        transition: all .4s linear;
        height: 4px;
        width: 0;
    }

    .menu-link a:hover {
        transition-delay: .3s;
    }

    .menu-link a:hover::before {
        animation: fill 1s forwards;
    }

    /** Sidebar and Menu Mobile */

    .menu-sidebar {
        position: fixed;
        top: 104px;
        right: 0;
        width: 100vw;
        height: 100vh;
        padding: 20px 0;
        overflow: auto;
        transition: transform .3s ease-in-out;
        z-index: 1;
        display: block;
    }

    .menu-sidebar.show {
        transform: translateX(0);
    }

    .menu-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }

    .menu-mobile-link a {
        cursor: pointer;
        font-family: 'Play', serif;
        font-size: 1.75rem;
        font-weight: 700;
        transition: .5s ease-in-out;
    }

    /** Animations */

    @keyframes fill {
        0% {
            width: 0;
        }
        50% {
            width: 116%;
            z-index: -1;
        }
        100% {
            height: 104%;
            width: 116%;
            z-index: -1;
        }
    }

    /** Transition Steps */

    .slide-enter-active,
    .slide-leave-active {
        transition: transform .3s ease-in-out;
    }

    .slide-enter-from,
    .slide-leave-to {
        transform: translateX(100%);
    }

    .slide-enter-to,
    .slide-leave-from {
        transform: translateX(0);
    }

    /** Media queries */

    @media (max-width: 900px) {
        .header-nav svg:first-of-type {
            height: 60px;
        }

        .menu {
            gap: 12px;
        }

        .menu-link a {
            font-size: 1rem;
        }
    }

    @media (max-width: 640px) {
        .header-nav svg:last-of-type {
            display: block;
        }

        .menu {
            display: none;
        }
    }
</style>