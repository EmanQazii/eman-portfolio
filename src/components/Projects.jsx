import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const ease = [0.22, 1, 0.36, 1]
const ACCENT = '#0A7E8C'

// Fill in cover / gallery / videos as you add real files to public/media/projects/...
// cover  -> single mockup image shown in the section itself
// gallery -> array of detail screenshots shown in the modal
// videos -> array of .mp4 paths shown in the modal (optional, leave empty array if none)
const projects = [
  {
    number: '01',
    category: 'AI APPLICATION',
    title: 'Dietary Habit Tracker',
    type: 'mobile',
    description:
      'A nutrition platform that identifies food from photos using a custom-trained image classifier and maps intake to USDA calorie data — giving users real dietary intelligence without manual logging.',
    stack: 'Flutter · FastAPI · PostgreSQL · TensorFlow · USDA API',
    links: [
      { label: 'Live Product', href: 'https://fooddiettracker.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/EmanQazii/FoodDietTracker' },
    ],
    cover: '/media/projects/dietary-tracker/cover.PNG',
    gallery: [
      '/media/projects/dietary-tracker/shot1.png',
      '/media/projects/dietary-tracker/shot2.png',
      '/media/projects/dietary-tracker/shot3.png',
      '/media/projects/dietary-tracker/shot4.png',
      '/media/projects/dietary-tracker/shot5.png',
      '/media/projects/dietary-tracker/shot6.png',
      '/media/projects/dietary-tracker/shot7.png',
      '/media/projects/dietary-tracker/shot8.png',
      '/media/projects/dietary-tracker/shot9.png',
    ],
    videos: ['/media/projects/dietary-tracker/demo-img-entry.mp4',
            '/media/projects/dietary-tracker/demo-manual-entry.mp4'],
    imageAlt: 'Dietary Habit Tracker',
  },
  {
    number: '02',
    category: 'HEALTHCARE PLATFORM',
    title: 'Cure Connect',
    type: 'mobile',
    description:
      'A dual-role healthcare system connecting doctors and patients across multiple hospitals — handling appointments, digital prescriptions, diagnostic records, and medication adherence in one platform.',
    stack: 'Flutter · Firebase · Dart',
    links: [{ label: 'GitHub', href: 'https://github.com/EmanQazii/ClinincBookingApp' }],
    cover: '/media/projects/cure-connect/cover.jpeg',
    gallery: [ 
      '/media/projects/cure-connect/shot1.png',
      '/media/projects/cure-connect/shot2.png',
      '/media/projects/cure-connect/shot3.png',
      '/media/projects/cure-connect/shot4.png',
      '/media/projects/cure-connect/shot5.png',
      '/media/projects/cure-connect/shot6.png',
      '/media/projects/cure-connect/shot7.png',
      '/media/projects/cure-connect/shot8.png',
      '/media/projects/cure-connect/shot9.png',
      '/media/projects/cure-connect/shot10.png',
      '/media/projects/cure-connect/shot11.png',
      '/media/projects/cure-connect/shot12.png',
      '/media/projects/cure-connect/shot13.png',
      '/media/projects/cure-connect/shot14.png',
      '/media/projects/cure-connect/shot15.png',
      '/media/projects/cure-connect/shot16.png',
      '/media/projects/cure-connect/shot17.png',
      '/media/projects/cure-connect/shot18.png',
      
    ],
    videos: ['/media/projects/cure-connect/demo-doc.mp4',
            '/media/projects/cure-connect/demo-patient.mp4'],
    imageAlt: 'Cure Connect Healthcare App',
  },
  {
    number: '03',
    category: 'FULL STACK PRODUCT',
    title: 'BazaarLens',
    type: 'web',
    description:
      'A cross-platform price intelligence tool that aggregates electronics listings from Amazon and Daraz, unifies them, and surfaces price trend analytics — helping buyers make smarter decisions.',
    stack: 'TypeScript · Node.js · Python · Selenium · BeautifulSoup',
    links: [{ label: 'Live Product', href: 'https://bazaarlenspriceanalysisplatform.netlify.app' },
      { label: 'GitHub', href: 'https://github.com/EmanQazii/BazaarLens-PriceAnalysisPlatform' },
    ],
    cover: '/media/projects/bazaarlens/cover.png',
    gallery: [
      'media/projects/bazaarlens/shot1.png',
      'media/projects/bazaarlens/shot2.png',
      'media/projects/bazaarlens/shot3.png',
      'media/projects/bazaarlens/shot4.png',
      'media/projects/bazaarlens/shot5.png',
      'media/projects/bazaarlens/shot6.png',
      'media/projects/bazaarlens/shot7.png',
      'media/projects/bazaarlens/shot8.png',
      'media/projects/bazaarlens/shot9.png',
      'media/projects/bazaarlens/shot10.png',
    ],
    videos: ['/media/projects/bazaarlens/demo-bazarlens.mp4'],
    imageAlt: 'BazaarLens Price Tracker',
  },
  {
    number: '04',
    category: 'AUTOMATION SYSTEM',
    title: 'Hiring Workflow Automation',
    type: 'web',
    description:
      'An agentic pipeline that parses resumes, scores candidates using an LLM, routes decisions across two hiring tracks, and auto-schedules interviews via Google Calendar — zero human intervention required.',
    stack: 'n8n · Mistral AI · Google Calendar API',
    links: [{ label: 'GitHub', href: 'https://github.com/EmanQazii/Automated-Hiring-Workflow-n8n' }],
    cover: '/media/projects/hiring-automation/cover.PNG',
    gallery: [],
    videos: ['/media/projects/hiring-automation/demo-hiring-automation.mp4'],
    imageAlt: 'n8n Hiring Automation',
  },
]

