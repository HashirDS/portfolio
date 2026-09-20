'use client'

export type MockupKind =
  | 'tutor'
  | 'scientist'
  | 'ielts'
  | 'pulisint'
  | 'humint'
  | 'cyberpulse'
  | 'rocketforce'
  | 'inspal'
  | 'keyboard'
  | 'localgov'
  | 'goflix'
  | 'pentest'
  | 'finetune'
  | 'chatbot'
  | 'edgeml'
  | 'tryon'
  | 'ml'
  | 'data'
  | 'database'
  | 'driver'

const TITLES: Record<MockupKind, string> = {
  tutor: 'Smart Animated Tutor classroom and teacher dashboard',
  scientist: 'I Am Scientist teacher AI tools',
  ielts: 'IELTS official training practice',
  pulisint: 'Pulisint live sentiment dashboard',
  humint: 'Humint social intelligence',
  cyberpulse: 'CyberPulse secure operational LLM',
  rocketforce: 'RocketForce analytics platform',
  inspal: 'INSPAL inspection workflows',
  keyboard: 'Text Keyboard LLM suggestions',
  localgov: 'LocalGov records and reports',
  goflix: 'GoFlix streaming platform',
  pentest: 'Security assessment report',
  finetune: 'LLM fine-tuning and API deploy',
  chatbot: 'Generative AI chatbot',
  edgeml: 'Edge ML fertiliser recommendations',
  tryon: 'Virtual try-on extension',
  ml: 'Machine learning model lab',
  data: 'Analytics and visualisation',
  database: 'MS Access database system',
  driver: 'Windows keyboard driver',
}

export default function ProjectMockup({ kind }: { kind: MockupKind }) {
  return (
    <div className="pmock" aria-hidden="true">
      <img
        className="pmock-photo"
        src={`/mockups/mockup-${kind}.png`}
        alt=""
      />
      <span className="pmock-caption">{TITLES[kind]}</span>
    </div>
  )
}
