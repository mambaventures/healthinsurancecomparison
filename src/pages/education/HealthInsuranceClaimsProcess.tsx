import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Clock, Phone, ArrowRight, Calculator, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';

function HealthInsuranceClaimsProcess() {
  return (
    <>
      <SEO
        title="Health Insurance Claims Process NZ 2025 | Step-by-Step Guide"
        description="Complete guide to making health insurance claims in New Zealand. Step-by-step process, required documents, timelines, and tips for successful claims."
        keywords="health insurance claims NZ, insurance claim process, medical claims, insurance reimbursement"
      />

      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-16 w-16 text-indigo-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Claims Process Guide</h1>
          </div>
          <p className="text-xl text-indigo-100 text-center max-w-3xl mx-auto">
            Step-by-step guide to making health insurance claims in New Zealand. From preparation to reimbursement, we'll walk you through the entire process.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Step by Step Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Claims Process</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
              <div className="flex items-start">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Before Treatment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Check your policy coverage and waiting periods</li>
                    <li>• Verify the provider is approved by your insurer</li>
                    <li>• Get pre-authorization if required (especially for surgery)</li>
                    <li>• Confirm your excess amount and benefit limits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">During Treatment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Present your insurance card/details to the provider</li>
                    <li>• Pay any excess amount required</li>
                    <li>• Keep all receipts and documentation</li>
                    <li>• Ask for itemized invoices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Claim</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete the claim form (online or paper)</li>
                    <li>• Attach all required documents</li>
                    <li>• Submit within the required timeframe (usually 12 months)</li>
                    <li>• Keep copies of everything for your records</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow Up</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Track your claim status online or by phone</li>
                    <li>• Respond promptly to any requests for additional information</li>
                    <li>• Receive payment (usually within 10-20 working days)</li>
                    <li>• Review payment details and contact insurer if you have questions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents You'll Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Documents</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Completed claim form</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Original receipts and invoices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Medical reports or referrals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Specialist consultation notes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Discharge summaries (for hospital stays)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pathology or radiology reports</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Anaesthetist bills (for surgery)</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ambulance receipts</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Prescription receipts</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ACC decline letter (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Claim Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Claims</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Direct Settlement</h3>
              <p className="text-gray-700 text-sm mb-4">
                Hospital/specialist bills your insurer directly. You only pay the excess.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <strong>Pros:</strong> Convenient, less paperwork<br/>
                <strong>Cons:</strong> Must use approved providers
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reimbursement</h3>
              <p className="text-gray-700 text-sm mb-4">
                You pay upfront and claim reimbursement from your insurer.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <strong>Pros:</strong> More provider choice, faster treatment<br/>
                <strong>Cons:</strong> Need to pay upfront, more paperwork
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Partial Payment</h3>
              <p className="text-gray-700 text-sm mb-4">
                Insurer pays their portion directly, you pay the remainder.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <strong>Pros:</strong> Hybrid approach, reduced upfront cost<br/>
                <strong>Cons:</strong> Requires coordination
              </div>
            </div>
          </div>
        </div>

        {/* Processing Times */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Processing Times</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Claims</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Simple claims (GP visits, specialists):</span>
                    <span className="font-semibold text-green-600">5-10 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hospital claims:</span>
                    <span className="font-semibold text-blue-600">10-15 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Complex/surgical claims:</span>
                    <span className="font-semibold text-orange-600">15-30 days</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Factors Affecting Speed</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Completeness of documentation</li>
                  <li>• Need for medical review</li>
                  <li>• Pre-authorization requirements</li>
                  <li>• Peak claim periods (end of year)</li>
                  <li>• Unusual or complex cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Claim Issues & Solutions</h2>
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Claim Rejected - Missing Information
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Problem:</strong> Incomplete forms or missing documents result in claim rejection.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Double-check all requirements before submitting. Keep a checklist of required documents.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                Claim Delayed - Waiting Period
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Problem:</strong> Treatment occurs during a waiting period for your policy.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Check waiting periods before booking treatment. Consider deferring non-urgent procedures.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 text-yellow-600 mr-2" />
                Claim Disputed - Coverage Question
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Problem:</strong> Insurer questions whether treatment is covered under your policy.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Get pre-authorization for expensive procedures. Review your policy schedule carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Successful Claims</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Treatment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Always call your insurer to check coverage first</li>
                <li>• Get written pre-authorization for major procedures</li>
                <li>• Verify provider details and approval status</li>
                <li>• Understand your excess and benefit limits</li>
                <li>• Check if referrals are required</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">When Claiming</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Submit claims promptly (within 12 months)</li>
                <li>• Keep copies of all documents</li>
                <li>• Provide complete, accurate information</li>
                <li>• Follow up if you don't hear back within expected timeframes</li>
                <li>• Keep detailed records of all communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-indigo-100 mb-6">
            Understanding the claims process is important, but having the right coverage is essential. Compare health insurance plans today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Health Insurance Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-indigo-700 font-semibold"
            >
              Compare Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceClaimsProcess;