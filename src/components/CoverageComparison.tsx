import React, { useState } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

interface CoveragePlan {
  provider: string;
  planName: string;
  hospital: boolean;
  specialist: boolean;
  gp: boolean;
  dental: boolean;
  optical: boolean;
  physio: boolean;
  mental: boolean;
  alternative: boolean;
  overseas: boolean;
  price: number;
}

const CoverageComparison: React.FC = () => {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);

  const plans: CoveragePlan[] = [
    {
      provider: "Southern Cross",
      planName: "Wellbeing Starter",
      hospital: true,
      specialist: true,
      gp: true,
      dental: false,
      optical: false,
      physio: true,
      mental: false,
      alternative: false,
      overseas: false,
      price: 45.99
    },
    {
      provider: "nib",
      planName: "Essential Health Plus",
      hospital: true,
      specialist: true,
      gp: true,
      dental: true,
      optical: true,
      physio: false,
      mental: false,
      alternative: false,
      overseas: false,
      price: 39.99
    },
    {
      provider: "AIA",
      planName: "Real Health",
      hospital: true,
      specialist: true,
      gp: true,
      dental: true,
      optical: true,
      physio: true,
      mental: true,
      alternative: true,
      overseas: true,
      price: 52.99
    }
  ];

  const togglePlan = (provider: string) => {
    setSelectedPlans(prev => 
      prev.includes(provider)
        ? prev.filter(p => p !== provider)
        : [...prev, provider]
    );
  };

  const filteredPlans = plans.filter(plan => 
    selectedPlans.length === 0 || selectedPlans.includes(plan.provider)
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Coverage Comparison</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select providers to compare:</h3>
        <div className="flex flex-wrap gap-3">
          {plans.map(plan => (
            <button
              key={plan.provider}
              onClick={() => togglePlan(plan.provider)}
              className={`px-4 py-2 rounded-lg border ${
                selectedPlans.includes(plan.provider)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
              }`}
            >
              {plan.provider}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Feature</th>
              {filteredPlans.map(plan => (
                <th key={plan.provider} className="text-center py-3 px-4">
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src={(() => {
                        const logoMap: { [key: string]: string } = {
                          'Southern Cross': '/logos/southern-cross.png',
                          'nib': '/logos/nib.png',
                          'AIA': '/logos/AIA.png',
                          'Partners Life': '/logos/PartnersLife_logo.png',
                          'Accuro': '/logos/accuro.png',
                          'UniMed': '/logos/unimed.png'
                        };
                        return logoMap[plan.provider] || '/logos/default.png';
                      })()}
                      alt={`${plan.provider} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="font-semibold">{plan.provider}</div>
                  <div className="text-sm text-gray-600">{plan.planName}</div>
                  <div className="text-lg font-bold text-blue-600 mt-1">
                    ${plan.price}/month
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Table rows for features */}
            {Object.entries({
              hospital: "Hospital Cover",
              specialist: "Specialist Consultations",
              gp: "GP Visits",
              dental: "Dental Care",
              optical: "Optical",
              physio: "Physiotherapy",
              mental: "Mental Health Support",
              alternative: "Alternative Therapies",
              overseas: "Overseas Treatment"
            }).map(([key, label]) => (
              <tr key={key} className="border-b">
                <td className="py-3 px-4">{label}</td>
                {filteredPlans.map(plan => (
                  <td key={plan.provider} className="text-center py-3 px-4">
                    {plan[key as keyof CoveragePlan] ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
          <p className="text-sm text-blue-900">
            This is a general comparison. Coverage limits, waiting periods, and specific terms may vary. Contact providers for detailed policy information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverageComparison;