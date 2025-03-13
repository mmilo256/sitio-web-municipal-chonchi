const Button = ({ text = "Botón" }) => {
    return (
        <button className="h-10 px-6 rounded-full bg-customOrange text-white">{text}</button>
    )
}

export default Button