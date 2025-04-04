"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FiExternalLink, FiCopy, FiCheck } from "react-icons/fi"
import DashboardLayout from "@/components/dashboard-layout"
import { useState } from "react"

export default function ChatbotPage() {
  const router = useRouter()
  const chatbotLink = "https://mathtutor-chatbot.onrender.com"
  const passkey = "AIzaSyDs1Q4r6swS1SNWiu_h7WzClq50f2Tmy3g"
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleChatbotAccess = () => {
    window.open(chatbotLink, "_blank")
  }

  const handleCopyPasskey = () => {
    navigator.clipboard.writeText(passkey)
    setCopied(true)

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <DashboardLayout>
      <div className="p-6 flex flex-col items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="bg-amber-100 text-amber-800 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                <FiExternalLink className="h-10 w-10" />
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Welcome to the Chatbot!</h1>
                <p className="text-muted-foreground">
                  Our AI-powered chatbot is ready to assist you with your math questions.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Kindly copy the passkey before clicking the button:</p>
                <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                  <code className="text-sm font-mono">{passkey}</code>
                  <Button variant="ghost" size="sm" onClick={handleCopyPasskey} className="h-8 w-8 p-0">
                    {copied ? <FiCheck className="h-4 w-4 text-green-600" /> : <FiCopy className="h-4 w-4" />}
                  </Button>
                </div>
                {copied && <p className="text-xs text-green-600">Passkey copied to clipboard!</p>}
              </div>

              <div className="space-y-4 pt-4">
                <Button onClick={handleChatbotAccess} className="w-full">
                  <FiExternalLink className="mr-2 h-4 w-4" />
                  Access the Chatbot
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

