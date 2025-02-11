import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ContactForm } from '../contact-form'

describe('ContactForm Component', () => {
  it('renders without crashing', () => {
    render(<ContactForm />)
    expect(screen.getByText("Don't Hesitate to Contact")).toBeInTheDocument()
  })

  it('displays form inputs', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<ContactForm />)
    expect(screen.getByText('Our Office')).toBeInTheDocument()
    expect(screen.getByText('123 Visa Street, Cityville, Country 12345')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('Email: info@visaz.com')).toBeInTheDocument()
    expect(screen.getByText('Phone: +1 (234) 567-8900')).toBeInTheDocument()
  })

  it('displays working hours', () => {
    render(<ContactForm />)
    expect(screen.getByText('Working Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday: 9:00 AM - 5:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday - Sunday: Closed')).toBeInTheDocument()
  })

  it('has a working submit button', () => {
    render(<ContactForm />)
    const submitButton = screen.getByText('Send Message')
    expect(submitButton).toBeInTheDocument()
    expect(submitButton.closest('button')).toBeInTheDocument()
  })

  it('allows input in form fields', () => {
    render(<ContactForm />)
    
    const nameInput = screen.getByPlaceholderText('Your Name')
    const emailInput = screen.getByPlaceholderText('Your Email')
    const subjectInput = screen.getByPlaceholderText('Subject')
    const messageInput = screen.getByPlaceholderText('Your Message')
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } })
    fireEvent.change(messageInput, { target: { value: 'Test Message' } })
    
    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
    expect(subjectInput).toHaveValue('Test Subject')
    expect(messageInput).toHaveValue('Test Message')
  })

  it('displays form description', () => {
    render(<ContactForm />)
    expect(screen.getByText('Fill out the form and our team will get back to you within 24 hours.')).toBeInTheDocument()
  })

  it('has proper input types', () => {
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Your Email')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('has proper form structure', () => {
    render(<ContactForm />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
    expect(form.tagName).toBe('FORM')
  })
}) 