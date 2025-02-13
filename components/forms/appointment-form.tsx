'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/forms/input'
import { Textarea } from '@/components/ui/forms/textarea'

interface AppointmentFormData {
  fullName: string
  email: string
  phone: string
  serviceType: string
  preferredDate: string
  message: string
}

export function AppointmentForm() {
  const form = useForm<AppointmentFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      serviceType: '',
      preferredDate: '',
      message: ''
    }
  })

  const onSubmit = async (data: AppointmentFormData) => {
    // Implementation will be added later
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Input {...form.register('fullName', { required: 'Name is required' })} id="fullName" />
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <Input {...form.register('email', { required: 'Email is required' })} id="email" type="email" />
        </div>
        
        <div>
          <label htmlFor="phone">Phone</label>
          <Input {...form.register('phone', { required: 'Phone is required' })} id="phone" type="tel" />
        </div>
        
        <div>
          <label htmlFor="serviceType">Service Type</label>
          <select {...form.register('serviceType', { required: 'Service type is required' })} id="serviceType">
            <option value="">Select a service</option>
            <option value="Business Services">Business Services</option>
            <option value="Immigration Services">Immigration Services</option>
            <option value="Legal Services">Legal Services</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="preferredDate">Preferred Date</label>
          <Input {...form.register('preferredDate')} id="preferredDate" type="date" />
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <Textarea {...form.register('message')} id="message" />
        </div>
        
        <button type="submit" className="rounded bg-gold px-4 py-2 text-black hover:bg-gold/90">
          {form.formState.isSubmitting ? 'Submitting...' : 'Schedule Appointment'}
        </button>
      </form>
    </Form>
  )
} 