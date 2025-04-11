// Image utility functions

// Map of image IDs to their paths
const imageMap: Record<string, string> = {
  // Hero images
  "hero-students":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-14%20at%2009.31.05_4af1bbdd.jpg-ev8RWkuiymZJxd7zDh3KeZhgd6O0Xg.jpeg",
  "hero-bg": "/images/hero-bg.jpg",

  // Sharkathon images
  "sharkathon-hero":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.15_22d3c962.jpg-IdTTpD1iwsllTb8cVqRPf8imgAni4O.jpeg",
  "sharkathon-mentorship":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.15_22d3c962.jpg-IdTTpD1iwsllTb8cVqRPf8imgAni4O.jpeg",
  "sharkathon-workshop":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.16_27ff2b58.jpg-N1EHwes6kmoE1ksudDaVzSrH1SzoJT.jpeg",
  "sharkathon-presentation":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.16_1b50cc3a.jpg-8a4tFO1aVK38cZueavAeJuPff0HAUP.jpeg",
  "sharkathon-panel":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.18_4ba93a24.jpg-A5UUN2YHdkQ54StPiKVSxM0fPu6Sgb.jpeg",

  // About page images
  "about-vision":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapinst.app_471524999_18074930983721870_5728660393963073555_n_1080%5B1%5D.jpg-vcxiTqoPzaHhALBaR7Vf5LFhLxoxJv.jpeg",
  "about-approach":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-14%20at%2009.31.05_4af1bbdd.jpg-ev8RWkuiymZJxd7zDh3KeZhgd6O0Xg.jpeg",
  "founder-rajat":
    "rajat-bg-bw.png",
  "founder-durba":
    "/durba.png",
  "founder-mayank":"/mayank-bg-bw.png",
  "founder-shalabh":"/shalabh-bg-bw.png",
  
  // Workshop images (repurposed from Programs page)
  "workshop-coding":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.16_27ff2b58.jpg-N1EHwes6kmoE1ksudDaVzSrH1SzoJT.jpeg",
  "workshop-entrepreneurship":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.16_1b50cc3a.jpg-8a4tFO1aVK38cZueavAeJuPff0HAUP.jpeg",
  "workshop-finance":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.18_4ba93a24.jpg-A5UUN2YHdkQ54StPiKVSxM0fPu6Sgb.jpeg",
  "workshop-students":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapinst.app_471524999_18074930983721870_5728660393963073555_n_1080%5B1%5D.jpg-vcxiTqoPzaHhALBaR7Vf5LFhLxoxJv.jpeg",

  // Video thumbnail
  "video-thumbnail":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2020.40.15_22d3c962.jpg-IdTTpD1iwsllTb8cVqRPf8imgAni4O.jpeg",

  // Logo
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Veriseek_Education_transparent_logo%5B1%5D-Im04SbZjcWVWMUuepPnYnfxlZs28TH.png",
}

/**
 * Get the URL for an image by its ID
 * @param id The image ID
 * @returns The image URL or a placeholder if not found
 */
export function getImageUrl(id: string): string {
  return imageMap[id] || `/placeholder.svg?height=400&width=600`
}

/**
 * Check if an image exists
 * @param id The image ID
 * @returns True if the image exists, false otherwise
 */
export function imageExists(id: string): boolean {
  return id in imageMap
}

