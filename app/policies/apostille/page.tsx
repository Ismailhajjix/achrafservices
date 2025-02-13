export default function ApostillePage() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Apostille Services Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/80 mb-8">
              Our apostille services policy outlines the procedures and requirements for document authentication and legalization through the apostille process.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              What is an Apostille?
            </h2>
            <p className="text-white/80 mb-6">
              An apostille is a form of authentication issued to documents for use in countries that participate in the Hague Convention of 1961. It certifies the authenticity of the signature, seal, or stamp on a document.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Our Services Include
            </h2>
            <ul className="list-disc list-inside text-white/80 space-y-3 mb-8">
              <li>Document pre-screening and verification</li>
              <li>Apostille processing for eligible documents</li>
              <li>Authentication of official signatures</li>
              <li>Document legalization services</li>
              <li>Express processing options</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Processing Time
            </h2>
            <p className="text-white/80 mb-6">
              Standard processing typically takes 5-7 business days. Express service options are available for urgent requests, with processing times of 2-3 business days.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Required Documents
            </h2>
            <ul className="list-disc list-inside text-white/80 space-y-3 mb-8">
              <li>Original document or certified copy</li>
              <li>Government-issued identification</li>
              <li>Completed application form</li>
              <li>Payment of applicable fees</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Quality Assurance
            </h2>
            <p className="text-white/80 mb-6">
              All documents undergo thorough review and verification before submission for apostille. Our quality assurance process ensures compliance with international standards and requirements.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">
                Important Notice
              </h3>
              <p className="text-white/80">
                Document requirements and processing times may vary based on the type of document and destination country. Please contact our office for specific requirements related to your documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 