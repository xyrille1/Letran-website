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
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  .ar {
    font-family: 'DM Sans', sans-serif;
    --navy:       #001233;
    --navy-mid:   #001A4D;
    --navy-light: #002366;
    --navy-faint: rgba(0,18,51,0.05);
    --red:        #8B1A1A;
    --red-dark:   #6B1212;
    --gold:       #C9A84C;
    --gold-light: #F0D080;
    --cream:      #F4F6FA;
    --surface:    #FFFFFF;
    --border:     #DDE3EE;
    --text-1:     #001233;
    --text-2:     #3A4A6B;
    --text-3:     #7A8AA8;
    background: var(--cream);
    min-height: 100vh;
    color: var(--text-1);
    overflow-x: hidden;
  }

  /* ── KEYFRAMES ── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(26px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes slideRight {
    from { opacity:0; transform:translateX(-18px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes badgePop {
    0%   { transform:scale(0.8); opacity:0; }
    70%  { transform:scale(1.06); }
    100% { transform:scale(1);   opacity:1; }
  }
  @keyframes connectorDraw {
    from { transform:scaleY(0); transform-origin:top; }
    to   { transform:scaleY(1); transform-origin:top; }
  }
  @keyframes pulseRing {
    0%,100% { box-shadow:0 0 0 0 rgba(201,168,76,0.45); }
    50%      { box-shadow:0 0 0 8px rgba(201,168,76,0); }
  }

  /* ── HERO ── */
  .ar-hero {
    background: linear-gradient(140deg,#001233 0%,#001A4D 45%,#002060 75%,#001233 100%);
    position: relative;
    overflow: hidden;
    padding: 64px 24px 108px;
  }
  /* animated radial glow */
  .ar-hero::before {
    content:'';
    position:absolute; inset:0;
    background:
      radial-gradient(ellipse 65% 55% at 80% 15%,rgba(139,26,26,0.28) 0%,transparent 65%),
      radial-gradient(ellipse 45% 65% at 8% 85%, rgba(201,168,76,0.11) 0%,transparent 60%);
    animation: fadeIn 1.4s ease both;
  }
  /* dot grid */
  .ar-hero::after {
    content:'';
    position:absolute; inset:0;
    background-image: radial-gradient(rgba(255,255,255,0.07) 1px,transparent 1px);
    background-size: 28px 28px;
    pointer-events:none;
  }

  .ar-hero-inner {
    max-width:1100px;
    margin:0 auto;
    position:relative; z-index:2;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:32px;
    flex-wrap:wrap;
  }

  .ar-badge {
    display:inline-flex;
    align-items:center;
    gap:7px;
    background: var(--gold);
    color:#3A1F00;
    font-size:10px;
    font-weight:800;
    letter-spacing:0.12em;
    text-transform:uppercase;
    padding:7px 16px;
    border-radius:100px;
    margin-bottom:20px;
    animation: badgePop 0.65s cubic-bezier(.34,1.56,.64,1) 0.1s both;
  }
  .ar-badge svg { animation: pulseRing 2.2s ease-in-out 1.2s infinite; border-radius:50%; }

  .ar-title {
    font-family:'Playfair Display',serif;
    font-size:clamp(44px,7vw,74px);
    font-weight:900;
    color:white;
    line-height:1.04;
    margin-bottom:18px;
    letter-spacing:-0.025em;
    animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.15s both;
  }
  .ar-title span {
    background: linear-gradient(90deg,#F0D080,#C9A84C,#F0D080);
    background-size:200% auto;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation: shimmer 3.5s linear 1s infinite;
  }

  .ar-subtitle {
    color:rgba(255,255,255,0.62);
    font-size:16px;
    font-weight:300;
    font-style:italic;
    max-width:480px;
    line-height:1.8;
    animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.25s both;
  }

  .ar-contact-card {
    background:rgba(255,255,255,0.07);
    border:1px solid rgba(255,255,255,0.14);
    backdrop-filter:blur(16px);
    border-radius:18px;
    padding:24px 26px;
    min-width:230px;
    animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.35s both;
    transition: background 0.3s, border-color 0.3s, transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
  }
  .ar-contact-card:hover {
    background:rgba(255,255,255,0.11);
    border-color:rgba(201,168,76,0.38);
    transform:translateY(-4px);
    box-shadow:0 16px 40px rgba(0,0,0,0.2);
  }
  .ar-contact-label {
    font-size:10px; font-weight:700; letter-spacing:0.14em;
    text-transform:uppercase; color:var(--gold); margin-bottom:14px;
  }
  .ar-contact-item {
    display:flex; align-items:center; gap:10px;
    color:rgba(255,255,255,0.82); font-size:13px; font-weight:500;
    margin-bottom:10px;
    transition: color 0.2s, transform 0.2s;
    cursor:default;
  }
  .ar-contact-item:last-child { margin-bottom:0; }
  .ar-contact-item:hover { color:var(--gold-light); transform:translateX(3px); }
  .ar-contact-item svg { color:rgba(255,255,255,0.38); flex-shrink:0; transition:color 0.2s; }
  .ar-contact-item:hover svg { color:var(--gold); }

  /* ── LEVEL SWITCHER ── */
  .ar-switcher-wrap {
    max-width:1100px; margin:-40px auto 0; padding:0 24px;
    position:relative; z-index:10;
    animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.42s both;
  }
  .ar-switcher {
    background:white;
    border-radius:22px;
    box-shadow:0 12px 48px rgba(0,18,51,0.14), 0 2px 8px rgba(0,18,51,0.06);
    padding:8px; display:flex; gap:8px;
    border:1px solid var(--border);
  }
  .ar-level-btn {
    flex:1;
    display:flex; align-items:center; justify-content:center; gap:12px;
    padding:16px 24px; border-radius:16px;
    font-size:13px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase;
    cursor:pointer; border:none;
    background:transparent; color:var(--text-3);
    transition: all 0.32s cubic-bezier(.22,1,.36,1);
    position:relative; overflow:hidden;
  }
  .ar-level-btn::before {
    content:''; position:absolute; inset:0;
    background:var(--navy-faint); border-radius:16px;
    opacity:0; transition:opacity 0.2s;
  }
  .ar-level-btn:hover::before { opacity:1; }
  .ar-level-btn:hover { color:var(--navy); }
  .ar-level-btn svg { transition:transform 0.3s cubic-bezier(.34,1.56,.64,1); }
  .ar-level-btn:hover svg { transform:scale(1.18) rotate(-4deg); }
  .ar-level-btn.active {
    background:linear-gradient(135deg,var(--navy) 0%,var(--navy-light) 100%);
    color:white;
    box-shadow:0 6px 24px rgba(0,18,51,0.3);
    transform:scale(1.015);
  }
  .ar-level-btn.active::before { display:none; }

  /* ── MAIN GRID ── */
  .ar-main {
    max-width:1100px; margin:52px auto 0; padding:0 24px;
    display:grid; grid-template-columns:1fr 390px;
    gap:36px; align-items:start;
  }
  @media (max-width:920px) {
    .ar-main { grid-template-columns:1fr; }
    .ar-hero { padding:52px 20px 90px; }
    .ar-hero-inner { flex-direction:column; }
    .ar-contact-card { width:100%; }
  }

  /* ── SECTION HEADER ── */
  .ar-section-header {
    display:flex; align-items:center; justify-content:space-between;
    margin-bottom:32px;
    animation: fadeUp 0.5s ease 0.5s both;
  }
  .ar-section-title {
    font-family:'Playfair Display',serif;
    font-size:22px; font-weight:700; color:var(--navy);
    display:flex; align-items:center; gap:10px;
  }
  .ar-section-title svg { color:var(--red); }

  /* ── TOGGLE ── */
  .ar-toggle {
    background:#EEF1F8; border-radius:12px;
    padding:4px; display:flex; gap:2px;
  }
  .ar-toggle-btn {
    padding:8px 18px; border-radius:9px;
    font-size:12px; font-weight:700; letter-spacing:0.05em;
    cursor:pointer; border:none; background:transparent; color:var(--text-3);
    transition: all 0.25s cubic-bezier(.22,1,.36,1);
  }
  .ar-toggle-btn:hover { color:var(--navy); background:rgba(0,18,51,0.06); }
  .ar-toggle-btn.active {
    background:var(--navy); color:white;
    box-shadow:0 2px 10px rgba(0,18,51,0.28);
  }

  /* ── STEPS ── */
  .ar-steps { display:flex; flex-direction:column; }

  .ar-step {
    display:flex; gap:20px; position:relative;
    animation: slideRight 0.45s cubic-bezier(.22,1,.36,1) both;
  }
  .ar-step:nth-child(1) { animation-delay:0.55s; }
  .ar-step:nth-child(2) { animation-delay:0.68s; }
  .ar-step:nth-child(3) { animation-delay:0.81s; }
  .ar-step:nth-child(4) { animation-delay:0.94s; }

  .ar-step-left {
    display:flex; flex-direction:column; align-items:center; flex-shrink:0;
  }

  .ar-step-num {
    width:46px; height:46px; border-radius:13px;
    background:white; border:2px solid var(--border);
    display:flex; align-items:center; justify-content:center;
    font-family:'Playfair Display',serif; font-size:18px; font-weight:700;
    color:var(--text-3);
    transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
    flex-shrink:0; z-index:1; position:relative;
  }
  .ar-step:hover .ar-step-num {
    background:var(--navy); border-color:var(--navy); color:white;
    transform:rotate(-7deg) scale(1.12);
    box-shadow:0 8px 24px rgba(0,18,51,0.28);
  }

  .ar-connector {
    width:2px; flex:1;
    background:linear-gradient(to bottom,rgba(0,18,51,0.15),transparent);
    margin:5px 0; min-height:20px; border-radius:2px;
    animation: connectorDraw 0.4s ease 1.1s both;
  }
  .ar-step:last-child .ar-connector { display:none; }

  .ar-step-card {
    flex:1; background:white;
    border:1px solid var(--border); border-radius:18px;
    padding:20px 24px; margin-bottom:16px;
    transition: all 0.32s cubic-bezier(.22,1,.36,1);
    position:relative; overflow:hidden;
  }
  /* left accent bar */
  .ar-step-card::before {
    content:''; position:absolute;
    left:0; top:0; bottom:0; width:3px;
    background:linear-gradient(to bottom,var(--navy),var(--red));
    transform:scaleY(0); transform-origin:top;
    border-radius:0 2px 2px 0;
    transition: transform 0.35s cubic-bezier(.22,1,.36,1);
  }
  .ar-step:hover .ar-step-card {
    border-color:rgba(0,18,51,0.2);
    box-shadow:0 10px 36px rgba(0,18,51,0.09);
    transform:translateX(5px);
  }
  .ar-step:hover .ar-step-card::before { transform:scaleY(1); }

  .ar-step-text {
    color:var(--text-2); font-size:14px; line-height:1.75; font-weight:400;
    transition:color 0.2s;
  }
  .ar-step:hover .ar-step-text { color:var(--navy); }

  .ar-step-link-row {
    display:flex; align-items:flex-start; justify-content:space-between;
    gap:14px; flex-wrap:wrap; margin-bottom:12px;
  }
  .ar-step-link-text {
    font-size:14px; font-weight:600; color:var(--navy); flex:1; line-height:1.6;
  }
  .ar-step-link-btn {
    display:inline-flex; align-items:center; gap:6px;
    background:linear-gradient(135deg,var(--navy),var(--navy-light));
    color:white; font-size:12px; font-weight:700;
    padding:8px 16px; border-radius:10px;
    text-decoration:none; white-space:nowrap; flex-shrink:0;
    box-shadow:0 3px 10px rgba(0,18,51,0.22);
    transition: all 0.28s cubic-bezier(.22,1,.36,1);
  }
  .ar-step-link-btn:hover {
    transform:translateY(-2px) scale(1.04);
    box-shadow:0 7px 20px rgba(0,18,51,0.34);
  }
  .ar-step-link-btn svg { transition:transform 0.22s cubic-bezier(.34,1.56,.64,1); }
  .ar-step-link-btn:hover svg { transform:scale(1.22); }

  .ar-step-note {
    background:#EEF4FF; border:1px solid #BFD4FF; border-radius:11px;
    padding:11px 14px;
    display:flex; align-items:flex-start; gap:9px;
    color:#1E3A8A; font-size:13px; line-height:1.55;
    transition:background 0.2s, border-color 0.2s;
  }
  .ar-step-note:hover { background:#E0ECFF; border-color:#93C5FD; }
  .ar-step-note svg { flex-shrink:0; margin-top:1px; }

  /* ── CONTACT BLOCK ── */
  .ar-contact-block {
    background:linear-gradient(135deg,var(--navy) 0%,var(--navy-light) 100%);
    border-radius:22px; padding:30px;
    position:relative; overflow:hidden;
    margin-top:32px;
    transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
    animation: fadeUp 0.5s ease 1s both;
  }
  .ar-contact-block:hover {
    transform:translateY(-5px);
    box-shadow:0 24px 56px rgba(0,18,51,0.28);
  }
  .ar-contact-block::before {
    content:''; position:absolute;
    right:-30px; bottom:-30px;
    width:170px; height:170px;
    background:rgba(201,168,76,0.10); border-radius:50%;
    transition:transform 0.45s;
  }
  .ar-contact-block::after {
    content:''; position:absolute;
    right:50px; bottom:-55px;
    width:110px; height:110px;
    background:rgba(139,26,26,0.12); border-radius:50%;
  }
  .ar-contact-block:hover::before { transform:scale(1.18) rotate(8deg); }

  .ar-contact-block-title {
    font-size:15px; font-weight:700; color:white;
    margin-bottom:22px;
    display:flex; align-items:center; gap:10px;
    position:relative; z-index:1;
  }
  .ar-contact-block-title span {
    width:30px; height:30px; background:var(--gold);
    border-radius:50%;
    display:inline-flex; align-items:center; justify-content:center;
    font-size:15px; color:#3A1F00; font-weight:900;
    transition:transform 0.35s cubic-bezier(.34,1.56,.64,1);
  }
  .ar-contact-block:hover .ar-contact-block-title span { transform:rotate(18deg) scale(1.12); }

  .ar-contact-grid {
    display:grid; grid-template-columns:1fr 1fr;
    gap:18px; position:relative; z-index:1;
  }
  @media (max-width:480px) { .ar-contact-grid { grid-template-columns:1fr; } }

  .ar-contact-lbl {
    font-size:10px; font-weight:700; letter-spacing:0.12em;
    text-transform:uppercase; color:rgba(255,255,255,0.4); margin-bottom:5px;
  }
  .ar-contact-val {
    font-size:15px; font-weight:600; color:white; word-break:break-all;
    transition:color 0.2s;
  }
  .ar-contact-item-wrap {
    cursor:default;
    transition:transform 0.2s;
  }
  .ar-contact-item-wrap:hover { transform:translateX(4px); }
  .ar-contact-item-wrap:hover .ar-contact-val { color:var(--gold-light); }

  /* ── REQUIREMENTS PANEL ── */
  .ar-req-panel {
    background:white;
    border-radius:22px;
    border:1px solid var(--border);
    box-shadow:0 6px 30px rgba(0,18,51,0.07);
    overflow:hidden; position:sticky; top:24px;
    transition:box-shadow 0.35s, transform 0.35s;
    animation: fadeUp 0.5s ease 0.62s both;
  }
  .ar-req-panel:hover {
    box-shadow:0 14px 50px rgba(0,18,51,0.13);
    transform:translateY(-2px);
  }

  .ar-req-header {
    background:linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%);
    padding:24px 24px 20px;
  }
  .ar-req-title {
    font-family:'Playfair Display',serif;
    font-size:17px; font-weight:700; color:white;
    display:flex; align-items:center; gap:9px; margin-bottom:16px;
  }
  .ar-req-title svg { color:var(--gold); }

  .ar-cat-pills { display:flex; flex-wrap:wrap; gap:6px; }
  .ar-cat-pill {
    padding:6px 14px; border-radius:100px;
    font-size:11px; font-weight:700; letter-spacing:0.06em;
    text-transform:uppercase; cursor:pointer;
    border:1.5px solid rgba(255,255,255,0.2);
    background:transparent; color:rgba(255,255,255,0.62);
    transition: all 0.28s cubic-bezier(.22,1,.36,1);
  }
  .ar-cat-pill:hover {
    border-color:var(--gold); color:var(--gold-light);
    transform:translateY(-2px);
  }
  .ar-cat-pill.active {
    background:var(--gold); border-color:var(--gold); color:#3A1F00;
    box-shadow:0 4px 14px rgba(201,168,76,0.42);
    transform:translateY(-2px);
  }

  .ar-req-list { padding:18px 24px 4px; }
  .ar-req-item {
    display:flex; align-items:flex-start; gap:13px;
    padding:10px 10px; border-radius:10px; margin-bottom:2px;
    cursor:default;
    transition: all 0.22s cubic-bezier(.22,1,.36,1);
  }
  .ar-req-item:hover { background:rgba(0,18,51,0.04); transform:translateX(5px); }

  .ar-req-check {
    width:21px; height:21px; border-radius:7px;
    border:1.5px solid var(--border);
    display:flex; align-items:center; justify-content:center;
    flex-shrink:0; margin-top:1px;
    background:white;
    transition: all 0.22s;
  }
  .ar-req-item:hover .ar-req-check {
    border-color:var(--navy); background:rgba(0,18,51,0.06);
  }
  .ar-req-dot {
    width:8px; height:8px; background:var(--navy);
    border-radius:2px; opacity:0;
    transform:scale(0.4);
    transition: all 0.28s cubic-bezier(.34,1.56,.64,1);
  }
  .ar-req-item:hover .ar-req-dot { opacity:1; transform:scale(1); }

  .ar-req-text {
    font-size:13px; color:var(--text-2); line-height:1.55; font-weight:400;
    transition:color 0.2s;
  }
  .ar-req-item:hover .ar-req-text { color:var(--navy); }

  .ar-req-note {
    margin:8px 24px 20px;
    background:#FFFAEB; border:1px solid #FDE68A;
    border-radius:13px; padding:14px 16px;
    transition: background 0.22s, border-color 0.22s;
  }
  .ar-req-note:hover { background:#FFF5D0; border-color:#FCD34D; }
  .ar-req-note-label {
    font-size:10px; font-weight:800; letter-spacing:0.1em;
    text-transform:uppercase; color:#92400E; margin-bottom:5px;
  }
  .ar-req-note-text { font-size:12px; color:#78350F; line-height:1.55; }

  .ar-req-cta {
    display:flex; align-items:center; justify-content:center; gap:9px;
    margin:0 24px 24px;
    background:linear-gradient(135deg,var(--red) 0%,#A02020 100%);
    color:white; font-size:14px; font-weight:700;
    padding:15px 20px; border-radius:14px;
    text-decoration:none;
    box-shadow:0 5px 18px rgba(139,26,26,0.28);
    position:relative; overflow:hidden;
    transition: all 0.32s cubic-bezier(.22,1,.36,1);
  }
  .ar-req-cta::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,0.13),transparent);
    opacity:0; transition:opacity 0.2s;
  }
  .ar-req-cta:hover {
    transform:translateY(-4px);
    box-shadow:0 12px 34px rgba(139,26,26,0.4);
  }
  .ar-req-cta:hover::after { opacity:1; }
  .ar-req-cta:active { transform:translateY(0); }
  .ar-req-cta svg { transition:transform 0.28s cubic-bezier(.34,1.56,.64,1); }
  .ar-req-cta:hover svg { transform:translateX(6px); }

  /* ── FOOTER ── */
  .ar-footer {
    max-width:1100px; margin:72px auto 0;
    padding:28px 24px 44px;
    border-top:1px solid var(--border);
    display:flex; align-items:center; justify-content:center; gap:16px;
  }
  .ar-footer-line { height:1px; width:44px; background:var(--border); }
  .ar-footer-icon {
    color:var(--text-3);
    transition:color 0.3s, transform 0.35s cubic-bezier(.34,1.56,.64,1);
    cursor:default;
  }
  .ar-footer-icon:hover { color:var(--navy); transform:rotate(-10deg) scale(1.25); }
  .ar-footer-text { font-size:13px; color:var(--text-3); letter-spacing:0.01em; }
`;

export default function Admissions() {
  const [activeLevel, setActiveLevel] = useState("college");
  const [enrollmentType, setEnrollmentType] = useState("face-to-face");
  const [studentCategory, setStudentCategory] = useState("freshmen");
  const [basicEdLevel, setBasicEdLevel] = useState("preschool");

  const collegeProcedures: {
    [key: string]: (string | { text: string; link: string; subtext: string })[];
    "face-to-face": string[];
    online: (string | { text: string; link: string; subtext: string })[];
  } = {
    "face-to-face": [
      "Proceed to the Registrar's Office for pre-registration and submission of requirements.",
      "Go to the Scholarship Office for TES application and submission of requirements.",
      "Wait for verification and confirmation of your enrollment via email or messenger by the Program Head.",
      "The Enrollment Form and Assessment Form will be sent to your registered email account.",
    ],
    online: [
      {
        text: "Complete the online pre-registration form. Submission of requirements can be done via courier.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeiv8z-Hw8s1HPqbAYZ8R-z7aCobXIHcrcEz85r5WFrjqMHVA/viewform",
        subtext: "Requirements may be submitted through courier service.",
      },
      {
        text: "Access the TES scholarship application and complete all required information.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfkhuoXw7vC6Q-rrMp1hjP3wGqtMPFHvrMy82jAuT4dsa5Rmw/viewform?usp=send_form",
        subtext:
          "For verification and requirements, await a message via email or messenger from the TES Coordinator.",
      },
      "Wait for verification and confirmation of your enrollment via email or messenger by the Program Head.",
      "The Enrollment Form and Assessment Form will be sent to your registered email account.",
    ],
  };

  const basicEdProcedures = [
    "Accomplish the registration form at the Registrar's Office and wait for the printed enrollment form.",
    "Proceed to the Accounting Office to generate your assessment form.",
    "Visit the Cashier's Office to settle payment of the processing fee.",
  ];

  const collegeRequirements: {
    [key: string]: string[];
    freshmen: string[];
    transferee: string[];
    "unit-earner": string[];
  } = {
    freshmen: [
      "Form 138 (Report Card)",
      "Certificate of Good Moral Character",
      "Form 137 (Permanent Record)",
      'Two (2) 2"×2" ID Pictures',
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
      'Two (2) 2"×2" ID Pictures',
      "Photocopy of PSA Birth Certificate",
      "Photocopy of Marriage Contract (if married)",
      "Photocopy of Baptismal Certificate (if Catholic)",
      "Accomplished Registration Form",
    ],
    "unit-earner": [
      "Certificate of Eligibility to Transfer",
      "Certificate of Good Moral Character",
      "OTR (Permanent Record)",
      'Two (2) 2"×2" ID Pictures',
      "Photocopy of PSA Birth Certificate",
      "Photocopy of Marriage Contract (if married)",
      "Photocopy of Baptismal Certificate (if Catholic)",
      "Accomplished Registration Form",
    ],
  };

  const basicRequirements: {
    [key: string]: string[];
    preschool: string[];
    elementary: string[];
    jhs: string[];
    shs: string[];
  } = {
    preschool: [
      'Three (3) 1"×1" Recent ID Pictures',
      "Photocopy of PSA Authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Accomplished Enrollment Form",
    ],
    elementary: [
      'Three (3) 1"×1" Recent ID Pictures',
      "Photocopy of PSA Authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Original and Photocopy of Form 138 / Report Card (signed)",
      "Good Moral / Recommendation Letter",
    ],
    jhs: [
      'Three (3) 1"×1" Recent ID Pictures',
      "Photocopy of PSA Authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Original and Photocopy of Form 138 / Report Card (signed)",
      "Good Moral / Recommendation Letter",
    ],
    shs: [
      'Three (3) 1"×1" Recent ID Pictures',
      "Photocopy of PSA Authenticated Birth Certificate",
      "Photocopy of Baptismal Certificate",
      "Original and Photocopy of Form 138 / Report Card (signed)",
      "Good Moral / Recommendation Letter",
    ],
  };

  const procedures =
    activeLevel === "college"
      ? collegeProcedures[enrollmentType as keyof typeof collegeProcedures]
      : basicEdProcedures;

  const requirements =
    activeLevel === "college"
      ? collegeRequirements[studentCategory as keyof typeof collegeRequirements]
      : basicRequirements[basicEdLevel as keyof typeof basicRequirements];

  const contactEmail =
    activeLevel === "college"
      ? "letrancollegedean@gmail.com"
      : "rosarianletranite@gmail.com";

  return (
    <div className="ar">
      <style>{style}</style>

      {/* Hero */}
      <header className="ar-hero">
        <div className="ar-hero-inner">
          <div>
            <div className="ar-badge">
              <Sparkles size={11} />
              Now Accepting Applications
            </div>
            <h1 className="ar-title">
              Admission <span>Hub</span>
            </h1>
            <p className="ar-subtitle">
              Join the Letran legacy. Your journey to excellence begins here.
              Select your academic level to view tailored procedures.
            </p>
          </div>
          <div className="ar-contact-card">
            <p className="ar-contact-label">Quick Support</p>
            <div className="ar-contact-item"><Phone size={14} />(075) 529-0121</div>
            <div className="ar-contact-item"><Mail size={14} />letranite@gmail.com</div>
            <div className="ar-contact-item"><MapPin size={14} />Vigan City, Ilocos Sur</div>
          </div>
        </div>
      </header>

      {/* Level Switcher */}
      <div className="ar-switcher-wrap">
        <div className="ar-switcher">
          <button
            className={`ar-level-btn ${activeLevel === "college" ? "active" : ""}`}
            onClick={() => setActiveLevel("college")}
          >
            <GraduationCap size={20} />
            College
          </button>
          <button
            className={`ar-level-btn ${activeLevel === "basic-ed" ? "active" : ""}`}
            onClick={() => setActiveLevel("basic-ed")}
          >
            <BookOpen size={20} />
            GS &amp; Senior High
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="ar-main">

        {/* LEFT — Procedures */}
        <div>
          <div className="ar-section-header">
            <h2 className="ar-section-title">
              <Clock size={20} />
              Enrollment Procedures
            </h2>
            {activeLevel === "college" && (
              <div className="ar-toggle">
                <button
                  className={`ar-toggle-btn ${enrollmentType === "face-to-face" ? "active" : ""}`}
                  onClick={() => setEnrollmentType("face-to-face")}
                >
                  In-Person
                </button>
                <button
                  className={`ar-toggle-btn ${enrollmentType === "online" ? "active" : ""}`}
                  onClick={() => setEnrollmentType("online")}
                >
                  Online
                </button>
              </div>
            )}
          </div>

          <div className="ar-steps">
            {procedures.map((step: string | { text: string; link: string; subtext: string }, idx: number) => (
              <div className="ar-step" key={idx}>
                <div className="ar-step-left">
                  <div className="ar-step-num">{idx + 1}</div>
                  <div className="ar-connector" />
                </div>
                <div className="ar-step-card">
                  {typeof step === "string" ? (
                    <p className="ar-step-text">{step}</p>
                  ) : (
                    <div>
                      <div className="ar-step-link-row">
                        <p className="ar-step-link-text">{step.text}</p>
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ar-step-link-btn"
                        >
                          Open Form <ExternalLink size={12} />
                        </a>
                      </div>
                      <div className="ar-step-note">
                        <Info size={14} />
                        <span>{step.subtext}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Block */}
          <div className="ar-contact-block">
            <p className="ar-contact-block-title">
              <span>?</span>
              Have questions? Reach us directly.
            </p>
            <div className="ar-contact-grid">
              <div className="ar-contact-item-wrap">
                <p className="ar-contact-lbl">Phone</p>
                <p className="ar-contact-val">(075) 529-0121</p>
              </div>
              <div className="ar-contact-item-wrap">
                <p className="ar-contact-lbl">Email</p>
                <p className="ar-contact-val">{contactEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Requirements */}
        <div>
          <div className="ar-req-panel">
            <div className="ar-req-header">
              <h3 className="ar-req-title">
                <FileText size={18} />
                Required Documents
              </h3>
              <div className="ar-cat-pills">
                {activeLevel === "college"
                  ? ["freshmen", "transferee", "unit-earner"].map((cat) => (
                      <button
                        key={cat}
                        className={`ar-cat-pill ${studentCategory === cat ? "active" : ""}`}
                        onClick={() => setStudentCategory(cat)}
                      >
                        {cat.replace("-", " ")}
                      </button>
                    ))
                  : ["preschool", "elementary", "jhs", "shs"].map((cat) => (
                      <button
                        key={cat}
                        className={`ar-cat-pill ${basicEdLevel === cat ? "active" : ""}`}
                        onClick={() => setBasicEdLevel(cat)}
                      >
                        {cat.toUpperCase()}
                      </button>
                    ))}
              </div>
            </div>

            <div className="ar-req-list">
              {requirements.map((req: string, i: number) => (
                <div className="ar-req-item" key={i}>
                  <div className="ar-req-check">
                    <div className="ar-req-dot" />
                  </div>
                  <span className="ar-req-text">{req}</span>
                </div>
              ))}
            </div>

            <div className="ar-req-note">
              <p className="ar-req-note-label">⚠ Important Note</p>
              <p className="ar-req-note-text">
                Ensure all photocopies are clear and legible. Bring original
                copies for verification when applying in person.
              </p>
            </div>

            <a
              href={`mailto:${contactEmail}?subject=Request%20for%20Admission%20Checklist`}
              className="ar-req-cta"
            >
              Request Full Checklist
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="ar-footer">
        <div className="ar-footer-line" />
        <GraduationCap size={18} className="ar-footer-icon" />
        <p className="ar-footer-text">
          Letran College Admission Portal · Quality Catholic Dominican Education
        </p>
        <div className="ar-footer-line" />
      </footer>
    </div>
  );
}