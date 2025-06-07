</form>
</div>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site com Fundo Preto</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>

<hr/>

<details>
  <summary><strong>.env</strong></summary>
  <pre><code class="plaintext">
</code></pre>
</details>

<details>
  <summary><strong>.vscode/settings.json</strong></summary>
  <pre><code class="json">
{
    "IDX.aI.enableInlineCompletion": true,
    "IDX.aI.enableCodebaseIndexing": true
}
</code></pre>
</details>

<details>
  <summary><strong>apphosting.yaml</strong></summary>
  <pre><code class="yaml">
# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 1
</code></pre>
</details>

<details>
  <summary><strong>components.json</strong></summary>
  <pre><code class="json">
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
</code></pre>
</details>

<details>
  <summary><strong>next.config.ts</strong></summary>
  <pre><code class="typescript">
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
</code></pre>
</details>

<details>
  <summary><strong>package.json</strong></summary>
  <pre><code class="json">
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.8.0",
    "@genkit-ai/next": "^1.8.0",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "firebase": "^11.8.1",
    "genkit": "^1.8.0",
    "lucide-react": "^0.475.0",
    "next": "15.3.3",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.8.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
</code></pre>
</details>

<details>
  <summary><strong>src/ai/dev.ts</strong></summary>
  <pre><code class="typescript">
import { config } from 'dotenv';
config();

import '@/ai/flows/recommend-courses.ts';
</code></pre>
</details>

<details>
  <summary><strong>src/ai/flows/recommend-courses.ts</strong></summary>
  <pre><code class="typescript">
'use server';

/**
 * @fileOverview An AI agent that recommends courses based on user interests and academic history.
 *
 * - recommendCourses - A function that recommends courses.
 * - RecommendCoursesInput - The input type for the recommendCourses function.
 * - RecommendCoursesOutput - The return type for the recommendCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendCoursesInputSchema = z.object({
  interests: z
    .string()
    .describe('The user’s interests, comma separated, e.g. AI, machine learning, data science'),
  academicHistory: z
    .string()
    .describe(
      'The user’s academic history, including courses taken and grades received.'
    ),
});
export type RecommendCoursesInput = z.infer<typeof RecommendCoursesInputSchema>;

const RecommendCoursesOutputSchema = z.object({
  courses: z
    .array(z.string())
    .describe('A list of recommended courses based on the user’s interests and academic history.'),
});
export type RecommendCoursesOutput = z.infer<typeof RecommendCoursesOutputSchema>;

export async function recommendCourses(input: RecommendCoursesInput): Promise<RecommendCoursesOutput> {
  return recommendCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoursesPrompt',
  input: {schema: RecommendCoursesInputSchema},
  output: {schema: RecommendCoursesOutputSchema},
  prompt: `You are an AI assistant that recommends courses to students based on their interests and academic history.

  Given the following information about a student, recommend a list of courses that they should take.

  Interests: {{{interests}}}
  Academic History: {{{academicHistory}}}

  Courses:`, // The prompt is intentionally left open-ended to encourage diverse and relevant course suggestions
});

const recommendCoursesFlow = ai.defineFlow(
  {
    name: 'recommendCoursesFlow',
    inputSchema: RecommendCoursesInputSchema,
    outputSchema: RecommendCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
</code></pre>
</details>

<details>
  <summary><strong>src/ai/genkit.ts</strong></summary>
  <pre><code class="typescript">
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
</code></pre>
</details>

<details>
  <summary><strong>src/app/cursos/CourseCard.tsx</strong></summary>
  <pre><code class="tsx">
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  href?: string;
}

export default function CourseCard({ title, description, imageUrl, imageHint, href = "#" }: CourseCardProps) {
  return (
    &lt;Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"&gt;
      {imageUrl && (
        &lt;div className="relative w-full h-48"&gt;
          &lt;Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint || "education course"}
          /&gt;
        &lt;/div&gt;
      )}
      &lt;CardHeader&gt;
        &lt;div className="flex items-start gap-3 mb-1"&gt;
          &lt;GraduationCap className="h-7 w-7 text-accent flex-shrink-0 mt-1" /&gt;
          &lt;CardTitle className="font-headline text-xl leading-tight"&gt;{title}&lt;/CardTitle&gt;
        &lt;/div&gt;
      &lt;/CardHeader&gt;
      &lt;CardContent className="flex-grow"&gt;
        &lt;CardDescription&gt;{description}&lt;/CardDescription&gt;
      &lt;/CardContent&gt;
      &lt;CardFooter&gt;
        &lt;Button asChild variant="ghost" className="text-primary hover:text-primary/80 w-full justify-start p-2"&gt;
          &lt;Link href={href}&gt;
            Saiba Mais &lt;ArrowRight className="ml-2 h-4 w-4" /&gt;
          &lt;/Link&gt;
        &lt;/Button&gt;
      &lt;/CardFooter&gt;
    &lt;/Card&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/cursos/page.tsx</strong></summary>
  <pre><code class="tsx">
import CourseCard from './CourseCard';

const coursesData = [
  {
    title: 'Engenharia de Software Avançada',
    description: 'Explore padrões de design, arquiteturas de microsserviços e práticas DevOps.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'software engineering',
  },
  {
    title: 'Inteligência Artificial Aplicada',
    description: 'Aprenda a construir e treinar modelos de machine learning para resolver problemas reais.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
  },
  {
    title: 'Design de Experiência do Usuário (UX)',
    description: 'Domine os princípios de design centrado no usuário, prototipagem e testes de usabilidade.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'user experience',
  },
  {
    title: 'Ciência de Dados e Big Data',
    description: 'Analise grandes volumes de dados, crie visualizações e extraia insights valiosos.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data science',
  },
  {
    title: 'Desenvolvimento Web Full-Stack Moderno',
    description: 'Construa aplicações web completas com as tecnologias mais recentes de front-end e back-end.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web development',
  },
  {
    title: 'Gestão de Projetos Ágeis',
    description: 'Aprenda Scrum, Kanban e outras metodologias ágeis para gerenciar projetos de forma eficiente.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'project management',
  },
];

export default function CoursesPage() {
  return (
    &lt;div className="container py-12 md:py-16 lg:py-20"&gt;
      &lt;div className="text-center mb-12"&gt;
        &lt;h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary"&gt;
          Explore Nossos Cursos
        &lt;/h1&gt;
        &lt;p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/80"&gt;
          Encontre o curso perfeito para impulsionar sua carreira e expandir seus conhecimentos.
        &lt;/p&gt;
      &lt;/div&gt;
      &lt;div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"&gt;
        {coursesData.map((course) => (
          &lt;CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            imageHint={course.imageHint}
          /&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/globals.css</strong></summary>
  <pre><code class="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 30% 96%; /* Very light cool gray #f2f3f7 */
    --foreground: 220 20% 25%; /* Dark grayish blue #333640 */

    --card: 0 0% 100%; /* White #ffffff */
    --card-foreground: 220 20% 25%; /* Dark grayish blue #333640 */

    --popover: 0 0% 100%; /* White */
    --popover-foreground: 220 20% 25%; /* Dark grayish blue */

    --primary: 240 65% 60%; /* Medium Blue-Purple #5f5fff */
    --primary-foreground: 0 0% 100%; /* White text #ffffff */

    --secondary: 220 25% 90%; /* Light grayish blue #dde0e8 */
    --secondary-foreground: 220 20% 25%; /* Dark grayish blue #333640 */

    --muted: 220 25% 90%; /* Light grayish blue #dde0e8 */
    --muted-foreground: 220 20% 45%; /* Medium grayish blue #5c6170 */

    --accent: 270 70% 75%; /* Lighter Lavender/Purple #c0a6f0 */
    --accent-foreground: 220 20% 25%; /* Dark grayish blue #333640 */

    --destructive: 0 84.2% 60.2%; /* Default Red */
    --destructive-foreground: 0 0% 98%; /* Light text */

    --border: 220 20% 85%; /* Medium grayish blue for borders #ccd0d9 */
    --input: 220 20% 92%; /* Slightly lighter than background for inputs #e3e5ea */
    --ring: 240 65% 60%; /* Primary color for focus rings */

    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;

    /* Sidebar colors (can be kept or adjusted if sidebar component is heavily used) */
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 220 20% 10%; /* Dark grayish blue #14151a */
    --foreground: 220 30% 90%; /* Light grayish blue text #dde0e8 */

    --card: 220 20% 12%; /* Slightly darker card #1a1b22 */
    --card-foreground: 220 30% 90%;

    --popover: 220 20% 12%;
    --popover-foreground: 220 30% 90%;

    --primary: 240 65% 65%; /* Slightly lighter Blue-Purple #7272ff */
    --primary-foreground: 0 0% 100%;

    --secondary: 220 20% 20%; /* #292b33 */
    --secondary-foreground: 220 30% 90%;

    --muted: 220 20% 20%;
    --muted-foreground: 220 30% 60%; /* #8c92a3 */

    --accent: 270 70% 65%; /* Lighter Lavender/Purple for dark mode #ab82eb */
    --accent-foreground: 0 0% 100%; /* White text on accent */

    --destructive: 0 70% 50.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 220 20% 25%; /* Darker border #333640 */
    --input: 220 20% 22%; /* Darker input #2e3038 */
    --ring: 240 65% 65%;

    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;

    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/layout.tsx</strong></summary>
  <pre><code class="tsx">
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: 'UniFlow - Seu Futuro Começa Aqui',
  description: 'Descubra cursos, obtenha recomendações personalizadas e prepare-se para o sucesso com UniFlow.',
};

