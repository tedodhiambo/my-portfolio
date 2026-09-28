import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // 💡 Check localStorage on load. If it exists, use it. Otherwise, start at 0.
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('portfolio_likes')
    return savedLikes ? parseInt(savedLikes, 10) : 0
  })

  // 💡 Automatically save the new number to localStorage every single time it changes
  useEffect(() => {
    localStorage.setItem('portfolio_likes', likes.toString())
  }, [likes])

  const tools = [
    { name: 'JavaScript (ES6+)', category: 'Frontend Language' },
    { name: 'React 19', category: 'Frontend Framework' },
    { name: 'Go (Golang)', category: 'Backend Language' },
    { name: 'RESTful APIs', category: 'API Architecture' },
    { name: 'PostgreSQL', category: 'Production DB' },
    { name: 'SQLite', category: 'Embedded DB' },
    { name: 'Tailwind CSS v4', category: 'User Interface' }
  ]

    const interests = [
    { 
      title: 'Component & System Architecture', 
      desc: 'Designing modular, highly reusable components with React 19 on the frontend, while maintaining clean, layered package architecture and decoupled domain service handlers on the Go backend.' 
    },
    { 
      title: 'End-to-End Performance Optimization', 
      desc: 'Minimizing asset payloads, rendering overhead, and bundle sizes on the client side, while optimizing indexing strategies, concurrency pipelines, and query execution times across PostgreSQL and SQLite.' 
    },
    { 
      title: 'Responsive Flows & Seamless Data Syncing', 
      desc: 'Crafting fluid UI layouts that transition perfectly across cross-platform screens, supported by predictable, strongly typed RESTful API contracts that seamlessly synchronize application state with the backend server.' 
    },
    { 
      title: 'Accessible & Secure Web Engineering', 
      desc: 'Enforcing semantic, keyboard-navigable WCAG contrast compliance on the client layer, backed by bulletproof input validation, clean error tracing, and data integrity constraints on the relational layer.' 
    }
  ]


  return (
    <>
      {/* 1. HEADER & BIOGRAPHY SECTION */}
      <section id="center" style={{ paddingBlock: '50px 30px' }}>
        <div className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
          <img 
            src={heroImg} 
            alt="Teddy Odhiambo Profile" 
            style={{ 
              width: '140px', 
              height: '140px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '3px solid var(--accent)',
              boxShadow: 'var(--shadow)'
            }} 
          />
        </div>
        <div>
          <p className="text-accent font-mono text-sm uppercase tracking-widest font-semibold" style={{ marginBottom: '0px' }}>
            Full-Stack Software Engineer
          </p>
          <h1 style={{ marginBottom: '24px', marginTop: '24px' }} className="text-5xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">
            Teddy Odhiambo
          </h1>
        </div>

        {/* BIOGRAPHY BOX CONTAINER WITH STYLIZED QUOTES */}
        <div style={{ 
          maxWidth: '750px', 
          margin: '0 auto 32px', 
          textAlign: 'left', 
          padding: '32px 32px 24px 32px', 
          background: 'var(--code-bg)', 
          borderRadius: '12px',
          border: '1px solid var(--border)',
          position: 'relative',
          boxShadow: 'var(--shadow)'
        }}>
          {/* Decorative Quote Mark */}
          <span style={{ 
            position: 'absolute', 
            top: '-12px', 
            left: '24px', 
            fontSize: '64px', 
            color: 'var(--accent)', 
            fontFamily: 'Georgia, serif',
            lineHeight: '1',
            opacity: '0.3',
            userSelect: 'none'
          }}>“</span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 2 }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-h)', lineHeight: '1.6', fontWeight: '500', margin: 0 }}>
              Hi! I am a versatile Full-Stack Software Engineer who loves building end-to-end applications.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
              I enjoy crafting dynamic, responsive user experiences with <strong>JavaScript</strong> and <strong>React 19</strong> on the frontend, as well as architecting highly efficient backend engines, <strong>RESTful APIs</strong>, and relational data layers using <strong>Go</strong>, <strong>PostgreSQL</strong>, and <strong>SQLite</strong>.
            </p>
          </div>
        </div>
        
        <button
          type="button"
          className="counter"
          onClick={() => setLikes((prev) => prev + 1)}
          style={{ marginTop: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}
        >
          ✨ Endorse Profile: {likes}
        </button>
      </section>

      <div className="ticks"></div>

      {/* 2. TECHNICAL SKILLS SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBlock: '20px', width: '100%' }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ margin: '0 0 4px 0' }}>Technical Skills</h2>
          <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px' }}>The core languages, frameworks, and workflows I use to build production apps.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', width: '100%' }}>
          {tools.map((tool, idx) => (
            <div key={idx} style={{ 
              textAlign: 'left', 
              padding: '16px 20px', 
              background: 'var(--code-bg)', 
              borderRadius: '6px',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>{tool.name}</span>
              <code style={{ fontSize: '12px', background: 'var(--bg)', border: '1px solid var(--border)' }}>{tool.category}</code>
            </div>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      {/* 3. ENGINEERING INTERESTS SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBlock: '20px', width: '100%' }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ margin: '0 0 4px 0' }}>Engineering Interests</h2>
          <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px' }}>The concepts and domain specializations I focus heavily on during development.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          {interests.map((interest, idx) => (
            <div key={idx} style={{ 
              textAlign: 'left', 
              padding: '20px', 
              background: 'var(--bg)', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--accent)',
              borderTop: '1px solid var(--border)',
              borderRight: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
            }}>
              <h3 style={{ margin: '0 0 6px 0', color: 'var(--text-h)', fontSize: '18px' }}>{interest.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.5', margin: 0 }}>{interest.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      {/* 4. SOCIAL ACCOUNTS CONNECTIONS */}
      <section style={{ paddingBlock: '30px 20px', width: '100%', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Connect & Collaborate</h2>
          <p style={{ marginBottom: '24px', color: 'var(--text)' }}>Feel free to reach out for roles, open-source projects, or professional networking.</p>
          
          <ul style={{ 
            paddingLeft: '0', 
            listStyle: 'none', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '32px', 
            flexWrap: 'wrap',
            margin: 0
          }}>
            <li>
              <a href="https://github.com/tedodhiambo" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-h)', fontWeight: '600', textDecoration: 'none' }}>
                📁 GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/teddy-odhiambo" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: '600', textDecoration: 'none' }}>
                💼 LinkedIn
              </a>
            </li>
            
            {/* 💡 EMAIL LINK INTEGRATED INTO FOOTER LIST */}
            <li>
              <a href="oteddy18@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-h)', fontWeight: '600', textDecoration: 'none' }}>
                ✉️ Email Me
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      
      <section id="spacer" style={{ textAlign: 'center', paddingBlock: '24px', opacity: 0.5, fontSize: '14px', fontFamily: 'var(--mono)' }}>
        © {new Date().getFullYear()} • Teddy Odhiambo • Built using React & Vite
      </section>
    </>
  )
}

export default App

