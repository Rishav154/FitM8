"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Marathon Runner",
    content:
      "FitM8 has completely transformed my training. The AI coach adapts to my progress and helps me optimize my runs. I've improved my marathon time by 15 minutes!",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Fitness Enthusiast",
    content:
      "I love how the app tracks everything in one place. The dashboard gives me a complete picture of my fitness journey, and the AI recommendations are spot on.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Weight Loss Journey",
    content:
      "Down 30 pounds and counting! The personalized nutrition advice and workout plans have made all the difference. The progress tracking keeps me motivated.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  // Autoplay functionality
  useEffect(() => {
    let interval

    if (autoplay) {
      interval = setInterval(() => {
        next()
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none bg-gradient-to-br from-background to-muted/50 dark:from-background dark:to-muted/20 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-4 text-center">
                  <div className="mx-auto flex justify-center">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl">{testimonials[current].content}</p>
                  <div className="mt-4 flex flex-col items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-primary/20">
                      {testimonials[current].avatar ? (
                        <img
                          src={testimonials[current].avatar || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-lg font-bold">{testimonials[current].name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{testimonials[current].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <div className="flex gap-1">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`h-2 w-2 rounded-full p-0 ${index === current ? "bg-primary" : "bg-muted-foreground/20"}`}
              onClick={() => setCurrent(index)}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

