import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { fadeUp } from '../animations'
import { colors, fonts } from '../theme'
import SectionBackground from './SectionBackground'

const ease = [0.22, 1, 0.36, 1]
const ACCENT = 'var(--color-accent)'
const SURFACE = 'var(--color-surface)'
const SURFACE_DARK = 'var(--color-surface-dark)'
const INK = 'var(--color-ink)'
const INK_MUTED = 'var(--color-ink-muted)'
const INK_FAINT = 'var(--color-ink-faint)'
const ON_DARK = 'var(--color-on-dark)'

/* rotating accent for category label + stack dot — purple/orange/green only */
const ACCENT_TEXT = ['text-accent', 'text-accent-orange', 'text-accent-green']
const ACCENT_BORDER = [
  'group-hover:border-accent',
  'group-hover:border-accent-orange',
  'group-hover:border-accent-green',
]

const projects = [
  {
    number: '01',
    category: 'AI APPLICATION',
    title: 'Dietary Habit Tracker',
    type: 'mobile',
    description:
      'Turns a photo into a nutrition log. Trained, not templated. \n Identifies food from photos using a custom-trained CNN and maps intake to real USDA calorie data — no manual entry required.',
    detail:"Most diet trackers rely on manual food logging — this doesn't. A MobileNetV2 classifier, trained from scratch on a 16,000-image dataset across 34 food classes, identifies meals directly from photos and reaches 77% validation accuracy. Detected foods are mapped to USDA FoodData Central for calorie estimation, with manual entry available as a fallback using serving-size-adjusted lookups.\n Backend built on FastAPI and PostgreSQL with stored procedures and triggers for analytics — daily calorie summaries, meal history trends, and dietary pattern insights are computed at the database layer, not bolted on in the app.\n Full pipeline: dataset curation → model training (Google Colab) → FastAPI serving layer → Flutter mobile client.",
    stack: 'Flutter · FastAPI · PostgreSQL · TensorFlow · USDA API',
    metrics: '77% val accuracy · 34 food classes · 16K training images',
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
    videos: [
      '/media/projects/dietary-tracker/demo-img-entry.mp4',
      '/media/projects/dietary-tracker/demo-manual-entry.mp4',
    ],
    imageAlt: 'Dietary Habit Tracker',
  },
  {
    number: '02',
    category: 'HEALTHCARE PLATFORM',
    title: 'Cure Connect',
    type: 'mobile',
    description:
      'A dual-role healthcare system connecting doctors and patients across hospitals — appointments, digital prescriptions, diagnostic records, and medication adherence tracking with real-time sync.',
    stack: 'Flutter · Firebase · Dart',
    metrics: 'Real-time sync · Dual-role system · Multi-hospital support',
    detail:"Built as a two-sided system rather than a single-user app. Doctors manage appointments, review patient history, and issue structured e-prescriptions (medication, dosage, frequency, tests) — all synced instantly to the patient side via Firebase real-time updates. \n On the patient side: search doctors by hospital, specialty, and rating; view and download prescriptions; and opt into a medication adherence tracker that sends scheduled reminders and logs daily check-ins against a prescribed treatment plan — closing the loop between what a doctor prescribes and what a patient actually follows through on.",
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
    videos: [
      '/media/projects/cure-connect/demo-doc.mp4',
      '/media/projects/cure-connect/demo-patient.mp4',
    ],
    imageAlt: 'Cure Connect Healthcare App',
  },
  {
    number: '03',
    category: 'FULL STACK PRODUCT',
    title: 'BazaarLens',
    type: 'web',
    description:
      'A cross-platform price intelligence tool that aggregates electronics listings from Amazon and Daraz, unifies them, and surfaces price trend analytics for smarter buying decisions.',
    stack: 'TypeScript · Node.js · Python · Selenium · BeautifulSoup',
    detail:"Scrapes electronics listings from Amazon and Daraz on an automated schedule (GitHub Actions), then solves the harder problem: reconciling two sources that don't agree on names, formats, or IDs into one unified product record. Repeated scrapes of the same product feed a price-history model, so trend analytics (rising/falling price, cross-platform comparison) update over time instead of resetting on every run. \nHandled real-world scraping pain: frequent DOM/field changes on both source sites breaking selectors, inconsistent image delivery, and non-deterministic listing sets between runs — all required building resilience into the matching logic rather than assuming clean, stable input.",
    metrics: 'Cross-platform price comparison · Price trend analytics · Automated scraping',
    links: [
      { label: 'Live Product', href: 'https://bazaarlenspriceanalysisplatform.netlify.app' },
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
      'Resume in, decision out — scored, routed, and scheduled with zero manual review.\n An agentic pipeline that parses resumes, scores candidates with an LLM, routes decisions across two hiring tracks, and auto-schedules interviews via Google Calendar.',
    stack: 'n8n · Mistral AI · Google Calendar API',
    metrics: 'Automated resume scoring · Conditional branching logic · Auto-scheduling interviews',
    detail:"Built and tested end-to-end on sample resume batches across two distinct hiring tracks (Software Engineer and Business Manager), each parsed and scored against track-specific criteria using the Mistral AI API. Score thresholds drive branching logic: reject, flag for manual hiring-manager review, or auto-advance to interview — the top tier triggers automatic email dispatch and Google Calendar scheduling with no human in the loop.\n Solved for score consistency across two very different resume types (technical vs. managerial) feeding into one unified results sheet, plus handling conditional edge cases in the branching logic (e.g., borderline scores, missing fields) without breaking the pipeline.",
    links: [{ label: 'GitHub', href: 'https://github.com/EmanQazii/Automated-Hiring-Workflow-n8n' }],
    cover: '/media/projects/hiring-automation/cover.PNG',
    gallery: [],
    videos: ['/media/projects/hiring-automation/demo-hiring-automation.mp4'],
    imageAlt: 'n8n Hiring Automation',
  },
]

/* ---------- animation variants ---------- */
const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const cardIn = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

/* ---------- responsive column-count hook (for modal screenshot grid) ---------- */
function useColumns(type) {
  const [cols, setCols] = useState(type === 'mobile' ? 3 : 1)

  useEffect(() => {
    if (type !== 'mobile') return
    const calc = () => {
      const w = window.innerWidth
      if (w < 480) setCols(1)
      else if (w < 768) setCols(2)
      else setCols(3)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [type])

  return cols
}

/* ---------- compact card ---------- */
function ProjectCard({ project, index, onOpen }) {
  const hasExtras =
    (project.gallery && project.gallery.length > 0) ||
    (project.videos && project.videos.length > 0)
  const accentText = ACCENT_TEXT[index % ACCENT_TEXT.length]
  const accentBorder = ACCENT_BORDER[index % ACCENT_BORDER.length]
  const stackItems = project.stack.split('·').map((s) => s.trim())

  return (
    <motion.article
      variants={cardIn}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-dark transition-colors duration-300 ${accentBorder}`}
    >
      {/* cover */}
      <div
        onClick={hasExtras ? () => onOpen(project) : undefined}
        className={`project-cover relative w-full overflow-hidden ${hasExtras ? 'cursor-pointer' : ''}`}
        style={{ aspectRatio: '16/10' }}
      >
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface">
            <span className={`${fonts.mono} text-xs tracking-widest`} style={{ color: INK_FAINT }}>
              [ mockup coming soon ]
            </span>
          </div>
        )}

        {/* number badge */}
        <span
          className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-semibold tracking-widest ${fonts.mono}`}
          style={{ background: 'rgba(10,10,10,0.6)', color: ON_DARK, backdropFilter: 'blur(6px)' }}
        >
          {project.number}
        </span>

        {hasExtras && (
          <span
            className={`absolute bottom-3 right-3 translate-y-1 rounded-full px-3 py-1 text-[10px] tracking-widest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${fonts.mono}`}
            style={{ background: 'rgba(10,10,10,0.72)', color: ON_DARK }}
          >
            VIEW DETAILS →
          </span>
        )}
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-5">
        <span
          className={`${fonts.mono} ${accentText} mb-2 text-[10px] font-semibold tracking-[0.22em]`}
        >
          {project.category}
        </span>

        <h3 className={`${fonts.display} mb-2 text-lg font-bold`} style={{ color: INK }}>
          {project.title}
        </h3>

        <p
          className="mb-4 text-sm leading-relaxed line-clamp-3"
          style={{ color: INK_MUTED }}
        >
          {project.description}
        </p>

        {/* stack chips */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {stackItems.map((tech) => (
            <span
              key={tech}
              className={`${fonts.mono} rounded border border-white/10 px-2 py-0.5 text-[10px] tracking-wide`}
              style={{ color: INK_FAINT }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="mt-auto flex flex-wrap gap-4 pt-1">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/link inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:${accentText}`}
              style={{ color: INK }}
            >
              {link.label}
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/* ---------- modal (responsive) ---------- */
function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const cols = useColumns(project?.type)

  if (!project) return null

  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.cover
      ? [project.cover]
      : []

  const navBtnStyle = {
    fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.05em',
    color: INK, background: 'none', border: '1px solid var(--color-ink-faint)',
    borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
  }
  const step = project.type === 'mobile' ? cols : 1

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'color-mix(in srgb, var(--color-surface-dark) 85%, transparent)',
        zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(8px, 3vw, 24px)',
      }}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: SURFACE, borderRadius: '20px', width: 'min(1400px,95vw)',
          height: '92vh', overflowY: 'auto', padding: 'clamp(20px, 6vw, 56px)', color: INK,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px', gap: '12px' }}>
          <h3 style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 700, color: INK, margin: 0 }}>{project.title}</h3>
          <button
            onClick={onClose}
            style={{ fontFamily: 'monospace', fontSize: '13px', color: INK_MUTED, background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
          >
            CLOSE ✕
          </button>
        </div>

        <div style={{ marginBottom: 'clamp(28px, 6vw, 48px)' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', color: ACCENT, marginBottom: '14px' }}>
            {project.category}
          </div>
          <p style={{ fontSize: 'clamp(14px, 3.6vw, 16px)', lineHeight: 1.8, color: INK_MUTED, maxWidth: '900px', marginBottom: '28px' }}>
            {project.detail}
          </p>
          <div style={{ fontSize: '13px', color: INK_FAINT, lineHeight: 1.8, marginBottom: '24px' }}>
            {project.metrics}
          </div>
        </div>

        {project.videos?.length > 0 && (
          <div style={{ marginBottom: 'clamp(32px, 7vw, 56px)' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', color: ACCENT, marginBottom: '24px' }}>
              DEMOS
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  project.type === 'mobile'
                    ? `repeat(${Math.min(project.videos.length, cols < 2 ? 1 : 2)}, 1fr)`
                    : '1fr',
                gap: '24px', alignItems: 'start',
              }}
            >
              {project.videos.map((video, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {project.type === 'mobile' ? (
                    <div
                      style={{
                        width: '100%', maxWidth: '280px', padding: '10px',
                        background: SURFACE_DARK, borderRadius: '34px',
                        border: '1px solid var(--color-ink-faint)', boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      }}
                    >
                      <video
                        src={video} controls preload="metadata"
                        style={{ width: '100%', maxHeight: '520px', objectFit: 'contain', borderRadius: '24px', background: SURFACE_DARK, display: 'block' }}
                      />
                    </div>
                  ) : (
                    <video
                      src={video} controls preload="metadata"
                      style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '18px', background: SURFACE_DARK, border: '1px solid var(--color-ink-faint)' }}
                    />
                  )}
                  <div style={{ marginTop: '14px', fontSize: '12px', color: INK_FAINT, textAlign: 'center', fontFamily: 'monospace', letterSpacing: '0.08em' }}>
                    {project.type === 'mobile'
                      ? i === 0 ? 'DEMO · USER FLOW 01' : `DEMO · USER FLOW 0${i + 1}`
                      : 'PRODUCT DEMO'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {images.length > 0 && (
          <div style={{ marginTop: 'clamp(28px, 6vw, 48px)' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.22em', color: ACCENT, marginBottom: '20px', fontWeight: 600 }}>
              SCREENSHOTS
            </div>
            <div
              style={{
                position: 'relative', width: '100%', borderRadius: '18px', overflow: 'hidden',
                background: SURFACE, border: '1px solid var(--color-ink-faint)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: project.type === 'mobile' ? '16px' : '0',
              }}
            >
              {project.type === 'mobile' ? (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap: '16px', width: '100%' }}>
                  {images.slice(index, index + cols).map((img, i) => (
                    <div key={i} style={{ background: SURFACE, borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--color-ink-faint)' }}>
                      <img src={img} alt="" style={{ width: '100%', aspectRatio: '9/11', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ background: SURFACE, borderRadius: '16px', overflow: 'hidden', width: '100%' }}>
                  <img src={images[index]} alt="" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
                </div>
              )}
            </div>

            {images.length > step && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px' }}>
                <button
                  onClick={() => setIndex(Math.max(0, index - step))}
                  disabled={index === 0}
                  style={{ ...navBtnStyle, opacity: index === 0 ? 0.4 : 1, cursor: index === 0 ? 'not-allowed' : 'pointer' }}
                >
                  ← PREV
                </button>
                <span style={{ fontFamily: 'monospace', fontSize: '12px', color: INK_FAINT, letterSpacing: '0.08em' }}>
                  {project.type === 'mobile'
                    ? `${Math.min(index + 1, images.length)}-${Math.min(index + cols, images.length)} / ${images.length}`
                    : `${index + 1} / ${images.length}`}
                </span>
                <button
                  onClick={() => setIndex(Math.min(images.length - step, index + step))}
                  disabled={index >= images.length - step}
                  style={{ ...navBtnStyle, opacity: index >= images.length - step ? 0.4 : 1, cursor: index >= images.length - step ? 'not-allowed' : 'pointer' }}
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
      className="relative overflow-hidden"
      style={{ backgroundColor: SURFACE, padding: 'clamp(56px, 12vw, 120px) 20px', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
    >
      {/* scoped responsive tweaks that inline styles can't express */}
      <style>{`
        @media (max-width: 480px) {
          .project-cover { aspect-ratio: 16/11; }
        }
      `}</style>

      {/* shared animated backdrop */}
      <SectionBackground tint="purple" />

      <div className="relative z-10" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${fonts.mono} ${colors.accentText} mb-6 flex items-center gap-3 text-xs tracking-[0.3em]`}
        >
          <span className="inline-block h-px w-8 bg-accent" />
          SELECTED WORK
        </motion.p>

        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: INK, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '12px' }}>
          Products built from idea<br />to deployment.
        </h2>
        <p style={{ fontSize: '15px', color: INK_MUTED, maxWidth: '400px', lineHeight: 1.6 }}>
          End-to-end engineering — mobile, backend, AI, and automation.
        </p>

        {/* compact 2-up grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} onOpen={setActiveProject} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </section>
  )
}