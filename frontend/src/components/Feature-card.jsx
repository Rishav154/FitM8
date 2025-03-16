"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function FeatureCard({ icon, title, description, color = "from-primary to-primary" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full transition-all hover:shadow-md overflow-hidden border-none dark:bg-muted/20">
        <CardHeader>
          <div
            className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white`}
          >
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <div className={`h-1 w-full bg-gradient-to-r ${color}`}></div>
      </Card>
    </motion.div>
  )
}

