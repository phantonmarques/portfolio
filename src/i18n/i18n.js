import { ref } from 'vue';
import { messages } from './translations.js';

import IconFlagBrazil from "@/components/icons/flags/Brazil.vue";
import IconFlagUnitedStates from "@/components/icons/flags/UnitedStates.vue";

export const currentLanguage = ref('pt');

export function isEnglish() {
    return currentLanguage.value === 'en'
}

export function isBrazilian() {
    return currentLanguage.value === 'pt'
}

export function translate(key) {
    let message = messages[ currentLanguage.value ][ key ];

    if (typeof message === 'string') {
        message = message.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    }

    return message;
}

export function getLanguage() {
    return currentLanguage.value;
}

export function setLanguage(language) {
    currentLanguage.value = language;
}

export function useLanguage() {
    let currentFlagComponent = ref(IconFlagBrazil),
        switchToFlagComponent = ref(IconFlagUnitedStates);

    const changeLanguage = () => {

        if (isEnglish()) {
            currentFlagComponent.value = IconFlagBrazil;
            switchToFlagComponent.value = IconFlagUnitedStates;
            setLanguage('pt');
            return;
        }

        currentFlagComponent.value = IconFlagUnitedStates;
        switchToFlagComponent.value = IconFlagBrazil;
        setLanguage('en');
    };

    return { currentFlagComponent, switchToFlagComponent, changeLanguage };
}