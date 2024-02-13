import { Ref, ref } from "vue";

export function useDevice(): Ref<boolean> {
    const isMobile = ref<boolean>(false);

    function checkDevice() {
        isMobile.value = window.innerWidth < 768;
    }

    checkDevice();

    return isMobile;
}