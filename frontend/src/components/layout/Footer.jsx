// frontend/src/components/layout/Footer.jsx
export default function Footer() {
    return (
        <footer className="w-full text-center text-sm font-[Rubik] text-muted dark:text-gray-400 py-4 bg-white/20 dark:bg-surface/30 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-inner z-30">
        © {new Date().getFullYear()} DIM Academy. Todos los derechos reservados.
        </footer>
    );
}

