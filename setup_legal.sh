#!/bin/bash

# Crear directorios si no existen
mkdir -p server/api
mkdir -p layouts
mkdir -p pages

echo "📂 Estructura de carpetas creada."

# 1. Crear el Endpoint de la API (DeepSeek)
cat <<EOF > server/api/chat.post.ts
export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event);
  const config = useRuntimeConfig();

  try {
    const response = await \$fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": \`Bearer \${config.deepseekApiKey}\`
      },
      body: {
        model: "deepseek-chat",
        messages: [
          { 
            role: "system", 
            content: "Eres el Asistente Pre-Jurídico de la Lic. Alma Liset en Colima. Tu objetivo es educar y validar empáticamente. SIEMPRE debes dirigir al usuario a una consulta por WhatsApp si el caso es complejo o urgente. Áreas: Familiar, Civil, Mercantil." 
          },
          ...messages
        ],
      }
    });

    return response;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error al conectar con DeepSeek",
    });
  }
});
EOF

echo "📄 server/api/chat.post.ts creado."

# 2. Crear el Layout Principal
cat <<EOF > layouts/default.vue
<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-scale" class="w-8 h-8 text-wine" />
          <span class="font-bold text-xl tracking-tight text-gray-900">Lic. Alma Liset</span>
        </div>
        <div class="hidden md:flex gap-6">
          <UButton variant="ghost" color="gray">Inicio</UButton>
          <UButton variant="ghost" color="gray">Servicios</UButton>
          <UButton color="wine" class="text-white">Contacto</UButton>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-white border-t py-8 mt-20">
      <div class="text-center text-gray-500 text-sm">
        &copy; 2026 Lic. Alma Liset - Colima, México.
      </div>
    </footer>
  </div>
</template>
EOF

echo "📄 layouts/default.vue creado."

# 3. Crear la Página Index
cat <<EOF > pages/index.vue
<script setup>
const areas = [
  { title: 'Familiar', icon: 'i-heroicons-users', desc: 'Divorcios, pensiones y custodias.' },
  { title: 'Civil', icon: 'i-heroicons-home', desc: 'Contratos, juicios y propiedades.' },
  { title: 'Mercantil', icon: 'i-heroicons-briefcase', desc: 'Cobranza y litigios comerciales.' }
]
const isOpen = ref(false)
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <section class="text-center mb-16">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Asesoría Legal con <span class="text-wine">Rostro Humano</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Expertos en derecho en Colima, brindando soluciones claras a tus problemas más complejos.
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      <UCard v-for="area in areas" :key="area.title" class="hover:shadow-lg transition-all border-t-4 border-wine">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon :name="area.icon" class="w-6 h-6 text-wine" />
            <h3 class="font-bold text-gray-800">{{ area.title }}</h3>
          </div>
        </template>
        <p class="text-gray-600 text-sm">{{ area.desc }}</p>
      </UCard>
    </div>

    <div class="fixed bottom-6 right-6">
      <UButton
        icon="i-heroicons-chat-bubble-left-right"
        size="xl"
        color="wine"
        class="rounded-full shadow-2xl h-14 w-14 flex justify-center"
        @click="isOpen = true"
      />
    </div>
  </div>
</template>
EOF

echo "📄 pages/index.vue creado."
echo "✅ ¡Todo listo! No olvides agregar NUXT_DEEPSEEK_API_KEY en tu archivo .env"
