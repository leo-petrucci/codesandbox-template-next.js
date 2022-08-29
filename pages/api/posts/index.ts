import type { NextApiRequest, NextApiResponse } from 'next'

type PostData = {
    slug: string
    content: string
    data: {
        title: string
        categories: string[]
        author: string
        date: string
        thumbnail: string
        description: string
    }
    isEmpty: false
    excerpt: string
}

/**
 * This will format correctly
 */
const post = async (req: NextApiRequest, res: NextApiResponse<PostData>) => {
    const { slug } = req.query as { slug: string }
    const data = (
        (await fetch(`http://localhost:8000/cache/posts.json`).then((res) =>
            res.json()
        )) as PostData[]
    ).find((p) => p.slug === slug)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({} as PostData)
    }
}

export default post
