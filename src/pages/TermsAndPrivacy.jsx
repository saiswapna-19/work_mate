
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/common/StatusBar";

const sections = [
  ["Terms and Conditions:", [
    "Acceptance: By using the Work Mate app, you agree to comply with all applicable terms and conditions.",
    "Usage: This app is for personal use only and may not be used for commercial purposes without permission.",
    "Account: You are responsible for the security of your account and all activities that occur within it.",
    "Content: You must not upload content that violates copyright, privacy, or applicable laws.",
    "Changes: We reserve the right to change the terms and conditions at any time and will notify you of these changes through the app or via email.",
  ]],
  ["Privacy Policy:", [
    "Data Collection: We collect personal data such as name, email, and location to process transactions and improve our services.",
    "Data Usage: Your data is used for internal purposes such as account management, usage analysis, and service offerings.",
    "Security: We protect your data with appropriate security measures to prevent unauthorized access.",
    "Data Sharing: We do not share your personal data with third parties without your consent, except as required by law.",
    "Your Rights: You can access, update, or delete your personal data at any time through your account settings, subject to applicable laws.",
    "Data Retention: Your information is retained only for as long as necessary to provide our services and meet legal obligations.",
    "Contact: If you have questions about this Privacy Policy, please contact our support team.",
  ]],
];

export default function TermsAndPrivacy() {
  const navigate = useNavigate();

  return (
    <div className="app-container flex h-[100dvh] flex-col overflow-hidden bg-[#FAFAFF] px-5 pb-6 pt-2">
      <header className="shrink-0">
        <StatusBar />
        <h1 className="mb-6 mt-5 text-center text-[17px] font-bold leading-[22px] text-[#171827]">
          Terms & Conditions and<br />Privacy Policy
        </h1>
      </header>

      <main className="terms-scrollbar mb-5 min-h-0 flex-1 overflow-y-auto bg-white px-4 py-4 text-[11px] leading-[1.55] text-[#34364A]">
        {sections.map(([heading, paragraphs]) => (
          <section key={heading}>
            <h2 className="mb-1 font-semibold">{heading}</h2>
            {paragraphs.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
          </section>
        ))}
      </main>

      <footer className="shrink-0 space-y-2">
        <button type="button" onClick={() => navigate("/signup", { state: { termsAccepted: true } })} className="primary-button">
          I Agree
        </button>
        <button type="button" onClick={() => navigate("/signup", { state: { termsAccepted: false } })} className="outline-button">
          Decline
        </button>
      </footer>
    </div>
  );
}
