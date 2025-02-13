"use client"

interface ApplicationHeaderProps {
  country: string
}

export function ApplicationHeader({ country }: ApplicationHeaderProps) {
  const formattedCountry = decodeURIComponent(country)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <header className="mb-12 text-center">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        <span className="text-white">Application for</span>{" "}
        <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
          {formattedCountry}
        </span>
      </h1>
      <p className="text-lg text-zinc-400">
        Please complete the form below to begin your immigration journey
      </p>
    </header>
  )
} 