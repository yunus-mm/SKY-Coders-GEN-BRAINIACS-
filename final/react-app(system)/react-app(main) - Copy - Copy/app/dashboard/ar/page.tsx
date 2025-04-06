"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FiDownload, FiInfo } from "react-icons/fi"
import DashboardLayout from "@/components/dashboard-layout"
import Image from "next/image"

export default function ARPage() {
  const router = useRouter()
  const apkUrl = "https://drive.google.com/uc?export=download&id=1T16hrH2BCz0Lv2Txc2cuBI_Ve5JSlcG8"

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleDownload = () => {
    window.location.href = apkUrl // Trigger download
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Experience Math in Augmented Reality! 🚀</h1>
            <p className="text-muted-foreground">
              Enhance your learning with interactive 3D math models using AR technology.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-8 flex items-center justify-center">
                  <div className="relative w-full aspect-square max-w-xs">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="AR Demo"
                      width={400}
                      height={400}
                      className="rounded-md shadow-lg"
                    />
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">How to Use the AR App?</h2>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="bg-primary/10 text-primary font-medium h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                          1
                        </span>
                        <span>
                          Click the <strong>Download AR App</strong> button below.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="bg-primary/10 text-primary font-medium h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                          2
                        </span>
                        <span>Install the APK on your Android device.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="bg-primary/10 text-primary font-medium h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                          3
                        </span>
                        <span>Open the app and scan math problems to see 3D models!</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3">
                    <FiInfo className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <p className="font-medium">Compatible with Android 8.0+</p>
                      <p>This app requires camera permissions and ARCore support.</p>
                    </div>
                  </div>

                  <Button onClick={handleDownload} className="w-full">
                    <FiDownload className="mr-2 h-4 w-4" />
                    Download AR App
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "3D Geometry Models",
                description: "Visualize complex geometric shapes in 3D space",
              },
              {
                title: "Interactive Equations",
                description: "See mathematical equations come to life in real-time",
              },
              {
                title: "Problem Solving",
                description: "Scan printed problems and get step-by-step 3D solutions",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

