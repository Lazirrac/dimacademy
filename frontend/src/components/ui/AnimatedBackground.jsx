export default function AnimatedBackground() {
    return (
        <div
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
        >
        <svg
            className="w-full h-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
            <radialGradient id="radialGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </radialGradient>
            </defs>
            <circle
            cx="400"
            cy="300"
            r="250"
            fill="url(#radialGrad)"
            >
            <animate
                attributeName="r"
                values="200;300;200"
                dur="12s"
                repeatCount="indefinite"
            />
            </circle>
        </svg>
        </div>
    );
}
