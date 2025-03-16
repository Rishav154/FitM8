
import { useState, useEffect } from "react"
import { ArrowRight, BarChart3, Brain, Dumbbell, Heart, LineChart, Sparkles, Trophy, Zap } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import FeatureCard from "./components/Feature-card.jsx"
import HeroAnimation from "./components/Hero-animation.jsx"
import DashboardPreview from "./components/Dashboard-preview.jsx"
import TestimonialSlider from "./components/Testimonial-slider.jsx"
import ThemeToggle from "./components/Theme-toggle.jsx"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (prefersDark) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md h-16">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 fill-primary text-primary" />
            <span className="text-xl font-bold">FitM8</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary">
                Testimonials
              </a>
            </nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Button size="sm">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 dark:from-background via-background/95 to-background/90 flex items-center min-h-screen pt-16">
        <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>AI-Powered Fitness Tracking</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Track Your Fitness Journey with{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              FitAI
            </span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The intelligent fitness companion that adapts to your goals, tracks your progress, and helps you
                  achieve your best self.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                    size="lg"
                    className="gap-1.5 group bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                  View Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                  <span>10k+ Active Users</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>Award-winning Design</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <HeroAnimation />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-dark/10 bg-[size:100px_100px] [mask-image:radial-gradient(white,transparent_85%)]" />

        {/* Colorful blobs - enhanced for light mode */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl dark:bg-purple-500/10" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl dark:bg-primary/10" />
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl dark:bg-pink-500/5" />
        <div className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/5" />

      </section>

      {/* Features Section */}
      <section id="features" className="relative bg-gradient-to-b from-blue-50 to-muted/50 dark:from-transparent dark:to-transparent dark:bg-muted/10 py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Everything You Need to Track Your Fitness
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Our comprehensive platform helps you monitor every aspect of your fitness journey with precision and ease.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Dumbbell className="h-6 w-6" />}
              title="Workout Tracking"
              description="Log and analyze your workouts with detailed metrics and progress charts."
              color="from-blue-500 to-cyan-400"
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6" />}
              title="Progress Analytics"
              description="Visualize your fitness journey with intuitive charts and data insights."
              color="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="AI Coaching"
              description="Receive personalized workout and nutrition recommendations based on your goals."
              color="from-amber-500 to-orange-500"
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6" />}
              title="Health Monitoring"
              description="Track vital health metrics including heart rate, sleep quality, and recovery."
              color="from-red-500 to-rose-500"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Smart Notifications"
              description="Get timely reminders and motivational prompts to keep you on track."
              color="from-emerald-500 to-green-500"
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Goal Setting"
              description="Set and track personalized fitness goals with adaptive milestones."
              color="from-indigo-500 to-violet-500"
            />
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* AI Features Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>AI-Powered Features</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Intelligent Fitness Companion
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Our advanced AI analyzes your performance and adapts to your unique fitness profile.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-blue-500/25 to-cyan-500/15 dark:from-blue-500/10 dark:to-cyan-500/5 shadow-lg transition-all hover:shadow-xl">

            <CardHeader>
                <CardTitle>Personalized Workout Plans</CardTitle>
                <CardDescription>
                  AI-generated workout routines tailored to your goals, equipment, and fitness level.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placehold.co/700x700/gray/black"
                  alt="AI Workout Planning"
                  className="rounded-lg object-cover"
                  width={400}
                  height={200}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-500/25 to-pink-500/15 dark:from-purple-500/10 dark:to-pink-500/5 shadow-lg transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle>Smart Performance Analysis</CardTitle>
                <CardDescription>
                  Advanced insights that identify patterns and suggest optimizations for better results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placehold.co/700x700/gray/black"
                  alt="Performance Analysis"
                  className="rounded-lg object-cover"
                  width={400}
                  height={200}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/5 blur-3xl" />
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-gradient-to-b from-muted/50 to-blue-50/80 dark:from-transparent dark:to-transparent dark:bg-muted/10 py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Your Fitness Dashboard
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Get a comprehensive view of your fitness journey with our intuitive dashboard.
            </p>
          </div>
          <DashboardPreview />
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/5 blur-3xl" />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Join thousands of satisfied users who have transformed their fitness journey with FitAI.
            </p>
          </div>
          <TestimonialSlider />
        </div>

        {/* Background elements */}
        <div className="absolute top-1/2 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/5 blur-3xl" />
        <div className="absolute bottom-1/2 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-red-500/10 to-rose-500/5 blur-3xl" />
      </section>

      {/* CTA Section */}
      <section
        id="pricing"
        className="relative overflow-hidden bg-gradient-to-r from-primary to-purple-500 text-primary-foreground py-16 md:py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="mb-8 md:text-lg">Join FitM8 today and experience the future of fitness tracking.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="gap-1.5 group">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 h-20 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDBsLTI2Mi4xIDExNi4yNkw5NjQgMTI3LjQ4IDU5Mi45OSAxNDBMMjgwIDk2LjI2IDAgMHYxNDBoMTI4MHYtMTQweiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMTI4MCAwbC0yNjIuMSA4MS4xTDk2NCAxMDMuNTIgNTkyLjk5IDEyMEwyODAgNzUuNTYgMCAwdjE0MGgxMjgwdi0xNDB6IiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')]" />
      </section>

      {/* Footer */}
      <footer id="blog" className="border-t bg-background py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 fill-primary text-primary" />
              <span className="text-xl font-bold">FitM8</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <a href="#features" className="text-sm hover:text-primary">
                Features
              </a>
              <a href="#pricing" className="text-sm hover:text-primary">
                Pricing
              </a>
              <a href="#" className="text-sm hover:text-primary">
                Support
              </a>
            </nav>
            <div className="text-sm text-muted-foreground">© 2025 FitM8. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

