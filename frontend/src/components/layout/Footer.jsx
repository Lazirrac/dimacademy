//frontend\src\components\layout\Footer.jsx
export default function Footer() {
    return (
        <footer className="w-full bg-background-light/20 dark:bg-background-dark/90">
            <div className="
            max-w-screen-xl mx-auto
            px-4 py-6 md:px-8
            text-center text-sm font-sans
            text-muted dark:text-muted
            ">
            © {new Date().getFullYear()} DIM Academy. Todos los derechos reservados.
            </div>
        </footer>
    );
}

