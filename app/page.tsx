import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, LayoutGrid, Clock, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">TaskFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-base font-medium text-gray-600 hover:text-teal-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-base font-medium text-gray-600 hover:text-teal-500 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-base font-medium text-gray-600 hover:text-teal-500 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-base font-medium text-gray-600 hover:text-teal-500 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex">
              Log in
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Organize your tasks with <span className="text-teal-500">simplicity</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TaskFlow helps you manage your projects with intuitive task boards, seamless team collaboration, and
                  powerful organization tools.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white h-12 px-8 text-base">
                  Get Started Free
                </Button>
                <Button variant="outline" className="h-12 px-8 text-base">
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-600">Task Boards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-coral-500" />
                  <span className="text-gray-600">Team Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-600">Seamless Organization</span>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-coral-100 rounded-3xl -rotate-6 scale-95 opacity-50"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Person organizing tasks on a virtual board"
                className="mx-auto aspect-square rounded-3xl object-cover relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Powerful features for <span className="text-teal-500">powerful teams</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl">
                Everything you need to manage tasks, collaborate with your team, and boost productivity.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <LayoutGrid className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intuitive Task Boards</h3>
                <p className="text-gray-500">
                  Organize tasks with customizable boards. Drag and drop tasks between columns to update their status.
                </p>
              </Card>

              {/* Feature 2 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-coral-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-gray-500">
                  Work together seamlessly with real-time updates, comments, and task assignments.
                </p>
              </Card>

              {/* Feature 3 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Time Tracking</h3>
                <p className="text-gray-500">
                  Track time spent on tasks and projects to improve productivity and billing accuracy.
                </p>
              </Card>

              {/* Feature 4 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-coral-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Automation</h3>
                <p className="text-gray-500">
                  Automate repetitive tasks and workflows to save time and reduce manual work.
                </p>
              </Card>

              {/* Feature 5 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                <p className="text-gray-500">
                  Enterprise-grade security with data encryption and regular backups to keep your work safe.
                </p>
              </Card>

              {/* Feature 6 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-coral-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                <p className="text-gray-500">
                  Monitor project progress with visual charts and reports to stay on top of deadlines.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How <span className="text-teal-500">TaskFlow</span> works
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl">
                A simple, intuitive workflow that adapts to your team's needs.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Create your workspace</h3>
                      <p className="text-gray-500">Set up your team workspace and invite your colleagues to join.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Organize your tasks</h3>
                      <p className="text-gray-500">Create boards, lists, and cards to organize your tasks and projects.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Collaborate with your team</h3>
                      <p className="text-gray-500">Assign tasks, add comments, and track progress together in real-time.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Track and improve</h3>
                      <p className="text-gray-500">Monitor progress, analyze performance, and continuously improve your workflow.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-coral-100 to-teal-100 rounded-3xl rotate-3 scale-95 opacity-50"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="TaskFlow workflow demonstration"
                  className="mx-auto aspect-square rounded-3xl object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Simple, transparent <span className="text-teal-500">pricing</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl">
                Choose the plan that's right for you and your team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Free Plan */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">$0</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-gray-500">Perfect for individuals and small projects</p>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Up to 3 boards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Basic task management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>2 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>1GB storage</span>
                  </li>
                </ul>
                
                <Button className="mt-6 w-full bg-white text-teal-500 border border-teal-500 hover:bg-teal-50">
                  Get Started
                </Button>
              </Card>

              {/* Pro Plan */}
              <Card className="p-6 border-none shadow-xl hover:shadow-2xl transition-shadow flex flex-col relative bg-white">
                <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">$12</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-gray-500">Great for growing teams</p>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Unlimited boards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Advanced task management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Up to 10 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>10GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Basic automation</span>
                  </li>
                </ul>
                
                <Button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Get Started
                </Button>
              </Card>

              {/* Enterprise Plan */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">$29</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-gray-500">For large organizations</p>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>100GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Advanced automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                
                <Button className="mt-6 w-full bg-white text-teal-500 border border-teal-500 hover:bg-teal-50">
                  Contact Sales
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What our <span className="text-teal-500">customers</span> say
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl">
                Don't just take our word for it. See what teams are achieving with TaskFlow.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "TaskFlow has transformed how our marketing team collaborates. We've reduced meeting time by 30% and increased our productivity significantly."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "The automation features in TaskFlow have saved our development team countless hours. The interface is intuitive and the customer support is exceptional."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Michael Chen</h4>
                    <p className="text-sm text-gray-500">CTO, StartupX</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "As a remote team, TaskFlow has been essential for keeping everyone aligned. The visual boards and progress tracking help us stay on top of our projects."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-500">Project Manager, RemoteWorks</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-16 md:py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to streamline your workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-teal-100 md:text-xl">
                Join thousands of teams already using TaskFlow to boost their productivity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-teal-600 hover:bg-gray-100 h-12 px-8 text-base">
                  Get Started Free
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-teal-600 h-12 px-8 text-base">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
     </div>
  )
}