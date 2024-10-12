import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { VscBook, VscFileMedia, VscFolderLibrary, VscHome } from 'react-icons/vsc'

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

function Layout() {
  return (
    <main className="relative flex min-h-dvh flex-col">
      <nav className='sticky top-0 z-10 border-b border-accent bg-foreground/30 px-4 py-2 backdrop-blur-md'>
        <div className="flex items-center gap-3 ">
          <div className="flex flex-1 items-center gap-3">
            <Link to='/' className="font-bold text-secondary hover:text-action">
              <VscHome className="size-6" />
            </Link>
            <Link to='/' className="font-bold text-secondary hover:text-action">
              <VscFolderLibrary className="size-6" />
            </Link>
            <Link to='/' className="font-bold text-secondary hover:text-action">
              <VscBook className="size-6" />
            </Link>
            <Link to='/' className="font-bold text-secondary hover:text-action">
              <VscFileMedia className="size-6" />
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <Outlet />
    </main>
  )
}