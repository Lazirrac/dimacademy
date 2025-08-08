// src/components/ui/LogoBrand.jsx
import { Link } from "react-router-dom";
import Logo from "./Logoo"; // Tu logo SVG o componente

/**
 * Props:
 * - size: string (tailwind size, ej: 'w-12', 'w-24') -- define tamaño base del logo y escala fuente.
 * - subtitle: string (opcional)
 * - to: string (ruta destino)
 * - className: string (clases adicionales)
 * - textSize: string (ej: 'text-lg', 'text-2xl') -- override de tamaño de texto principal
 * - subtitleSize: string (ej: 'text-xs', 'text-sm')
 */
export default function LogoBrand({
  to = "/",
  subtitle = "SISTEMAS",
  size = "w-14 md:w-20",        // Tamaño base logo SVG
  textSize = "text-2xl",       // Tamaño base texto
  subtitleSize = "text-xs",    // Tamaño base subtítulo
  className = "",
  children,                    // Por si quieres anidar algo más en el futuro
}) {
  return (
    <Link
      to={to}
      className={`flex items-center py-2 animate-slide-in justify-self-center ${className}`}
      aria-label="Ir a inicio"
      style={{ minWidth: 0, minHeight: 0 }}
    >
      <Logo className={`${size} flex-shrink-0 drop-shadow-md`} />
      <span
        className={`
          ml-2 font-heading font-bold tracking-wide
          text-primary-dark dark:text-primary
          leading-tight flex flex-col
          ${textSize}
        `}
        style={{ minWidth: 0 }}
      >
        DIM Academy
        {subtitle && (
          <span className={`${subtitleSize} font-light text-end text-primary-dark/70 dark:text-primary/80`}>
            {subtitle}
          </span>
        )}
      </span>
      {children}
    </Link>
  );
}
