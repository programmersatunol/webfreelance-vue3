<template>
  <div class="gtranslate_wrapper"></div>
</template>

<script>
export default {
  name: "GTranslate",
  mounted() {
    // Initialize GTranslate settings after the component is mounted
    window.gtranslateSettings = {
      default_language: "id",
      languages: ["id", "ar", "ru", "iw", "zh-CN", "en"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Load the Google Translate widget script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true; // Defer loading to avoid blocking DOM parsing
    document.body.appendChild(script);
  },
};
</script>

<style scoped></style>
