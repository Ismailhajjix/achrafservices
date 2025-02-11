"use client"

import { Button } from "@/components/ui/forms/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationButtonsProps {
  currentStep: number
  totalSteps: number
  isSubmitting: boolean
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
}

export function NavigationButtons({
  currentStep,
  totalSteps,
  isSubmitting,
  onPrevious,
  onNext,
  onSubmit
}: NavigationButtonsProps) {
  const baseButtonClasses = "flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-300"
  const primaryButtonClasses = cn(
    baseButtonClasses,
    "bg-gradient-to-r from-gold to-amber-500 text-black",
    "hover:shadow-[0_0_20px_rgba(255,184,0,0.3)]"
  )
  const secondaryButtonClasses = cn(
    baseButtonClasses,
    "bg-zinc-800 text-white",
    "disabled:opacity-50"
  )

  return (
    <div className="mt-8 flex justify-between">
      <div>
        <Button
          onClick={onPrevious}
          disabled={currentStep === 0}
          className={secondaryButtonClasses}
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
      </div>
      
      <div>
        {currentStep === totalSteps - 1 ? (
          <Button
            onClick={onSubmit}
            disabled={isSubmitting}
            className={primaryButtonClasses}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={onNext}
            className={primaryButtonClasses}
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
} 