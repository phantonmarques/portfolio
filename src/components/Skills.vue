<script setup>
    import IconLaravel from '@/components/icons/skills/Laravel.vue';
    import IconPhp from '@/components/icons/skills/Php.vue';
    import IconMysql from '@/components/icons/skills/Mysql.vue';
    import IconApi from '@/components/icons/skills/Api.vue';
    import IconCurl from '@/components/icons/skills/Curl.vue';
    import IconPostgresql from '@/components/icons/skills/Postgresql.vue';
    import IconHtml from '@/components/icons/skills/Html.vue';
    import IconJavascript from '@/components/icons/skills/Javascript.vue';
    import IconCss from '@/components/icons/skills/Css.vue';
    import IconJquery from '@/components/icons/skills/Jquery.vue';
    import IconBootstrap from '@/components/icons/skills/Bootstrap.vue';
    import IconVue from '@/components/icons/skills/Vue.vue';
    import IconGit from '@/components/icons/skills/Git.vue';
    import IconGithub from '@/components/icons/skills/Github.vue';
    import IconBitbucket from '@/components/icons/skills/Bitbucket.vue';
    import IconLinux from '@/components/icons/skills/Linux.vue';
    import IconAws from '@/components/icons/skills/Aws.vue';
    import IconFigma from '@/components/icons/skills/Figma.vue';

    import { ref } from 'vue'
    import { translate } from '@/i18n/i18n.js';

    const openModal = ref(false);
</script>

<template>
    <section id="skills" aria-label="Skills">
        <div class="container">
            <h2 class="subtitle-default">
                {{ translate('skills_title') }}
            </h2>

            <div class="skills-cards">
                <div class="skill-type">
                    <h3>Back End</h3>
                    <ul class="skill-type-list">
                        <li>
                            <IconLaravel/>
                            Laravel
                        </li>
                        <li>
                            <IconPhp/>
                            PHP
                        </li>
                        <li>
                            <IconMysql/>
                            MySQL
                        </li>
                        <li>
                            <IconApi/>
                            API
                        </li>
                        <li>
                            <IconCurl/>
                            Curl
                        </li>
                        <li>
                            <IconPostgresql/>
                            PostgreSQL
                        </li>
                    </ul>
                </div>

                <div class="skill-type">
                    <h3>Front End</h3>
                    <ul class="skill-type-list">
                        <li>
                            <IconHtml/>
                            HTML
                        </li>
                        <li>
                            <IconJavascript/>
                            Javascript
                        </li>
                        <li>
                            <IconCss/>
                            CSS
                        </li>
                        <li>
                            <IconVue/>
                            VueJS
                        </li>
                        <li>
                            <IconJquery/>
                            JQuery
                        </li>
                        <li>
                            <IconBootstrap/>
                            Bootstrap
                        </li>
                    </ul>
                </div>

                <div class="skill-type">
                    <h3>{{ translate('skills_others') }}</h3>
                    <ul class="skill-type-list">
                        <li>
                            <IconGit/>
                            Git
                        </li>
                        <li>
                            <IconLinux/>
                            Linux
                        </li>
                        <li>
                            <IconFigma/>
                            Figma
                        </li>
                        <li>
                            <IconAws/>
                            AWS
                        </li>
                        <li>
                            <IconBitbucket/>
                            BitBucket
                        </li>
                        <li>
                            <IconGithub/>
                            Github
                        </li>
                    </ul>
                </div>
            </div>

            <footer class="skills-footer">
                <button class="btn-default" @click="openModal = true">
                    {{ translate('skills_button') }}
                </button>
            </footer>

            <Transition name="bounce">
                <div class="skills-details-modal" v-if="openModal" @click.self="openModal = false">
                    <div class="content">
                        <button class="btn-close" @click="openModal = false"></button>
                        <div class="skills-details">
                            <div class="skill-details">
                                <h2>Back end</h2>
                                <ul class="skill-details-list">
                                    <li>Api</li>
                                    <li>CodeIgniter</li>
                                    <li>Curl</li>
                                    <li>Java</li>
                                    <li>Laravel</li>
                                    <li>MySQL</li>
                                    <li>Oracle</li>
                                    <li>PHP</li>
                                    <li>PostgreSQL</li>
                                    <li>Powershell</li>
                                    <li>SQL Server</li>
                                </ul>
                            </div>
                            <div class="skill-details">
                                <h2>Front end</h2>
                                <ul class="skill-details-list">
                                    <li>Angular</li>
                                    <li>Bootstrap</li>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                    <li>JQuery</li>
                                    <li>Javascript</li>
                                    <li>VueJS</li>
                                    <li>Sass</li>
                                    <li>SEO</li>
                                    <li>Webpack</li>
                                </ul>
                            </div>
                            <div class="skill-details">
                                <h2>{{ translate('skills_others') }}</h2>
                                <ul class="skill-details-list">
                                    <li>AWS EC2</li>
                                    <li>AWS EFS</li>
                                    <li>AWS S3</li>
                                    <li>BitBucket</li>
                                    <li>Docker</li>
                                    <li>Figma</li>
                                    <li>Git</li>
                                    <li>Github</li>
                                    <li>Linux</li>
                                    <li>Photoshop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
</template>

