export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  treatments: string[];
  metaDescription: string;
  keywords: string[];
  image: string;
};

export type Branch = {
  slug: "sahakar-nagar" | "kalyan-nagar";
  title: string;
  address: string;
  phones: string[];
  whatsapp: string;
  email: string;
  hours: string;
  mapUrl: string;
  neighborhoodPoints: string[];
  intro: string;
  metaDescription: string;
  keywords: string[];
  coordinates: { lat: number; lng: number };
};

export const brand = {
  name: "MyPhysioFix",
  tagline: "Premium physiotherapy and rehabilitation in Bangalore",
  heroHeading: "Specialist physiotherapy for faster, lasting recovery",
  phones: ["+91 91081 10387", "+91 808825 33291"],
  whatsapp: "+91 91081 10387",
  email: "care@myphysiofix.com",
};

export const services: Service[] = [
  {
    slug: "orthopaedic",
    title: "Orthopaedic Physiotherapy",
    summary:
      "Evidence-based rehab for back pain, neck pain, knee injuries, and post-operative recovery with manual therapy and corrective exercises.",
    description:
      "Our orthopaedic physiotherapy focuses on restoring mobility and strength with precise manual therapy, joint mobilisations, and stabilisation drills. We personalise exercise progressions so you regain confidence with every step.",
    highlights: [
      "Spine, shoulder, hip, and knee pain mapping with movement screens",
      "Post-surgical rehab for ACL, rotator cuff, and joint replacements",
      "Ergonomic coaching to prevent recurring pain at work",
      "Foot and gait analysis for runners and walkers",
    ],
    treatments: [
      "Manual therapy and joint mobilisation",
      "Dry needling and trigger-point release",
      "Kinesio taping for stability",
      "Strength and conditioning programs",
      "Electrotherapy and heat/cold therapy",
    ],
    metaDescription:
      "Orthopaedic physiotherapy in Bangalore for knee, back, neck, and shoulder pain. Post-operative rehab and pain relief at MyPhysioFix clinics in Sahakar Nagar and Kalyan Nagar.",
    keywords: [
      "orthopaedic physiotherapy Bangalore",
      "knee pain physio Sahakar Nagar",
      "back pain clinic Kalyan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "neuro",
    title: "Neuro Rehabilitation",
    summary:
      "Specialised neuro rehab for stroke, Parkinson’s, and nerve injuries with balance re-training and functional mobility plans.",
    description:
      "We combine task-specific training, neuromuscular re-education, and balance therapy to help you regain independence after stroke or neurological events. Our therapists guide you through safe, progressive routines that rebuild confidence.",
    highlights: [
      "Stroke and spinal cord injury rehab pathways",
      "Balance, coordination, and gait retraining",
      "Hand therapy and fine motor recovery",
      "Family education for at-home support",
    ],
    treatments: [
      "Neurodevelopmental techniques",
      "Dynamic balance and vestibular exercises",
      "Functional electrical stimulation",
      "Constraint-induced movement therapy",
      "Assistive device training",
    ],
    metaDescription:
      "Neuro physiotherapy for stroke, Parkinson’s, and nerve injuries in Bangalore. Regain balance and mobility with MyPhysioFix neuro rehab specialists.",
    keywords: [
      "neuro rehab Bangalore",
      "stroke physiotherapy Sahakar Nagar",
      "Parkinson’s physio Kalyan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1520170350709-04073e3d3327?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "paediatric",
    title: "Paediatric Physiotherapy",
    summary:
      "Gentle, play-led therapy for developmental delays, cerebral palsy, and post-injury recovery in children.",
    description:
      "Children respond best to therapy that feels like play. We create safe, colourful sessions with sensory integration, balance work, and milestone-focused plans so every child advances with joy and confidence.",
    highlights: [
      "Milestone tracking and developmental check-ins",
      "Therapy for cerebral palsy, torticollis, and clubfoot",
      "Family education for home-based practice",
      "Sensory and balance circuits built for kids",
    ],
    treatments: [
      "Neurodevelopmental play therapy",
      "Balance and coordination drills",
      "Strength and endurance training",
      "Gait training and orthotic guidance",
      "Respiratory physio for paediatric care",
    ],
    metaDescription:
      "Paediatric physiotherapy in Bangalore for developmental delays, cerebral palsy, and post-injury rehab. Kid-friendly sessions at MyPhysioFix clinics.",
    keywords: [
      "paediatric physiotherapy Bangalore",
      "child physio Sahakar Nagar",
      "cerebral palsy therapy Kalyan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sports-rehab",
    title: "Sports Rehabilitation",
    summary:
      "Return-to-sport programs for runners, cyclists, footballers, and weekend athletes with performance testing and injury prevention.",
    description:
      "From acute injuries to performance plateaus, we combine strength diagnostics, plyometrics, and recovery science so athletes return stronger. We tailor run analysis, load management, and stability work to your sport.",
    highlights: [
      "Return-to-sport protocols for ACL, ankle, and hamstring injuries",
      "Running gait analysis with corrective drills",
      "Load management to prevent burnout",
      "Mobility screening and activation routines",
    ],
    treatments: [
      "Sports taping and bracing",
      "Plyometric and agility training",
      "Strength and conditioning for sport",
      "Myofascial release and cupping",
      "Recovery sessions (cryotherapy/heat)",
    ],
    metaDescription:
      "Sports physio and return-to-sport rehab in Bangalore for runners and athletes. Performance-focused care at MyPhysioFix clinics.",
    keywords: [
      "sports physiotherapy Bangalore",
      "ACL rehab Sahakar Nagar",
      "running gait analysis Kalyan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "womens-health",
    title: "Women’s Health Physiotherapy",
    summary:
      "Pelvic floor therapy, prenatal/postnatal care, diastasis correction, and pain relief with discreet, specialised care.",
    description:
      "Certified women’s health physiotherapists support you through pregnancy, postpartum recovery, pelvic floor strengthening, and pain-free movement. We prioritise privacy, comfort, and clear guidance.",
    highlights: [
      "Prenatal and postnatal pain relief and stability",
      "Pelvic floor and incontinence therapy",
      "Diastasis recti recovery and core retraining",
      "Posture coaching for working mothers",
    ],
    treatments: [
      "Pelvic floor rehabilitation",
      "Breathwork and core stability training",
      "Manual therapy for pelvic and back pain",
      "Postnatal strength circuits",
      "Ergonomic coaching for breastfeeding and work",
    ],
    metaDescription:
      "Women’s health physiotherapy in Bangalore for pelvic floor care, prenatal and postnatal recovery. Confidential sessions at MyPhysioFix.",
    keywords: [
      "women’s health physio Bangalore",
      "pelvic floor therapy Sahakar Nagar",
      "postnatal physiotherapy Kalyan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "geriatric-care",
    title: "Geriatric Care",
    summary:
      "Balance training, fall prevention, arthritis pain relief, and safe strength programs for seniors.",
    description:
      "Age gracefully with programs that improve balance, reduce pain, and build confidence in daily tasks. We focus on joint protection, safe mobility, and endurance so you stay independent.",
    highlights: [
      "Fall risk screening and home-safety guidance",
      "Arthritis pain relief and flexibility routines",
      "Post-fracture and post-surgery rehab",
      "Breathing and endurance training",
    ],
    treatments: [
      "Balance and vestibular therapy",
      "Strength and stability circuits",
      "Manual therapy for stiffness",
      "Electrotherapy for pain relief",
      "Gait training with assistive devices",
    ],
    metaDescription:
      "Senior-friendly physiotherapy in Bangalore for balance, arthritis, and fall prevention. Compassionate geriatric care at MyPhysioFix.",
    keywords: [
      "geriatric physiotherapy Bangalore",
      "arthritis physio Sahakar Nagar",
      "fall prevention Kalyan Nagar",
    ],
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
];

export const modalities = [
  {
    title: "Advanced manual therapy",
    body: "Precise joint and soft-tissue mobilisation to restore movement and relieve pain quickly.",
  },
  {
    title: "Dry needling & cupping",
    body: "Trigger point release for stubborn muscle knots and faster recovery between sessions.",
  },
  {
    title: "Electrotherapy suite",
    body: "IFT, TENS, ultrasound, and laser for targeted pain modulation and tissue healing.",
  },
  {
    title: "Movement labs",
    body: "Gait, posture, and balance assessments with corrective drills to prevent reinjury.",
  },
  {
    title: "Strength & conditioning",
    body: "Sport-specific load progressions with mobility and activation so you can train smarter.",
  },
];

export const testimonials = [
  {
    name: "Roshni, 34 – IT professional",
    quote:
      "I dragged a chronic neck pain for months. Two weeks with MyPhysioFix and I was sleeping without pain and working longer without strain.",
  },
  {
    name: "Arvind, 42 – Recreational runner",
    quote:
      "They analysed my running form, fixed my knee pain, and built a plan that actually fits my work schedule. I’m back to 10Ks confidently.",
  },
  {
    name: "Meera, new mom",
    quote:
      "The women’s health physio was reassuring and knowledgeable. My postnatal recovery and pelvic floor strength improved in a month.",
  },
];

export const faqs = [
  {
    question: "Do I need a doctor’s referral?",
    answer:
      "No. You can book directly. If we notice red flags, we coordinate with your doctor and provide a summary.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most patients feel relief within 3–5 sessions. Complex cases may need 6–10 visits. You’ll get a clear roadmap on day one.",
  },
  {
    question: "Do you offer home visits?",
    answer:
      "Yes, for post-surgery and limited mobility cases near Sahakar Nagar and Kalyan Nagar. Call us to schedule.",
  },
  {
    question: "Is treatment painful?",
    answer:
      "Therapy shouldn’t hurt. You may feel mild soreness after strength work, but we keep discomfort low and monitored.",
  },
];

export const branches: Branch[] = [
  {
    slug: "sahakar-nagar",
    title: "MyPhysioFix Sahakar Nagar",
    address:
      "1st Floor, Above MedPlus, 80 Feet Road, Sahakar Nagar, Bangalore 560092",
    phones: ["+91 91081 10387"],
    whatsapp: "+91 91081 10387",
    email: "care@myphysiofix.com",
    hours: "Mon–Sat: 7:00 AM – 9:00 PM, Sun: 8:00 AM – 1:00 PM",
    mapUrl:
      "https://www.google.com/maps/place/Sahakar+Nagar,+Bengaluru,+Karnataka",
    neighborhoodPoints: [
      "Close to Hebbal, Kempapura, and Kodigehalli",
      "Parking available near the clinic",
      "Home visits within north Bangalore on request",
    ],
    intro:
      "A bright, calming space equipped with advanced modalities and private treatment bays. Perfectly located for north Bangalore residents and commuters.",
    metaDescription:
      "Visit MyPhysioFix Sahakar Nagar for expert physiotherapy in north Bangalore. Near Hebbal and Kodigehalli with extended morning and evening slots.",
    keywords: [
      "physiotherapy Sahakar Nagar",
      "physio clinic Hebbal",
      "pain relief Kodigehalli",
    ],
    coordinates: { lat: 13.0596, lng: 77.5917 },
  },
  {
    slug: "kalyan-nagar",
    title: "MyPhysioFix Kalyan Nagar",
    address:
      "2nd Floor, HRBR Layout, Kalyan Nagar, Bangalore 560043 (above a landmark cafe)",
    phones: ["+91 808825 33291"],
    whatsapp: "+91 808825 33291",
    email: "care@myphysiofix.com",
    hours: "Mon–Sat: 7:00 AM – 9:00 PM, Sun: 8:00 AM – 1:00 PM",
    mapUrl:
      "https://www.google.com/maps/place/Kalyan+Nagar,+Bengaluru,+Karnataka",
    neighborhoodPoints: [
      "Walkable from HRBR Layout and Kammanahalli",
      "Evening and early morning appointments available",
      "Sports rehab and running assessments onsite",
    ],
    intro:
      "Purpose-built for sports and post-operative rehab with spacious treatment rooms, recovery tools, and a strength corner.",
    metaDescription:
      "Book physiotherapy at MyPhysioFix Kalyan Nagar. Accessible to HRBR Layout, Kammanahalli, and Horamavu with sport-specific rehab facilities.",
    keywords: ["physiotherapy Kalyan Nagar", "HRBR Layout physio clinic"],
    coordinates: { lat: 13.0216, lng: 77.6416 },
  },
];

export const blogPosts = [
  {
    slug: "beat-back-pain-from-desks",
    title: "Beat back pain from long hours at your desk",
    description:
      "Quick resets, ergonomic fixes, and strength moves you can do without leaving your workstation.",
    date: "2025-01-15",
    readTime: "4 min",
    tags: ["Back Pain", "Ergonomics", "Work From Home"],
    body: [
      "Most desk-related back pain comes from repetition, not a single bad posture. Aim for micro-movements every 30–45 minutes.",
      "Anchor your setup: screen at eye level, hips and knees at 90 degrees, feet supported. Swap between sitting and standing if you can.",
      "Daily moves that matter: cat-camel, thoracic rotation, hip flexor stretches, and light core bracing. Two minutes each, twice a day.",
      "If pain lingers beyond a week or shoots down your leg, get a physio assessment. We’ll check nerve tension, strength imbalances, and give a clear plan.",
    ],
  },
  {
    slug: "acl-rehab-roadmap",
    title: "Your ACL rehab roadmap, simplified",
    description:
      "From surgery to sport, here’s what to expect and how to track milestones confidently.",
    date: "2025-02-02",
    readTime: "5 min",
    tags: ["ACL Rehab", "Sports", "Return to Play"],
    body: [
      "Weeks 1–2: Reduce swelling, restore knee extension, and activate quads. Gentle heel slides and patellar mobilisations are key.",
      "Weeks 3–6: Regain balance and single-leg control. Add mini-squats, step-downs, and light cycling when cleared.",
      "Weeks 7–12: Strengthen aggressively with split squats, RDLs, and lateral work. Start light jogging if mechanics are clean.",
      "Months 3–6: Power and agility. Hop progressions, deceleration drills, and sport-specific cutting with therapist oversight.",
    ],
  },
  {
    slug: "pregnancy-pain-relief",
    title: "Pregnancy pain relief that’s actually safe",
    description:
      "Bump-friendly tips to ease back, hip, and neck discomfort with simple routines.",
    date: "2025-02-18",
    readTime: "3 min",
    tags: ["Women’s Health", "Prenatal", "Pain Relief"],
    body: [
      "Use side-sleeping with a pillow between knees. It unloads the pelvis and supports the lower back.",
      "Daily breathing drills with gentle pelvic floor engagement reduce stiffness and swelling.",
      "Avoid holding one posture too long. Micro-walks and light hip circles keep joints nourished.",
      "If you feel numbness, heaviness, or sharp pain, book a session. We’ll customise safe exercises and manual therapy.",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Consultant-led care",
    description:
      "Every plan is overseen by senior physiotherapists with hospital and sports medicine experience.",
  },
  {
    title: "Transparent recovery roadmap",
    description:
      "Know exactly what happens each week with milestones, home plans, and progress check-ins.",
  },
  {
    title: "Clinics built for comfort",
    description:
      "Private bays, calming colours, and clean air so you can focus on recovery, not waiting-room stress.",
  },
  {
    title: "Tech-enabled tracking",
    description:
      "Session summaries, reminders, and WhatsApp follow-ups keep you on track between visits.",
  },
];
