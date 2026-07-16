const preloadedProjects = new Set()

// keep video elements alive briefly so the browser actually buffers them
const activePreloads = []

export function preloadProjectAssets(project) {
  if (!project) return
  // avoid repeated work per project
  if (preloadedProjects.has(project.title)) return
  preloadedProjects.add(project.title)

  // preload cover first (it's the most visible)
  if (project.cover) {
    const cover = new Image()
    cover.src = project.cover
  }

  // preload ALL gallery images (modal shows the full set)
  project.gallery?.forEach((src) => {
    const img = new Image()
    img.src = src
  })

  // preload videos — create detached elements and start buffering
  project.videos?.forEach((src) => {
    const video = document.createElement('video')
    video.preload = 'auto'
    video.muted = true
    video.src = src
    video.load()
    // hold a reference so it isn't garbage-collected mid-buffer
    activePreloads.push(video)
  })
}

// optional: preload everything up front (call once on mount if you want)
export function preloadAllProjects(projects) {
  projects?.forEach(preloadProjectAssets)
}