import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';
import { Heart, DollarSign, Users, CheckCircle, Search, ArrowRight, Calendar, Clock, Star, ArrowUpRight } from 'lucide-react';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Compare from './pages/Compare';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import HowItWorks from './pages/HowItWorks';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import SouthernCrossReview from './pages/reviews/SouthernCrossReview';
import NibReview from './pages/reviews/NibReview';
import AIAReview from './pages/reviews/AIAReview';
import PartnersLifeReview from './pages/reviews/PartnersLifeReview';
import AccuroReview from './pages/reviews/AccuroReview';
import UnimedReview from './pages/reviews/UnimedReview';
import UnderstandingHealthInsurance from './pages/blog/UnderstandingHealthInsurance';
import ComparingProviders from './pages/blog/ComparingProviders';
import SaveOnPremiums from './pages/blog/SaveOnPremiums';
import MentalHealthCoverage from './pages/blog/MentalHealthCoverage';
import HealthInsuranceForeigners from './pages/blog/HealthInsuranceForeigners';
import StudentHealthInsurance from './pages/blog/StudentHealthInsurance';
import HealthInsuranceCompaniesComparison from './pages/blog/HealthInsuranceCompaniesComparison';
import HospitalCoverInsurance from './pages/blog/HospitalCoverInsurance';
import SouthernCrossVsNib from './pages/comparisons/SouthernCrossVsNib';
import BestProviders from './pages/comparisons/BestProviders';
import StudentsHealthInsurance from './pages/audiences/StudentsHealthInsurance';
import ForeignersHealthInsurance from './pages/audiences/ForeignersHealthInsurance';
import Redirect from './components/Redirect';
import Quotes from './pages/Quotes';
import QuotesThankYou from './pages/QuotesThankYou';
import NotFound from './pages/NotFound';
import PrivateHealthInsurance from './pages/PrivateHealthInsurance';
import MedicalInsuranceGuide from './pages/guides/MedicalInsuranceGuide';
import BestHealthInsuranceGuide from './pages/guides/BestHealthInsuranceGuide';
import HospitalCoverGuide from './pages/guides/HospitalCoverGuide';
import SpecialistCoverageGuide from './pages/guides/SpecialistCoverageGuide';
import SeniorsGuide from './pages/SeniorsGuide';
import YoungProfessionalsGuide from './pages/YoungProfessionalsGuide';
import Adv1 from './pages/Adv1';
import ReviewsDirectory from './pages/ReviewsDirectory';
import GuidesDirectory from './pages/GuidesDirectory';
import Partners from './pages/Partners';
import CheapestHealthInsurance from './pages/CheapestHealthInsurance';
import WhatIsHealthInsurance from './pages/what-is-health-insurance';
import HealthInsuranceFAQ from './pages/health-insurance-faq';

// Profession-specific pages
import TeachersHealthInsurance from './pages/professions/TeachersHealthInsurance';
import NursesHealthInsurance from './pages/professions/NursesHealthInsurance';
import ContractorsHealthInsurance from './pages/professions/ContractorsHealthInsurance';
import FarmersHealthInsurance from './pages/professions/FarmersHealthInsurance';
import SelfEmployedHealthInsurance from './pages/professions/SelfEmployedHealthInsurance';
import TradiesHealthInsurance from './pages/professions/TradiesHealthInsurance';

// Money/cost-focused pages
import HealthInsuranceCostCalculator from './pages/tools/HealthInsuranceCostCalculator';
import HealthInsuranceTaxDeductions from './pages/HealthInsuranceTaxDeductions';
import CheapestFamilyHealthInsurance from './pages/CheapestFamilyHealthInsurance';

