"use client"

import { motion } from "framer-motion"
import { Activity, Calendar, Dumbbell, Heart, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function DashboardPreview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border bg-background p-1 shadow-2xl">
      <div className="flex items-center border-b p-4">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 fill-primary text-primary" />
          <span className="text-xl font-bold">FitAI Dashboard</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm font-medium">Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="flex flex-col gap-2 rounded-lg border p-2 dark:bg-muted/20">
            <div className="flex items-center gap-2 rounded-md bg-primary/10 p-2 text-primary">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-muted">
              <Dumbbell className="h-4 w-4" />
              <span className="text-sm">Workouts</span>
            </div>
            <div className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-muted">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Progress</span>
            </div>
            <div className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-muted">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Schedule</span>
            </div>
            <div className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-muted">
              <Zap className="h-4 w-4" />
              <span className="text-sm">AI Coach</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          className="col-span-12 md:col-span-9 lg:col-span-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Stats Cards */}
          <motion.div variants={item}>
            <Card className="overflow-hidden border-t-4 border-t-blue-500 dark:bg-muted/20 bg-gradient-to-br from-blue-50 to-white dark:from-transparent dark:to-transparent">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,742</div>
                <div className="mt-1 flex items-center text-xs text-green-500">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>12% from yesterday</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>Goal: 10,000</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="overflow-hidden border-t-4 border-t-purple-500 dark:bg-muted/20 bg-gradient-to-br from-purple-50 to-white dark:from-transparent dark:to-transparent">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <div className="mt-1 flex items-center text-xs text-green-500">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>8% from yesterday</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[62%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>Goal: 2,000</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="overflow-hidden border-t-4 border-t-amber-500 dark:bg-muted/20 bg-gradient-to-br from-amber-50 to-white dark:from-transparent dark:to-transparent">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <div className="mt-1 flex items-center text-xs text-green-500">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>15% from yesterday</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                </div>
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>Goal: 100</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Chart */}
          <motion.div variants={item} className="md:col-span-2">
            <Card className="dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full">
                  <div className="flex h-full items-end gap-2">
                    {[35, 45, 75, 50, 90, 60, 40].map((height, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center gap-2">
                        <div
                          className={`w-full rounded-t-sm transition-all duration-500 bg-gradient-to-t ${
                            index % 3 === 0
                              ? "from-blue-500 to-cyan-400"
                              : index % 3 === 1
                                ? "from-purple-500 to-pink-500"
                                : "from-amber-500 to-orange-500"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {["M", "T", "W", "T", "F", "S", "S"][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Recommendations */}
          <motion.div variants={item}>
            <Card className="border-primary/20 bg-gradient-to-br from-blue-500/10 to-purple-500/5 dark:from-blue-500/5 dark:to-purple-500/2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle>AI Coach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Based on your recent activity, I recommend focusing on strength training today. Your cardio
                  performance has been excellent!
                </p>
                <div className="mt-4 rounded-lg bg-background p-3 text-xs dark:bg-muted/30">
                  <div className="font-medium">Suggested Workout:</div>
                  <div className="mt-2">Upper Body Strength - 45 min</div>
                  <div className="mt-1 text-muted-foreground">Targets: Arms, Chest, Back</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

