import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Heart } from 'lucide-react';
import SEO from '../../components/SEO';

function MentalHealthInsurance() {
  return (
    <>
      <SEO
        title="Mental Health Insurance NZ 2025 | Psychology & Psychiatric Coverage"
        description="Complete guide to mental health coverage in New Zealand health insurance. Psychology, psychiatry, counseling, and treatment options covered."
        keywords="mental health insurance NZ, psychology coverage, psychiatric treatment, counseling insurance, therapy coverage"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-16 w-16 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Mental Health Insurance Coverage</h1>
          </div>
          <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
            Understanding mental health coverage in New Zealand health insurance. Support for psychology, psychiatry, and therapeutic services.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">1 in 5</h3>
            <p className="text-gray-600">Kiwis Experience Mental Health Issues</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">$180-300</h3>
            <p className="text-gray-600">Per Psychology Session</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">2-6 Weeks</h3>
            <p className="text-gray-600">Wait Time for Public Services</p>
          </div>
        </div>

        {/* Why Mental Health Coverage Matters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Mental Health Coverage is Essential</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Rising Mental Health Costs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private psychology sessions $180-300 each</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Psychiatric consultations $400-600 per session</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Inpatient mental health treatment $1,500+ per day</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ongoing therapy costs can exceed $10,000 annually</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Access and Wait Times
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Immediate access to private practitioners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of therapist and treatment approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Avoid public system waiting lists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Flexible appointment scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mental Health Services Covered */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mental Health Services Typically Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Psychological Services</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Clinical psychology consultations</li>
                <li>• Cognitive Behavioral Therapy (CBT)</li>
                <li>• Counseling and psychotherapy</li>
                <li>• Trauma and PTSD treatment</li>
                <li>• Family and couples therapy</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Psychiatric Care</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Psychiatric assessments</li>
                <li>• Medication management</li>
                <li>• Mental health diagnoses</li>
                <li>• Treatment planning</li>
                <li>• Follow-up consultations</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Inpatient Treatment</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Private mental health hospital stays</li>
                <li>• Intensive therapy programs</li>
                <li>• Crisis intervention services</li>
                <li>• Rehabilitation programs</li>
                <li>• Specialized eating disorder units</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Mental Health */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance for Mental Health Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing One</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Comprehensive Mental Health</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Psychology sessions covered</li>
                <li>✓ Psychiatric consultations included</li>
                <li>✓ Mental health hospitalizations</li>
                <li>✓ Crisis intervention coverage</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Mental Health Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Enhanced Mental Wellness</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $300k non-surgical benefits</li>
                <li>✓ Mental health practitioner network</li>
                <li>✓ Telehealth options available</li>
                <li>✓ Preventive mental health programs</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Mental Health Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Premier Care + Vitality</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Holistic Wellness Focus</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Mental health specialist access</li>
                <li>✓ Vitality wellness programs</li>
                <li>✓ Mindfulness and stress management</li>
                <li>✓ Employee assistance programs</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Mental Health Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Understanding Coverage Limits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Mental Health Coverage Limits</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Benefit Limits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Most plans have annual caps on mental health benefits</li>
                  <li>• Limits typically range from $2,000-$15,000 per year</li>
                  <li>• Some plans offer unlimited coverage for severe conditions</li>
                  <li>• Check both session limits and dollar amounts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Look For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Higher annual benefit limits for ongoing therapy</li>
                  <li>• Coverage for both psychology and psychiatry</li>
                  <li>• Inpatient mental health hospital coverage</li>
                  <li>• Pre-authorization requirements and processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mental Health Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage for Common Mental Health Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Anxiety Disorders</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Generalized anxiety disorder</li>
                <li>• Panic disorder</li>
                <li>• Social anxiety</li>
                <li>• Phobias</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mood Disorders</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Major depression</li>
                <li>• Bipolar disorder</li>
                <li>• Seasonal affective disorder</li>
                <li>• Adjustment disorders</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Conditions</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• PTSD and trauma disorders</li>
                <li>• Eating disorders</li>
                <li>• OCD</li>
                <li>• ADHD</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessing Mental Health Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Access Mental Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Through Your Health Insurance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Check your policy's mental health benefits</li>
                <li>2. Find a provider in your insurer's network</li>
                <li>3. Get a referral from your GP if required</li>
                <li>4. Book directly with the mental health practitioner</li>
                <li>5. Submit claims according to your policy terms</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Mental Health Professionals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Clinical Psychologists:</strong> Therapy and counseling</li>
                <li>• <strong>Psychiatrists:</strong> Medical treatment and medication</li>
                <li>• <strong>Counselors:</strong> Talk therapy and support</li>
                <li>• <strong>Psychotherapists:</strong> Specialized therapy approaches</li>
                <li>• <strong>Social Workers:</strong> Community support and resources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need a referral to see a psychologist?</h3>
              <p className="text-gray-700">
                This depends on your specific health insurance policy. Some plans require a GP referral, while others allow direct access to mental health practitioners. Check your policy documents or contact your insurer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are there waiting periods for mental health coverage?</h3>
              <p className="text-gray-700">
                Most health insurance plans have waiting periods for mental health services, typically 2-6 months. Some plans may waive waiting periods for crisis situations or if you're transferring from another policy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I have a pre-existing mental health condition?</h3>
              <p className="text-gray-700">
                Pre-existing mental health conditions are typically excluded from new policies for a period (often 12 months). However, you may still receive coverage for other mental health issues that develop after your policy starts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Prioritize Your Mental Health with Comprehensive Coverage</h2>
          <p className="text-green-100 mb-6">
            Find health insurance that supports your mental wellness journey with access to quality care when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-green-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Mental Health Coverage Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-green-700 font-semibold"
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

export default MentalHealthInsurance;