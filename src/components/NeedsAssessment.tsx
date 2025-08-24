import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface Result {
  title: string;
  description: string;
  recommendedPlans: string[];
}

const questions: Question[] = [
  {
    id: "age",
    text: "What is your age group?",
    options: ["18-30", "31-45", "46-60", "60+"]
  },
  {
    id: "health",
    text: "How would you describe your current health?",
    options: ["Excellent", "Good", "Fair", "Poor"]
  },
  {
    id: "lifestyle",
    text: "Which best describes your lifestyle?",
    options: ["Very Active", "Moderately Active", "Somewhat Active", "Sedentary"]
  },
  {
    id: "family",
    text: "Do you need coverage for family members?",
    options: ["Just me", "Me and partner", "Family with children", "Extended family"]
  },
  {
    id: "budget",
    text: "What's your monthly budget for health insurance?",
    options: ["Under $50", "$50-$100", "$100-$200", "Over $200"]
  }
];

export default function NeedsAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result based on answers
      calculateResult();
    }
  };

  const calculateResult = () => {
    // This would normally use more sophisticated logic
    const mockResult: Result = {
      title: "Comprehensive Coverage Recommended",
      description: "Based on your responses, we recommend a comprehensive health insurance plan that includes hospital cover, specialist care, and preventive services.",
      recommendedPlans: [
        "Southern Cross Wellbeing Two",
        "nib Premium Hospital Cover",
        "AIA Private Health Plus"
      ]
    };
    setResult(mockResult);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{result.title}</h2>
          <p className="text-gray-600">{result.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Recommended Plans:</h3>
          {result.recommendedPlans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">{plan}</h4>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-700">
                  View Details
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <a href="/quotes" className="text-white no-underline">Get Quote</a>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={resetQuiz}
          className="mt-8 w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Insurance Needs Assessment</h2>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {questions[currentQuestion].text}
        </h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 rounded-lg border border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          className="text-blue-600 hover:text-blue-700"
        >
          Back to previous question
        </button>
      )}
    </div>
  );
}