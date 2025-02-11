"use client"

import { Check } from "lucide-react"
import { ApplicationStep } from "@/lib/application-constants"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  steps: ApplicationStep[]
  currentStep: number
}

export function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep
          
          return (
            <div
              key={index}
              className={cn(
                "flex items-center",
                isActive && "text-gold",
                isCompleted && "text-green-500",
                !isActive && !isCompleted && "text-zinc-500"
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2",
                  isActive && "border-gold",
                  isCompleted && "border-green-500",
                  !isActive && !isCompleted && "border-zinc-500"
                )}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="ml-2 hidden sm:block">{step.title}</span>
            </div>
          )
        })}
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-amber-500 transition-all duration-500"
        />
      </div>
    </div>
  )
} 