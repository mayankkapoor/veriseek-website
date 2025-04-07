"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quizData = [
  {
    question:
      "A plant produces both t-shirts and shirts. Of the total clothes produced last year, 1/3 were T-Shirts, the balance being Shirts. The total salary bill for the factory was Rs 18 lakhs. If one shirt takes 50% more time compared to a T-shirt to produce, and if the factory salary has to be divided between T-shirts and Shirts based on the total time spent producing each kind of clothing, then the amount of salary to be allocated to T-Shirts will be:",
    options: [
      "A. Rs 4.5 lakhs",
      "B. Rs 6.67 lakhs",
      "C. Rs 9.0 lakhs",
      "D. Rs 12.0 lakhs",
      "E. Cannot be determined from the information provided",
    ],
    correctAnswer: 1,
  },
  {
    question: `A famous Technology economics magazine in India, widely available across bookstores and airports across India, did two surveys. The findings were:
Findings from subscribers survey: Thirty per cent of all orders placed by subscribers in response to ads placed in the magazine last year were placed by subscribers under the age of thirty-five.
Findings from advertiser surveys: Most of the orders placed in response to advertisements in the magazine last year were placed by people under the age of thirty-five.
For both of the findings to be accurate, which of the following must be true?`,
    options: [
      "1. More subscribers who have never ordered in response to advertisements in the magazine are aged thirty-five or over",
      "2. Among the subscribers, the proportion who are under the age of thirty-five was considerably lower last year than 2 years ago",
      "3. Most orders placed in response to advertisements in the magazine last year were placed by subscribers over the age of thirty-five",
      "4. Last year, the average revenue per order placed was less for subscribers under age thirty-five than for those aged thirty-five or over",
      "5. Last year, many people who placed orders for merchandise in response to advertisements in the magazine were not subscribers to the magazine",
    ],
    correctAnswer: 4,
  },
  {
    question: `The management of a famous restaurant in North East Delhi gave the following information to its CEO:
"Our revenues in North East Delhi declined by 10,000 consumers during the year. This is likely entirely due to the launch of a food delivery service in the area that, in addition to delivering both tasty and cheap food made by its cooks in central locations (cloud kitchens) targeting the student population living in the area, also delivered food from neighbourhood restaurants to people's homes for a fee. We should tie up with it."
The CEO was not convinced. He said "I know from some reliable sources that the cloud kitchens of the food delivery company prepared dishes for only 4,000 orders. Yet our fall was 10,000 consumers. There are other bigger reasons why our sales have declined. We should not do a tie-up."
Which of the following, if true, would most seriously weaken the CEO's argument:`,
    options: [
      "A. Three restaurants shut down in North East Delhi during the year",
      "B. During the year, the food delivery company did more deliveries for neighbourhood restaurants than its cloud kitchen orders",
      "C. 70% of restaurants in the area offer discounts of 25% during non-peak hours on food orders",
      "D. People generally order 3 dishes per order in a restaurant and 2.5 dishes while ordering for home delivery",
      "E. For 2 months, there was road construction work happening just outside the entrance to the restaurant, making entry more difficult.",
    ],
    correctAnswer: 1,
  },
  {
    question: `During the harvest season, grain is being brought into an empty warehouse constantly every day through trucks. At the same time, it releases a certain constant quantity of grain to milling factories across the region for making flour. Unless grain is stored in the warehouse, it will get spoiled in the next rain. Rain is expected in 20 days. 400 metric tonnes of grain are waiting for storage in the warehouse. How long will it take for the warehouse to get filled? Two statements are provided:
I. The total capacity of grain the warehouse can hold is 120 metric tonnes
II. The trucks bringing grains can completely fill the empty warehouse in 10 days if there are no outward deliveries to milling factories. The trucks carrying grain for milling can completely empty a filled warehouse in 15 days if there are no fresh inward supplies of grains.`,
    options: [
      "1. Statement I alone is sufficient but statement II alone is not sufficient to answer the question asked.",
      "2. Statement II alone is sufficient but statement I alone is not sufficient to answer the question asked.",
      "3. Both statements I and II together are sufficient to answer the question but neither statement is sufficient alone",
      "4. Each statement alone is sufficient to answer the question",
      "5. Statements I and II are not sufficient to answer the question asked and additional data is needed to answer the statements",
    ],
    correctAnswer: 2,
  },
  {
    question: `An entrepreneur shows the following data. He is looking for funding of INR 2 crore, at a valuation of INR 10 Crore for the
company. Should you invest?
Year 0: Revenue INR 1 Cr. Loss INR 2 crores
Year 1: Revenue INR 3 Cr. Loss INR 1 Cr
Year 2: Revenue INR 6 Cr: Profit INR 5 lakhs
Year 3 (Current year): Revenue INR 8 Cr: Profit INR 10 lakhs
The team is expected to come up with and ask a set of questions, get more data, and then form an opinion about the
business, including whether the valuation is justified or not, and finally take a decision and create a small presentation on
the reason for its decision. There is no right or wrong answer, but the depth of thinking and communication will decide
the scoring.
For example, the initial questions in this case could be:
On business: Industry, promoter experience, funding taken so far
On profitability and growth: Projections for the next 3 years
On valuation metrics: TAM, SAM, SOM, Industry multiples, etc
On risks and capabilities: Team, attritions if any, legal cases, consumer complaints, etc
On financials: Metrics like debtors, inventory, ROCE, etc,`,
    options: [],
    correctAnswer: null,
  },
];

const SneakPeekSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const totalQuestions = quizData.length;
  const currentQuiz = quizData[currentIndex];

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    if (currentQuiz.correctAnswer !== null) {
      setIsCorrect(index === currentQuiz.correctAnswer);
    }
  };

  const prevQuestion = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? totalQuestions - 1 : prev - 1));
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const nextQuestion = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === totalQuestions - 1 ? 0 : prev + 1));
    setSelectedOption(null);
    setIsCorrect(null);
  };

  // Function to format question text with proper spacing
  const formatQuestionText = (text: string) => {
    return text.split("\n").map((line, idx) => (
      <p key={idx} className={idx > 0 ? "mt-2" : ""}>
        {line}
      </p>
    ));
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50 text-center" id="sneak-peek">
      <div className="container px-4 mx-auto max-w-4xl">
        {/* Header Card */}
        <Card className="shadow-md border rounded-xl bg-white p-4 sm:p-6 md:p-8">
          <CardContent className="text-center p-0 sm:p-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Want a Sneak Peek into Sharkathon?
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg">
              Curious about the challenges ahead? Get a glimpse of the kind of
              real-world business problems you'll tackle in India's premier
              investment and strategy programme.
            </p>
          </CardContent>
        </Card>

        {/* Question Card */}
        <div className="mt-6 sm:mt-10 relative">
          <Card className="bg-white shadow-sm border rounded-xl p-4 sm:p-6">
            <CardContent className="p-0 sm:p-2">
              <div className="text-left mb-4">
                <span className="text-sm font-semibold">Q{currentIndex + 1}.</span>
                <div className="text-sm sm:text-base mt-1">
                  {formatQuestionText(currentQuiz.question)}
                </div>
              </div>

              {/* Options Container */}
              <div className="mt-4">
                {currentQuiz.options.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {currentQuiz.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isAnswer = currentQuiz.correctAnswer === idx;

                      let bgColor = "bg-white";
                      let textColor = "text-gray-800";
                      let borderColor = "border-gray-200";

                      if (isSelected) {
                        if (isAnswer) {
                          bgColor = "bg-green-50";
                          textColor = "text-green-800";
                          borderColor = "border-green-500";
                        } else {
                          bgColor = "bg-red-50";
                          textColor = "text-red-800";
                          borderColor = "border-red-500";
                        }
                      }

                      return (
                        <div 
                          key={idx}
                          className={`border rounded p-3 text-left cursor-pointer transition-colors ${bgColor} ${textColor} ${borderColor} ${selectedOption !== null ? 'cursor-default' : 'hover:bg-gray-50'}`}
                          onClick={() => selectedOption === null && handleOptionClick(idx)}
                        >
                          <div className="text-xs sm:text-sm md:text-base whitespace-normal break-words">
                            {option}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-gray-600 italic text-sm">
                    Open-ended or discussion-based question. Think deeply and
                    form your own opinion.
                  </p>
                )}
              </div>

              {selectedOption !== null && currentQuiz.correctAnswer !== null && (
                <div className="mt-4">
                  <p
                    className={`text-sm sm:text-base font-medium ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
                  </p>

                  {!isCorrect && (
                    <Button
                      className="mt-2 text-xs sm:text-sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedOption(null);
                        setIsCorrect(null);
                      }}
                    >
                      🔁 Try Again
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-4 sm:mt-6">
            <Button 
              variant="ghost" 
              onClick={prevQuestion}
              className="text-xs sm:text-sm px-2 sm:px-4"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="hidden xs:inline">Previous</span>
            </Button>
            <span className="text-xs sm:text-sm text-gray-600">
              {currentIndex + 1} / {totalQuestions}
            </span>
            <Button 
              variant="ghost" 
              onClick={nextQuestion}
              className="text-xs sm:text-sm px-2 sm:px-4"
              size="sm"
            >
              <span className="hidden xs:inline">Next</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeekSection;