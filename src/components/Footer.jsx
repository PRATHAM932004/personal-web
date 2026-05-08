import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const email = import.meta.env.EMAIL_ADDRESS;

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/PRATHAM932004", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pratham-bhoraniya/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/PrathamB9304", label: "Twitter" },
  { icon: FiMail, href: `mailto:${email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="py-12 pb-6 bg-surface-lowest border-t border-border-subtle">
      <div className="container-main flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <a
              href="#hero"
              className="text-lg font-bold text-text-primary tracking-tight"
            >
              <span className="text-primary">&lt;</span>PB
              <span className="text-primary"> /&gt;</span>
            </a>
            <p className="text-[13px] text-text-muted mt-1">
              Building exceptional digital experiences.
            </p>
          </div>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-text-muted transition-colors duration-150 hover:text-primary"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="h-px bg-border-subtle" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Pratham Bhoraniya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
