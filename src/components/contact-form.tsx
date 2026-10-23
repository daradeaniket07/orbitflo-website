"use client";

import { useEffect, useState, type FormEvent } from "react";
import { servicesPage } from "@/config/services";
import { site } from "@/config/site";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  need: string;
  message: string;
  botcheck: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "need" | "message", string>>;

const emptyValues: FormValues = { name: "", email: "", phone: "", need: "", message: "", botcheck: "" };
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [packageId, setPackageId] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const requestedPackage = new URLSearchParams(window.location.search).get("package") ?? "";
    if (!servicesPage.packages.items.some(({ id }) => id === requestedPackage)) return;
    setPackageId(requestedPackage);
    const packageNeed = site.contactPage.form.packageNeeds[requestedPackage as keyof typeof site.contactPage.form.packageNeeds];
    setValues((current) => ({
      ...current,
      need: packageNeed ?? site.contactPage.form.needs.at(-1) ?? "",
    }));
  }, []);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (field in errors) setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const validate = () => {
    const nextErrors: FieldErrors = {};
    if (!values.name.trim()) nextErrors.name = site.contactPage.form.nameError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = site.contactPage.form.emailError;
    if (!values.need) nextErrors.need = site.contactPage.form.needError;
    if (!values.message.trim()) nextErrors.message = site.contactPage.form.messageError;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    if (values.botcheck) {
      setStatus("success");
      return;
    }

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setIsSending(true);
    const selectedPackage = servicesPage.packages.items.find(({ id }) => id === packageId);
    const subject = selectedPackage
      ? `${site.contactPage.form.subject} — ${selectedPackage.title} package`
      : site.contactPage.form.subject;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: values.name.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          need: values.need,
          message: values.message.trim(),
          botcheck: values.botcheck,
        }),
      });
      const result = await response.json() as { success?: boolean };
      setStatus(response.ok && result.success ? "success" : "error");
      if (response.ok && result.success) setValues(emptyValues);
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  const packageTitle = servicesPage.packages.items.find(({ id }) => id === packageId)?.title;

  return (
    <div className="contact-form-panel">
      <h2>{site.contactPage.form.title}</h2>
      {packageTitle && (
        <p className="package-enquiry-note">
          {site.contactPage.form.packageNote.replace("{package}", packageTitle)}
        </p>
      )}
      {!accessKey && (
        <p className="form-fallback-note" role="status">
          {site.contactPage.form.missingKey} <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> ·{" "}
          <a href={site.contact.whatsapp} rel="noopener noreferrer" target="_blank">{site.contactPage.cards.whatsapp}</a>
        </p>
      )}
      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="honeypot-field" aria-hidden="true">
          <label htmlFor="contact-website">{site.contactPage.form.honeypotLabel}</label>
          <input
            autoComplete="off"
            id="contact-website"
            name="website"
            onChange={(event) => updateValue("botcheck", event.target.value)}
            tabIndex={-1}
            value={values.botcheck}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-name">{site.contactPage.form.name}</label>
          <input
            autoComplete="name"
            id="contact-name"
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            required
            value={values.name}
          />
          {errors.name && <span className="field-error" id="contact-name-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">{site.contactPage.form.email}</label>
          <input
            autoComplete="email"
            id="contact-email"
            name="email"
            onChange={(event) => updateValue("email", event.target.value)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            required
            type="email"
            value={values.email}
          />
          {errors.email && <span className="field-error" id="contact-email-error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-phone">{site.contactPage.form.phone}</label>
          <input
            autoComplete="tel"
            id="contact-phone"
            name="phone"
            onChange={(event) => updateValue("phone", event.target.value)}
            type="tel"
            value={values.phone}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-need">{site.contactPage.form.need}</label>
          <select
            id="contact-need"
            name="need"
            onChange={(event) => updateValue("need", event.target.value)}
            aria-describedby={errors.need ? "contact-need-error" : undefined}
            aria-invalid={Boolean(errors.need)}
            required
            value={values.need}
          >
            <option value="">{site.contactPage.form.chooseOption}</option>
            {site.contactPage.form.needs.map((need) => <option key={need} value={need}>{need}</option>)}
          </select>
          {errors.need && <span className="field-error" id="contact-need-error">{errors.need}</span>}
        </div>
        <div className="form-field form-field-message">
          <label htmlFor="contact-message">{site.contactPage.form.message}</label>
          <textarea
            id="contact-message"
            name="message"
            onChange={(event) => updateValue("message", event.target.value)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            aria-invalid={Boolean(errors.message)}
            required
            rows={5}
            value={values.message}
          />
          {errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}
        </div>
        <button className="button contact-submit" disabled={isSending} type="submit">
          {isSending ? site.contactPage.form.submitting : site.contactPage.form.submit}
          {!isSending && <span aria-hidden="true">↗</span>}
        </button>
        {status === "success" && <p className="form-status form-status-success" role="status">{site.contactPage.form.success}</p>}
        {status === "error" && (
          <p className="form-status form-status-error" role="alert">
            {site.contactPage.form.error} <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> ·{" "}
            <a href={site.contact.whatsapp} rel="noopener noreferrer" target="_blank">{site.contactPage.cards.whatsapp}</a>
          </p>
        )}
      </form>
    </div>
  );
}
