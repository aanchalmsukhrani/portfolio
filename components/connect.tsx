export function Connect() {
  return (
    <section className="px-6 pb-20" id="connect">
      <div className="mx-auto max-w-[1700px] rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <p className="text-sm uppercase tracking-[0.28em] text-accent">Let&apos;s connect</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-50">Let&apos;s build something reliable together</h2>
        <p className="mt-3 text-slate-200">
          If you need cloud-backend systems with crisp SLAs and clear runbooks, drop a line—I&apos;m available for backend & distributed systems roles.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <a
            href="mailto:sukhraniaanchal27@gmail.com"
            className="rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500 px-5 py-2 text-slate-950 shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5"
          >
            Email Aanchal
          </a>
          <a
            href="https://www.linkedin.com/in/aanchalsukhrani/"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-slate-100 transition hover:border-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
