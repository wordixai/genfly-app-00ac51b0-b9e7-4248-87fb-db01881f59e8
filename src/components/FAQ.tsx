import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Are SwapFace's online AI tools free to use?",
      answer: "Yes, SwapFace offers free credits to new users, allowing you to try out AI tools. Once your credits are used up, you can purchase additional credits to unlock more features."
    },
    {
      question: "Is Swapface AI payment service secure?",
      answer: "Yes. We use Stripe for payment processing, so your card info is never stored. Stripe uses top-tier, bank-level security to protect your payment details and ensure safe transactions."
    },
    {
      question: "Are my uploaded files stored on SwapFace?",
      answer: "No, your uploaded files are not stored on SwapFace. After processing, they are deleted from our servers within 24 hours to ensure your privacy."
    },
    {
      question: "Which devices are compatible with SwapFace?",
      answer: "SwapFace is accessible on Windows, Mac, iOS, and Android devices. You can use all of SwapFace's features directly through your browser. No need to download anything!"
    },
    {
      question: "Is the face swap result realistic?",
      answer: "Absolutely! The face swap results on SwapFace are highly realistic and seamless, whether it's for videos, images, or GIFs."
    },
    {
      question: "Is there a SwapFace app?",
      answer: "Currently, we have not released a SwapFace app. However, if user demand increases in the future, we plan to develop a dedicated SwapFace app."
    },
    {
      question: "Can I use Swapface AI generated content commercially?",
      answer: "Yes, you can use SwapFace AI-generated content commercially, as long as the original images or videos you upload do not infringe on copyrights or privacy rights."
    }
  ];

  return (
    <section className="py-16 px-4 bg-purple-900/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FAQs About Swapface
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-purple-800/30 border-purple-600/50 backdrop-blur-sm rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                <span className="font-semibold">{index + 1}. {faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-purple-200 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;