<style scoped>
    /** Dark Theme */

    .dark #skills {
        background-color: var(--bg-color-dark);
    }

    .dark .skill-type h3 {
        color: var(--color-secondary-4);
    }

    .dark .skill-type-list li {
        background-color: var(--color-secondary-14);
        border: 1px solid var(--color-secondary-13);
        box-shadow: 0 4px 4px -2px var(--color-secondary-13);
        color: var(--color-primary-4);
    }

    .dark .skill-type-list li:hover {
        border-color: var(--color-primary-4);
        box-shadow: 0 4px 4px -2px var(--color-primary-4);
    }

    .dark .skill-type-list li svg {
        fill: var(--color-primary-4);
    }

    .dark .skills-details-modal {
        background-color: rgba(0, 0, 0, .6);
    }

    .dark .skills-details-modal .content {
        background-color: var(--bg-color-dark);
    }

    .dark .skills-details-modal button::before,
    .dark .skills-details-modal button::after {
        background-color: var(--color-secondary-2);
    }

    .dark .skill-details h2 {
        color: var(--color-secondary-2);
    }

    .dark .skill-details-list li {
        background-color: var(--color-secondary-14);
        border: 1px solid var(--color-secondary-13);
        box-shadow: 0 4px 4px -2px var(--color-secondary-13);
        color: var(--color-primary-4);;
    }

    /** Light Theme */

    .light .skill-type h3 {
        color: var(--color-secondary-10);
    }

    .light .skill-type-list li {
        background-color: var(--color-secondary-1);
        border: 1px solid var(--color-secondary-2);
        box-shadow: 0 4px 4px -2px var(--color-secondary-2);
        color: var(--color-primary-8);
    }

    .light .skill-type-list li:hover {
        border-color: var(--color-primary-8);
        box-shadow: 0 4px 4px -2px var(--color-primary-8);
    }

    .light .skill-type-list li svg {
        fill: var(--color-primary-8);
    }

    .light .skills-details-modal {
        background-color: rgba(0, 0, 0, .6);
    }

    .light .skills-details-modal .content {
        background-color: var(--bg-color-light);
    }

    .light .skills-details-modal button::before,
    .light .skills-details-modal button::after {
        background-color: var(--color-secondary-10);
    }

    .light .skill-details h2 {
        color: var(--color-secondary-10);
    }

    .light .skill-details-list li {
        background-color: var(--color-secondary-1);
        border: 1px solid var(--color-secondary-2);
        box-shadow: 0 4px 4px -2px var(--color-secondary-2);
        color: var(--color-primary-8);;
    }

    /** Skills */

    #skills {
        padding: 3.75rem 0;
    }

    /** Cards with skills types cards */

    .skills-cards {
        display: grid;
        gap: 20px 40px;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 40px;
    }

    .skill-type h3 {
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.25;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    .skill-type-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 20px;
        padding: 0;
    }

    .skill-type-list li {
        align-items: center;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-size: .75rem;
        gap: 4px;
        justify-content: center;
        line-height: 1.2;
        padding: .5rem .75rem;
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transition: 1s, opacity 1s cubic-bezier(0.5, 0, 0, 1), transform 1s cubic-bezier(0.5, 0, 0, 1);
    }

    .skill-type-list:hover .skill-type-list li:not(:hover) {
        opacity: .6;
    }

    .skill-type-list li svg {
        height: auto;
        width: 3.75rem;
    }

    /** Footer */

    .skills-footer {
        display: flex;
        justify-content: center;
    }

    /** Modal */

    .skills-details-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    .skills-details-modal .content {
        display: grid;
        gap: 28px;
        padding: 12px 20px;
        border-radius: 5px;
        max-width: 720px;
        width: 90%;
        position: relative;
    }

    .skills-details {
        display: grid;
        gap: 28px;
        position: relative;
    }

    .skill-details h2 {
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    .skill-details-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        padding: 0;
        margin: .75rem 0 1.75rem 0;
    }

    .skill-details-list:last-child {
        margin-bottom: .75rem;
    }

    .skill-details-list li {
        font-size: 1rem;
        letter-spacing: 1px;
        padding: .5rem 1rem;
        text-align: center;
    }

    /** Animation */

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    /** Media queries */

    @media (max-width: 900px) {
        .skills-details-modal .content {
            box-sizing: border-box;
            gap: 12px;
            margin: 0 8%;
            padding-left: 0;
            padding-right: 0;
        }

        .skills-details-modal .content button {
            margin-right: 8px;
        }

        .skills-details {
            max-height: 700px;
            overflow-x: hidden;
            overflow-y: auto;
            padding: 0 20px;
        }

        .skills-cards {
            grid-template-columns: 1fr;
        }

        .skill-type-list {
            grid-template-columns: repeat(6, auto);
        }

        .skill-type-list li {
            padding: .25rem .5rem;
        }
    }

    @media (max-width: 640px) {
        #skills {
            padding: 2rem 0;
        }

        .skill-type-list {
            grid-template-columns: repeat(3, auto);
        }

        .skill-details-list {
            grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
        }
    }

    @media (max-width: 400px) {
        .skill-type-list {
            grid-template-columns: repeat(auto-fill, minmax(90px, auto));
        }

        .skill-type h3 {
            font-size: .75rem;
        }
    }
</style>