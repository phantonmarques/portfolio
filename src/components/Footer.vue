<script setup>
    import IconWaveLight from '@/components/icons/WaveLight.vue';
    import IconWaveDark from '@/components/icons/WaveDark.vue';
    import IconEmail from '@/components/icons/contacts/Email.vue';
    import IconGithub from '@/components/icons/contacts/Github.vue';
    import IconLinkedin from '@/components/icons/contacts/Linkedin.vue';
    import IconPhone from '@/components/icons/contacts/Phone.vue';
</script>

<template>
    <footer id="footer" aria-label="Footer">
        <div class="content">
            <div class="wave-content">
                <IconWaveDark />
                <IconWaveLight />
            </div>
            <div class="social-icons">
                <a href="mailto:contact@damc.com" aria-label="Contact for e-mail">
                    <IconEmail />
                </a>
                <a href="https://www.linkedin.com/in/daniel-alexander-marques-cabredo/" target="_blank" rel="noopener noreferrer" aria-label="Contact for linkedin">
                    <IconLinkedin />
                </a>
                <a href="tel:+5541991566235" aria-label="Contact for phone">
                    <IconPhone />
                </a>
                <a href="https://github.com/phantonmarques" target="_blank" rel="noopener noreferrer" aria-label="Contact for github">
                    <IconGithub />
                </a>
            </div>
            <div class="copyright">
                &copy; 2024 - Daniel Alexander Marques Cabredo
            </div>
        </div>
    </footer>
</template>

<style scoped>
    /** Dark Theme */

    .dark footer {
        background-color: var(--color-secondary-14);
    }

    .dark .wave-content svg:first-child {
        display: block;
    }

    .dark .wave-content svg:last-child {
        display: none;
    }

    .dark .social-icons svg {
        fill: var(--color-primary-10);
    }

    .dark .social-icons a:hover svg {
        filter: drop-shadow(1px 1px 10px var(--color-primary-1));
    }

    .dark .copyright {
        color: var(--color-primary-10);
    }

    /** Light Theme */

    .light footer {
        background-color: var(--color-secondary-1);
    }

    .light .wave-content svg:first-child {
        display: none;
    }

    .light .wave-content svg:last-child {
        display: block;
    }

    .light .social-icons svg {
        fill: var(--color-primary-2);
    }

    .light .social-icons a:hover svg {
        filter: drop-shadow(1px 1px 10px var(--color-primary-6));
    }

    .light .copyright {
        color: var(--color-primary-2);
    }

    /** Footer */

    footer .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: end;
        height: 260px;
        width: 100%;
        padding-bottom: 12px;
        position: relative;
    }

    /** Wave Content */

    .wave-content {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }

    .wave-content svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        pointer-events: none;
        transform: scaleY(3.5) scaleX(5);
        transform-origin: bottom;
    }

    /** Social Icons */

    .social-icons {
        display: flex;
        gap: 20px;
        z-index: 1;
    }

    .social-icons svg {
        transition: .5s ease-in-out;
        height: 3.75rem;
        width: auto;
    }

    .social-icons a:hover svg {
        transform: scale(1.2);
    }

    .social-icons:hover a:not(:hover) svg {
        opacity: .6;
    }

    /** Copyright */

    .copyright {
        font-size: 1rem;
        text-transform: uppercase;
        z-index: 1;
    }

    /** Media queries */

    @media (max-width: 900px) {
        footer .content {
            gap: 20px;
            height: 180px;
        }

        .image-content svg {
            transform: scaleY(3.5) scaleX(3);
        }

        .social-icons {
            gap: 12px;
        }

        .social-icons svg {
            height: 3rem;
        }
    }

    @media (max-width: 640px) {
        .image-content svg {
            transform: scaleY(3.5) scaleX(2);
        }

        .social-icons svg {
            height: 2.5rem;
        }

        .copyright {
            font-size: .75rem;
        }
    }

    @media (max-width: 400px) {
        footer .content {
            gap: 8px;
            height: 120px;
        }

        .social-icons svg {
            height: 2rem;
        }

        .copyright {
            font-size: .5rem;
        }
    }
</style>