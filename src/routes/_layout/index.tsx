import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
    component: Home,
})

function Home() {
    return (
        <section className='flex flex-1 flex-col items-center justify-center text-primary'>
            Home
        </section>
    )
}
