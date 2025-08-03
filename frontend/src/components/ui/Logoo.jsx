import logo from "../../assets/logoDim.svg";

export default function Logo({ className = "w-32 h-auto" }) {
    return <img src={logo} alt="DIM Academy" className={className} />;
}
