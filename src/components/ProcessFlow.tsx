import React from 'react';
import { ArrowRight, Search, FileCheck, UserCheck, CheckCircle } from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    {
      icon: Search,
      title: "Compare Plans",
      description: "Enter your details and compare health insurance plans side by side."
    },
    {
      icon: FileCheck,
      title: "Choose Coverage",
      description: "Select the plan that best fits your needs and budget."
    },
    {
      icon: UserCheck,
      title: "Apply Online",
      description: "Complete your application with our easy online process."
    },
    {
      icon: CheckCircle,
      title: "Get Covered",
      description: "Start enjoying your health insurance benefits."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
      
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}