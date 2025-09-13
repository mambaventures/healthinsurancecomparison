import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Info, Calculator, ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '../../components/SEO';

function HealthInsuranceTerminologyGuide() {
  return (
    <>
      <SEO
        title="Health Insurance Terminology Guide NZ 2025 | Insurance Definitions"
        description="Complete guide to health insurance terminology in New Zealand. Understand deductibles, premiums, coverage, exclusions, and all key insurance terms."
        keywords="health insurance terms NZ, insurance definitions, excess deductible, premium coverage, insurance glossary"
      />

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-16 w-16 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance Terminology Guide</h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Your complete guide to understanding health insurance terminology in New Zealand. From basic terms to complex concepts, we'll help you navigate insurance jargon.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search Tips */}
        <div className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Search className="h-6 w-6 text-blue-600 mr-2" />
            Quick Reference Tips
          </h2>
          <p className="text-gray-700 mb-4">
            Use Ctrl+F (or Cmd+F on Mac) to quickly find specific terms on this page. Terms are organized alphabetically within categories for easy navigation.
          </p>
        </div>

        {/* Essential Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Terms</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Annual Limit</h3>
              <p className="text-gray-700">
                The maximum amount your insurance will pay out in total claims during a policy year. Once reached, you're responsible for all additional costs until the next policy year begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Benefit</h3>
              <p className="text-gray-700">
                The amount your insurance company will pay towards a covered service or treatment. May be expressed as a dollar amount, percentage, or "up to" limit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Claim</h3>
              <p className="text-gray-700">
                A request for payment submitted to your insurance company for covered medical expenses you've incurred. Can be submitted by you or directly by your healthcare provider.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Coverage</h3>
              <p className="text-gray-700">
                The medical services, treatments, and conditions that are included in your insurance policy. What your insurance will pay for when you need medical care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Deductible / Excess</h3>
              <p className="text-gray-700">
                The amount you must pay out-of-pocket before your insurance starts covering costs. In New Zealand, this is commonly called "excess." Higher excess usually means lower premiums.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Exclusion</h3>
              <p className="text-gray-700">
                Medical conditions, treatments, or circumstances that are specifically not covered by your policy. Always listed in your policy document and may be temporary or permanent.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Policy & Coverage Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Co-payment</h3>
              <p className="text-gray-700 text-sm">
                A fixed amount you pay for specific services (like GP visits) regardless of the total cost. Common in some NZ policies for routine services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Direct Settlement</h3>
              <p className="text-gray-700 text-sm">
                When your insurer pays the hospital or specialist directly, and you only pay your excess. Also called "direct billing."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">In-Network Provider</h3>
              <p className="text-gray-700 text-sm">
                Healthcare providers (doctors, specialists, hospitals) that have agreements with your insurer, often resulting in better coverage or direct billing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Out-of-Network</h3>
              <p className="text-gray-700 text-sm">
                Providers not contracted with your insurer. May result in higher out-of-pocket costs or require you to pay upfront and claim reimbursement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Policy Schedule</h3>
              <p className="text-gray-700 text-sm">
                The document that outlines your specific coverage levels, benefit amounts, excess, and any special conditions for your policy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Premium</h3>
              <p className="text-gray-700 text-sm">
                The amount you pay (monthly, quarterly, or annually) to maintain your health insurance coverage, regardless of whether you use it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Pre-authorization</h3>
              <p className="text-gray-700 text-sm">
                Approval from your insurer required before certain treatments or procedures. Failure to get pre-authorization may result in reduced or no coverage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Pre-existing Condition</h3>
              <p className="text-gray-700 text-sm">
                A health condition you had before your insurance policy started. May be excluded from coverage or subject to waiting periods.
              </p>
            </div>
          </div>
        </div>

        {/* Waiting Periods & Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Waiting Periods & Conditions</h2>
          <div className="space-y-4">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">General Medical Waiting Period</h3>
              <p className="text-gray-700 text-sm">
                Usually 6 months from policy start date. Covers consultations, diagnostic tests, and non-surgical treatments after this period.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Surgical Waiting Period</h3>
              <p className="text-gray-700 text-sm">
                Typically 12 months for surgical procedures. Some insurers have shorter periods for specific surgeries or emergency situations.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Specific Condition Waiting Periods</h3>
              <p className="text-gray-700 text-sm">
                Extended waiting periods (often 12+ months) for conditions like pregnancy, cardiac procedures, or cancer treatment.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">No-Claim Bonus</h3>
              <p className="text-gray-700 text-sm">
                Discount on your premium renewal if you haven't made any claims during the policy year. Common feature in NZ health insurance.
              </p>
            </div>
          </div>
        </div>

        {/* Medical Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical & Treatment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Day Surgery</h3>
              <p className="text-gray-700 text-sm">
                Surgical procedures that don't require an overnight hospital stay. You're admitted and discharged on the same day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Diagnostic Procedures</h3>
              <p className="text-gray-700 text-sm">
                Tests used to identify medical conditions, such as X-rays, MRI scans, CT scans, ultrasounds, and blood tests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Emergency Treatment</h3>
              <p className="text-gray-700 text-sm">
                Immediate medical care for serious, life-threatening conditions. Usually covered regardless of waiting periods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Inpatient</h3>
              <p className="text-gray-700 text-sm">
                Hospital care that requires at least one overnight stay. Generally requires pre-authorization and subject to higher benefit limits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Outpatient</h3>
              <p className="text-gray-700 text-sm">
                Medical care received without being admitted to hospital. Includes specialist consultations, diagnostic tests, and day procedures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Specialist</h3>
              <p className="text-gray-700 text-sm">
                A doctor with advanced training in a specific area of medicine. Usually requires a GP referral and may have separate benefit limits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Therapeutic Services</h3>
              <p className="text-gray-700 text-sm">
                Treatment services like physiotherapy, psychology, dietician consultations. Often have separate annual limits and session caps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Prosthetics & Aids</h3>
              <p className="text-gray-700 text-sm">
                Medical devices like hearing aids, prosthetic limbs, mobility aids. Coverage varies significantly between policies.
              </p>
            </div>
          </div>
        </div>

        {/* NZ-Specific Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">New Zealand Specific Terms</h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">ACC (Accident Compensation Corporation)</h3>
              <p className="text-gray-700 mb-2">
                New Zealand's no-fault accident insurance scheme. Covers treatment for injuries from accidents but not illness or disease.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Important:</strong> Health insurance complements ACC by covering non-accident related medical care.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">District Health Board (DHB)</h3>
              <p className="text-gray-700 mb-2">
                Regional organizations that provide public health services in New Zealand. Being replaced by Health New Zealand in 2022-2024.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Private Hospital</h3>
              <p className="text-gray-700 mb-2">
                Privately owned hospitals that often provide faster access to elective surgery and specialist care. Most health insurance policies cover private hospital stays.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Public Hospital</h3>
              <p className="text-gray-700 mb-2">
                Government-funded hospitals providing free emergency and essential healthcare to all New Zealand residents and citizens.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Waiting List</h3>
              <p className="text-gray-700 mb-2">
                The queue for non-urgent procedures in the public health system. Can range from weeks to years depending on the procedure and urgency.
              </p>
            </div>
          </div>
        </div>

        {/* Financial Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial & Admin Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Actuarial Value</h3>
              <p className="text-gray-700 text-sm">
                The percentage of healthcare costs that insurance typically covers. A 70% actuarial value means insurance covers 70% of average costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Grace Period</h3>
              <p className="text-gray-700 text-sm">
                Time period after a missed payment during which coverage continues. Usually 30 days in New Zealand policies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Lapse</h3>
              <p className="text-gray-700 text-sm">
                When your policy is cancelled due to non-payment of premiums. May require medical underwriting to restart coverage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Loading</h3>
              <p className="text-gray-700 text-sm">
                Additional premium charged due to increased risk factors like age, health conditions, or lifestyle factors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Moratorium</h3>
              <p className="text-gray-700 text-sm">
                A type of underwriting where pre-existing conditions are excluded for a set period (usually 2-5 years) unless declared and accepted.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Renewal</h3>
              <p className="text-gray-700 text-sm">
                The process of continuing your policy for another term. Premiums and terms may change at renewal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Underwriting</h3>
              <p className="text-gray-700 text-sm">
                The process where insurers assess your health and risk factors to determine coverage terms and premium pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Waiver</h3>
              <p className="text-gray-700 text-sm">
                An agreement to exclude coverage for specific conditions or treatments, often used for pre-existing conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Common Abbreviations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Abbreviations</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">ACC</div>
                <div className="text-sm text-gray-600">Accident Compensation Corporation</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">DHB</div>
                <div className="text-sm text-gray-600">District Health Board</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">ED</div>
                <div className="text-sm text-gray-600">Emergency Department</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">GP</div>
                <div className="text-sm text-gray-600">General Practitioner</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">MRI</div>
                <div className="text-sm text-gray-600">Magnetic Resonance Imaging</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">CT</div>
                <div className="text-sm text-gray-600">Computed Tomography</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">PDS</div>
                <div className="text-sm text-gray-600">Product Disclosure Statement</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">PHI</div>
                <div className="text-sm text-gray-600">Private Health Insurance</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold text-gray-900">NIB</div>
                <div className="text-sm text-gray-600">nib Health Insurance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="mb-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
              Still Need Help?
            </h2>
            <p className="text-gray-700 mb-6">
              Don't see a term you're looking for? Health insurance can be complex, and we're here to help you understand your options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/quotes"
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Calculator className="h-6 w-6 text-blue-600 mb-2" />
                <div className="font-semibold text-gray-900">Get Quotes</div>
                <div className="text-sm text-gray-600">Compare plans with clear explanations</div>
              </Link>
              <Link
                to="/health-insurance-claims-process-nz"
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Info className="h-6 w-6 text-green-600 mb-2" />
                <div className="font-semibold text-gray-900">Claims Guide</div>
                <div className="text-sm text-gray-600">Learn the claims process step-by-step</div>
              </Link>
              <Link
                to="/health-insurance-excess-guide-nz"
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <BookOpen className="h-6 w-6 text-purple-600 mb-2" />
                <div className="font-semibold text-gray-900">Excess Guide</div>
                <div className="text-sm text-gray-600">Understand deductibles and costs</div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Plan?</h2>
          <p className="text-blue-100 mb-6">
            Now that you understand the terminology, let's help you find health insurance that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Health Insurance Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Compare All Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceTerminologyGuide;