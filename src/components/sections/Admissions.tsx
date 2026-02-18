"use client";

import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Phone,
  Mail,
  ArrowRight,
  Info,
  Clock,
  FileText,
} from "lucide-react";

type ActiveLevel = "college" | "basic-ed";
type EnrollmentType = "face-to-face" | "online";
type StudentCategory = "freshmen" | "transferee" | "unit-earner";
type BasicEdLevel = "preschool" | "elementary" | "jhs" | "shs";

type OnlineProcedureStep = {
  text: string;
  link: string;
  subtext: string;
};

type ProcedureStep = string | OnlineProcedureStep;

export default function Admissions() {
  const [activeLevel, setActiveLevel] = useState<ActiveLevel>("college");
  const [enrollmentType, setEnrollmentType] =
    useState<EnrollmentType>("face-to-face");
  const [studentCategory, setStudentCategory] =
    useState<StudentCategory>("freshmen");
  const [basicEdLevel, setBasicEdLevel] = useState<BasicEdLevel>("preschool");

  const collegeProcedures: Record<EnrollmentType, ProcedureStep[]> = {
    "face-to-face": [
      "Proceed to Registrar’s Office for pre-registration and submission of requirements.",
      "Go to Scholarship Office for TES application and submission of requirements.",
      "Wait for the verification and confirmation of your enrollment via email or messenger by the Program Head.",
      "The Enrollment Form and Assessment Form will be sent through your email account.",
    ],
    online: [
      {
        text: "Open the enrollment link for pre-registration.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeiv8z-Hw8s1HPqbAYZ8R-z7aCobXIHcrcEz85r5WFrjqMHVA/viewform",
        subtext: "The submission of requirements can be done through courier.",
      },
      {
        text: "Access the TES scholarship application link and complete the information needed.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfkhuoXw7vC6Q-rrMp1hjP3wGqtMPFHvrMy82jAuT4dsa5Rmw/viewform?usp=send_form",
        subtext:
          "For verification and submission of requirements, please wait for the message via email or messenger by the TES Coordinator.",
      },
      "Wait for the verification and confirmation of your enrollment via email or messenger by the Program Head.",
      "The Enrollment Form and Assessment Form will be sent through your email account.",
    ],
  };

  const basicEdProcedures: string[] = [
    "Accomplish the registration form from the Registrar’s Office and wait for the printed enrolment form.",
    "Proceed to the Accounting Office to generate the assessment form.",
    "Proceed to the Cashier for payment of the processing fee.",
  ];

  const collegeRequirements: Record<StudentCategory, string[]> = {
    freshmen: [
      "Form 138 (Report Card)",
      "Certificate of Good Moral Character",
      "Form 137 (Permanent Record)",
      'Two (2) 2"X2" Pictures',
      "Photocopy of PSA Birth Certificate",
      "Photocopy of Marriage Contract (if married)",
      "Photocopy of Baptismal Certificate (if Catholic)",
      "Accomplished Registration Form",
    ],
    transferee: [
      "Transfer Credential (Honorable Dismissal)",
      "Certificate of Good Moral Character",
      "Certified True Copy of Grades",
      "OTR (Permanent Record)",
      'Two (2) 2"X2" Pictures',
      "Photocopy of PSA Birth Certificate",
      "Photocopy of Marriage Contract (if married)",
      "Photocopy of Baptismal Certificate (if Catholic)",
      "Accomplished Registration Form",
    ],
    "unit-earner": [
      "Certificate of Eligibility to Transfer",
      "Certificate of Good Moral Character",
      "OTR (Permanent Record)",
      'Two (2) 2"X2" Pictures',
      "Photocopy of PSA Birth Certificate",
      "Photocopy of Marriage Contract (if married)",
      "Photocopy of Baptismal Certificate (if Catholic)",
      "Accomplished Registration Form",
    ],
  };

  const basicRequirements: Record<BasicEdLevel, string[]> = {
    preschool: [
      'Three (3) 1"x1" recent ID pictures',
      "Photocopy of PSA authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Accomplished Enrollment Form",
    ],
    elementary: [
      'Three (3) 1"x1" recent ID pictures',
      "Photocopy of PSA authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Original and photocopy of Form 138 / Report Card (signed)",
      "Good Moral / Recommendation Letter",
    ],
    jhs: [
      'Three (3) 1"x1" recent ID pictures',
      "Photocopy of PSA authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Original and photocopy of Form 138 / Report Card (signed)",
      "Good Moral / Recommendation Letter",
    ],
    shs: [
      'Three (3) 1"x1" recent ID pictures',
      "Photocopy of PSA authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Original and photocopy of Form 138 / Report Card (signed)",
      "Good Moral / Recommendation Letter",
    ],
  };

  const procedures =
    activeLevel === "college"
      ? collegeProcedures[enrollmentType]
      : basicEdProcedures;

  const requirements =
    activeLevel === "college"
      ? collegeRequirements[studentCategory]
      : basicRequirements[basicEdLevel];

  return (
    <section
      id="admissions"
      className="min-h-screen bg-neutral-50 font-sans text-slate-900 pb-20"
    >
      <header className="bg-red-900 text-white py-12 px-6 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <GraduationCap size={400} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-yellow-500 text-red-900 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                Now Accepting Applications
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                Admission <span className="text-yellow-400">Hub</span>
              </h1>
              <p className="text-red-100 text-lg md:text-xl max-w-2xl font-light">
                Join the Letran legacy. Your journey to excellence starts with a
                simple step. Select your path below to view specific procedures.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-80">
                Quick Support
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} /> (075) 529-0121
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} /> letranite@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto -mt-8 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-center border border-slate-100">
          <button
            onClick={() => setActiveLevel("college")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 w-full md:w-auto font-bold ${
              activeLevel === "college"
                ? "bg-red-800 text-white scale-105 shadow-lg shadow-red-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <GraduationCap size={24} />
            COLLEGE
          </button>
          <button
            onClick={() => setActiveLevel("basic-ed")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 w-full md:w-auto font-bold ${
              activeLevel === "basic-ed"
                ? "bg-red-800 text-white scale-105 shadow-lg shadow-red-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <BookOpen size={24} />
            GS &amp; SENIOR HIGH
          </button>
        </div>
      </section>

      <main className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Clock className="text-red-700" size={28} />
              Admission Procedures
            </h2>

            {activeLevel === "college" && (
              <div className="flex p-1 bg-slate-200 rounded-xl">
                <button
                  onClick={() => setEnrollmentType("face-to-face")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    enrollmentType === "face-to-face"
                      ? "bg-white text-red-800 shadow-sm"
                      : "text-slate-600 hover:text-red-700"
                  }`}
                >
                  Face-to-Face
                </button>
                <button
                  onClick={() => setEnrollmentType("online")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    enrollmentType === "online"
                      ? "bg-white text-red-800 shadow-sm"
                      : "text-slate-600 hover:text-red-700"
                  }`}
                >
                  Online
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>
            <div className="space-y-8">
              {procedures.map((step, idx) => (
                <div key={idx} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center z-10 group-hover:border-red-500 transition-colors duration-300">
                    <span className="text-xl font-bold text-slate-400 group-hover:text-red-600">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    {typeof step === "string" ? (
                      <p className="text-slate-700 leading-relaxed font-medium">
                        {step}
                      </p>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <p className="text-slate-700 font-bold">
                            {step.text}
                          </p>
                          <a
                            href={step.link}
                            className="inline-flex items-center text-red-600 hover:underline text-sm gap-1 group/link font-bold"
                          >
                            Open Link
                            <ArrowRight
                              size={14}
                              className="group-hover/link:translate-x-1 transition-transform"
                            />
                          </a>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-700 rounded-xl text-sm flex items-start gap-2">
                          <Info size={16} className="mt-0.5 shrink-0" />
                          <span>{step.subtext}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Phone size={120} />
            </div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 text-sm">
                ?
              </span>
              Have questions?
            </h4>
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-1">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                  Contact Number
                </p>
                <p className="text-xl font-semibold">(075) 529-0121</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                  Email Support
                </p>
                <p className="text-lg font-semibold truncate">
                  {activeLevel === "college"
                    ? "letrancollegedean@gmail.com"
                    : "rosarianletranite@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden sticky top-8">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText size={20} className="text-red-700" />
                Required Documents
              </h3>

              {activeLevel === "college" ? (
                <div className="flex flex-wrap gap-2 mt-4">
                  {(
                    [
                      "freshmen",
                      "transferee",
                      "unit-earner",
                    ] as StudentCategory[]
                  ).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setStudentCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        studentCategory === cat
                          ? "bg-red-800 text-white"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                      }`}
                    >
                      {cat.replace("-", " ")}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 mt-4">
                  {(
                    ["preschool", "elementary", "jhs", "shs"] as BasicEdLevel[]
                  ).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setBasicEdLevel(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        basicEdLevel === cat
                          ? "bg-red-800 text-white"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
                  >
                    <div className="mt-1 w-5 h-5 rounded-md border-2 border-slate-200 flex items-center justify-center group-hover:border-red-400 transition-colors shrink-0">
                      <div className="w-2 h-2 bg-red-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">
                      {req}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
                <p className="text-xs text-yellow-800 font-bold uppercase tracking-widest mb-1">
                  Important Note
                </p>
                <p className="text-xs text-yellow-700 leading-relaxed italic">
                  Please ensure all photocopies are clear and authentic. Bring
                  original copies for verification if applying in person.
                </p>
              </div>

              <a
                href="mailto:letrancollegedean@gmail.com?subject=Request%20for%20Admission%20Checklist"
                className="w-full mt-6 py-4 bg-red-800 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-900 transition-all shadow-lg shadow-red-100"
              >
                Download Full Checklist
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
            <div className="h-px w-12 bg-slate-200"></div>
            <GraduationCap size={20} />
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            Letran College Admission Portal • Quality Catholic Dominican
            Education
          </p>
        </div>
      </footer>
    </section>
  );
}
