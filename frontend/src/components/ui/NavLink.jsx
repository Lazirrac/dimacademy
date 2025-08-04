// frontend/src/components/ui/NavLink.jsx
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';

// Aquí sí se usa motion al crear MotionLink:
const MotionLink = motion.create(Link);

export default function NavLink({ to, children, className = '', ...props }) {
    return (
        <MotionLink
        to={to}
        className={`
            text-text-light dark:text-text-dark
            font-semibold
            transition duration-300 ease-in-out
            hover:text-primary hover:-translate-y-1 hover:scale-105
            animate-slide-in
            ${className}
        `}
        whileTap={{ scale: 0.95 }}
        {...props}
        >
        {children}
        </MotionLink>
    );
}
