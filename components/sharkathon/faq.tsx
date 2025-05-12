"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const SharkathonFAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left font-medium text-primary">
          Who is eligible to participate in Sharkathon?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Students from Grades 9 to 12 across India can participate.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left font-medium text-primary">
          Is there a registration fee to participate?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Yes, there is a registration fee of ₹3,500 (including GST), which covers study materials and participation
          costs.
        </AccordionContent>
      </AccordionItem>

      

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left font-medium text-primary">
          What support will I receive during the programme?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Participants will receive study materials, mentorship from industry professionals, and access to exclusive
          learning sessions.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-6">
        <AccordionTrigger className="text-left font-medium text-primary">
          Can I participate in Sharkathon multiple years?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Yes, students can participate every year if they meet the eligibility criteria.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}

export default SharkathonFAQ

