"use client"

import WavingPortfolioLanding from "@/components/ui/waving-portfolio-landing"

export default function Demo() {
  return (
    <WavingPortfolioLanding 
      name="Ayush"
      year="2026"
      roles={["Full Stack Developer", "AI Engineer"]}
      accent="#38bdf8"
      paper="#070a12"
      ink="#f1f5f9"
    />
  )
}
