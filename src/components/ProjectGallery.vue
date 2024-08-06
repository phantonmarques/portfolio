<script setup>
    import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';

    const props = defineProps({
        galleryID: String,
        images: Array,
    });

    const imagesData = computed(() => props.images);
    const lightbox = ref(null);

    onMounted(() => {
        if (!lightbox.value) {
            lightbox.value = new PhotoSwipeLightbox({
                gallery: `#${props.galleryID}`,
                children: 'a',
                pswpModule: () => import('photoswipe'),
            });
            lightbox.value.on('uiRegister', function() {
                lightbox.value.pswp.ui.registerElement({
                    name: 'image-caption',
                    order: 9,
                    isButton: false,
                    appendTo: 'wrapper',
                    onInit: (element, pswp) => {
                        pswp.on('change', () => {
                            const currSlideElement = pswp.currSlide.data.element;
                            const captionText = currSlideElement.innerText;
                            element.innerHTML = captionText || '';
                            element.classList.add('gallery-subtitle');
                        });
                    }
                });
            });
            lightbox.value.init();
        }
    });

    onUnmounted(() => {
        if (lightbox.value) {
            lightbox.value.destroy();
            lightbox.value = null;
        }
    });

    watch(() => props.images, (newImages) => {
        imagesData.value = newImages;
    }, { deep: true });
</script>

<template>
    <div :id="galleryID" class="gallery" style="display: none">
        <a
            v-for="(image, key) in imagesData"
            :key="key"
            :href="image.url"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
        >
            {{ image.subtitle }}
        </a>
    </div>
</template>