export default function RootLayout({
  children,
}: Readonly&lt;{
  children: React.ReactNode;
}&gt;) {
  return (
    &lt;html lang="pt-BR" className="scroll-smooth"&gt;
      &lt;head&gt;
        &lt;link rel="preconnect" href="https://fonts.googleapis.com" /&gt;
        &lt;link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /&gt;
        &lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap" rel="stylesheet" /&gt;
        &lt;link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&amp;display=swap" rel="stylesheet" /&gt;
      &lt;/head&gt;
      &lt;body className="font-body antialiased flex flex-col min-h-screen"&gt;
        &lt;Header /&gt;
        &lt;main className="flex-grow"&gt;
          {children}
        &lt;/main&gt;
        &lt;Footer /&gt;
        &lt;Toaster /&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/page.tsx</strong></summary>
  <pre><code class="tsx">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, BookOpen, Puzzle, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/page/ContactForm";

export default function Home() {
  return (
    &lt;div className="flex flex-col items-center"&gt;
      &lt;section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-primary/20 via-background to-accent/20"&gt;
        &lt;div className="container px-4 md:px-6 text-center"&gt;
          &lt;h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary"&gt;
            Bem-vindo à UniFlow
          &lt;/h1&gt;
          &lt;p className="mt-4 max-w-[700px] mx-auto text-foreground/80 md:text-xl"&gt;
            Seu futuro começa aqui. Aprenda com os melhores, da melhor forma e navegue seu futuro acadêmico com inteligência.
          &lt;/p&gt;
          &lt;div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"&gt;
            &lt;Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground"&gt;
              &lt;Link href="/cursos"&gt;Explorar Cursos &lt;ArrowRight className="ml-2 h-5 w-5" /&gt;&lt;/Link&gt;
            &lt;/Button&gt;
             &lt;Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 hover:text-primary"&gt;
              &lt;Link href="/recomendacoes"&gt;Recomendações IA &lt;Lightbulb className="ml-2 h-5 w-5" /&gt;&lt;/Link&gt;
            &lt;/Button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section className="w-full py-12 md:py-24 lg:py-32"&gt;
        &lt;div className="container px-4 md:px-6"&gt;
          &lt;h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 text-primary"&gt;
            Nossos Recursos Principais
          &lt;/h2&gt;
          &lt;div className="grid gap-8 md:grid-cols-3"&gt;
            &lt;Card className="shadow-lg hover:shadow-xl transition-shadow duration-300"&gt;
              &lt;CardHeader&gt;
                &lt;div className="flex items-center gap-3 mb-2"&gt;
                  &lt;BookOpen className="h-8 w-8 text-accent" /&gt;
                  &lt;CardTitle className="font-headline text-2xl"&gt;Cursos Abrangentes&lt;/CardTitle&gt;
                &lt;/div&gt;
                &lt;CardDescription&gt;
                  Explore uma vasta gama de cursos universitários atualizados e bem estruturados.
                &lt;/CardDescription&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent&gt;
                &lt;Button asChild variant="link" className="text-primary p-0"&gt;
                  &lt;Link href="/cursos"&gt;Ver Cursos &lt;ArrowRight className="ml-1 h-4 w-4" /&gt;&lt;/Link&gt;
                &lt;/Button&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;

            &lt;Card className="shadow-lg hover:shadow-xl transition-shadow duration-300"&gt;
              &lt;CardHeader&gt;
                &lt;div className="flex items-center gap-3 mb-2"&gt;
                  &lt;Lightbulb className="h-8 w-8 text-accent" /&gt;
                  &lt;CardTitle className="font-headline text-2xl"&gt;Recomendações com IA&lt;/CardTitle&gt;
                &lt;/div&gt;
                &lt;CardDescription&gt;
                  Receba sugestões de cursos personalizadas com base nos seus interesses e histórico.
                &lt;/CardDescription&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent&gt;
                &lt;Button asChild variant="link" className="text-primary p-0"&gt;
                  &lt;Link href="/recomendacoes"&gt;Experimentar IA &lt;ArrowRight className="ml-1 h-4 w-4" /&gt;&lt;/Link&gt;
                &lt;/Button&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;

            &lt;Card className="shadow-lg hover:shadow-xl transition-shadow duration-300"&gt;
              &lt;CardHeader&gt;
                &lt;div className="flex items-center gap-3 mb-2"&gt;
                  &lt;Puzzle className="h-8 w-8 text-accent" /&gt;
                  &lt;CardTitle className="font-headline text-2xl"&gt;Quizzes Interativos&lt;/CardTitle&gt;
                &lt;/div&gt;
                &lt;CardDescription&gt;
                  Teste seus conhecimentos e prepare-se com nossos quizzes e atividades envolventes.
                &lt;/CardDescription&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent&gt;
                 &lt;Button asChild variant="link" className="text-primary p-0"&gt;
                  &lt;Link href="/quiz"&gt;Acessar Quizzes &lt;ArrowRight className="ml-1 h-4 w-4" /&gt;&lt;/Link&gt;
                &lt;/Button&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30"&gt;
        &lt;div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12"&gt;
          &lt;Image
            src="https://placehold.co/600x400.png"
            alt="Estudantes colaborando"
            data-ai-hint="students university"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
          /&gt;
          &lt;div className="flex flex-col justify-center space-y-4"&gt;
            &lt;div className="space-y-2"&gt;
              &lt;div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium"&gt;
                Por que UniFlow?
              &lt;/div&gt;
              &lt;h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary"&gt;
                Sua Jornada Acadêmica Simplificada
              &lt;/h2&gt;
              &lt;p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"&gt;
                UniFlow foi projetado para ser seu companheiro ideal na universidade. Combinamos tecnologia de ponta com uma interface intuitiva para ajudá-lo a tomar as melhores decisões para o seu futuro acadêmico.
              &lt;/p&gt;
            &lt;/div&gt;
            &lt;ul className="grid gap-2 py-4"&gt;
              &lt;li className="flex items-center gap-2"&gt;
                &lt;CheckIcon className="h-5 w-5 text-primary" /&gt;
                &lt;span&gt;Interface moderna e fácil de usar&lt;/span&gt;
              &lt;/li&gt;
              &lt;li className="flex items-center gap-2"&gt;
                &lt;CheckIcon className="h-5 w-5 text-primary" /&gt;
                &lt;span&gt;Conteúdo atualizado e relevante&lt;/span&gt;
              &lt;/li&gt;
              &lt;li className="flex items-center gap-2"&gt;
                &lt;CheckIcon className="h-5 w-5 text-primary" /&gt;
                &lt;span&gt;Ferramentas inteligentes para apoiar seus estudos&lt;/span&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section id="contato" className="w-full py-12 md:py-24 lg:py-32 border-t"&gt;
        &lt;div className="container px-4 md:px-6"&gt;
          &lt;div className="mx-auto max-w-xl text-center"&gt;
            &lt;Mail className="h-12 w-12 mx-auto mb-4 text-primary" /&gt;
            &lt;h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl"&gt;
              Entre em Contato
            &lt;/h2&gt;
            &lt;p className="mt-4 mb-8 text-foreground/80 md:text-lg"&gt;
              Estamos aqui para ajudar. Envie-nos uma mensagem para qualquer dúvida ou sugestão.
            &lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="mx-auto max-w-xl"&gt;
            &lt;Card className="shadow-lg"&gt;
              &lt;CardContent className="pt-6"&gt;
                &lt;ContactForm /&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  );
}

function CheckIcon(props: React.SVGProps&lt;SVGSVGElement&gt;) {
  return (
    &lt;svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    &gt;
      &lt;polyline points="20 6 9 17 4 12" /&gt;
    &lt;/svg&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/quiz/page.tsx</strong></summary>
  <pre><code class="tsx">
import { Puzzle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function QuizPage() {
  return (
    &lt;div className="container py-12 md:py-16 lg:py-20 flex flex-col items-center text-center"&gt;
      &lt;Puzzle className="h-16 w-16 text-primary mx-auto mb-6" /&gt;
      &lt;h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary"&gt;
        Quizzes Interativos
      &lt;/h1&gt;
      &lt;p className="mt-4 max-w-xl mx-auto text-lg text-foreground/80"&gt;
        Em breve! Prepare-se para testar seus conhecimentos e aprender de forma divertida com nossos quizzes interativos. Estamos trabalhando para trazer esta funcionalidade o mais rápido possível.
      &lt;/p&gt;
      &lt;div className="mt-8"&gt;
        &lt;Image
          src="https://placehold.co/600x350.png"
          alt="Quiz em desenvolvimento"
          data-ai-hint="quiz puzzle"
          width={600}
          height={350}
          className="rounded-lg shadow-md"
        /&gt;
      &lt;/div&gt;
      &lt;Button asChild size="lg" className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground"&gt;
        &lt;Link href="/"&gt;Voltar à Página Inicial&lt;/Link&gt;
      &lt;/Button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/recomendacoes/RecommendationForm.tsx</strong></summary>
  <pre><code class="tsx">
'use client';

import { useState, type FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { recommendCourses, type RecommendCoursesInput, type RecommendCoursesOutput } from '@/ai/flows/recommend-courses';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  interests: z.string().min(10, { message: 'Por favor, descreva seus interesses com pelo menos 10 caracteres.' }),
  academicHistory: z.string().min(20, { message: 'Por favor, detalhe seu histórico acadêmico com pelo menos 20 caracteres.' }),
});

type RecommendationFormValues = z.infer&lt;typeof formSchema&gt;;

export default function RecommendationForm() {
  const [recommendations, setRecommendations] = useState&lt;RecommendCoursesOutput | null&gt;(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState&lt;string | null&gt;(null);
  const { toast } = useToast();

  const form = useForm&lt;RecommendationFormValues&gt;({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      academicHistory: '',
    },
  });

  async function onSubmit(values: RecommendationFormValues) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const input: RecommendCoursesInput = {
        interests: values.interests,
        academicHistory: values.academicHistory,
      };
      const result = await recommendCourses(input);
      setRecommendations(result);
      toast({
        title: "Recomendações Geradas!",
        description: "Suas sugestões de cursos estão prontas.",
      });
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'Ocorreu um erro desconhecido.';
      setError(`Falha ao obter recomendações: ${errorMessage}`);
      toast({
        title: "Erro ao Gerar Recomendações",
        description: `Detalhes: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    &lt;div className="space-y-8"&gt;
      &lt;Card className="shadow-lg"&gt;
        &lt;CardHeader&gt;
          &lt;CardTitle className="font-headline text-2xl flex items-center"&gt;
            &lt;Sparkles className="h-6 w-6 mr-2 text-accent" /&gt;
            Gerador de Recomendações
          &lt;/CardTitle&gt;
          &lt;CardDescription&gt;
            Preencha os campos abaixo para que nossa IA sugira cursos ideais para você.
          &lt;/CardDescription&gt;
        &lt;/CardHeader&gt;
        &lt;CardContent&gt;
          &lt;Form {...form}&gt;
            &lt;form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"&gt;
              &lt;FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  &lt;FormItem&gt;
                    &lt;FormLabel className="text-base"&gt;Seus Interesses&lt;/FormLabel&gt;
                    &lt;FormControl&gt;
                      &lt;Textarea
                        placeholder="Ex: inteligência artificial, desenvolvimento de jogos, história da arte, finanças..."
                        className="min-h-[100px] resize-y"
                        {...field}
                      /&gt;
                    &lt;/FormControl&gt;
                    &lt;FormMessage /&gt;
                  &lt;/FormItem&gt;
                )}
              /&gt;
              &lt;FormField
                control={form.control}
                name="academicHistory"
                render={({ field }) => (
                  &lt;FormItem&gt;
                    &lt;FormLabel className="text-base"&gt;Seu Histórico Acadêmico&lt;/FormLabel&gt;
                    &lt;FormControl&gt;
                      &lt;Textarea
                        placeholder="Ex: Cursos concluídos (Cálculo I - A, Programação Orientada a Objetos - B+), áreas de destaque, dificuldades enfrentadas..."
                        className="min-h-[150px] resize-y"
                        {...field}
                      /&gt;
                    &lt;/FormControl&gt;
                    &lt;FormMessage /&gt;
                  &lt;/FormItem&gt;
                )}
              /&gt;
              &lt;Button type="submit" disabled={isLoading} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"&gt;
                {isLoading ? (
                  &lt;&gt;
                    &lt;Loader2 className="mr-2 h-5 w-5 animate-spin" /&gt;
                    Gerando...
                  &lt;/&gt;
                ) : (
                  &lt;&gt;
                    Obter Recomendações &lt;Sparkles className="ml-2 h-5 w-5" /&gt;
                  &lt;/&gt;
                )}
              &lt;/Button&gt;
            &lt;/form&gt;
          &lt;/Form&gt;
        &lt;/CardContent&gt;
      &lt;/Card&gt;

      {error && (
        &lt;Card className="border-destructive bg-destructive/10 shadow-md"&gt;
          &lt;CardHeader&gt;
            &lt;CardTitle className="font-headline text-xl text-destructive flex items-center"&gt;
              &lt;AlertTriangle className="h-5 w-5 mr-2" /&gt;
              Ocorreu um Erro
            &lt;/CardTitle&gt;
          &lt;/CardHeader&gt;
          &lt;CardContent&gt;
            &lt;p className="text-destructive-foreground"&gt;{error}&lt;/p&gt;
          &lt;/CardContent&gt;
        &lt;/Card&gt;
      )}

      {recommendations && recommendations.courses.length > 0 && (
        &lt;Card className="shadow-lg border-primary bg-primary/5"&gt;
          &lt;CardHeader&gt;
            &lt;CardTitle className="font-headline text-2xl text-primary flex items-center"&gt;
              &lt;Sparkles className="h-6 w-6 mr-2" /&gt;
              Cursos Recomendados para Você
            &lt;/CardTitle&gt;
          &lt;/CardHeader&gt;
          &lt;CardContent&gt;
            &lt;ul className="list-disc list-inside space-y-2 text-foreground/90"&gt;
              {recommendations.courses.map((course, index) => (
                &lt;li key={index} className="text-base"&gt;{course}&lt;/li&gt;
              ))}
            &lt;/ul&gt;
          &lt;/CardContent&gt;
        &lt;/Card&gt;
      )}
       {recommendations && recommendations.courses.length === 0 && !error && (
        &lt;Card className="shadow-md"&gt;
          &lt;CardHeader&gt;
            &lt;CardTitle className="font-headline text-xl text-muted-foreground"&gt;Nenhuma recomendação específica&lt;/CardTitle&gt;
          &lt;/CardHeader&gt;
          &lt;CardContent&gt;
            &lt;p className="text-muted-foreground"&gt;Não conseguimos gerar recomendações específicas com base nas informações fornecidas. Tente ser mais detalhado ou explore nossos &lt;a href="/cursos" className="text-primary underline"&gt;cursos disponíveis&lt;/a&gt;.&lt;/p&gt;
          &lt;/CardContent&gt;
        &lt;/Card&gt;
      )}
    &lt;/div&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/app/recomendacoes/page.tsx</strong></summary>
  <pre><code class="tsx">
import RecommendationForm from './RecommendationForm';
import { Lightbulb } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    &lt;div className="container py-12 md:py-16 lg:py-20"&gt;
      &lt;div className="text-center mb-12"&gt;
        &lt;Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" /&gt;
        &lt;h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary"&gt;
          Recomendações de Cursos com IA
        &lt;/h1&gt;
        &lt;p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/80"&gt;
          Descubra os cursos mais adequados ao seu perfil! Nossa inteligência artificial analisa seus interesses e histórico acadêmico para fornecer sugestões personalizadas.
        &lt;/p&gt;
      &lt;/div&gt;
      &lt;div className="max-w-2xl mx-auto"&gt;
        &lt;RecommendationForm /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/layout/Footer.tsx</strong></summary>
  <pre><code class="tsx">
export default function Footer() {
  return (
    &lt;footer className="border-t bg-background"&gt;
      &lt;div className="container py-8 text-center text-sm text-muted-foreground"&gt;
        &lt;p&gt;&copy; {new Date().getFullYear()} UniFlow. Todos os direitos reservados.&lt;/p&gt;
        &lt;p className="mt-1"&gt;Criado para aprimorar sua jornada acadêmica.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/footer&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/layout/Header.tsx</strong></summary>
  <pre><code class="tsx">
import Link from 'next/link';
import { Menu, University } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Recomendações IA', href: '/recomendacoes' },
  { label: 'Quiz Interativo', href: '/quiz' },
  { label: 'Contato', href: '/#contato' },
];

export default function Header() {
  return (
    &lt;header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"&gt;
      &lt;div className="container flex h-16 items-center justify-between"&gt;
        &lt;Link href="/" className="flex items-center gap-2" aria-label="UniFlow Home"&gt;
          &lt;University className="h-7 w-7 text-primary" /&gt;
          &lt;span className="text-xl font-bold font-headline text-primary"&gt;UniFlow&lt;/span&gt;
        &lt;/Link&gt;

        &lt;nav className="hidden md:flex gap-6"&gt;
          {navItems.map((item) => (
            &lt;Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            &gt;
              {item.label}
            &lt;/Link&gt;
          ))}
        &lt;/nav&gt;

        &lt;div className="md:hidden"&gt;
          &lt;Sheet&gt;
            &lt;SheetTrigger asChild&gt;
              &lt;Button variant="ghost" size="icon"&gt;
                &lt;Menu className="h-6 w-6" /&gt;
                &lt;span className="sr-only"&gt;Abrir menu&lt;/span&gt;
              &lt;/Button&gt;
            &lt;/SheetTrigger&gt;
            &lt;SheetContent side="right"&gt;
              &lt;div className="flex flex-col gap-6 p-6"&gt;
                &lt;Link href="/" className="flex items-center gap-2 mb-4" aria-label="UniFlow Home"&gt;
                  &lt;University className="h-6 w-6 text-primary" /&gt;
                  &lt;span className="text-lg font-bold font-headline text-primary"&gt;UniFlow&lt;/span&gt;
                &lt;/Link&gt;
                {navItems.map((item) => (
                  &lt;Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-primary"
                  &gt;
                    {item.label}
                  &lt;/Link&gt;
                ))}
              &lt;/div&gt;
            &lt;/SheetContent&gt;
          &lt;/Sheet&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/page/ContactForm.tsx</strong></summary>
  <pre><code class="tsx">
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Send, User, MailIcon, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

type ContactFormValues = z.infer&lt;typeof contactFormSchema&gt;;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm&lt;ContactFormValues&gt;({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Responderemos em breve.",
    });
    form.reset();
  }

  return (
    &lt;Form {...form}&gt;
      &lt;form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"&gt;
        &lt;FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            &lt;FormItem&gt;
              &lt;FormLabel className="text-base flex items-center"&gt;
                &lt;User className="h-4 w-4 mr-2" /&gt;
                Seu Nome
              &lt;/FormLabel&gt;
              &lt;FormControl&gt;
                &lt;Input placeholder="Digite seu nome completo" {...field} /&gt;
              &lt;/FormControl&gt;
              &lt;FormMessage /&gt;
            &lt;/FormItem&gt;
          )}
        /&gt;
        &lt;FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            &lt;FormItem&gt;
              &lt;FormLabel className="text-base flex items-center"&gt;
                &lt;MailIcon className="h-4 w-4 mr-2" /&gt;
                Seu Email
              &lt;/FormLabel&gt;
              &lt;FormControl&gt;
                &lt;Input type="email" placeholder="exemplo@email.com" {...field} /&gt;
              &lt;/FormControl&gt;
              &lt;FormMessage /&gt;
            &lt;/FormItem&gt;
          )}
        /&gt;
        &lt;FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            &lt;FormItem&gt;
              &lt;FormLabel className="text-base flex items-center"&gt;
                &lt;MessageSquare className="h-4 w-4 mr-2" /&gt;
                Sua Mensagem
              &lt;/FormLabel&gt;
              &lt;FormControl&gt;
                &lt;Textarea
                  placeholder="Deixe sua dúvida, sugestão ou feedback..."
                  className="min-h-[120px] resize-y"
                  {...field}
                /&gt;
              &lt;/FormControl&gt;
              &lt;FormMessage /&gt;
            &lt;/FormItem&gt;
          )}
        /&gt;
        &lt;Button type="submit" disabled={isLoading} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"&gt;
          {isLoading ? (
            &lt;&gt;
              &lt;Loader2 className="mr-2 h-5 w-5 animate-spin" /&gt;
              Enviando...
            &lt;/&gt;
          ) : (
            &lt;&gt;
              Enviar Mensagem &lt;Send className="ml-2 h-5 w-5" /&gt;
            &lt;/&gt;
          )}
        &lt;/Button&gt;
      &lt;/form&gt;
    &lt;/Form&gt;
  );
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/accordion.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof AccordionPrimitive.Item&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AccordionPrimitive.Item&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  /&gt;
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof AccordionPrimitive.Trigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AccordionPrimitive.Trigger&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;AccordionPrimitive.Header className="flex"&gt;
    &lt;AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180",
        className
      )}
      {...props}
    &gt;
      {children}
      &lt;ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /&gt;
    &lt;/AccordionPrimitive.Trigger&gt;
  &lt;/AccordionPrimitive.Header&gt;
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof AccordionPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AccordionPrimitive.Content&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  &gt;
    &lt;div className={cn("pb-4 pt-0", className)}&gt;{children}&lt;/div&gt;
  &lt;/AccordionPrimitive.Content&gt;
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/alert-dialog.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef&lt;
  React.ElementRef&lt;typeof AlertDialogPrimitive.Overlay&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AlertDialogPrimitive.Overlay&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  /&gt;
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof AlertDialogPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AlertDialogPrimitive.Content&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AlertDialogPortal&gt;
    &lt;AlertDialogOverlay /&gt;
    &lt;AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    /&gt;
  &lt;/AlertDialogPortal&gt;
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) => (
  &lt;div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  /&gt;
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) => (
  &lt;div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  /&gt;
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef&lt;
  React.ElementRef&lt;typeof AlertDialogPrimitive.Title&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AlertDialogPrimitive.Title&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  /&gt;
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef&lt;
  React.ElementRef&lt;typeof AlertDialogPrimitive.Description&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AlertDialogPrimitive.Description&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  /&gt;
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef&lt;
  React.ElementRef&lt;typeof AlertDialogPrimitive.Action&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AlertDialogPrimitive.Action&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  /&gt;
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef&lt;
  React.ElementRef&lt;typeof AlertDialogPrimitive.Cancel&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AlertDialogPrimitive.Cancel&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  /&gt;
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/alert.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&amp;>svg~*]:pl-7 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&amp;>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt; &amp; VariantProps&lt;typeof alertVariants&gt;
&gt;(({ className, variant, ...props }, ref) => (
  &lt;div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  /&gt;
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef&lt;
  HTMLParagraphElement,
  React.HTMLAttributes&lt;HTMLHeadingElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  /&gt;
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef&lt;
  HTMLParagraphElement,
  React.HTMLAttributes&lt;HTMLParagraphElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    className={cn("text-sm [&amp;_p]:leading-relaxed", className)}
    {...props}
  /&gt;
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/avatar.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef&lt;
  React.ElementRef&lt;typeof AvatarPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AvatarPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  /&gt;
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef&lt;
  React.ElementRef&lt;typeof AvatarPrimitive.Image&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AvatarPrimitive.Image&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  /&gt;
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef&lt;
  React.ElementRef&lt;typeof AvatarPrimitive.Fallback&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AvatarPrimitive.Fallback&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  /&gt;
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/badge.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes&lt;HTMLDivElement&gt;,
    VariantProps&lt;typeof badgeVariants&gt; {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    &lt;div className={cn(badgeVariants({ variant }), className)} {...props} /&gt;
  )
}

export { Badge, badgeVariants }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/button.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;,
    VariantProps&lt;typeof buttonVariants&gt; {
  asChild?: boolean
}

const Button = React.forwardRef&lt;HTMLButtonElement, ButtonProps&gt;(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      &lt;Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      /&gt;
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/calendar.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps&lt;typeof DayPicker&gt;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    &lt;DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          &lt;ChevronLeft className={cn("h-4 w-4", className)} {...props} /&gt;
        ),
        IconRight: ({ className, ...props }) => (
          &lt;ChevronRight className={cn("h-4 w-4", className)} {...props} /&gt;
        ),
      }}
      {...props}
    /&gt;
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/card.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  /&gt;
))
Card.displayName = "Card"

const CardHeader = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  /&gt;
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  /&gt;
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  /&gt;
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div ref={ref} className={cn("p-6 pt-0", className)} {...props} /&gt;
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  /&gt;
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/chart.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } &amp; (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record&lt;keyof typeof THEMES, string&gt; }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext&lt;ChartContextProps | null&gt;(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a &lt;ChartContainer /&gt;")
  }

  return context
}

const ChartContainer = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt; &amp; {
    config: ChartConfig
    children: React.ComponentProps&lt;
      typeof RechartsPrimitive.ResponsiveContainer
    &gt;["children"]
  }
&gt;(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    &lt;ChartContext.Provider value={{ config }}&gt;
      &lt;div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-none [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-sector]:outline-none [&amp;_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      &gt;
        &lt;ChartStyle id={chartId} config={config} /&gt;
        &lt;RechartsPrimitive.ResponsiveContainer&gt;
          {children}
        &lt;/RechartsPrimitive.ResponsiveContainer&gt;
      &lt;/div&gt;
    &lt;/ChartContext.Provider&gt;
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    &lt;style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    /&gt;
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;typeof RechartsPrimitive.Tooltip&gt; &amp;
    React.ComponentProps&lt;"div"&gt; &amp; {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
&gt;(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey &amp;&amp; typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          &lt;div className={cn("font-medium", labelClassName)}&gt;
            {labelFormatter(value, payload)}
          &lt;/div&gt;
        )
      }

      if (!value) {
        return null
      }

      return &lt;div className={cn("font-medium", labelClassName)}&gt;{value}&lt;/div&gt;
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 &amp;&amp; indicator !== "dot"

    return (
      &lt;div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      &gt;
        {!nestLabel ? tooltipLabel : null}
        &lt;div className="grid gap-1.5"&gt;
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              &lt;div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&amp;>svg]:h-2.5 [&amp;>svg]:w-2.5 [&amp;>svg]:text-muted-foreground",
                  indicator === "dot" &amp;&amp; "items-center"
                )}
              &gt;
                {formatter &amp;&amp; item?.value !== undefined &amp;&amp; item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  &lt;&gt;
                    {itemConfig?.icon ? (
                      &lt;itemConfig.icon /&gt;
                    ) : (
                      !hideIndicator &amp;&amp; (
                        &lt;div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel &amp;&amp; indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        /&gt;
                      )
                    )}
                    &lt;div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    &gt;
                      &lt;div className="grid gap-1.5"&gt;
                        {nestLabel ? tooltipLabel : null}
                        &lt;span className="text-muted-foreground"&gt;
                          {itemConfig?.label || item.name}
                        &lt;/span&gt;
                      &lt;/div&gt;
                      {item.value &amp;&amp; (
                        &lt;span className="font-mono font-medium tabular-nums text-foreground"&gt;
                          {item.value.toLocaleString()}
                        &lt;/span&gt;
                      )}
                    &lt;/div&gt;
                  &lt;/&gt;
                )}
              &lt;/div&gt;
            )
          })}
        &lt;/div&gt;
      &lt;/div&gt;
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt; &amp;
    Pick&lt;RechartsPrimitive.LegendProps, "payload" | "verticalAlign"&gt; &amp; {
      hideIcon?: boolean
      nameKey?: string
    }
&gt;(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      &lt;div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      &gt;
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            &lt;div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&amp;>svg]:h-3 [&amp;>svg]:w-3 [&amp;>svg]:text-muted-foreground"
              )}
            &gt;
              {itemConfig?.icon &amp;&amp; !hideIcon ? (
                &lt;itemConfig.icon /&gt;
              ) : (
                &lt;div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                /&gt;
              )}
              {itemConfig?.label}
            &lt;/div&gt;
          )
        })}
      &lt;/div&gt;
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &amp;&amp;
    typeof payload.payload === "object" &amp;&amp;
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &amp;&amp;
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &amp;&amp;
    key in payloadPayload &amp;&amp;
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/checkbox.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef&lt;
  React.ElementRef&lt;typeof CheckboxPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof CheckboxPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  &gt;
    &lt;CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    &gt;
      &lt;Check className="h-4 w-4" /&gt;
    &lt;/CheckboxPrimitive.Indicator&gt;
  &lt;/CheckboxPrimitive.Root&gt;
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/dialog.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Overlay&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Overlay&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  /&gt;
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Content&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;DialogPortal&gt;
    &lt;DialogOverlay /&gt;
    &lt;DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    &gt;
      {children}
      &lt;DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"&gt;
        &lt;X className="h-4 w-4" /&gt;
        &lt;span className="sr-only"&gt;Close&lt;/span&gt;
      &lt;/DialogPrimitive.Close&gt;
    &lt;/DialogPrimitive.Content&gt;
  &lt;/DialogPortal&gt;
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) => (
  &lt;div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  /&gt;
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) => (
  &lt;div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  /&gt;
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Title&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Title&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  /&gt;
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Description&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Description&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  /&gt;
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/dropdown-menu.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.SubTrigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.SubTrigger&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, children, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  &gt;
    {children}
    &lt;ChevronRight className="ml-auto" /&gt;
  &lt;/DropdownMenuPrimitive.SubTrigger&gt;
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.SubContent&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.SubContent&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  /&gt;
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Content&gt;
&gt;(({ className, sideOffset = 4, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.Portal&gt;
    &lt;DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    /&gt;
  &lt;/DropdownMenuPrimitive.Portal&gt;
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Item&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Item&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  /&gt;
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.CheckboxItem&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.CheckboxItem&gt;
&gt;(({ className, children, checked, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;DropdownMenuPrimitive.ItemIndicator&gt;
        &lt;Check className="h-4 w-4" /&gt;
      &lt;/DropdownMenuPrimitive.ItemIndicator&gt;
    &lt;/span&gt;
    {children}
  &lt;/DropdownMenuPrimitive.CheckboxItem&gt;
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.RadioItem&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.RadioItem&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;DropdownMenuPrimitive.ItemIndicator&gt;
        &lt;Circle className="h-2 w-2 fill-current" /&gt;
      &lt;/DropdownMenuPrimitive.ItemIndicator&gt;
    &lt;/span&gt;
    {children}
  &lt;/DropdownMenuPrimitive.RadioItem&gt;
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Label&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Label&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  /&gt;
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Separator&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Separator&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  /&gt;
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLSpanElement&gt;) => {
  return (
    &lt;span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    /&gt;
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/form.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue&lt;
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath&lt;TFieldValues&gt; = FieldPath&lt;TFieldValues&gt;
&gt; = {
  name: TName
}

const FormFieldContext = React.createContext&lt;FormFieldContextValue&gt;(
  {} as FormFieldContextValue
)

const FormField = &lt;
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath&lt;TFieldValues&gt; = FieldPath&lt;TFieldValues&gt;
&gt;({
  ...props
}: ControllerProps&lt;TFieldValues, TName&gt;) => {
  return (
    &lt;FormFieldContext.Provider value={{ name: props.name }}&gt;
      &lt;Controller {...props} /&gt;
    &lt;/FormFieldContext.Provider&gt;
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within &lt;FormField&gt;")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext&lt;FormItemContextValue&gt;(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef&lt;
  HTMLDivElement,
  React.HTMLAttributes&lt;HTMLDivElement&gt;
&gt;(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    &lt;FormItemContext.Provider value={{ id }}&gt;
      &lt;div ref={ref} className={cn("space-y-2", className)} {...props} /&gt;
    &lt;/FormItemContext.Provider&gt;
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef&lt;
  React.ElementRef&lt;typeof LabelPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof LabelPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    &lt;Label
      ref={ref}
      className={cn(error &amp;&amp; "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    /&gt;
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef&lt;
  React.ElementRef&lt;typeof Slot&gt;,
  React.ComponentPropsWithoutRef&lt;typeof Slot&gt;
&gt;(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    &lt;Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    /&gt;
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef&lt;
  HTMLParagraphElement,
  React.HTMLAttributes&lt;HTMLParagraphElement&gt;
&gt;(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    &lt;p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    /&gt;
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef&lt;
  HTMLParagraphElement,
  React.HTMLAttributes&lt;HTMLParagraphElement&gt;
&gt;(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    &lt;p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    &gt;
      {body}
    &lt;/p&gt;
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/input.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef&lt;HTMLInputElement, React.ComponentProps&lt;"input"&gt;&gt;(
  ({ className, type, ...props }, ref) => {
    return (
      &lt;input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      /&gt;
    )
  }
)
Input.displayName = "Input"

export { Input }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/label.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef&lt;
  React.ElementRef&lt;typeof LabelPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof LabelPrimitive.Root&gt; &amp;
    VariantProps&lt;typeof labelVariants&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  /&gt;
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/menubar.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu({
  ...props
}: React.ComponentProps&lt;typeof MenubarPrimitive.Menu&gt;) {
  return &lt;MenubarPrimitive.Menu {...props} /&gt;
}

function MenubarGroup({
  ...props
}: React.ComponentProps&lt;typeof MenubarPrimitive.Group&gt;) {
  return &lt;MenubarPrimitive.Group {...props} /&gt;
}

function MenubarPortal({
  ...props
}: React.ComponentProps&lt;typeof MenubarPrimitive.Portal&gt;) {
  return &lt;MenubarPrimitive.Portal {...props} /&gt;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps&lt;typeof MenubarPrimitive.RadioGroup&gt;) {
  return &lt;MenubarPrimitive.RadioGroup {...props} /&gt;
}

function MenubarSub({
  ...props
}: React.ComponentProps&lt;typeof MenubarPrimitive.Sub&gt;) {
  return &lt;MenubarPrimitive.Sub data-slot="menubar-sub" {...props} /&gt;
}

const Menubar = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  /&gt;
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.Trigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.Trigger&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  /&gt;
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.SubTrigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.SubTrigger&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, children, ...props }, ref) => (
  &lt;MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  &gt;
    {children}
    &lt;ChevronRight className="ml-auto h-4 w-4" /&gt;
  &lt;/MenubarPrimitive.SubTrigger&gt;
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.SubContent&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.SubContent&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  /&gt;
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.Content&gt;
&gt;(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    &lt;MenubarPrimitive.Portal&gt;
      &lt;MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      /&gt;
    &lt;/MenubarPrimitive.Portal&gt;
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.Item&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.Item&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, ...props }, ref) => (
  &lt;MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  /&gt;
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.CheckboxItem&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.CheckboxItem&gt;
&gt;(({ className, children, checked, ...props }, ref) => (
  &lt;MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;MenubarPrimitive.ItemIndicator&gt;
        &lt;Check className="h-4 w-4" /&gt;
      &lt;/MenubarPrimitive.ItemIndicator&gt;
    &lt;/span&gt;
    {children}
  &lt;/MenubarPrimitive.CheckboxItem&gt;
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.RadioItem&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.RadioItem&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;MenubarPrimitive.ItemIndicator&gt;
        &lt;Circle className="h-2 w-2 fill-current" /&gt;
      &lt;/MenubarPrimitive.ItemIndicator&gt;
    &lt;/span&gt;
    {children}
  &lt;/MenubarPrimitive.RadioItem&gt;
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.Label&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.Label&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, ...props }, ref) => (
  &lt;MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  /&gt;
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef&lt;
  React.ElementRef&lt;typeof MenubarPrimitive.Separator&gt;,
  React.ComponentPropsWithoutRef&lt;typeof MenubarPrimitive.Separator&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  /&gt;
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLSpanElement&gt;) => {
  return (
    &lt;span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    /&gt;
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/popover.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof PopoverPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof PopoverPrimitive.Content&gt;
&gt;(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  &lt;PopoverPrimitive.Portal&gt;
    &lt;PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    /&gt;
  &lt;/PopoverPrimitive.Portal&gt;
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/progress.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef&lt;
  React.ElementRef&lt;typeof ProgressPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ProgressPrimitive.Root&gt;
&gt;(({ className, value, ...props }, ref) => (
  &lt;ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  &gt;
    &lt;ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    /&gt;
  &lt;/ProgressPrimitive.Root&gt;
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/radio-group.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef&lt;
  React.ElementRef&lt;typeof RadioGroupPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof RadioGroupPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    /&gt;
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof RadioGroupPrimitive.Item&gt;,
  React.ComponentPropsWithoutRef&lt;typeof RadioGroupPrimitive.Item&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    &gt;
      &lt;RadioGroupPrimitive.Indicator className="flex items-center justify-center"&gt;
        &lt;Circle className="h-2.5 w-2.5 fill-current text-current" /&gt;
      &lt;/RadioGroupPrimitive.Indicator&gt;
    &lt;/RadioGroupPrimitive.Item&gt;
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/scroll-area.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef&lt;
  React.ElementRef&lt;typeof ScrollAreaPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ScrollAreaPrimitive.Root&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  &gt;
    &lt;ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]"&gt;
      {children}
    &lt;/ScrollAreaPrimitive.Viewport&gt;
    &lt;ScrollBar /&gt;
    &lt;ScrollAreaPrimitive.Corner /&gt;
  &lt;/ScrollAreaPrimitive.Root&gt;
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef&lt;
  React.ElementRef&lt;typeof ScrollAreaPrimitive.ScrollAreaScrollbar&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ScrollAreaPrimitive.ScrollAreaScrollbar&gt;
&gt;(({ className, orientation = "vertical", ...props }, ref) => (
  &lt;ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &amp;&amp;
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &amp;&amp;
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  &gt;
    &lt;ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" /&gt;
  &lt;/ScrollAreaPrimitive.ScrollAreaScrollbar&gt;
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/select.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.Trigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.Trigger&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1",
      className
    )}
    {...props}
  &gt;
    {children}
    &lt;SelectPrimitive.Icon asChild&gt;
      &lt;ChevronDown className="h-4 w-4 opacity-50" /&gt;
    &lt;/SelectPrimitive.Icon&gt;
  &lt;/SelectPrimitive.Trigger&gt;
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.ScrollUpButton&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.ScrollUpButton&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  &gt;
    &lt;ChevronUp className="h-4 w-4" /&gt;
  &lt;/SelectPrimitive.ScrollUpButton&gt;
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.ScrollDownButton&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.ScrollDownButton&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  &gt;
    &lt;ChevronDown className="h-4 w-4" /&gt;
  &lt;/SelectPrimitive.ScrollDownButton&gt;
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.Content&gt;
&gt;(({ className, children, position = "popper", ...props }, ref) => (
  &lt;SelectPrimitive.Portal&gt;
    &lt;SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &amp;&amp;
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    &gt;
      &lt;SelectScrollUpButton /&gt;
      &lt;SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &amp;&amp;
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      &gt;
        {children}
      &lt;/SelectPrimitive.Viewport&gt;
      &lt;SelectScrollDownButton /&gt;
    &lt;/SelectPrimitive.Content&gt;
  &lt;/SelectPrimitive.Portal&gt;
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.Label&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.Label&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  /&gt;
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.Item&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.Item&gt;
&gt;(({ className, children, ...props }, ref) => (
  &lt;SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;SelectPrimitive.ItemIndicator&gt;
        &lt;Check className="h-4 w-4" /&gt;
      &lt;/SelectPrimitive.ItemIndicator&gt;
    &lt;/span&gt;

    &lt;SelectPrimitive.ItemText&gt;{children}&lt;/SelectPrimitive.ItemText&gt;
  &lt;/SelectPrimitive.Item&gt;
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef&lt;
  React.ElementRef&lt;typeof SelectPrimitive.Separator&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SelectPrimitive.Separator&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  /&gt;
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/separator.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef&lt;
  React.ElementRef&lt;typeof SeparatorPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SeparatorPrimitive.Root&gt;
&gt;(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    &lt;SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    /&gt;
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/sheet.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef&lt;
  React.ElementRef&lt;typeof SheetPrimitive.Overlay&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SheetPrimitive.Overlay&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  /&gt;
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef&lt;typeof SheetPrimitive.Content&gt;,
    VariantProps&lt;typeof sheetVariants&gt; {}

const SheetContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof SheetPrimitive.Content&gt;,
  SheetContentProps
&gt;(({ side = "right", className, children, ...props }, ref) => (
  &lt;SheetPortal&gt;
    &lt;SheetOverlay /&gt;
    &lt;SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    &gt;
      {children}
      &lt;SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"&gt;
        &lt;X className="h-4 w-4" /&gt;
        &lt;span className="sr-only"&gt;Close&lt;/span&gt;
      &lt;/SheetPrimitive.Close&gt;
    &lt;/SheetPrimitive.Content&gt;
  &lt;/SheetPortal&gt;
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) => (
  &lt;div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  /&gt;
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) => (
  &lt;div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  /&gt;
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef&lt;
  React.ElementRef&lt;typeof SheetPrimitive.Title&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SheetPrimitive.Title&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  /&gt;
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef&lt;
  React.ElementRef&lt;typeof SheetPrimitive.Description&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SheetPrimitive.Description&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  /&gt;
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/sidebar.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext&lt;SidebarContext | null&gt;(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt; &amp; {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
&gt;(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &amp;&amp;
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo&lt;SidebarContext&gt;(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      &lt;SidebarContext.Provider value={contextValue}&gt;
        &lt;TooltipProvider delayDuration={0}&gt;
          &lt;div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          &gt;
            {children}
          &lt;/div&gt;
        &lt;/TooltipProvider&gt;
      &lt;/SidebarContext.Provider&gt;
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt; &amp; {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
&gt;(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        &lt;div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        &gt;
          {children}
        &lt;/div&gt;
      )
    }

    if (isMobile) {
      return (
        &lt;Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}&gt;
          &lt;SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&amp;>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          &gt;
            &lt;div className="flex h-full w-full flex-col"&gt;{children}&lt;/div&gt;
          &lt;/SheetContent&gt;
        &lt;/Sheet&gt;
      )
    }

    return (
      &lt;div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      &gt;
        {/* This is what handles the sidebar gap on desktop */}
        &lt;div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        /&gt;
        &lt;div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        &gt;
          &lt;div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          &gt;
            {children}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof Button&gt;,
  React.ComponentProps&lt;typeof Button&gt;
&gt;(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    &lt;Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    &gt;
      &lt;PanelLeft /&gt;
      &lt;span className="sr-only"&gt;Toggle Sidebar&lt;/span&gt;
    &lt;/Button&gt;
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef&lt;
  HTMLButtonElement,
  React.ComponentProps&lt;"button"&gt;
&gt;(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    &lt;button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&amp;]:cursor-w-resize [[data-side=right]_&amp;]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&amp;]:cursor-e-resize [[data-side=right][data-state=collapsed]_&amp;]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&amp;]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&amp;]:-left-2",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"main"&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef&lt;
  React.ElementRef&lt;typeof Input&gt;,
  React.ComponentProps&lt;typeof Input&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    /&gt;
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    /&gt;
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef&lt;
  React.ElementRef&lt;typeof Separator&gt;,
  React.ComponentProps&lt;typeof Separator&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    /&gt;
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt;
&gt;(({ className, ...props }, ref) => {
  return (
    &lt;div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    /&gt;
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt; &amp; { asChild?: boolean }
&gt;(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    &lt;Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef&lt;
  HTMLButtonElement,
  React.ComponentProps&lt;"button"&gt; &amp; { asChild?: boolean }
&gt;(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    &lt;Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  /&gt;
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef&lt;
  HTMLUListElement,
  React.ComponentProps&lt;"ul"&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  /&gt;
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef&lt;
  HTMLLIElement,
  React.ComponentProps&lt;"li"&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  /&gt;
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&amp;>span:last-child]:truncate [&amp;>svg]:size-4 [&amp;>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef&lt;
  HTMLButtonElement,
  React.ComponentProps&lt;"button"&gt; &amp; {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps&lt;typeof TooltipContent&gt;
  } &amp; VariantProps&lt;typeof sidebarMenuButtonVariants&gt;
&gt;(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      &lt;Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      /&gt;
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      &lt;Tooltip&gt;
        &lt;TooltipTrigger asChild&gt;{button}&lt;/TooltipTrigger&gt;
        &lt;TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        /&gt;
      &lt;/Tooltip&gt;
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef&lt;
  HTMLButtonElement,
  React.ComponentProps&lt;"button"&gt; &amp; {
    asChild?: boolean
    showOnHover?: boolean
  }
&gt;(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    &lt;Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&amp;>svg]:size-4 [&amp;>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &amp;&amp;
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  /&gt;
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef&lt;
  HTMLDivElement,
  React.ComponentProps&lt;"div"&gt; &amp; {
    showIcon?: boolean
  }
&gt;(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    &lt;div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    &gt;
      {showIcon &amp;&amp; (
        &lt;Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        /&gt;
      )}
      &lt;Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      /&gt;
    &lt;/div&gt;
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef&lt;
  HTMLUListElement,
  React.ComponentProps&lt;"ul"&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  /&gt;
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef&lt;
  HTMLLIElement,
  React.ComponentProps&lt;"li"&gt;
&gt;(({ ...props }, ref) => &lt;li ref={ref} {...props} /&gt;)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef&lt;
  HTMLAnchorElement,
  React.ComponentProps&lt;"a"&gt; &amp; {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
&gt;(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    &lt;Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&amp;>span:last-child]:truncate [&amp;>svg]:size-4 [&amp;>svg]:shrink-0 [&amp;>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" &amp;&amp; "text-xs",
        size === "md" &amp;&amp; "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    /&gt;
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/skeleton.tsx</strong></summary>
  <pre><code class="tsx">
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) {
  return (
    &lt;div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    /&gt;
  )
}

export { Skeleton }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/slider.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef&lt;
  React.ElementRef&lt;typeof SliderPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SliderPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  &gt;
    &lt;SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"&gt;
      &lt;SliderPrimitive.Range className="absolute h-full bg-primary" /&gt;
    &lt;/SliderPrimitive.Track&gt;
    &lt;SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" /&gt;
  &lt;/SliderPrimitive.Root&gt;
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/switch.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef&lt;
  React.ElementRef&lt;typeof SwitchPrimitives.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof SwitchPrimitives.Root&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  &gt;
    &lt;SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    /&gt;
  &lt;/SwitchPrimitives.Root&gt;
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/table.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef&lt;
  HTMLTableElement,
  React.HTMLAttributes&lt;HTMLTableElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;div className="relative w-full overflow-auto"&gt;
    &lt;table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    /&gt;
  &lt;/div&gt;
))
Table.displayName = "Table"

const TableHeader = React.forwardRef&lt;
  HTMLTableSectionElement,
  React.HTMLAttributes&lt;HTMLTableSectionElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;thead ref={ref} className={cn("[&amp;_tr]:border-b", className)} {...props} /&gt;
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef&lt;
  HTMLTableSectionElement,
  React.HTMLAttributes&lt;HTMLTableSectionElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;tbody
    ref={ref}
    className={cn("[&amp;_tr:last-child]:border-0", className)}
    {...props}
  /&gt;
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef&lt;
  HTMLTableSectionElement,
  React.HTMLAttributes&lt;HTMLTableSectionElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&amp;>tr]:last:border-b-0",
      className
    )}
    {...props}
  /&gt;
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef&lt;
  HTMLTableRowElement,
  React.HTMLAttributes&lt;HTMLTableRowElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  /&gt;
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef&lt;
  HTMLTableCellElement,
  React.ThHTMLAttributes&lt;HTMLTableCellElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  /&gt;
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef&lt;
  HTMLTableCellElement,
  React.TdHTMLAttributes&lt;HTMLTableCellElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;td
    ref={ref}
    className={cn("p-4 align-middle [&amp;:has([role=checkbox])]:pr-0", className)}
    {...props}
  /&gt;
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef&lt;
  HTMLTableCaptionElement,
  React.HTMLAttributes&lt;HTMLTableCaptionElement&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  /&gt;
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/tabs.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef&lt;
  React.ElementRef&lt;typeof TabsPrimitive.List&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TabsPrimitive.List&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  /&gt;
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof TabsPrimitive.Trigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TabsPrimitive.Trigger&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  /&gt;
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof TabsPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TabsPrimitive.Content&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  /&gt;
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/textarea.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef&lt;HTMLTextAreaElement, React.ComponentProps&lt;'textarea'&gt;&gt;(
  ({className, ...props}, ref) => {
    return (
      &lt;textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      /&gt;
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/toast.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef&lt;
  React.ElementRef&lt;typeof ToastPrimitives.Viewport&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ToastPrimitives.Viewport&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  /&gt;
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef&lt;
  React.ElementRef&lt;typeof ToastPrimitives.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ToastPrimitives.Root&gt; &amp;
    VariantProps&lt;typeof toastVariants&gt;
&gt;(({ className, variant, ...props }, ref) => {
  return (
    &lt;ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    /&gt;
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef&lt;
  React.ElementRef&lt;typeof ToastPrimitives.Action&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ToastPrimitives.Action&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  /&gt;
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef&lt;
  React.ElementRef&lt;typeof ToastPrimitives.Close&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ToastPrimitives.Close&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  &gt;
    &lt;X className="h-4 w-4" /&gt;
  &lt;/ToastPrimitives.Close&gt;
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef&lt;
  React.ElementRef&lt;typeof ToastPrimitives.Title&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ToastPrimitives.Title&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  /&gt;
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef&lt;
  React.ElementRef&lt;typeof ToastPrimitives.Description&gt;,
  React.ComponentPropsWithoutRef&lt;typeof ToastPrimitives.Description&gt;
&gt;(({ className, ...props }, ref) => (
  &lt;ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  /&gt;
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef&lt;typeof Toast&gt;

type ToastActionElement = React.ReactElement&lt;typeof ToastAction&gt;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/toaster.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    &lt;ToastProvider&gt;
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          &lt;Toast key={id} {...props}&gt;
            &lt;div className="grid gap-1"&gt;
              {title &amp;&amp; &lt;ToastTitle&gt;{title}&lt;/ToastTitle&gt;}
              {description &amp;&amp; (
                &lt;ToastDescription&gt;{description}&lt;/ToastDescription&gt;
              )}
            &lt;/div&gt;
            {action}
            &lt;ToastClose /&gt;
          &lt;/Toast&gt;
        )
      })}
      &lt;ToastViewport /&gt;
    &lt;/ToastProvider&gt;
  )
}
</code></pre>
</details>

<details>
  <summary><strong>src/components/ui/tooltip.tsx</strong></summary>
  <pre><code class="tsx">
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof TooltipPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TooltipPrimitive.Content&gt;
&gt;(({ className, sideOffset = 4, ...props }, ref) => (
  &lt;TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  /&gt;
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
</code></pre>
</details>

<details>
  <summary><strong>src/hooks/use-mobile.tsx</strong></summary>
  <pre><code class="tsx">
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState&lt;boolean | undefined&gt;(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth &lt; MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth &lt; MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
</code></pre>
</details>

<details>
  <summary><strong>src/hooks/use-toast.ts</strong></summary>
  <pre><code class="typescript">
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps &amp; {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial&lt;ToasterToast&gt;
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map&lt;string, ReturnType&lt;typeof setTimeout&gt;&gt;()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array&lt;(state: State) => void&gt; = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit&lt;ToasterToast, "id"&gt;

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState&lt;State&gt;(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
</code></pre>
</details>

<details>
  <summary><strong>src/lib/utils.ts</strong></summary>
  <pre><code class="typescript">
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
</code></pre>
</details>

<details>
  <summary><strong>tailwind.config.ts</strong></summary>
  <pre><code class="typescript">
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
</code></pre>
</details>

<details>
  <summary><strong>tsconfig.json</strong></summary>
  <pre><code class="json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
</code></pre>
</details>
