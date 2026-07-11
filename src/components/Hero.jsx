import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 opacity-10 rounded-full blur-[120px] pointer-events-none" />

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-400 text-lg font-mono mb-4 tracking-widest"
      >
        Hi, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
      >
        Eman Qazi
      </motion.h1>

      {/* Typing animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6 h-10"
      >
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'Mobile App Developer',
            2000,
            'AI Integration Engineer',
            2000,
            'Automation Engineer',
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
      >
        I build AI-integrated mobile and web applications, from custom-trained ML models to full-stack deployments.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        
         <a href="#projects"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          View My Work
        </a>
        
        <a  href="#contact"
          className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm font-mono">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-blue-600"
        />
      </motion.div>

    </section>
  )
}