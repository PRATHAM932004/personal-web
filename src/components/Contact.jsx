import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const ref = useRef(null);
  const form = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const recaptchaRef = useRef(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

  const email = import.meta.env.EMAIL_ADDRESS;

  const sendEmail = (e) => {
    e.preventDefault();

    if (recaptchaSiteKey && !captchaValue) {
      setSubmitStatus("captcha_required");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplateId = "template_fyrnuhl";
    const autoReplyTemplateId = "template_t76aost";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 1️⃣ Send message to YOU
    emailjs
      .send(
        serviceId,
        adminTemplateId,
        {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: form.current.message.value,
        },
        { publicKey },
      )
      .then(() => {
        // 2️⃣ Send auto-reply to USER
        return emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            name: form.current.user_name.value,
            user_email: form.current.user_email.value,
          },
          { publicKey },
        );
      })
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        form.current.reset();
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setCaptchaValue(null);
        setTimeout(() => setSubmitStatus(null), 5000);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus("error");
        console.error("FAILED...", error);
      });
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="mt-4 text-2xl font-semibold text-text-primary tracking-tight max-w-[700px] mx-auto">
            What&apos;s next? Feel free to reach out if you&apos;re looking for
            a developer, have a query, or simply want to connect.
          </h2>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center gap-12 mb-6 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 group"
              id="contact-email"
            >
              <FiMail size={24} className="text-primary" />
              <span className="text-lg font-medium text-text-primary transition-colors duration-150 group-hover:text-primary">
                {email}
              </span>
            </a>
            <div className="flex items-center gap-2" id="contact-location">
              <FiMapPin size={24} className="text-primary" />
              <span className="text-lg font-medium text-text-primary">
                Ahmedabad, India
              </span>
            </div>
          </div>

          <p className="text-[13px] text-text-muted mb-12">
            You may also find me on these platforms!
          </p>

          <div className="max-w-[600px] mx-auto">
            <form
              ref={form}
              className="flex flex-col gap-4 text-left"
              onSubmit={sendEmail}
              onChange={() => {
                if (
                  submitStatus === "error" ||
                  submitStatus === "captcha_required"
                ) {
                  setSubmitStatus(null);
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-widest text-text-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="bg-background border border-border-subtle rounded-lg px-4 py-3 text-[13px] text-text-primary outline-none transition-colors duration-150 focus:border-primary placeholder:text-text-muted/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email-input"
                    className="text-xs font-semibold uppercase tracking-widest text-text-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="user_email"
                    required
                    placeholder="you@example.com"
                    className="bg-background border border-border-subtle rounded-lg px-4 py-3 text-[13px] text-text-primary outline-none transition-colors duration-150 focus:border-primary placeholder:text-text-muted/50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold uppercase tracking-widest text-text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background border border-border-subtle rounded-lg px-4 py-3 text-[13px] text-text-primary outline-none transition-colors duration-150 focus:border-primary resize-y min-h-[120px] placeholder:text-text-muted/50"
                />
              </div>

              {recaptchaSiteKey && (
                <div className="flex flex-col gap-1.5 mb-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={(val) => {
                      setCaptchaValue(val);
                      if (submitStatus === "captcha_required")
                        setSubmitStatus(null);
                    }}
                    theme="dark"
                  />
                  {submitStatus === "captcha_required" && (
                    <span className="text-[13px] text-red-500 font-medium">
                      Please complete the CAPTCHA.
                    </span>
                  )}
                </div>
              )}

              <button
                type="submit"
                id="contact-submit"
                disabled={
                  isSubmitting ||
                  submitStatus === "error" ||
                  submitStatus === "captcha_required"
                }
                className="self-start inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-background rounded-lg font-semibold text-[13px] transition-all duration-150 hover:bg-primary-hover hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <FiSend size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="text-[13px] text-green-500 mt-2 font-medium">
                  Your message has been sent successfully! I will get back to
                  you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-[13px] text-red-500 mt-2 font-medium">
                  Failed to send the message. Please try again or use the email
                  link above.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
