import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
export default defineConfig({base:'/linara_jenit/',css:{postcss:{plugins:[tailwindcss()]}},plugins:[vinext(),sites()]});

