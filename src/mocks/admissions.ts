export type AdmissionStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

export type AdmissionDate = {
  label: string;
  period: string;
  note: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export const admissionRequirements = [
  {
    icon: "ri-graduation-cap-line",
    title: "Qualified KCPE/KPSEA Candidates",
    description:
      "Placement into Form One follows the national selection and placement process administered by the Ministry of Education.",
  },
  {
    icon: "ri-file-list-3-line",
    title: "Official Placement Letter",
    description:
      "Present your letter of admission from the national placement service, together with the required identity documents.",
  },
  {
    icon: "ri-profile-line",
    title: "Academic Records",
    description:
      "Provide primary school records and the results slip reflecting your national examination performance.",
  },
  {
    icon: "ri-heart-3-line",
    title: "Character & Conduct",
    description:
      "Applicants must demonstrate good conduct and a willingness to embrace the school's culture of discipline and service.",
  },
];

export const admissionProcedure: AdmissionStep[] = [
  {
    step: "01",
    title: "Confirm Your Placement",
    description:
      "Check your placement to Mangu High School through the official national placement portal or your primary school.",
    icon: "ri-search-eye-line",
  },
  {
    step: "02",
    title: "Gather Your Documents",
    description:
      "Prepare your placement letter, results slip, birth certificate, passport photographs and school leaving documents.",
    icon: "ri-file-copy-2-line",
  },
  {
    step: "03",
    title: "Report & Register",
    description:
      "Report on the published joining date with your documents. Registration and orientation follow immediately.",
    icon: "ri-calendar-check-line",
  },
  {
    step: "04",
    title: "Join the Community",
    description:
      "Collect your kit, settle into your house and begin your journey as a Mangu gentleman.",
    icon: "ri-home-4-line",
  },
];

export const importantDates: AdmissionDate[] = [
  {
    label: "National Placement",
    period: "Announced by the Ministry of Education",
    note: "Placement results are released nationally. Check the official portal for your school.",
  },
  {
    label: "Reporting Day",
    period: "Per the official joining instructions",
    note: "Report with all required documents and the approved school kit list.",
  },
  {
    label: "Form One Orientation",
    period: "First week after reporting",
    note: "Parents and students are introduced to academic life, boarding and pastoral care.",
  },
  {
    label: "Parents' Meeting",
    period: "End of the first term",
    note: "A formal opportunity to meet the administration and review student progress.",
  },
];

export const admissionFaqs: FaqEntry[] = [
  {
    question: "How do I apply to join Mangu High School?",
    answer:
      "Admission to Form One is through the national placement system administered by the Ministry of Education. Candidates who are placed with Mangu High School should report with their official placement letter and required documents on the published joining date.",
  },
  {
    question: "What documents should a new student bring?",
    answer:
      "Bring your official placement letter, national examination results slip, birth certificate, recent passport photographs, primary school leaving documents and any medical records required by the school. A full checklist is provided with your joining instructions.",
  },
  {
    question: "Is Mangu High School a boarding school?",
    answer:
      "Yes. Mangu is primarily a boarding school, with supervised dormitories, house systems and a structured daily routine that supports academic study and character formation.",
  },
  {
    question: "What does a student need to bring on reporting day?",
    answer:
      "A detailed kit list and reporting checklist is issued with your admission documents. It covers clothing, personal effects, bedding, stationery and other requirements. Please follow the official list closely.",
  },
  {
    question: "How much are the school fees?",
    answer:
      "Fees are set in line with government guidelines for national schools. For the current fee structure, please contact the school office directly, as figures are updated each academic year and cannot be quoted here in advance.",
  },
  {
    question: "Can I visit the school before joining?",
    answer:
      "Yes. Prospective families are welcome to contact the school office to arrange a visit during official working hours. We encourage you to see the campus and meet our community.",
  },
];

export const boardingInfo = [
  {
    icon: "ri-hotel-bed-line",
    title: "House System",
    description: "Students belong to houses that build belonging, healthy competition and leadership.",
  },
  {
    icon: "ri-restaurant-2-line",
    title: "Balanced Meals",
    description: "Nutritious, well-managed dining provisions support focus and wellbeing throughout the day.",
  },
  {
    icon: "ri-user-heart-line",
    title: "Pastoral Care",
    description: "House masters, matrons and counsellors support every student's welfare and growth.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Safety & Routine",
    description: "A structured daily programme and supervision keep students safe, settled and productive.",
  },
];