const EntrySmall = ({ data }) => {

    return (
        <article className='bg-white h-36 shadow rounded overflow-hidden flex'>
            <img className='object-cover w-40' src={data?.image} alt="" />
            <div className='flex flex-col p-4'>
                <span className='text-sm w-fit text-white font-bold bg-green-500 rounded-full py-0.5 px-2'>Noticias</span>
                <h3 className='uppercase text-lg/5 my-2 font-bold text-customDarkBlue line-clamp-2'>{data?.title}</h3>
                <p className='text-slate-600'>{data?.date}</p>
            </div>
        </article>
    )
}

export default EntrySmall