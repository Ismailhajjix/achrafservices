"use client"

import { Input } from "@/components/ui/forms/input"
import { Textarea } from "@/components/ui/forms/textarea"
import { cn } from "@/lib/utils"

interface FormField {
  name: string
  label: string
  type: string
  placeholder: string
  required: boolean
  options?: string[]
}

interface FormStepProps {
  title: string
  description: string
  fields: FormField[]
  formData: Record<string, string>
  onInputChange: (field: string, value: string) => void
}

export function FormStep({ title, description, fields, formData, onInputChange }: FormStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-semibold text-white">{title}</h2>
        <p className="mb-6 text-zinc-400">{description}</p>
      </div>

      <div className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              {field.label}
              {field.required && <span className="ml-1 text-gold">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <Textarea
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={(e) => onInputChange(field.name, e.target.value)}
                className={cn(
                  "w-full rounded-lg border-white/10 bg-black/50 text-white",
                  "focus:border-gold/50"
                )}
                rows={4}
              />
            ) : field.type === 'select' ? (
              <select
                value={formData[field.name] || ''}
                onChange={(e) => onInputChange(field.name, e.target.value)}
                className={cn(
                  "w-full rounded-lg border-white/10 bg-black/50 p-2 text-white",
                  "focus:border-gold/50"
                )}
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <Input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={(e) => onInputChange(field.name, e.target.value)}
                className={cn(
                  "w-full rounded-lg border-white/10 bg-black/50 text-white",
                  "focus:border-gold/50"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 