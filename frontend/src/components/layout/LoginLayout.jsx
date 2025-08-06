// frontend/src/components/layout/LoginLayout.jsx
// frontend/src/components/layout/LoginLayout.jsx

import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Illustration from '../ui/Illustration';

const MotionDiv = motion.div;

export default function LoginLayout({ children }) {
    return (
        <div className="overflow-x-hidden flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-500">
        {/* Header fijo */}
        <header className="fixed top-0 left-0 w-full z-50">
            <Header />
        </header>

        {/* Espacio bajo el header */}
        <div className="h-16 md:h-20" />

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col md:flex-row">
            {/* Panel izquierdo */}
            <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-12 md:px-16 md:py-24 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-snug text-white">
                Bienvenido a <br /> DIM Academy
            </h2>
            <p className="mt-4 text-sm md:text-base font-heading text-white/90 max-w-md leading-relaxed">
                La plataforma que conecta la educación con la tecnología
            </p>
            <Illustration className="hidden sm:block w-56 sm:w-64 md:w-72 mt-6 md:mt-8 drop-shadow-2xl animate-fade-in" />
            </section>

            {/* Panel derecho */}
            <main className="flex-1 flex items-center justify-center bg-background-light dark:bg-background-dark px-4 py-6 md:px-12 md:py-24">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm md:max-w-md bg-surface-light dark:bg-surface-dark bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-card-light dark:shadow-card-dark p-6 md:p-10 border border-gray-200 dark:border-gray-700"
            >
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-6">
                Iniciar sesión
                </h3>
                {children}
            </MotionDiv>
            </main>
        </div>

        {/* Footer en flujo */}
        <footer className="w-full bg-background-light/20 dark:bg-background-dark/90">
            <Footer />
        </footer>
        </div>
    )
}
