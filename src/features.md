<script setup lang="ts">
import LightboxPictureArray from '../components/LightboxPictureArray.vue'

const photos = [
    'img1.jpg', 'img2.jpg', 'img3.jpg'
]
</script>

# Template Features

## Tailwind

(PostCSS + Autoprefixer)

## Lightbox

<LightboxPictureArray :photos="photos" />
