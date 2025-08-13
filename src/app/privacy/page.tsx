export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6ABAB1] to-[#2f6f69] text-white">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo.PNG" alt="JHub Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold">JHub</span>
          </a>
          <a href="/" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">Back to Home</a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-white/70">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="mt-2 text-white/80">
              JHub ("we", "us", or "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your choices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
              <li><span className="font-medium">Account & Profile:</span> name, email, location city/region, preferences.</li>
              <li><span className="font-medium">Usage Data:</span> app interactions, device and log information.</li>
              <li><span className="font-medium">Event Data:</span> RSVPs, tickets, check‑ins, posts, and photos you share.</li>
              <li><span className="font-medium">Cookies & Similar:</span> for authentication, preferences, and analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. How We Use Information</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
              <li>Provide and improve the JHub service and features.</li>
              <li>Personalize recommendations and event discovery.</li>
              <li>Facilitate communication, RSVPs, ticketing, and check‑in.</li>
              <li>Protect users and enforce our Terms and community guidelines.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Sharing & Disclosure</h2>
            <p className="mt-2 text-white/80">
              We share information with event organizers you interact with, service providers (e.g., analytics, payment), and when required by law. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Your Choices</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
              <li>Access, correct, or delete your data within your account.</li>
              <li>Manage notifications and email preferences.</li>
              <li>Opt‑out of non‑essential analytics cookies where offered.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Data Security & Retention</h2>
            <p className="mt-2 text-white/80">We use appropriate technical and organizational safeguards. Data is retained only as long as necessary for the purposes described here or as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. International Transfers</h2>
            <p className="mt-2 text-white/80">If you access JHub from outside your country, your data may be processed in other regions subject to appropriate protections.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
            <p className="mt-2 text-white/80">JHub is not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
            <p className="mt-2 text-white/80">We may update this policy. We will post the new version and update the date above.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Contact</h2>
            <p className="mt-2 text-white/80">Questions? Email us at <a className="underline hover:text-white" href="mailto:privacy@jhub.app">privacy@jhub.app</a>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 text-sm text-white/70">
          <span>© {new Date().getFullYear()} JHub</span>
          <div className="space-x-4">
            <a className="hover:text-white" href="/">Home</a>
            <a className="hover:text-white" href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
