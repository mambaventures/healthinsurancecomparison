import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, TrendingUp, Shield, Users, Calendar, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

function HealthInsuranceCostCalculator() {
  const [age, setAge] = useState('25');
  const [gender, setGender] = useState('male');
  const [smoker, setSmoker] = useState('no');
  const [coverage, setCoverage] = useState('basic');
  const [excess, setExcess] = useState('500');
  const [dependents, setDependents] = useState('0');
  const [showResults, setShowResults] = useState(false);

  const calculateCost = () => {
    let baseCost = 40; // Base monthly cost

    // Age factors
    const ageNum = parseInt(age);
    if (ageNum > 30) baseCost += (ageNum - 30) * 1.5;
    if (ageNum > 50) baseCost += (ageNum - 50) * 2;
    if (ageNum > 65) baseCost += (ageNum - 65) * 3;

    // Gender factor (slight difference)
    if (gender === 'female') baseCost += 5;

    // Smoking factor
    if (smoker === 'yes') baseCost *= 1.3;

    // Coverage level
    switch (coverage) {
      case 'basic': break;
      case 'comprehensive': baseCost *= 1.8; break;
      case 'premium': baseCost *= 2.5; break;
    }

    // Excess reduction
    const excessNum = parseInt(excess);
    if (excessNum === 0) baseCost *= 1.2;
    else if (excessNum === 250) baseCost *= 1.1;
    else if (excessNum === 1000) baseCost *= 0.9;

    // Dependents
    const dependentsNum = parseInt(dependents);
    if (dependentsNum > 0) {
      baseCost += dependentsNum * (baseCost * 0.6); // 60% of base for each dependent
    }

    return Math.round(baseCost);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const monthlyCost = showResults ? calculateCost() : 0;
  const annualCost = monthlyCost * 12;

  return (
    <>
      <SEO
        title="Health Insurance Cost Calculator NZ 2025 | Compare Premium Costs"
        description="Calculate your health insurance costs in New Zealand. Free premium calculator with age, coverage, and provider comparisons. Get instant cost estimates."
        keywords="health insurance cost calculator NZ, premium calculator, health insurance price comparison, cost estimator"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="h-16 w-16 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance Cost Calculator</h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Calculate your estimated health insurance costs in New Zealand. Get personalized premium estimates instantly.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Premium</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="18">18-25</option>
                  <option value="25">25-30</option>
                  <option value="30">30-35</option>
                  <option value="35">35-40</option>
                  <option value="40">40-45</option>
                  <option value="45">45-50</option>
                  <option value="50">50-55</option>
                  <option value="55">55-60</option>
                  <option value="60">60-65</option>
                  <option value="65">65+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Smoking Status</label>
                <select
                  value={smoker}
                  onChange={(e) => setSmoker(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="no">Non-smoker</option>
                  <option value="yes">Smoker</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Level</label>
                <select
                  value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="basic">Basic (Wellbeing Starter equivalent)</option>
                  <option value="comprehensive">Comprehensive (Wellbeing One equivalent)</option>
                  <option value="premium">Premium (Ultimate Health equivalent)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Excess</label>
                <select
                  value={excess}
                  onChange={(e) => setExcess(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0">$0 (Higher premiums)</option>
                  <option value="250">$250</option>
                  <option value="500">$500 (Recommended)</option>
                  <option value="1000">$1,000 (Lower premiums)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Dependents</label>
                <select
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0">Just me</option>
                  <option value="1">1 dependent</option>
                  <option value="2">2 dependents</option>
                  <option value="3">3 dependents</option>
                  <option value="4">4+ dependents</option>
                </select>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Calculate My Premium
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {showResults && (
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Your Estimated Costs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Monthly Premium:</span>
                    <span className="text-2xl font-bold">${monthlyCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Annual Premium:</span>
                    <span className="text-2xl font-bold">${annualCost}</span>
                  </div>
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm">
                      💡 This is an estimate only. Actual premiums may vary based on your specific circumstances,
                      health history, and chosen provider.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cost Factors */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors Affecting Your Premium</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-700">Age (premiums increase with age)</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">Smoking status (30%+ increase for smokers)</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">Coverage level (basic vs comprehensive)</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Annual excess (higher excess = lower premiums)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Number of dependents</span>
                </div>
              </div>
            </div>

            {/* Ways to Save */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ways to Save on Premiums</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Choose a higher annual excess to reduce monthly premiums</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Pay annually instead of monthly for discounts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Maintain a healthy lifestyle (some insurers offer wellness discounts)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Compare multiple providers for the best rates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Comparison */}
        {showResults && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compare Your Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Southern Cross</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">${Math.round(monthlyCost * 0.95)}/month</p>
                <p className="text-sm text-gray-600 mb-4">NZ's largest health insurer with extensive provider network</p>
                <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">nib</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">${Math.round(monthlyCost * 1.05)}/month</p>
                <p className="text-sm text-gray-600 mb-4">Digital-first approach with comprehensive coverage options</p>
                <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">AIA</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">${Math.round(monthlyCost * 1.1)}/month</p>
                <p className="text-sm text-gray-600 mb-4">Includes Vitality wellness program with rewards</p>
                <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Accurate Quotes?</h2>
          <p className="text-blue-100 mb-6">
            Get personalized quotes from New Zealand's top health insurance providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
            >
              Get Personalized Quotes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceCostCalculator;