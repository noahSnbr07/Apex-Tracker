export default function Icon({ className, icon, ...props }) {
    return (
        <span
            {...props}
            className={`material-symbols-rounded ${className ? className : ''}`}>
            {icon}
        </span>
    );
}
