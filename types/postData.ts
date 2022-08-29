
export type PostData = {
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