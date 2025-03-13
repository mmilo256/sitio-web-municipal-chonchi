const Tile = ({ icon, title, description, bgColor }) => {
    return (
        <article className={`${bgColor} text-white p-6 text-center rounded flex flex-col items-center justify-center gap-2`}>
            {icon}
            <p className="text-2xl uppercase font-semibold">{title}</p>
            <p className="text-lg">{description}</p>
        </article>
    )
}

export default Tile