// Medical condition-specific pages
import CancerHealthInsurance from './pages/conditions/CancerHealthInsurance';
import DiabetesHealthInsurance from './pages/conditions/DiabetesHealthInsurance';
import MentalHealthInsurance from './pages/conditions/MentalHealthInsurance';
import PregnancyHealthInsurance from './pages/conditions/PregnancyHealthInsurance';
import HeartConditionsInsurance from './pages/conditions/HeartConditionsInsurance';
import PreExistingConditionsInsurance from './pages/conditions/PreExistingConditionsInsurance';

// Educational authority pages
import HealthInsuranceVsACC from './pages/education/HealthInsuranceVsACC';
import PrivateVsPublicHealthcare from './pages/education/PrivateVsPublicHealthcare';
import HealthInsuranceWaitingPeriods from './pages/education/HealthInsuranceWaitingPeriods';
import HealthInsuranceExcessGuide from './pages/education/HealthInsuranceExcessGuide';
import HealthInsuranceClaimsProcess from './pages/education/HealthInsuranceClaimsProcess';
import HealthInsuranceTerminologyGuide from './pages/education/HealthInsuranceTerminologyGuide';

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === '/quotes' || location.pathname === '/quotes/thank-you';
  const isQuotesPage = location.pathname === '/quotes';
  const isQuotesThankYouPage = location.pathname === '/quotes/thank-you';
  const isAdv1Page = location.pathname === '/adv-1';

  // Track page views when route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Health Insurance Comparison" className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="ml-2 text-base sm:text-xl font-bold text-gray-900">Health Insurance Comparison 🇳🇿</span>
            </Link>
            {!isQuotesPage && !isQuotesThankYouPage && !isAdv1Page && (
              <div className="flex space-x-2 sm:space-x-4">
                <Link to="/reviews" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base hidden sm:block">Providers</Link>
                <Link to="/compare" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Compare</Link>
                <Link to="/quotes" className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                  Get Quotes
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/understanding-health-insurance" element={<UnderstandingHealthInsurance />} />
        <Route path="/blog/comparing-providers" element={<ComparingProviders />} />
        <Route path="/blog/save-on-premiums" element={<SaveOnPremiums />} />
        <Route path="/blog/mental-health-coverage" element={<MentalHealthCoverage />} />
        <Route path="/blog/health-insurance-foreigners-new-zealand" element={<HealthInsuranceForeigners />} />
        <Route path="/blog/student-health-insurance-nz" element={<StudentHealthInsurance />} />
        <Route path="/blog/health-insurance-companies-comparison" element={<HealthInsuranceCompaniesComparison />} />
        <Route path="/blog/hospital-cover-insurance-nz" element={<HospitalCoverInsurance />} />
        <Route path="/compare/southern-cross-vs-nib" element={<SouthernCrossVsNib />} />
        <Route path="/best-health-insurance-companies-nz" element={<BestProviders />} />
        <Route path="/students-health-insurance" element={<StudentsHealthInsurance />} />
        <Route path="/foreigners-health-insurance" element={<ForeignersHealthInsurance />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/reviews/southern-cross" element={<SouthernCrossReview />} />
        <Route path="/reviews/nib" element={<NibReview />} />
        <Route path="/reviews/aia" element={<AIAReview />} />
        <Route path="/reviews/partners-life" element={<PartnersLifeReview />} />
        <Route path="/reviews/accuro" element={<AccuroReview />} />
        <Route path="/reviews/unimed" element={<UnimedReview />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/thank-you" element={<QuotesThankYou />} />
        <Route path="/private-health-insurance" element={<PrivateHealthInsurance />} />
        <Route path="/cheapest-health-insurance-nz" element={<CheapestHealthInsurance />} />
        <Route path="/guides/medical-insurance" element={<MedicalInsuranceGuide />} />
        <Route path="/guides/best-health-insurance" element={<BestHealthInsuranceGuide />} />
        <Route path="/guides/hospital-cover" element={<HospitalCoverGuide />} />
        <Route path="/guides/specialist-coverage" element={<SpecialistCoverageGuide />} />
        <Route path="/guides/seniors" element={<SeniorsGuide />} />
        <Route path="/guides/young-professionals" element={<YoungProfessionalsGuide />} />
        <Route path="/adv-1" element={<Adv1 />} />
        
        {/* New FAQ and Information Pages */}
        <Route path="/what-is-health-insurance" element={<WhatIsHealthInsurance />} />
        <Route path="/health-insurance-faq" element={<HealthInsuranceFAQ />} />
        
        {/* Partners page */}
        <Route path="/partners" element={<Partners />} />
        
        {/* Client-side redirects for legacy URLs (backup to server-side redirects) */}
        <Route path="/contact-us" element={<Redirect to="/contact" />} />
        <Route path="/post/health-coverage-after-50-in-nz" element={<Redirect to="/guides/seniors" />} />
        <Route path="/post/young-professionals-health-insurance" element={<Redirect to="/guides/young-professionals" />} />
        <Route path="/post/comparison-guide-2024" element={<Redirect to="/compare" />} />
        <Route path="/uncategorized" element={<Redirect to="/blog" />} />
        <Route path="/author" element={<Redirect to="/about" />} />
        <Route path="/author/admin" element={<Redirect to="/about" />} />
        <Route path="/category/uncategorized" element={<Redirect to="/blog" />} />
        <Route path="/advertiser-disclosure" element={<Redirect to="/terms" />} />
        
        {/* Review page redirects (backup to server-side redirects) */}
        <Route path="/reviews/asb" element={<Redirect to="/reviews/southern-cross" />} />
        <Route path="/reviews/aa" element={<Redirect to="/reviews/aia" />} />
        <Route path="/reviews/tower" element={<Redirect to="/reviews/southern-cross" />} />
        <Route path="/reviews/state" element={<Redirect to="/reviews/southern-cross" />} />
        <Route path="/reviews/cove" element={<Redirect to="/reviews/southern-cross" />} />
        <Route path="/reviews/ami" element={<Redirect to="/reviews/southern-cross" />} />
        
        {/* Directory pages */}
        <Route path="/reviews" element={<ReviewsDirectory />} />
        <Route path="/guides" element={<GuidesDirectory />} />

        {/* Profession-specific pages */}
        <Route path="/health-insurance-teachers-nz" element={<TeachersHealthInsurance />} />
        <Route path="/health-insurance-nurses-nz" element={<NursesHealthInsurance />} />
        <Route path="/health-insurance-contractors-nz" element={<ContractorsHealthInsurance />} />
        <Route path="/health-insurance-farmers-nz" element={<FarmersHealthInsurance />} />
        <Route path="/health-insurance-self-employed-nz" element={<SelfEmployedHealthInsurance />} />
        <Route path="/health-insurance-tradies-nz" element={<TradiesHealthInsurance />} />

        {/* Money/cost-focused pages */}
        <Route path="/health-insurance-cost-calculator-nz" element={<HealthInsuranceCostCalculator />} />
        <Route path="/health-insurance-tax-deductions-nz" element={<HealthInsuranceTaxDeductions />} />
        <Route path="/cheapest-family-health-insurance-nz" element={<CheapestFamilyHealthInsurance />} />

        {/* Medical condition-specific pages */}
        <Route path="/health-insurance-cancer-cover-nz" element={<CancerHealthInsurance />} />
        <Route path="/health-insurance-diabetes-nz" element={<DiabetesHealthInsurance />} />
        <Route path="/health-insurance-mental-health-nz" element={<MentalHealthInsurance />} />
        <Route path="/health-insurance-pregnancy-nz" element={<PregnancyHealthInsurance />} />
        <Route path="/health-insurance-heart-conditions-nz" element={<HeartConditionsInsurance />} />
        <Route path="/health-insurance-pre-existing-conditions-nz" element={<PreExistingConditionsInsurance />} />

        {/* Educational authority pages */}
        <Route path="/health-insurance-vs-acc-nz" element={<HealthInsuranceVsACC />} />
        <Route path="/private-vs-public-healthcare-nz" element={<PrivateVsPublicHealthcare />} />
        <Route path="/health-insurance-waiting-periods-explained" element={<HealthInsuranceWaitingPeriods />} />
        <Route path="/health-insurance-excess-guide-nz" element={<HealthInsuranceExcessGuide />} />
        <Route path="/health-insurance-claims-process-nz" element={<HealthInsuranceClaimsProcess />} />
        <Route path="/health-insurance-terminology-guide" element={<HealthInsuranceTerminologyGuide />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      {!hideFooter && !isAdv1Page && (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-4">
                  <img src="/logo.png" alt="Health Insurance Comparison" className="h-8 w-8" />
                  <span className="ml-2 text-xl font-bold">Health Insurance Comparison</span>
                </div>
                <p className="text-gray-400 mb-4">Making health insurance simple and accessible for all New Zealanders.</p>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Company */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                      <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                      <li><Link to="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
                      <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                      <li><Link to="/health-insurance-faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                      <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link></li>
                      <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
                    </ul>
                  </div>

                  {/* Compare & Tools */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Tools & Guides</h4>
                    <ul className="space-y-2">
                      <li><Link to="/health-insurance-cost-calculator-nz" className="text-gray-400 hover:text-white">Cost Calculator</Link></li>
                      <li><Link to="/health-insurance-tax-deductions-nz" className="text-gray-400 hover:text-white">Tax Deductions</Link></li>
                      <li><Link to="/cheapest-family-health-insurance-nz" className="text-gray-400 hover:text-white">Cheapest Family Plans</Link></li>
                      <li><Link to="/compare" className="text-gray-400 hover:text-white">Compare Plans</Link></li>
                      <li><Link to="/guides" className="text-gray-400 hover:text-white">All Guides</Link></li>
                      <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                    </ul>
                  </div>

                  {/* By Profession */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">By Profession</h4>
                    <ul className="space-y-2">
                      <li><Link to="/health-insurance-teachers-nz" className="text-gray-400 hover:text-white">Teachers</Link></li>
                      <li><Link to="/health-insurance-nurses-nz" className="text-gray-400 hover:text-white">Nurses</Link></li>
                      <li><Link to="/health-insurance-tradies-nz" className="text-gray-400 hover:text-white">Tradies</Link></li>
                      <li><Link to="/health-insurance-self-employed-nz" className="text-gray-400 hover:text-white">Self-Employed</Link></li>
                      <li><Link to="/health-insurance-contractors-nz" className="text-gray-400 hover:text-white">Contractors</Link></li>
                      <li><Link to="/health-insurance-farmers-nz" className="text-gray-400 hover:text-white">Farmers</Link></li>
                    </ul>
                  </div>

                  {/* Top Providers */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Top Providers</h4>
                    <ul className="space-y-2">
                      <li><Link to="/reviews/southern-cross" className="text-gray-400 hover:text-white">Southern Cross</Link></li>
                      <li><Link to="/reviews/nib" className="text-gray-400 hover:text-white">nib</Link></li>
                      <li><Link to="/reviews/aia" className="text-gray-400 hover:text-white">AIA</Link></li>
                      <li><Link to="/reviews/partners-life" className="text-gray-400 hover:text-white">Partners Life</Link></li>
                      <li><Link to="/reviews/accuro" className="text-gray-400 hover:text-white">Accuro</Link></li>
                      <li><Link to="/quotes" className="text-gray-400 hover:text-white">Get Quotes</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 pt-8">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  By using our service, you understand that we may share your information with insurance providers when you request a quote or click through to their website. We may receive a commission for referrals. This helps us maintain our free comparison service.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
                  <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link>
                  <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
                </div>
                <p className="text-gray-400 text-sm">
                  © 2025 Health Insurance Comparison. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;