function ProjectVisual({ project, onOpen }) {
 const hasExtras =
  (project.gallery && project.gallery.length > 0) ||
  (project.videos && project.videos.length > 0)

  return (
    <div
      onClick={hasExtras ? onOpen : undefined}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '20px',
        border: '1px solid #e5e5e5',
        background: '#f9f9f9',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: hasExtras ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(10,126,140,0.12)'
        e.currentTarget.style.borderColor = ACCENT
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#e5e5e5'
      }}
    >
      {project.cover ? (
        <img
          src={project.cover}
          alt={project.imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#ccc', marginBottom: '12px' }}>
            {project.number}
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#d0d0d0', letterSpacing: '0.05em' }}>
            {project.imageAlt}
          </div>
          <div style={{ marginTop: '8px', fontSize: '11px', color: '#e0e0e0', fontFamily: 'monospace' }}>
            [ mockup coming soon ]
          </div>
        </div>
      )}

      {hasExtras && (
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            background: 'rgba(10,10,10,0.75)',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.08em',
            padding: '6px 12px',
            borderRadius: '20px',
          }}
        >
          VIEW DETAILS →
        </div>
      )}
    </div>
  )
}

function ProjectContent({ project }) {
  return (
    <div style={{ padding: '8px 0' }}>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        style={{ fontFamily: 'monospace', fontSize: '18px', color: '#ccc', marginBottom: '16px', letterSpacing: '0.1em' }}
      >
        {project.number}
      </motion.div>

      <motion.div
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        style={{ fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.25em', color: ACCENT, marginBottom: '14px', fontWeight: 500 }}
      >
        {project.category}
      </motion.div>

      <motion.h3
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        style={{
          fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#0a0a0a',
          lineHeight: 1.1, letterSpacing: '-1px', marginBottom: '20px',
          transition: 'color 0.25s ease', cursor: 'default',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
        onMouseLeave={e => (e.currentTarget.style.color = '#0a0a0a')}
      >
        {project.title}
      </motion.h3>

      <motion.p
        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        style={{ fontSize: '15px', color: '#666', lineHeight: 1.75, marginBottom: '24px', maxWidth: '420px' }}
      >
        {project.description}
      </motion.p>

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        style={{ fontFamily: 'monospace', fontSize: '14px', color: '#aaa', marginBottom: '28px', letterSpacing: '0.05em' }}
      >
        {project.stack}
      </motion.div>

      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px', color: '#0a0a0a', textDecoration: 'none', fontWeight: 500,
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              borderBottom: '1px solid transparent', paddingBottom: '1px',
              transition: 'color 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = ACCENT
              e.currentTarget.style.transform = 'translateX(4px)'
              e.currentTarget.style.borderColor = ACCENT
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#0a0a0a'
              e.currentTarget.style.transform = 'translateX(0)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            {link.label} →
          </a>
        ))}
      </motion.div>
    </div>
  )
}

function ProjectRow({ project, index, onOpen }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 !== 0

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  }
  const visualVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
        marginBottom: '160px',
      }}
    >
      <motion.div variants={visualVariants} style={{ order: isEven ? 2 : 1 }}>
        <ProjectVisual project={project} onOpen={() => onOpen(project)} />
      </motion.div>

      <motion.div variants={containerVariants} style={{ order: isEven ? 1 : 2 }}>
        <ProjectContent project={project} />
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  if (!project) return null

  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.cover
      ? [project.cover]
      : []

  const navBtnStyle = {
    fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.05em',
    color: '#0a0a0a', background: 'none', border: '1px solid #e5e5e5',
    borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.85)',
        zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
      }}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '24px',
          width: 'min(1400px,95vw)',
          height: '92vh',
          overflowY: 'auto',
          padding: '56px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', margin: 0 }}>{project.title}</h3>
          <button
            onClick={onClose}
            style={{ fontFamily: 'monospace', fontSize: '13px', color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            CLOSE ✕
          </button>
        </div>

        <div style={{ marginBottom: '48px' }}>
  <div
    style={{
      fontFamily: 'monospace',
      fontSize: '12px',
      letterSpacing: '0.2em',
      color: ACCENT,
      marginBottom: '14px',
    }}
  >
    {project.category}
  </div>

  <p
    style={{
      fontSize: '16px',
      lineHeight: 1.8,
      color: '#666',
      maxWidth: '900px',
      marginBottom: '28px',
    }}
  >
    {project.description}
  </p>

  <div
    style={{
      fontSize: '14px',
      color: '#999',
      lineHeight: 1.8,
      marginBottom: '24px',
    }}
  >
    {project.stack}
  </div>
</div>

 {project.videos?.length > 0 && (
  <div style={{ marginBottom: '56px' }}>
    <div
      style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        letterSpacing: '0.2em',
        color: ACCENT,
        marginBottom: '24px'
      }}
    >
      DEMOS
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          project.type === 'mobile'
            ? `repeat(${Math.min(project.videos.length, 2)}, 1fr)`
            : '1fr',
        gap: '32px',
        alignItems: 'start'
      }}
    >
      {project.videos.map((video, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {project.type === 'mobile' ? (
            <div
              style={{
                width: '100%',
                maxWidth: '280px',
                padding: '10px',
                background: '#111',
                borderRadius: '34px',
                border: '1px solid #333',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
            >
              <video
                src={video}
                controls
                preload="metadata"
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  borderRadius: '24px',
                  background: '#000',
                  display: 'block'
                }}
              />
            </div>
          ) : (
            <video
              src={video}
              controls
              preload="metadata"
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover',
                borderRadius: '18px',
                background: '#000',
                border: '1px solid #e5e5e5'
              }}
            />
          )}

          <div
            style={{
              marginTop: '14px',
              fontSize: '12px',
              color: '#888',
              textAlign: 'center',
              fontFamily: 'monospace',
              letterSpacing: '0.08em'
            }}
          >
            {project.type === 'mobile'
              ? i === 0
                ? 'DEMO · USER FLOW 01'
                : `DEMO · USER FLOW 0${i + 1}`
              : 'PRODUCT DEMO'}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{images.length > 0 && (
  <div style={{ marginTop: '48px' }}>
    {/* Section Heading */}
    <div
      style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        letterSpacing: '0.22em',
        color: ACCENT,
        marginBottom: '20px',
        fontWeight: 600,
      }}
    >
      SCREENSHOTS
    </div>

    {/* Screenshot Container */}
    <div
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: '18px',
        overflow: 'hidden',
        background: '#f8f8f8',
        border: '1px solid #ececec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
    style={{
      display: 'grid',
      gridTemplateColumns:
        project.type === 'mobile'
          ? 'repeat(3,1fr)'
          : '1fr',
      gap: '20px'
    }}
    ></div>
      {project.type === 'mobile' ? (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    }}
  >
    {images.slice(index, index + 3).map((img, i) => (
      <div
        key={i}
        style={{
          background: '#f5f5f5',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid #e5e5e5'
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            width: '100%',
            aspectRatio: '9/11',
            objectFit: 'contain'
          }}
        />
      </div>
    ))}
  </div>
) : (
  <div
    style={{
      background: '#f5f5f5',
      borderRadius: '16px',
      overflow: 'hidden'
    }}
  >
    <img
      src={images[index]}
      alt=""
      style={{
        width: '100%',
        aspectRatio: '16/9',
        objectFit: 'cover'
      }}
    />
  </div>
)}
    </div>
{/* Navigation */}
{images.length > (project.type === 'mobile' ? 3 : 1) && (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '18px',
    }}
  >
    <button
      onClick={() =>
        setIndex(
          Math.max(
            0,
            index - (project.type === 'mobile' ? 3 : 1)
          )
        )
      }
      disabled={index === 0}
      style={{
        ...navBtnStyle,
        opacity: index === 0 ? 0.4 : 1,
        cursor: index === 0 ? 'not-allowed' : 'pointer',
      }}
    >
      ← PREV
    </button>

    <span
      style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#999',
        letterSpacing: '0.08em',
      }}
    >
      {project.type === 'mobile'
        ? `${Math.min(index + 1, images.length)}-${Math.min(
            index + 3,
            images.length
          )} / ${images.length}`
        : `${index + 1} / ${images.length}`}
    </span>

    <button
      onClick={() =>
        setIndex(
          Math.min(
            images.length -
              (project.type === 'mobile' ? 3 : 1),
            index + (project.type === 'mobile' ? 3 : 1)
          )
        )
      }
      disabled={
        index >=
        images.length - (project.type === 'mobile' ? 3 : 1)
      }
      style={{
        ...navBtnStyle,
        opacity:
          index >=
          images.length - (project.type === 'mobile' ? 3 : 1)
            ? 0.4
            : 1,
        cursor:
          index >=
          images.length - (project.type === 'mobile' ? 3 : 1)
            ? 'not-allowed'
            : 'pointer',
      }}
    >
      NEXT →
    </button>
  </div>
)}
  </div>
)}
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section
      id="projects"
      style={{ backgroundColor: '#ffffff', padding: '120px 24px', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '100px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.3em', color: ACCENT, marginBottom: '16px', fontWeight: 500 }}>
            SELECTED WORK
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '12px' }}>
            Products built from idea<br />to deployment.
          </h2>
          <p style={{ fontSize: '15px', color: '#888', maxWidth: '400px', lineHeight: 1.6 }}>
            End-to-end engineering — mobile, backend, AI, and automation.
          </p>
        </div>

        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} index={i} onOpen={setActiveProject} />
        ))}
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </section>
  )
}