const preloadedProjects = new Set()
const activePreloads = []

export async function preloadProjectAssets(project) {
  if (!project) return
  if (preloadedProjects.has(project.title)) return
  preloadedProjects.add(project.title)

  const imageSrcs = [project.cover, ...(project.gallery || [])].filter(Boolean)

  // 1) Load + DECODE all images first (decode = ready to paint instantly on swap)
  await Promise.all(
    imageSrcs.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = src
          if (img.decode) {
            img.decode().then(resolve).catch(resolve)
          } else {
            img.onload = resolve
            img.onerror = resolve
          }
        })
    )
  )

  // 2) THEN start buffering videos, so they never compete with images
  project.videos?.forEach((src) => {
    const video = document.createElement('video')
    video.preload = 'auto'
    video.muted = true
    video.src = src
    video.load()
    activePreloads.push(video)
  })
}

export function preloadAllProjects(projects) {
  projects?.forEach((p) => preloadProjectAssets(p))
}