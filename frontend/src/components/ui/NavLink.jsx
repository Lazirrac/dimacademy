// frontend/src/components/ui/NavLink.jsx
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';

// Aquí sí se usa motion al crear MotionLink:
const MotionLink = motion.create(Link);

export default function NavLink({ to, children, className = '', ...props }) {
    return (
        <MotionLink
        to={to}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileTap={{ scale: 0.95 }}
        className={`
            block  /* para que el span interno pueda transformarse */
            ${className}
        `}
        {...props}
        >
        {/* Solo este span reacciona al hover y transición */}
        <span className="
            inline-block
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-110
        ">
            {children}
        </span>
        </MotionLink>
    );
}
