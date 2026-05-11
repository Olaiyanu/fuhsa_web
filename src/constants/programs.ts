import { Stethoscope, HeartPulse, Microscope, Users, Activity, Layers } from 'lucide-react';

export const programs = [
  { 
    id: "medicine-surgery", 
    name: "Medicine & Surgery", 
    duration: "6 Years", 
    category: "Clinical Sciences", 
    desc: "Our flagship program designed to produce highly skilled medical doctors who are leaders in healthcare delivery and research.", 
    icon: Stethoscope, 
    degrees: "MBBS",
    fullDesc: "The Bachelor of Medicine, Bachelor of Surgery (MBBS) program at FUHSA is a comprehensive six-year course designed to equip students with the theoretical and clinical skills necessary for modern medical practice. The curriculum covers basic medical sciences, clinical rotations, and specialized research projects.",
    curriculum: [
      { year: "Year 1", focus: "Basic Sciences & GSTs (Physics, Chemistry, Biology)" },
      { year: "Year 2-3", focus: "Pre-clinical Sciences (Anatomy, Biochemistry, Physiology)" },
      { year: "Year 4-6", focus: "Clinical Rotations (Surgery, Medicine, Pediatrics, O&G)" }
    ],
    requirements: [
      "Minimum of 5 credits in O'Level (English, Math, Physics, Chemistry, Biology)",
      "JAMB score of 220+",
      "Success in University Post-UTME screening"
    ]
  },
  { 
    id: "nursing-sciences", 
    name: "Nursing Sciences", 
    duration: "5 Years", 
    category: "Allied Health", 
    desc: "Comprehensive nursing education focusing on clinical competence, community health, and professional medical ethics.", 
    icon: HeartPulse, 
    degrees: "B.N.Sc",
    fullDesc: "The Nursing Sciences program prepares students to become professional nurses with deep clinical knowledge and compassionate care standards. It integrates theoretical learning with intensive practical experience in hospital and community settings.",
    curriculum: [
      { year: "Year 1", focus: "Foundation of Nursing & Sciences" },
      { year: "Year 2-3", focus: "Medical-Surgical Nursing, Pharmacology" },
      { year: "Year 4-5", focus: "Public Health Nursing, Research, Professional Practice" }
    ],
    requirements: [
      "5 credits in O'Level (English, Math, Bio, Chem, Phys)",
      "JAMB score of 200+",
      "Professional interview and screening"
    ]
  },
  { 
    id: "public-health", 
    name: "Public Health", 
    duration: "4 Years", 
    category: "Allied Health", 
    desc: "Study the science of protecting and improving the health of communities through education, policy making and research.", 
    icon: Users, 
    degrees: "B.Sc",
    fullDesc: "The Public Health program focuses on population-wide health improvements. Students learn epidemiology, biostatistics, environmental health, and health policy to address systemic health challenges locally and globally.",
    curriculum: [
      { year: "Year 1", focus: "Common Ground in Life Sciences" },
      { year: "Year 2", focus: "Biostatistics & Health Education" },
      { year: "Year 3-4", focus: "Epidemiology, Health Policy, Community Projects" }
    ],
    requirements: [
      "5 credits in relevant O'Level subjects",
      "JAMB score of 180+"
    ]
  },
  { 
    id: "medical-lab-science", 
    name: "Medical Laboratory Science", 
    duration: "5 Years", 
    category: "Allied Health", 
    desc: "Expert training in laboratory diagnostics, hematology, and biochemical research essential for modern medicine.", 
    icon: Microscope, 
    degrees: "B.MLS",
    fullDesc: "Medical Laboratory Science is the backbone of clinical diagnosis. This program trains students in the sophisticated analysis of body fluids and tissues to aid in disease detection, treatment, and prevention.",
    curriculum: [
      { year: "Year 1-2", focus: "Basic Sciences & Pre-Laboratory Foundations" },
      { year: "Year 3-4", focus: "Hematology, Chemical Pathology, Microbiology" },
      { year: "Year 5", focus: "Professional Internship & Final Research" }
    ],
    requirements: [
      "5 O'Level credits including key sciences",
      "JAMB score of 200+"
    ]
  },
  { 
    id: "dentistry", 
    name: "Dentistry", 
    duration: "6 Years", 
    category: "Clinical Sciences", 
    desc: "Specialized training in oral health, dental surgery, and periodontics with state-of-the-art simulation labs.", 
    icon: Activity, 
    degrees: "BDS",
    fullDesc: "The BDS program focuses on oral health as a critical component of general health. Students undergo rigorous training in dental surgery, orthodontics, and restorative dentistry using our advanced clinical facilities.",
    curriculum: [
      { year: "Year 1-3", focus: "Integrated Medical Sciences" },
      { year: "Year 4", focus: "Oral Biology & Dental Materials" },
      { year: "Year 5-6", focus: "Clinical Dental Surgery & Procedures" }
    ],
    requirements: [
      "5 O'Level credits",
      "JAMB score of 220+"
    ]
  },
  { 
    id: "human-anatomy", 
    name: "Human Anatomy", 
    duration: "4 Years", 
    category: "Basic Medical", 
    desc: "Explore the structural complexities of the human body, providing a foundation for clinical and biological sciences.", 
    icon: Layers, 
    degrees: "B.Sc",
    fullDesc: "Human Anatomy deals with the structure of the human body from macro to micro levels. It provides the essential morphological foundation for all medical careers, focusing on dissection, histology, and embryology.",
    curriculum: [
      { year: "Year 1", focus: "Foundation Sciences" },
      { year: "Year 2-3", focus: "Gross Anatomy, Neuroanatomy, Histology" },
      { year: "Year 4", focus: "Advanced Anatomy & Research Project" }
    ],
    requirements: [
      "5 O'Level credits",
      "JAMB score of 180+"
    ]
  },
];
