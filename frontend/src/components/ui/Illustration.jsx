//frontend\src\components\ui\Illustration.jsx
import illustration from "../../assets/illustration.png";

export default function Illustration({ className = "w-72 h-auto" }) {
    return (
        <img
        src={illustration}
        alt="Ilustración educativa"
        className={`${className} select-none pointer-events-none`}
        draggable={false}
        />
    );
}
