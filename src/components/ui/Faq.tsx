import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FaqItem {
    question: string;
    answer: string;
  }
  
  interface FaqProps {
    heading?: string;
    items?: FaqItem[];
  }
  
  const Faq = ({
    heading = "Frequently Asked Questions",
    items = [
        {
          question: "How do I book a hotel room?",
          answer:
            "To book a hotel room, simply enter your destination, check-in and check-out dates, and the number of guests on our homepage. Then, browse available options and complete the booking by providing your details and payment information.",
        },
        {
          question: "Can I modify or cancel my booking?",
          answer:
            "Yes, you can modify or cancel your booking based on the hotel's cancellation policy. Visit 'My Bookings' and follow the instructions. Cancellation fees may apply depending on the hotel's terms.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept major credit and debit cards, net banking, UPI, and digital wallets. Some hotels may also offer pay-at-hotel options.",
        },
        {
          question: "Do I need to pay in advance?",
          answer:
            "It depends on the hotel. Some require full payment at the time of booking, while others allow payment at check-in or check-out.",
        },
        {
          question: "Are taxes and fees included in the booking price?",
          answer:
            "Yes, the total price displayed includes taxes and fees unless stated otherwise. Additional charges like resort fees may apply at the property.",
        },
        {
          question: "How do I request special accommodations or amenities?",
          answer:
            "During the booking process, you can add special requests such as late check-in, extra beds, or accessibility features. The hotel will try to accommodate your request based on availability.",
        },
        {
          question: "What is the check-in and check-out time?",
          answer:
            "Standard check-in time is usually from 2:00 PM, and check-out is by 12:00 PM. However, times may vary by hotel. Please check your booking details for specific timings.",
        },
        {
          question: "Do hotels offer free breakfast?",
          answer:
            "Many hotels offer free breakfast, but it depends on the property and room type. Check the room details before booking.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our customer support team via live chat, email, or phone. Visit our 'Contact Us' page for details.",
        },
    ], 
  
  }: FaqProps) => {
    return (
      <section className="py-16 bg-[#141413]">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          {/* Heading */}
          <h1 className="text-center text-3xl font-bold text-gray-50 md:text-5xl">
            {heading}
          </h1>
  
          {/* Accordion Wrapper */}
          <div className="mt-10 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-zinc-700 rounded-lg bg-zinc-900"
                >
                  <AccordionTrigger className="p-4 text-lg font-medium text-gray-100 hover:text-gray-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };
  
  export default Faq ;
  