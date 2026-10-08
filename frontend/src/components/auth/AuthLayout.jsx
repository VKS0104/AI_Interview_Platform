import { Link } from 'react-router-dom';
import studentMascot from '../../assets/student-mascot.png';

/**
 * Shared AuthLayout shell per AI_DESIGN_SPEC.md.
 * Desktop: Two-column layout with subtle product/mascot visual on left, centered form card on right.
 * Mobile: Single-column clean layout focusing strictly on the form.
 */
export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen atmospheric-bg flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans selection:bg-[#EEE7FF] selection:text-[#7C3AED]">
      <div className="w-full max-w-[1040px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Subtle Product & Mascot Visual (Hidden on mobile/tablet per spec) */}
        <div className="hidden lg:flex lg:col-span-7 flex-col justify-center pr-2">
          
          {/* Subtle Accent Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE7FF] text-[#7C3AED] text-[12px] font-medium w-fit mb-4">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z"
              />
            </svg>
            <span>AI-Powered Interview Practice</span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-[#111111] leading-[1.2] mb-3">
            Practice Smarter.{' '}
            <span className="text-[#7C3AED]">Get Hired.</span>
          </h2>

          {/* Supporting Statement */}
          <p className="text-[15px] text-[#666666] leading-relaxed max-w-[440px] mb-6">
            Realistic mock interviews, instant AI feedback, and personalized insights to help you land your dream job.
          </p>

          {/* Mascot Illustration Area */}
          <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E6E4E1] shadow-[0_4px_20px_rgba(17,17,17,0.04)] max-w-[480px]">
            <img
              src={studentMascot}
              alt="Student candidate preparing for tech interview"
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* Feature Indicators */}
          <div className="grid grid-cols-3 gap-3 max-w-[480px] mt-4">
            <div className="bg-white border border-[#E6E4E1] rounded-lg p-2.5 text-center">
              <span className="block text-[11px] font-medium text-[#8A8A8A]">Questions</span>
              <span className="block text-[13px] font-semibold text-[#111111]">Role-Specific</span>
            </div>
            <div className="bg-white border border-[#E6E4E1] rounded-lg p-2.5 text-center">
              <span className="block text-[11px] font-medium text-[#8A8A8A]">Evaluation</span>
              <span className="block text-[13px] font-semibold text-[#111111]">AI Feedback</span>
            </div>
            <div className="bg-white border border-[#E6E4E1] rounded-lg p-2.5 text-center">
              <span className="block text-[11px] font-medium text-[#8A8A8A]">Rounds</span>
              <span className="block text-[13px] font-semibold text-[#111111]">Tech & Behavioral</span>
            </div>
          </div>
        </div>

        {/* Right Column: Centered Form Card */}
        <div className="w-full lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[420px] bg-white rounded-2xl border border-[#E6E4E1] shadow-[0_4px_20px_rgba(17,17,17,0.04)] p-6 sm:p-8 md:p-9">
            {/* Embedded Header */}
            {title && (
              <div className="mb-8 text-center sm:text-left">
                <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-sm">
                    AI
                  </div>
                  <span className="text-base font-semibold tracking-tight text-[#111111]">
                    Interview Platform
                  </span>
                </Link>

                <h1 className="text-[28px] sm:text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#111111] mb-2">
                  {title}
                </h1>

                {subtitle && (
                  <p className="text-[14px] sm:text-[15px] text-[#666666] leading-normal font-normal">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
