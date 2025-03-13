const EntryBig = ({ data }) => {

    return (
        <article className='bg-white shadow rounded overflow-hidden'>
            <img className='w-full h-80 object-cover' src={data?.image} alt="" />
            <div className='flex flex-col p-4'>
                <span className='text-sm w-fit text-white font-bold bg-green-500 rounded-full py-0.5 px-2'>Noticias</span>
                <h3 className='uppercase text-2xl my-2 font-bold text-customDarkBlue'>{data?.title}</h3>
                <p className='text-slate-600'>{data?.date}</p>
            </div>
        </article>
    )
}

export default EntryBig