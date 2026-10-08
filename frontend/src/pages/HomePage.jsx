import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import studentMascot from '../assets/student-mascot.png';

/**
 * HomePage landing page for AI Interview Platform.
 * Focused strictly on real product capabilities and planned workflow.
 * No placeholder sections, dead links, fake metrics, or artificial marketing claims.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen atmospheric-bg text-[#111111] font-sans selection:bg-[#EEE7FF] selection:text-[#7C3AED]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section (Full Viewport on Desktop) */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEE7FF] text-[#7C3AED] text-[13px] font-medium w-fit mx-auto lg:mx-0 mb-6">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
                </svg>
                <span>AI-Powered Interview Practice</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#111111] mb-6">
                Practice Smarter.{' '}
                <span className="text-[#7C3AED] block sm:inline">Get Hired Faster.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-[#666666] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
                An AI-powered interview practice platform designed to help candidates prepare for technical and behavioral interviews with dynamic questions, simulated practice, and constructive feedback.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto h-12 px-7 bg-[#111111] hover:bg-[#2A2A2A] text-white text-[15px] font-medium rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
                >
                  <span>Start Practicing Free</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto h-12 px-7 bg-white hover:bg-[#F6F5F3] text-[#111111] border border-[#E6E4E1] hover:border-[#D8D5D1] text-[15px] font-medium rounded-lg flex items-center justify-center transition-colors duration-150"
                >
                  Login
                </Link>
              </div>

            </div>

            {/* Hero Mascot Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#E6E4E1] shadow-[0_4px_20px_rgba(17,17,17,0.04)] overflow-hidden">
                <img
                  src={studentMascot}
                  alt="Student candidate preparing for an interview"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Section */}
      <section id="features" className="py-16 sm:py-20 border-t border-[#E6E4E1] bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[13px] font-semibold tracking-wider uppercase text-[#7C3AED] mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] mb-3">
              Focused features built for interview readiness
            </h2>
            <p className="text-[16px] text-[#666666] leading-relaxed">
              Essential capabilities planned to support candidate practice from preparation to evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Capability 1 */}
            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 shadow-[0_4px_20px_rgba(17,17,17,0.02)]">
              <div className="w-10 h-10 rounded-lg bg-[#EEE7FF] text-[#7C3AED] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] mb-2">AI-Generated Questions</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Adaptive interview questions generated based on target role, topic, and difficulty.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 shadow-[0_4px_20px_rgba(17,17,17,0.02)]">
              <div className="w-10 h-10 rounded-lg bg-[#EEE7FF] text-[#7C3AED] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] mb-2">Answer Evaluation</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                AI evaluation analyzing answer accuracy, clarity of thought, and structural completeness.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 shadow-[0_4px_20px_rgba(17,17,17,0.02)]">
              <div className="w-10 h-10 rounded-lg bg-[#EEE7FF] text-[#7C3AED] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] mb-2">Technical & Coding Practice</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Simulated coding rounds and problem-solving exercises tailored for software engineering.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 shadow-[0_4px_20px_rgba(17,17,17,0.02)]">
              <div className="w-10 h-10 rounded-lg bg-[#EEE7FF] text-[#7C3AED] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] mb-2">Performance Feedback</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Actionable feedback summaries highlighting strengths and areas needing improvement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-20 border-t border-[#E6E4E1] bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[13px] font-semibold tracking-wider uppercase text-[#7C3AED] mb-2 block">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] mb-3">
              How It Works
            </h2>
            <p className="text-[16px] text-[#666666] leading-relaxed">
              A straightforward practice loop designed for clear and measurable progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 sm:p-8">
              <span className="text-xs font-semibold text-[#7C3AED] tracking-wider uppercase mb-2 block">Step 1</span>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Create your interview</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Choose the domain, role, and format for the interview session you want to practice.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 sm:p-8">
              <span className="text-xs font-semibold text-[#7C3AED] tracking-wider uppercase mb-2 block">Step 2</span>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Practice with AI</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Answer AI-generated questions under realistic session timing and structured constraints.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E6E4E1] p-6 sm:p-8">
              <span className="text-xs font-semibold text-[#7C3AED] tracking-wider uppercase mb-2 block">Step 3</span>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Review your feedback</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Review automated feedback and actionable suggestions to refine your answers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-16 sm:py-20 border-t border-[#E6E4E1] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] mb-4">
            Ready to practice?
          </h2>
          <div className="pt-2">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#111111] hover:bg-[#2A2A2A] text-white text-[15px] font-medium rounded-lg shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
            >
              Start Practicing Free
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Minimal Footer */}
      <footer className="border-t border-[#E6E4E1] py-8 bg-[#FAFAF8] text-center text-[13px] text-[#8A8A8A]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#111111] text-white flex items-center justify-center text-[9px] font-bold">
              AI
            </div>
            <span className="font-semibold text-[#111111]">AI Interview Platform</span>
          </div>
          <p>© {new Date().getFullYear()} AI Interview Platform. Class Project.</p>
        </div>
      </footer>
    </div>
  );
}
