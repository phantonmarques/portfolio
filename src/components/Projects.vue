<script setup>
    // Import the sections on page
    import ProjectGallery from '@/components/ProjectGallery.vue';

    import { ref, watch, onMounted } from 'vue';
    import { getLanguage, translate } from "@/i18n/i18n.js";

    // tabs projects

    const activeTab = ref(0);
    const tabs = ref([]);

    const updateTabs = () => {
        tabs.value = [
            {
                title: translate('project_bsc_title'),
                subtitle: translate('project_bsc_subtitle'),
                text: translate('project_bsc_text'),
                images: [
                    {
                        url: '/images/projects/bsc/1.png',
                        width: 1920,
                        height: 2340,
                        subtitle: translate('project_bsc_subtitle_image_1'),
                    },
                    {
                        url: '/images/projects/bsc/2.png',
                        width: 1920,
                        height: 1405,
                        subtitle: translate('project_bsc_subtitle_image_2'),
                    },
                    {
                        url: '/images/projects/bsc/3.png',
                        width: 1920,
                        height: 945,
                        subtitle: translate('project_bsc_subtitle_image_3'),
                    },
                ],
            },
            {
                title: translate('project_nfe_title'),
                subtitle: translate('project_nfe_subtitle'),
                text: translate('project_nfe_text'),
                images: [
                    {
                        url: '/images/projects/nfe/1.png',
                        width: 1920,
                        height: 2046,
                        subtitle: translate('project_nfe_subtitle_image_1'),
                    },
                    {
                        url: '/images/projects/nfe/2.png',
                        width: 1903,
                        height: 911,
                        subtitle: translate('project_nfe_subtitle_image_2'),
                    },
                    {
                        url: '/images/projects/nfe/3.png',
                        width: 1920,
                        height: 1367,
                        subtitle: translate('project_nfe_subtitle_image_3'),
                    },
                    {
                        url: '/images/projects/nfe/4.png',
                        width: 1920,
                        height: 2118,
                        subtitle: translate('project_nfe_subtitle_image_4'),
                    },
                    {
                        url: '/images/projects/nfe/5.png',
                        width: 1920,
                        height: 1188,
                        subtitle: translate('project_nfe_subtitle_image_5'),
                    },
                    {
                        url: '/images/projects/nfe/6.png',
                        width: 1920,
                        height: 1369,
                        subtitle: translate('project_nfe_subtitle_image_6'),
                    },
                ],
            },
            {
                title: translate('project_night_life_title'),
                subtitle: translate('project_night_life_subtitle'),
                text: translate('project_night_life_text'),
                images: [
                    {
                        url: '/images/projects/nightlife/1.png',
                        width: 1920,
                        height: 911,
                        subtitle: translate('project_night_life_subtitle_image_1'),
                    },
                    {
                        url: '/images/projects/nightlife/2.png',
                        width: 1920,
                        height: 911,
                        subtitle: translate('project_night_life_subtitle_image_2'),
                    },
                    {
                        url: '/images/projects/nightlife/3.png',
                        width: 1920,
                        height: 4462,
                        subtitle: translate('project_night_life_subtitle_image_3'),
                    },
                    {
                        url: '/images/projects/nightlife/4.png',
                        width: 293,
                        height: 636,
                        subtitle: translate('project_night_life_subtitle_image_4'),
                    },
                    {
                        url: '/images/projects/nightlife/5.png',
                        width: 295,
                        height: 641,
                        subtitle: translate('project_night_life_subtitle_image_5'),
                    },
                    {
                        url: '/images/projects/nightlife/6.png',
                        width: 299,
                        height: 650,
                        subtitle: translate('project_night_life_subtitle_image_6'),
                    },
                    {
                        url: '/images/projects/nightlife/7.png',
                        width: 298,
                        height: 1428,
                        subtitle: translate('project_night_life_subtitle_image_7'),
                    },
                    {
                        url: '/images/projects/nightlife/8.png',
                        width: 296,
                        height: 647,
                        subtitle: translate('project_night_life_subtitle_image_8'),
                    },
                    {
                        url: '/images/projects/nightlife/9.png',
                        width: 298,
                        height: 1233,
                        subtitle: translate('project_night_life_subtitle_image_9'),
                    },
                    {
                        url: '/images/projects/nightlife/10.png',
                        width: 299,
                        height: 649,
                        subtitle: translate('project_night_life_subtitle_image_10'),
                    },
                    {
                        url: '/images/projects/nightlife/11.png',
                        width: 298,
                        height: 1344,
                        subtitle: translate('project_night_life_subtitle_image_11'),
                    },
                    {
                        url: '/images/projects/nightlife/12.png',
                        width: 298,
                        height: 1025,
                        subtitle: translate('project_night_life_subtitle_image_12'),
                    },
                ],
            },
            {
                title: translate('project_landing_page_title'),
                subtitle: translate('project_landing_page_subtitle'),
                text: translate('project_landing_page_text'),
                link: 'https://luizazanini.com.br/'
            },
            {
                title: translate('project_custom_ecommerce_title'),
                subtitle: translate('project_custom_ecommerce_subtitle'),
                text: translate('project_custom_ecommerce_text'),
                link: 'https://luccacafesespeciais.com.br/'
            }
        ];
    };

    onMounted(updateTabs);

    watch(getLanguage, updateTabs);

    // open gallery into project

    const openGallery = (id) => {
        const galleryElement = document.querySelector(`#gallery${id} a`);
        if (galleryElement) {
            galleryElement.click();
        }
    };

