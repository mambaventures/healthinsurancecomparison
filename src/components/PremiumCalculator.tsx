import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

interface PremiumEstimate {
  provider: string;
  monthlyPremium: number;
  yearlyPremium: number;
  coverage: string[];
}

export default function PremiumCalculator() {
  const [age, setAge] = useState('');
  const [smoker, setSmoker] = useState('no');
  const [location, setLocation] = useState('');
  const [coverageType, setCoverageType] = useState('basic');
  const [estimates, setEstimates] = useState<PremiumEstimate[]>([]);

  const calculatePremiums = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally call an API - using mock data for demonstration
    const mockEstimates: PremiumEstimate[] = [
      {
        provider: "Southern Cross",
        monthlyPremium: Number(age) < 30 ? 45.99 : 65.99,
        yearlyPremium: Number(age) < 30 ? 551.88 : 791.88,
        coverage: ["Hospital", "Surgical", "Specialist consultations"]
      },
      {
        provider: "nib",
        monthlyPremium: Number(age) < 30 ? 39.99 : 59.99,
        yearlyPremium: Number(age) < 30 ? 479.88 : 719.88,
        coverage: ["Hospital", "GP visits", "Prescriptions"]
      },
      {
        provider: "AIA",
        monthlyPremium: Number(age) < 30 ? 52.99 : 72.99,
        yearlyPremium: Number(age) < 30 ? 635.88 : 875.88,
        coverage: ["Hospital", "Specialists", "Mental health"]
      }
    ];

    setEstimates(mockEstimates);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Premium Calculator</h2>
      </div>

      <form onSubmit={calculatePremiums} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select location</option>
              <option value="auckland">Auckland</option>
              <option value="wellington">Wellington</option>
              <option value="christchurch">Christchurch</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Smoker</label>
            <div className="mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="no"
                  checked={smoker === 'no'}
                  onChange={(e) => setSmoker(e.target.value)}
                  className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yes"
                  checked={smoker === 'yes'}
                  onChange={(e) => setSmoker(e.target.value)}
                  className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="coverageType" className="block text-sm font-medium text-gray-700">Coverage Type</label>
            <select
              id="coverageType"
              value={coverageType}
              onChange={(e) => setCoverageType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="basic">Basic Coverage</option>
              <option value="standard">Standard Coverage</option>
              <option value="comprehensive">Comprehensive Coverage</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculate Premium
        </button>
      </form>

      {estimates.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Estimated Premiums</h3>
          <div className="space-y-4">
            {estimates.map((estimate, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{estimate.provider}</h4>
                    <p className="text-sm text-gray-600">
                      Monthly: ${estimate.monthlyPremium.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Yearly: ${estimate.yearlyPremium.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">Includes:</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {estimate.coverage.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <div className="flex items-start">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
          <p className="text-sm text-blue-900">
            These are estimated premiums based on the information provided. Actual premiums may vary based on additional factors and specific policy terms.
          </p>
        </div>
      </div>
    </div>
  );
}