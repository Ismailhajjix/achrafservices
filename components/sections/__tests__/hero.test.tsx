import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from '../hero'

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />)
    expect(screen.getByText('WELCOME TO AGENCE ACHRAF SERVICES')).toBeInTheDocument()
  })

  it('displays main heading correctly', () => {
    render(<Hero />)
    expect(screen.getByText('Your Dream to')).toBeInTheDocument()
    expect(screen.getByText('Europe,')).toBeInTheDocument()
    expect(screen.getByText('Simplified')).toBeInTheDocument()
  })

  it('displays subheading text', () => {
    render(<Hero />)
    expect(screen.getByText(/Expert support for immigration, studies, and family reunification/)).toBeInTheDocument()
  })

  it('has a working search functionality', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Search here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('displays statistics correctly', () => {
    render(<Hero />)
    expect(screen.getByText('10 Days')).toBeInTheDocument()
    expect(screen.getByText('Process Time')).toBeInTheDocument()
    expect(screen.getByText('10K+')).toBeInTheDocument()
    expect(screen.getByText('Visa Processed')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const image = screen.getByAltText('Agence Achraf Services')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })
}) 