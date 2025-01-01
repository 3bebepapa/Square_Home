import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download } from 'lucide-react'
import Link from 'next/link'

const sections = [
  { title: "Introduction", content: "Modern AI technology has made remarkable progress through the combination of large-scale data and powerful computing resources. Global companies like NVIDIA and OpenAI are leading this ecosystem, pioneering worldwide AI innovation with technologies such as the GPT series, ChatGPT, and DALL-E. However, the centralized AI ecosystem creates issues such as data and resource monopolization, infringement of data ownership, unfair compensation systems, and limitations in scalability and sustainability." },
  { title: "Project Overview", content: "The Square project aims to democratize AI technology fairly and transparently by combining blockchain technology, federated learning, and a multimodal AI framework (EMAI). Our vision is to provide a platform where all users can contribute to the development of the AI ecosystem while maintaining data ownership and receiving fair compensation for their contributions." },
  { title: "Key Technical Architecture", content: "Our EMAI framework is designed to process text, image, and audio data in an integrated manner, enabling parallel learning of global AI models and specific domain-specialized models. We utilize federated learning algorithms such as FedAvg and FedProx to maximize the performance of global AI models while allowing customized learning for each domain's requirements." },
  { title: "AIWorks Platform", content: "AIWorks is a platform that allows individuals and businesses to easily create and utilize AI agents. Through this, all users can leverage AI technology to enhance business and personal productivity. We provide various AI agents including AI coders, translators, and designers, with a user-friendly interface for easy creation and customization." },
  { title: "Contribution Evaluation and Reward System", content: "The core of the Square project is the SQA token, which provides the economic foundation of the platform and is designed to provide direct benefits to users and contributors. We use smart contracts to measure contributions, evaluating the quantity and quality of training data and the contribution of learning results." },
]

export default function SQAWhitepaperPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">SQA Whitepaper</h1>
          <p className="text-lg text-gray-600">
            A comprehensive overview of the Square project, AIWorks platform, and SQA token ecosystem.
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="grid gap-8 mb-12">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{section.content}</p>
              <Link href={`/sqa-whitepaper/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button variant="link" className="p-0">
                  Read more <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-4">
          The Square project aims to democratize AI technology, restore data ownership, create a fair economic ecosystem, and ensure sustainability considering both the environment and economy.
        </p>
        <Button>Learn More About Our Vision</Button>
      </div>
    </div>
  )
}

