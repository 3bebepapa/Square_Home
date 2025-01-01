import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

const faqs = [
  {
    question: "What is AIWorks?",
    answer: "AIWorks is a decentralized AI ecosystem that allows users to create, train, and utilize AI agents for various tasks. It uses blockchain technology and federated learning to ensure data privacy and fair rewards for contributors."
  },
  {
    question: "How do I create an AI agent?",
    answer: "To create an AI agent, log into your AIWorks account, navigate to the 'Create Agent' section, choose a template or start from scratch, provide training data, and follow the step-by-step guide to configure and deploy your agent."
  },
  {
    question: "What are SQA tokens?",
    answer: "SQA tokens are the native cryptocurrency of the AIWorks platform. They are used for transactions within the ecosystem, including paying for AI services, receiving rewards for contributions, and participating in governance decisions."
  },
  {
    question: "How can I earn SQA tokens?",
    answer: "You can earn SQA tokens by contributing to the AIWorks ecosystem in various ways, such as providing high-quality training data, participating in model training, or creating popular AI agents that others use."
  },
  {
    question: "Is my data safe on AIWorks?",
    answer: "Yes, AIWorks prioritizes data security and privacy. We use advanced encryption and blockchain technology to ensure that your data remains protected. Additionally, our federated learning approach means that your raw data never leaves your device."
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find answers to common questions about AIWorks, AI agents, and SQA tokens.
      </p>

      <div className="mb-8">
        <div className="relative">
          <Input type="search" placeholder="Search FAQs..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-4">
          If you couldn't find the answer you were looking for, feel free to reach out to our support team.
        </p>
        <Button>Contact Support</Button>
      </div>
    </div>
  )
}

