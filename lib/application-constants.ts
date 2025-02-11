export interface FormField {
  name: string
  label: string
  type: string
  placeholder: string
  required: boolean
  options?: string[]
}

export interface ApplicationStep {
  title: string
  description: string
  fields: FormField[]
}

export const applicationSteps: ApplicationStep[] = [
  {
    title: "Personal Information",
    description: "Please provide your basic personal information",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email address",
        required: true
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        required: true
      },
      {
        name: "nationality",
        label: "Current Nationality",
        type: "text",
        placeholder: "Enter your nationality",
        required: true
      }
    ]
  },
  {
    title: "Immigration Details",
    description: "Tell us about your immigration preferences",
    fields: [
      {
        name: "visaType",
        label: "Preferred Visa Type",
        type: "select",
        placeholder: "Select visa type",
        required: true,
        options: ["Work Visa", "Student Visa", "Family Visa", "Business Visa", "Tourist Visa"]
      },
      {
        name: "plannedDate",
        label: "Planned Immigration Date",
        type: "date",
        placeholder: "Select planned date",
        required: true
      },
      {
        name: "budget",
        label: "Available Budget",
        type: "text",
        placeholder: "Enter your available budget",
        required: true
      }
    ]
  },
  {
    title: "Additional Information",
    description: "Help us better understand your situation",
    fields: [
      {
        name: "education",
        label: "Highest Education Level",
        type: "select",
        placeholder: "Select education level",
        required: true,
        options: ["High School", "Bachelor's Degree", "Master's Degree", "PhD", "Other"]
      },
      {
        name: "workExperience",
        label: "Years of Work Experience",
        type: "number",
        placeholder: "Enter years of experience",
        required: true
      },
      {
        name: "additionalInfo",
        label: "Additional Information",
        type: "textarea",
        placeholder: "Any additional information you'd like to share",
        required: false
      }
    ]
  }
] 