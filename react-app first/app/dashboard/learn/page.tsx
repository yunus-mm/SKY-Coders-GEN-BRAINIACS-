"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FiArrowRight, FiLock, FiUnlock } from "react-icons/fi"
import DashboardLayout from "@/components/dashboard-layout"

export default function LearnPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const courses = [
    {
      id: "algebra",
      title: "Algebra Fundamentals",
      description: "Master the basics of algebraic equations and functions",
      progress: 75,
      modules: 8,
      completed: 6,
      level: "Beginner",
      unlocked: true,
    },
    {
      id: "geometry",
      title: "Geometry Essentials",
      description: "Explore shapes, angles, and spatial relationships",
      progress: 40,
      modules: 10,
      completed: 4,
      level: "Intermediate",
      unlocked: true,
    },
    {
      id: "calculus",
      title: "Introduction to Calculus",
      description: "Learn the fundamentals of differential and integral calculus",
      progress: 10,
      modules: 12,
      completed: 1,
      level: "Advanced",
      unlocked: true,
    },
    {
      id: "statistics",
      title: "Statistics & Probability",
      description: "Understand data analysis and probability concepts",
      progress: 0,
      modules: 8,
      completed: 0,
      level: "Intermediate",
      unlocked: false,
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Learning Modules</h1>
          <p className="text-muted-foreground mb-6">Track your progress through our comprehensive learning modules.</p>

          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <Card key={course.id} className={course.unlocked ? "" : "opacity-80"}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </div>
                    <Badge variant={course.unlocked ? "outline" : "secondary"}>
                      {course.unlocked ? <FiUnlock className="mr-1 h-3 w-3" /> : <FiLock className="mr-1 h-3 w-3" />}
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="text-sm text-muted-foreground">
                      {course.completed} of {course.modules} modules completed
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={!course.unlocked}>
                    {course.progress > 0 ? "Continue Learning" : "Start Course"}
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Your Learning Path</h2>
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <div className="absolute left-4 h-full w-0.5 bg-muted"></div>

                  {[
                    {
                      title: "Complete Algebra Fundamentals",
                      description: "Finish the remaining 2 modules to complete this course",
                      status: "in-progress",
                    },
                    {
                      title: "Continue Geometry Essentials",
                      description: "You're making good progress! Keep going with the next module",
                      status: "in-progress",
                    },
                    {
                      title: "Start Calculus Exercises",
                      description: "Practice with real-world calculus problems",
                      status: "upcoming",
                    },
                    {
                      title: "Unlock Statistics & Probability",
                      description: "Complete Algebra and Geometry to unlock this course",
                      status: "locked",
                    },
                  ].map((step, index) => (
                    <div key={index} className="ml-8 mb-8 relative">
                      <div
                        className={`absolute -left-10 top-1 h-6 w-6 rounded-full flex items-center justify-center ${
                          step.status === "in-progress"
                            ? "bg-primary text-primary-foreground"
                            : step.status === "upcoming"
                              ? "bg-muted border border-input"
                              : "bg-muted border border-input opacity-50"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h3 className={`font-medium ${step.status === "locked" ? "text-muted-foreground" : ""}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

