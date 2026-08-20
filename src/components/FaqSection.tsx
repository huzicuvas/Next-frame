import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'What do I need to provide for a CGI or UGC ad?',
    answer: 'No physical product shipping is required! For CGI, we just need a link to your product, packaging design files (if available), or standard photos. For UGC, we need the product link, any specific talking points (bullet points or a script), and your target audience.',
  },
  {
    id: 'faq-2',
    question: 'How fast is the turnaround time?',
    answer: 'Our standard turnaround for UGC-style video ads is 24 to 48 hours from the time we receive the brief. For 3D CGI product ads involving complex fluid simulations or custom 3D modeling, turnaround is typically 48 to 72 hours.',
  },
  {
    id: 'faq-3',
    question: 'Do I own the commercial rights to the videos?',
    answer: 'Yes. Once delivered and approved, you receive full commercial rights to use the video ads across all digital platforms (Meta, TikTok, YouTube, your website, etc.) in perpetuity with no hidden licensing fees.',
  },
  {
    id: 'faq-4',
    question: 'Can you match our brand\'s visual style and tone?',
    answer: 'Absolutely. We review your website and past creative to ensure the 3D lighting, environments, and UGC avatar performances align perfectly with your brand guidelines and aesthetic.',
  },
  {
    id: 'faq-5',
    question: 'How do revisions work?',
    answer: 'Each package includes one round of standard revisions (such as tweaking text overlays, swapping a clip, or adjusting color grading). Complete structural changes or new script requests after generation may require an additional fee.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative border-t border-neutral-800/80">
      <div className="absolute inset-0 bg-neutral-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-5">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-blue-400" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-2xl mx-auto">
            Everything you need to know about our generative AI pipelines, delivery timelines, and commercial terms.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className={`border border-neutral-800 rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'bg-neutral-900/60' : 'bg-neutral-900/20 hover:bg-neutral-900/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-neutral-800' : 'bg-neutral-950'}`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-blue-400' : 'text-neutral-400'}`} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
