import Header from "./Header";
import Footer from "./Footer";
import Illustration from "../ui/Illustration";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function LoginLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background dark:bg-[#0f172a] text-text dark:text-white font-[Saira] transition-colors duration-500 relative overflow-hidden">
        {/* 🌌 Fondo animado global */}
        <AnimatedBackground />

        {/* 🌟 Header fijo */}
        <div className="absolute top-0 left-0 w-full z-40">
            <Header />
        </div>

        {/* 🟩 Columna izquierda: Branding + Ilustración */}
        <div className="relative z-10 md:w-1/2 lg:w-2/5 bg-gradient-to-br from-primaryDark to-[#117F74] text-white flex flex-col justify-center items-center px-10 py-12 space-y-6 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center leading-tight">
            Bienvenido a <br /> DIM Academy
            </h2>
            <p className="text-center font-[Rubik] text-lg opacity-90">
            La plataforma que conecta la educación <br /> con la tecnología
            </p>
            <Illustration className="w-72 sm:w-80 md:w-96 mt-4 drop-shadow-lg" />
        </div>

        {/* 🟦 Columna derecha: Formulario */}
        <main className="relative z-10 md:w-1/2 lg:w-3/5 flex justify-center items-center px-6 py-12 bg-white dark:bg-surface shadow-inner">
            <div className="w-full max-w-md rounded-2xl shadow-xl bg-white dark:bg-[#0f172a] bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg p-8 transition-all border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>
            {children}
            </div>
        </main>

        {/* 🦶 Footer fijo */}
        <div className="absolute bottom-0 left-0 w-full z-40">
            <Footer />
        </div>
        </div>
    );
}
