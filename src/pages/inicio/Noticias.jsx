import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import EntryBig from '../../components/EntryBig'
import Container from '../../layout/Container'
import EntrySmall from '../../components/EntrySmall'
import { fetchPosts } from '../../services/posts'
import dayjs from 'dayjs'
import Button from '../../components/Button'

const Noticias = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetchPosts()
            const formattedData = data.map(post => ({
                title: post.title.rendered,
                date: dayjs(post.date).format("DD [de] MMMM [de] YYYY"),
                image: post._embedded["wp:featuredmedia"][0].source_url
            }))
            setPosts(formattedData)
        })()
    }, [])

    console.log(posts)

    return (
        <main className='mb-10'>
            <Container>
                <Heading level={2} text="Últimas noticias" />
                <div className='grid grid-cols-2 gap-5 mb-4'>
                    <EntryBig data={posts[0]} />
                    <div className='grid grid-rows-3 gap-5'>
                        <EntrySmall data={posts[1]} />
                        <EntrySmall data={posts[2]} />
                        <EntrySmall data={posts[3]} />
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <Button text='Ver más noticias' />
                </div>
            </Container>
        </main>
    )
}

export default Noticias