</script>

<template>
    <section id="projects" aria-label="Projects">
        <div class="container">
            <h2 class="subtitle-default">
                Projetos
            </h2>
            <div class="projects-card-wrapper">
                <div class="projects-card">
                    <ul class="projects-menu">
                        <li v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{ active: activeTab === index }">
                            <a :id="'project' + (index + 1)" :aria-label="`Project ${tab.title}`">
                                {{ tab.title }}
                            </a>
                        </li>
                    </ul>
                    <div class="projects-content">
                        <TransitionGroup name="fade">
                            <div v-for="(tab, index) in tabs" :key="index" :id="'project' + (index + 1)" class="project"
                                 v-show="activeTab === index">
                                <h3>{{ tab.subtitle }}</h3>
                                <div>
                                    <p>{{ tab.text }}</p>
                                    <a v-if="tab.link" :href="tab.link" target="_blank" rel="noopener noreferrer" :aria-label="`View the link project ${tab.subtitle}`">
                                        {{ translate('project_view_gallery') }}
                                    </a>
                                    <button v-if="tab.images && tab.images.length" :aria-label="`View the project ${tab.subtitle}`" @click="openGallery(index + 1)">
                                        {{ translate('project_view_gallery') }}
                                    </button>
                                    <ProjectGallery v-if="tab.images && tab.images.length" :galleryID="'gallery' + (index + 1)" :images="tab.images" />
                                </div>
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    /** Dark Theme */

    .dark #projects {
        background-color: var(--color-secondary-14);
    }

    .dark .projects-card-wrapper {
        box-shadow: 0 2px 2px 0 var(--color-secondary-13);
        filter: drop-shadow(1px 1px 4px var(--color-primary-6));
    }

    .dark .projects-menu li {
        background-color: var(--color-primary-1);
    }

    .dark .projects-menu li::before {
        background-color: var(--color-primary-11);
    }

    .dark .projects-menu li:not(:last-child) {
        border-bottom: 1px solid var(--color-secondary-14);
    }

    .dark .projects-menu li a {
        color: var(--color-primary-12);
    }

    .dark .projects-menu li.active a {
        color: var(--color-primary-8);
    }

    .dark .projects-menu li:hover > a {
        color: var(--color-primary-4);
    }

    .dark .projects-content {
        background-color: var(--bg-color-dark);
    }

    .dark .project h3 {
        color: var(--color-primary-4);
    }

    .dark .project h3::after {
        background-color: var(--color-secondary-14);
    }

    .dark .project p {
        color: var(--color-secondary-4);
    }

    .dark .project button,
    .dark .project a {
        color: var(--color-primary-4);
    }

    .dark .project button:hover,
    .dark .project a:hover {
        color: var(--color-primary-2);
    }

    /** Light Theme */

    .light #projects {
        background-color: var(--color-secondary-1);
    }

    .light .projects-card-wrapper {
        box-shadow: 0 2px 2px 0 var(--color-secondary-4);
    }

    .light .projects-menu li {
        background-color: var(--color-primary-12);
    }

    .light .projects-menu li::before {
        background-color: var(--color-primary-2);
    }

    .light .projects-menu li:not(:last-child) {
        border-bottom: 1px solid var(--color-secondary-1);
    }

    .light .projects-menu li a {
        color: var(--color-primary-2);
    }

    .light .projects-menu li.active a {
        color: var(--color-primary-4);
    }

    .light .projects-menu li:hover > a {
        color: var(--color-primary-12);
    }

    .light .projects-content {
        background-color: var(--bg-color-light);
    }

    .light .project h3 {
        color: var(--color-primary-8);
    }

    .light .project h3::after {
        background-color: var(--color-secondary-1);
    }

    .light .project p {
        color: var(--color-secondary-11);
    }

    .light .project button,
    .light .project a {
        color: var(--color-primary-8);
    }

    .light .project button,
    .light .project a {
        color: var(--color-primary-6);
    }

    /** Projects */

    #projects {
        padding: 3.75rem 0;
    }

    .projects-card-wrapper {
        border-radius: 5px;
        overflow: hidden;
    }

    .projects-card {
        display: flex;
        border-radius: 5px;
    }

    /** Projects Menu */

    .projects-menu {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 0;
    }

    .projects-menu li {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0.5rem 2rem;
        position: relative;
        text-align: center;
        transition: all 0.3s linear;
        white-space: nowrap;
        z-index: 1;
    }

    .projects-menu li::before {
        content: '';
        position: absolute;
        inset: 0 auto auto 0;
        height: 100%;
        transition: width 0.4s ease-in-out;
        width: 0;
        z-index: -1;
    }

    .projects-menu li.active::before {
        width: 0.5rem;
    }

    .projects-menu li:hover::before {
        width: 100%;
    }

    .projects-menu li a {
        font-family: 'Play', serif;
        font-size: 1rem;
        line-height: 1.5;
        width: 20ch;
    }

    .projects-menu li.active a {
        font-weight: 700;
    }

    /** Projects Content */

    .projects-content {
        flex-grow: 1;
        position: relative;
    }

    /** Project Details */

    .project {
        display: grid;
        grid-template-columns: auto;
        gap: 28px 40px;
        padding: 20px;
    }

    .project h3 {
        font-family: 'Play', serif;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.2;
        position: relative;
        text-align: center;
        grid-column: 1 / -1;
    }

    .project h3::after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        inset: auto 50% -10px 50%;
        transform: translate(-50%, -50%);
        width: 50%;
    }

    .project p {
        font-size: 1rem;
        line-height: 1.25;
        max-width: max-content;
    }

    .project button,
    .project a {
        cursor: pointer;
        display: inline-block;
        font-size: 1rem;
        line-height: 1.5;
        margin-top: 12px;
        position: relative;
        background: none;
        border: none;
        transition: color .3s ease;
    }

    .project button::after,
    .project a::after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        background-color: currentColor;
        inset: auto auto -2px 0;
        width: 100%;
    }

    /** Animation */

    .fade-enter-from {
        transform: translateX(20px);
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 1.5s ease-out;
    }

    .fade-leave-from,
    .fade-leave-active,
    .fade-leave-to {
        display: none !important;
    }

    /** Media Queries */
    
    @media (max-width: 900px) {
        .projects-card {
            flex-direction: column;
        }

        .project {
            gap: 20px;
            grid-template-columns: auto auto;
        }

        .project h3 {
            font-size: 1.25rem;
        }

        .project h3::after {
            width: 60%;
        }
    }

    @media (max-width: 640px) {
        #projects {
            padding: 2rem 0;
        }

        .project {
            grid-template-columns: 1fr;
        }

        .project h3::after {
            width: 90%;
        }
    }

    @media (max-width: 400px) {
        .projects-menu li a {
            font-size: .75rem;
        }

        .project h3 {
            font-size: 1rem;
        }

        .project p {
            font-size: .75rem;
        }

        .project button,
        .project a {
            font-size: .75rem;
        }
    }
</style>