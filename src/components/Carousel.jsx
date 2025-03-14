import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Button from "./Button";
import { fetchSlides } from "../services/heroSlides";

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slides, setSlides] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetchSlides()
            const formattedData = data.map(slide => ({
                title: slide.title.rendered,
                description: slide.content.rendered,
                image: slide._embedded["wp:featuredmedia"][0].source_url
            }))
            setSlides(formattedData)
            console.log(data)
        })()
    }, [])

    const lastSlide = slides.length - 1

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1)
        } else {
            setCurrentSlide(lastSlide)
        }
    }

    const nextSlide = () => {
        if (currentSlide < lastSlide) {
            setCurrentSlide(prev => prev + 1)
        } else {
            setCurrentSlide(0)
        }
    }

    return (
        <div className='h-[40rem] relative bg-customDarkBlue overflow-hidden'>
            <button onClick={prevSlide} className="absolute text-white z-50 top-50 left-2 xl:left-20 2xl:left-35 text-xl font-black bg-white/50 opacity-80 hover:opacity-100 cursor-pointer p-1 pt-0 rounded-full">{"<"}</button>
            {/* <p className="absolute text-white bg-black p-4 z-60 font-black">{slide}</p> */}
            <div className='relative flex h-full'>
                {slides.map((s, index) => (
                    <div key={index} className={`relative transition-transform duration-700 ease-in-out -translate-x-[${currentSlide * 100}%] h-full flex items-center justify-center min-w-full`}>
                        <img className="absolute h-full w-full object-cover opacity-40" src={s.image} alt="" />
                        <Container className="z-20 grid grid-cols-3">
                            <div className="col-span-2">
                                <h2 className='text-white font-black text-6xl mb-4'>{s.title}</h2>
                                <p className='text-white/90 mb-8 font-semibold text-xl'>{s.description}</p>
                                <Button text={s.buttonText} />
                            </div>
                        </Container>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="absolute text-white z-50 top-50 right-2 xl:right-20 2xl:right-35 text-xl font-black bg-white/50 opacity-80 hover:opacity-100 cursor-pointer p-1 pt-0 rounded-full">{">"}</button>
        </div >
    );
}

export default Carousel;
