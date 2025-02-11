export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'service' | 'policy' | 'destination' | 'document';
  url: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Immigration Services
  {
    id: 'visa-application',
    title: 'Visa Application',
    description: 'Professional assistance with visa applications for Morocco',
    category: 'service',
    url: '/appointment/visa-application',
    keywords: ['visa', 'travel', 'immigration', 'application', 'permit']
  },
  {
    id: 'residence-permit',
    title: 'Residence Permit',
    description: 'Get help with obtaining your Moroccan residence permit',
    category: 'service',
    url: '/appointment/residence-permit',
    keywords: ['residence', 'permit', 'stay', 'immigration', 'legal']
  },
  {
    id: 'citizenship',
    title: 'Citizenship & Naturalization',
    description: 'Expert guidance through the Moroccan citizenship process',
    category: 'service',
    url: '/appointment/citizenship',
    keywords: ['citizenship', 'naturalization', 'passport', 'immigration']
  },
  {
    id: 'family-reunification',
    title: 'Family Reunification',
    description: 'Services for reuniting families in Morocco',
    category: 'service',
    url: '/appointment/family-reunification',
    keywords: ['family', 'reunion', 'immigration', 'visa', 'permit']
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Assistance with student visa applications for Morocco',
    category: 'service',
    url: '/appointment/student-visa',
    keywords: ['student', 'study', 'education', 'visa', 'university']
  },
  
  // Document Services
  {
    id: 'document-translation',
    title: 'Document Translation',
    description: 'Professional translation services for official documents',
    category: 'document',
    url: '/appointment/document-translation',
    keywords: ['translation', 'documents', 'official', 'legal', 'certified']
  },
  {
    id: 'document-legalization',
    title: 'Document Legalization',
    description: 'Official document legalization and authentication services',
    category: 'document',
    url: '/appointment/document-legalization',
    keywords: ['legalization', 'authentication', 'documents', 'official', 'legal']
  },
  {
    id: 'apostille-services',
    title: 'Apostille Services',
    description: 'Document authentication through apostille certification',
    category: 'document',
    url: '/appointment/apostille',
    keywords: ['apostille', 'certification', 'authentication', 'documents', 'international']
  },

  // Policies
  {
    id: 'visa-policy',
    title: 'Visa Application Policy',
    description: 'Important information about visa application procedures',
    category: 'policy',
    url: '/policies/visa-application',
    keywords: ['visa', 'policy', 'requirements', 'application', 'rules']
  },
  {
    id: 'residence-policy',
    title: 'Residence Permit Policy',
    description: 'Guidelines for residence permit applications',
    category: 'policy',
    url: '/policies/residence-permit',
    keywords: ['residence', 'permit', 'policy', 'rules', 'requirements']
  },
  {
    id: 'citizenship-policy',
    title: 'Citizenship Policy',
    description: 'Requirements and procedures for citizenship applications',
    category: 'policy',
    url: '/policies/citizenship',
    keywords: ['citizenship', 'naturalization', 'policy', 'requirements']
  },

  // Popular Destinations
  {
    id: 'casablanca',
    title: 'Casablanca Services',
    description: 'Immigration and document services in Casablanca',
    category: 'destination',
    url: '/application/casablanca',
    keywords: ['casablanca', 'city', 'services', 'location']
  },
  {
    id: 'rabat',
    title: 'Rabat Services',
    description: 'Immigration and document services in Rabat',
    category: 'destination',
    url: '/application/rabat',
    keywords: ['rabat', 'city', 'services', 'location', 'capital']
  },
  {
    id: 'tangier',
    title: 'Tangier Services',
    description: 'Immigration and document services in Tangier',
    category: 'destination',
    url: '/application/tangier',
    keywords: ['tangier', 'city', 'services', 'location']
  }
]; 