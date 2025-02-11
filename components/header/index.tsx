import dynamic from 'next/dynamic'

const ClientHeader = dynamic(() => import('./client-header'), {
  loading: () => (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/90 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-8">
            <div className="relative h-12 w-[180px]" />
            <div className="flex-1" />
            <div className="w-[200px]" />
          </div>
        </div>
      </div>
    </header>
  )
})

export default function Header() {
  return <ClientHeader />
}