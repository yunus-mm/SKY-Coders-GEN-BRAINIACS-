"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiBook, FiVideo, FiFileText, FiDownload, FiExternalLink } from "react-icons/fi"
import DashboardLayout from "@/components/dashboard-layout"

export default function ResourcesPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const resources = {
    books: [
      {
        title: "Mathematics Fundamentals",
        description: "A comprehensive guide to basic mathematical concepts",
        link: "#",
      },
      {
        title: "Advanced Algebra",
        description: "Deep dive into algebraic equations and functions",
        link: "#",
      },
      {
        title: "Geometry Essentials",
        description: "Understanding shapes, angles, and spatial relationships",
        link: "#",
      },
      {
        title: "Calculus Made Simple",
        description: "Step-by-step approach to differential and integral calculus",
        link: "#",
      },
    ],
    videos: [
      {
        title: "Introduction to Trigonometry",
        description: "Visual explanation of sine, cosine, and tangent",
        duration: "15:30",
        link: "#",
      },
      {
        title: "Solving Quadratic Equations",
        description: "Multiple methods to solve quadratic equations",
        duration: "12:45",
        link: "#",
      },
      {
        title: "Understanding Logarithms",
        description: "Practical applications of logarithmic functions",
        duration: "18:20",
        link: "#",
      },
      {
        title: "Probability and Statistics",
        description: "Basic concepts in data analysis and probability",
        duration: "22:15",
        link: "#",
      },
    ],
    worksheets: [
      {
        title: "Algebra Practice Sheets",
        description: "50 practice problems with solutions",
        pages: 10,
        link: "#",
      },
      {
        title: "Geometry Worksheets",
        description: "Exercises on triangles, circles, and polygons",
        pages: 8,
        link: "#",
      },
      {
        title: "Calculus Problem Set",
        description: "Differentiation and integration exercises",
        pages: 12,
        link: "#",
      },
      {
        title: "Statistics Workbook",
        description: "Data analysis and probability problems",
        pages: 15,
        link: "#",
      },
    ],
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
          <p className="text-muted-foreground mb-6">
            Access a variety of educational materials to enhance your understanding.
          </p>

          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="books" className="flex items-center gap-2">
                <FiBook className="h-4 w-4" />
                <span>Books</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <FiVideo className="h-4 w-4" />
                <span>Videos</span>
              </TabsTrigger>
              <TabsTrigger value="worksheets" className="flex items-center gap-2">
                <FiFileText className="h-4 w-4" />
                <span>Worksheets</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="books" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {resources.books.map((book, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{book.title}</CardTitle>
                      <CardDescription>{book.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          <FiDownload className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {resources.videos.map((video, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">Duration: {video.duration}</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink className="mr-2 h-4 w-4" />
                          Watch Video
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="worksheets" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {resources.worksheets.map((worksheet, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{worksheet.title}</CardTitle>
                      <CardDescription>{worksheet.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">Pages: {worksheet.pages}</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={worksheet.link} target="_blank" rel="noopener noreferrer">
                          <FiDownload className="mr-2 h-4 w-4" />
                          Download Worksheet
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}

