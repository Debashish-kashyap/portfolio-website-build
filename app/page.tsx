"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Award, BadgeCheck, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    sectionsRef.current.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 min-h-[64px]">
            <Link
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="font-semibold text-lg hover:text-accent transition-all duration-200 hover:scale-105"
            >
              DK
            </Link>

            <div className="hidden md:flex gap-6">
              <Link
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="hover:text-accent transition-all duration-200 hover:underline underline-offset-4"
              >
                Projects
              </Link>
              <Link
                href="#education"
                onClick={(e) => scrollToSection(e, "education")}
                className="hover:text-accent transition-all duration-200 hover:underline underline-offset-4"
              >
                Education
              </Link>
              <Link
                href="#achievements"
                onClick={(e) => scrollToSection(e, "achievements")}
                className="hover:text-accent transition-all duration-200 hover:underline underline-offset-4"
              >
                Achievements
              </Link>
              <Link
                href="#certifications"
                onClick={(e) => scrollToSection(e, "certifications")}
                className="hover:text-accent transition-all duration-200 hover:underline underline-offset-4"
              >
                Certifications
              </Link>
              <Link
                href="#tech"
                onClick={(e) => scrollToSection(e, "tech")}
                className="hover:text-accent transition-all duration-200 hover:underline underline-offset-4"
              >
                Tech
              </Link>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="hover:text-accent transition-all duration-200 hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3 animate-in slide-in-from-top duration-200">
              <Link
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="py-2 hover:text-accent hover:bg-accent/10 rounded px-3 transition-all duration-200"
              >
                Projects
              </Link>
              <Link
                href="#education"
                onClick={(e) => scrollToSection(e, "education")}
                className="py-2 hover:text-accent hover:bg-accent/10 rounded px-3 transition-all duration-200"
              >
                Education
              </Link>
              <Link
                href="#achievements"
                onClick={(e) => scrollToSection(e, "achievements")}
                className="py-2 hover:text-accent hover:bg-accent/10 rounded px-3 transition-all duration-200"
              >
                Achievements
              </Link>
              <Link
                href="#certifications"
                onClick={(e) => scrollToSection(e, "certifications")}
                className="py-2 hover:text-accent hover:bg-accent/10 rounded px-3 transition-all duration-200"
              >
                Certifications
              </Link>
              <Link
                href="#tech"
                onClick={(e) => scrollToSection(e, "tech")}
                className="py-2 hover:text-accent hover:bg-accent/10 rounded px-3 transition-all duration-200"
              >
                Tech
              </Link>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="py-2 hover:text-accent hover:bg-accent/10 rounded px-3 transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => el && sectionsRef.current.set("hero", el)}
        className={`pt-32 pb-20 px-3 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="w-12 h-1 bg-accent rounded-full" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
                  Debashish Kashyap
                </h1>
                <p className="text-base sm:text-xl text-muted-foreground text-balance">
                  AI Engineer | ML Developer | Cloud Practitioner
                </p>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Building practical AI and machine learning solutions that solve real problems.
              </p>
              <Button size="lg" asChild className="mt-4 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <Link href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                  View Projects
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square group cursor-pointer">
                <img
                  src="/images/whatsapp-20image-202025-09-18-20at-2020.jpg"
                  alt="Debashish Kashyap"
                  className="w-full h-full object-cover rounded-full shadow-2xl transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-accent/20 group-hover:shadow-[0_0_40px] group-hover:animate-subtle-sway active:scale-95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => el && sectionsRef.current.set("projects", el)}
        className={`py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-16 transition-all duration-1000 ${
          visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Selected work showcasing AI, ML, and automation solutions
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card className="p-4 sm:p-6 hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">Insight Tutor</h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Debashish-kashyap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://insight-tutor-572871633756.us-west1.run.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An AI-powered personalized learning assistant built with Google AI Studio. Understands user level,
                  adapts explanations, and provides goal-focused learning guidance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Google AI Studio
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Gemini API
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    React.js
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    TypeScript
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Google Cloud Run
                  </span>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="p-4 sm:p-6 hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">Feedback Collection System</h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Debashish-kashyap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://debashish-kashyap.github.io/Feedback-Collection-System/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A lightweight feedback management platform with a clean UI and real-time data handling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    HTML
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    CSS
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    JavaScript
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    n8n
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Google Sheets
                  </span>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="p-4 sm:p-6 hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">WhatsApp Bot</h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Debashish-kashyap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An automation-focused WhatsApp bot capable of scripted workflows and auto-responses.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Python
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Twilio
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    REST API
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-md hover:bg-accent/20 transition-colors duration-200 cursor-default">
                    Automation Scripts
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={(el) => el && sectionsRef.current.set("education", el)}
        className={`py-20 px-3 sm:px-6 lg:px-8 scroll-mt-16 transition-all duration-1000 ${
          visibleSections.has("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Education</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Academic background and qualifications</p>
          </div>

          <Card className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              {/* B.Tech */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold">B.Tech in Computer Science & Engineering</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Assam downtown University</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Guwahati, Assam, India</p>
                  <p className="text-xs sm:text-sm font-medium text-accent">2025 – 2029</p>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* 12th */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold">12th Board</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Trinity senior secondary School</p>
                  <p className="text-xs sm:text-sm font-medium text-accent">2023 • 75%</p>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* 10th */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold">10th Board</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Barampur H.S.School</p>
                  <p className="text-xs sm:text-sm font-medium text-accent">2021 • 95%</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        ref={(el) => el && sectionsRef.current.set("achievements", el)}
        className={`py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-16 transition-all duration-1000 ${
          visibleSections.has("achievements") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Achievements</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Recognitions and milestones</p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* Achievement 1 */}
            <Card className="p-4 sm:p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold">Blockchain Certification</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Completed the "Blockchain Certification" workshop in collaboration with AI CERTs at the ADTU campus,
                    gaining insights into blockchain fundamentals and applications.
                  </p>
                </div>
              </div>
            </Card>

            {/* Achievement 2 */}
            <Card className="p-4 sm:p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold">2nd Place - Crack The Case</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Awarded 2nd place in Sunstone-powered "Crack The Case" competition for strategic thinking.
                  </p>
                </div>
              </div>
            </Card>

            {/* Achievement 3 */}
            <Card className="p-4 sm:p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 sm:col-span-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold">
                    University Coding Challenge - Round 2 Qualifier
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Selected for Round 2 of the university-level Coding Challenge organised by the Tech Club, Sunstone,
                    after competing successfully in Round 1.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        ref={(el) => el && sectionsRef.current.set("certifications", el)}
        className={`py-20 px-3 sm:px-6 lg:px-8 scroll-mt-16 transition-all duration-1000 ${
          visibleSections.has("certifications") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Certifications</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Professional certifications and credentials</p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* Certification 1 */}
            <Card className="p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <a
                    href="https://d3s27eh1wskpwv.cloudfront.net/placement/verification_photosf6227373-0086-4256-ae72-1d5122faf0aa.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-200">
                      Introduction to Internet of Things
                      <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </h3>
                  </a>
                  <p className="text-sm text-muted-foreground">CISCO Networking Academy</p>
                  <p className="text-xs font-medium text-accent">September 2025</p>
                </div>
              </div>
            </Card>

            {/* Certification 2 */}
            <Card className="p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <a
                    href="https://d3s27eh1wskpwv.cloudfront.net/placement/84eaae89-1ef4-425e-87af-c65b4f9a434b.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-200">
                      Cursor AI: VibeCode Mastery
                      <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </h3>
                  </a>
                  <p className="text-sm text-muted-foreground">Sunstone School of Technology</p>
                  <p className="text-xs font-medium text-accent">October 2025</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        ref={(el) => el && sectionsRef.current.set("tech", el)}
        className={`py-20 px-3 sm:px-6 lg:px-8 scroll-mt-16 transition-all duration-1000 ${
          visibleSections.has("tech") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Tech Stack</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              "Python",
              "C",
              "JavaScript",
              "Machine Learning",
              "AI/LLM Development",
              "Agentic AI Systems",
              "Google AI Studio",
              "AWS",
              "Flask",
              "HTML/CSS",
            ].map((tech) => (
              <div
                key={tech}
                className="p-3 sm:p-4 bg-card border border-border rounded-lg text-center hover:bg-accent/5 hover:border-accent/30 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
              >
                <span className="text-xs sm:text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => el && sectionsRef.current.set("contact", el)}
        className={`py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-16 transition-all duration-1000 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Get In Touch</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Feel free to reach out for collaborations or opportunities
            </p>
          </div>

          <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-6 mb-8">
            <Link
              href="mailto:kashyapdebashish556@gmail.com"
              className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg hover:bg-accent/5 hover:border-accent/30 hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Email</span>
                <span className="text-xs text-muted-foreground">kashyapdebashish556@gmail.com</span>
              </div>
            </Link>
            <Link
              href="https://github.com/Debashish-kashyap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg hover:bg-accent/5 hover:border-accent/30 hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/debashish-kashyap-a7902b382/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg hover:bg-accent/5 hover:border-accent/30 hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-3 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 Debashish Kashyap. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
