import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/mishraaf")({
  head: () => ({
    meta: [
      { title: "وكالة المشراف للتطوير العقاري" },
      {
        name: "description",
        content:
          "وكالة المشراف للتسويق وتطوير العقارات — نرحب بك باحثاً عن مسكن يليق بتطلعاتك",
      },
    ],
  }),
  component: MishraafPage,
});

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "مشاريعنا", href: "#projects" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا المشراف", href: "#why" },
  { label: "تواصل معنا", href: "#contact" },
];

const PROJECTS = [
  {
    id: 1,
    name: "مشراف ريزيدنس",
    name_en: "Mishraaf Residence",
    location: "الرياض — حي النرجس",
    type: "سكني فاخر",
    units: "٦٤ وحدة",
    status: "تسليم ٢٠٢٥",
    area: "١٨٠ – ٣٢٠ م²",
    featured: true,
    // Tonal block color instead of fake image placeholder
    hue: "280",
  },
  {
    id: 2,
    name: "أبراج المشراف",
    name_en: "Mishraaf Towers",
    location: "جدة — طريق الكورنيش",
    type: "شقق برجية",
    units: "١٢٠ وحدة",
    status: "تسليم ٢٠٢٦",
    area: "١٢٠ – ٢٤٠ م²",
    featured: false,
    hue: "260",
  },
  {
    id: 3,
    name: "فلل الواجهة",
    name_en: "Al Wajha Villas",
    location: "الدمام — الواجهة البحرية",
    type: "فلل مستقلة",
    units: "٣٢ فيلا",
    status: "جاهز للتسليم",
    area: "٤٠٠ – ٦٥٠ م²",
    featured: false,
    hue: "250",
  },
];

const SERVICES = [
  {
    n: "٠١",
    title: "التطوير العقاري",
    body: "نبني مجتمعات سكنية متكاملة بمعايير دولية — من دراسة الجدوى حتى تسليم المفتاح.",
  },
  {
    n: "٠٢",
    title: "التسويق والمبيعات",
    body: "فريق متخصص يقدّم الخيارات المثلى وفق ميزانيتك وأسلوب حياتك دون ضغط.",
  },
  {
    n: "٠٣",
    title: "الاستشارات العقارية",
    body: "تقييم دقيق للسوق وتحليل عائد الاستثمار لاتخاذ قرارات مدروسة وآمنة.",
  },
  {
    n: "٠٤",
    title: "إدارة الأصول",
    body: "رعاية شاملة لعقاراتك بعد التسليم — صيانة، تأجير، وتحسين مستمر للقيمة.",
  },
];

const TESTIMONIALS = [
  {
    q: "وجدتُ شقتي المثالية في المشراف ريزيدنس خلال أسبوع واحد. الفريق كان احترافياً والعملية شفافة تماماً.",
    name: "محمد العتيبي",
    title: "مدير مالي · الرياض",
    initial: "م",
  },
  {
    q: "استثمرتُ في ثلاث وحدات عبر المشراف والعوائد فاقت توقعاتي. خبرتهم بالسوق لا تُضاهى.",
    name: "سارة الغامدي",
    title: "رائدة أعمال · جدة",
    initial: "س",
  },
  {
    q: "من التصميم حتى التسليم — كل تفصيلة تعكس عناية حقيقية. منزلي الآن أجمل مما تخيّلت.",
    name: "خالد الشهري",
    title: "طبيب استشاري · الدمام",
    initial: "خ",
  },
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function Nav({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={[
        "m-nav",
        scrolled ? "m-nav--scrolled" : "",
      ].join(" ")}
    >
      <div className="m-wrap h-[4.5rem] flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" className="m-logo group" aria-label="وكالة المشراف">
          <div className="m-logo__mark">م</div>
          <div className="m-logo__text">
            <span className="m-logo__name">المشراف</span>
            <span className="m-logo__sub">للتطوير العقاري</span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="m-nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Theme toggle */}
          <button
            onClick={onToggle}
            aria-label="تبديل الثيم"
            className="m-icon-btn"
          >
            {theme === "dark" ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>

          {/* CTA */}
          <a href="#contact" className="m-btn hidden sm:inline-flex">
            تواصل معنا
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden m-icon-btn"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={["m-drawer", open ? "m-drawer--open" : ""].join(" ")}>
        <div className="m-wrap py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="m-nav__link text-base py-1"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="m-btn self-start mt-2">
            تواصل معنا
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="m-hero">
      {/* Faint ruled lines — editorial texture, not a gradient blob */}
      <div className="m-hero__lines" aria-hidden />

      <div className="m-wrap relative z-10">
        {/* Eyebrow */}
        <div className="m-eyebrow">
          <span className="m-eyebrow__dot" />
          وكالة التطوير العقاري المتميّزة في المملكة
        </div>

        {/* Headline — asymmetric line breaks intentional */}
        <h1 className="m-hero__h1">
          يشرفنا مرورك
          <br />
          <em className="m-hero__accent">عزيزنا الباحث</em>
          <br />
          عن مسكنٍ يليق
        </h1>

        {/* Sub-headline */}
        <p className="m-hero__sub">
          نقدّم لك خيارات السكن المناسبة بأعلى معايير الجودة —
          <br className="hidden sm:block" />
          فريقنا يرافقك من أول استفسار حتى استلام مفاتيح بيتك.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-20 md:mb-28">
          <a href="#projects" className="m-btn m-btn--lg">
            استعرض مشاريعنا
          </a>
          <a href="#contact" className="m-btn m-btn--ghost m-btn--lg">
            تحدّث مع مستشار
          </a>
        </div>

        {/* Stats bar — editorial horizontal rule with numbers */}
        <div className="m-stats">
          {[
            { v: "٢٠٠+", l: "وحدة مُسلَّمة" },
            { v: "١٥", l: "مشروعاً منجزاً" },
            { v: "٩٨٪", l: "رضا العملاء" },
            { v: "٨", l: "سنوات خبرة" },
          ].map((s) => (
            <div key={s.l} className="m-stat">
              <span className="m-stat__value">{s.v}</span>
              <span className="m-stat__label">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="m-section m-section--tinted">
      <div className="m-wrap">
        {/* Section label + heading */}
        <div className="m-section-head">
          <div>
            <p className="m-overline">محفظة المشاريع</p>
            <h2 className="m-section-h2">
              مشاريع تتحدث
              <br />
              عن نفسها
            </h2>
          </div>
          <a href="#contact" className="m-btn m-btn--ghost m-btn--sm shrink-0 self-start md:self-end">
            جميع المشاريع
            <ArrowUpLeftIcon />
          </a>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured — large card */}
          <ProjectCard project={PROJECTS[0]} className="md:col-span-7" large />
          {/* Side cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {PROJECTS.slice(1).map((p) => (
              <ProjectCard key={p.id} project={p} className="flex-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  className = "",
  large = false,
}: {
  project: (typeof PROJECTS)[0];
  className?: string;
  large?: boolean;
}) {
  return (
    <div className={["m-card group", className].join(" ")}>
      {/* Visual block — tonal, not a grey rectangle */}
      <div
        className={["m-card__visual", large ? "h-72" : "h-40"].join(" ")}
        style={{
          background: `linear-gradient(135deg,
            oklch(0.50 0.18 ${p.hue} / 0.18) 0%,
            oklch(0.44 0.22 ${p.hue} / 0.08) 100%)`,
          borderColor: `oklch(0.55 0.18 ${p.hue} / 0.15)`,
        }}
      >
        {/* Status badge */}
        <span className="m-badge">{p.status}</span>
        {/* Large project label watermark */}
        <span
          className="absolute bottom-4 right-5 font-display text-sm font-bold tracking-widest uppercase opacity-30 select-none"
          style={{ color: `oklch(0.55 0.25 ${p.hue})` }}
        >
          {p.name_en}
        </span>
      </div>

      {/* Card body */}
      <div className="flex items-start justify-between gap-4 mt-5">
        <div>
          <h3
            className={[
              "font-display font-bold text-[var(--m-fg)] leading-snug mb-1",
              large ? "text-2xl" : "text-lg",
            ].join(" ")}
          >
            {p.name}
          </h3>
          <p className="text-xs text-[var(--m-muted)] font-sans mb-4">{p.location}</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="m-tag">{p.type}</span>
            <span className="m-tag">{p.units}</span>
            <span className="m-tag">{p.area}</span>
          </div>
        </div>

        {/* Arrow button */}
        <a
          href="#contact"
          className="m-circle-btn shrink-0"
          style={
            {
              "--cb-accent": `oklch(0.55 0.22 ${p.hue})`,
            } as React.CSSProperties
          }
          aria-label={`تواصل بشأن ${p.name}`}
        >
          <ArrowUpLeftIcon />
        </a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="m-section">
      <div className="m-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Sticky text column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="m-overline">خدماتنا</p>
            <h2 className="m-section-h2">
              كل ما تحتاجه
              <br />
              تحت سقفٍ واحد
            </h2>
            <p className="text-[var(--m-muted)] font-sans leading-relaxed text-base mt-4 mb-8">
              منظومة متكاملة من الخدمات العقارية بأيدٍ متخصصة وشفافية تامة.
            </p>
            <a href="#contact" className="m-btn">
              اطّلع على خدماتنا
            </a>
          </div>

          {/* Services list */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[var(--m-border)]">
            {SERVICES.map((s, i) => (
              <ServiceRow key={s.n} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service: s,
  index: i,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group py-7 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-4">
          <span
            className="font-display text-xs font-bold text-[var(--m-muted)] tabular-nums shrink-0"
            style={{ opacity: 0.5 + i * 0.12 }}
          >
            {s.n}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--m-fg)] group-hover:text-[var(--m-accent)] transition-colors duration-200">
            {s.title}
          </h3>
        </div>
        <div
          className={[
            "w-7 h-7 rounded-full border border-[var(--m-border)] flex items-center justify-center text-[var(--m-muted)] shrink-0 transition-all duration-300",
            expanded
              ? "bg-[var(--m-accent)] border-[var(--m-accent)] text-white rotate-45"
              : "group-hover:border-[var(--m-accent)] group-hover:text-[var(--m-accent)]",
          ].join(" ")}
        >
          <PlusIcon />
        </div>
      </div>
      <div
        className={[
          "overflow-hidden transition-all duration-300",
          expanded ? "max-h-32 mt-4 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <p className="text-[var(--m-muted)] font-sans leading-relaxed pr-10">
          {s.body}
        </p>
      </div>
    </div>
  );
}

function Why() {
  return (
    <section id="why" className="m-section m-why">
      <div className="m-why__circle" aria-hidden />
      <div className="m-why__circle m-why__circle--2" aria-hidden />

      <div className="m-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="m-overline m-overline--inv">لماذا المشراف</p>
            <h2 className="m-section-h2 text-white leading-[1.15]">
              ليس مجرد عقار —
              <br />
              بل قرارٌ تبنيه
              <br />
              بثقة كاملة
            </h2>
            <p className="text-white/70 font-sans leading-relaxed text-lg mt-6">
              اخترنا أن نكون صادقين قبل أن نكون بائعين. شفافية تامة في التسعير، التزام بالمواعيد، ودعم مستمر بعد التسليم.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "شفافية تامة", body: "أسعار واضحة بلا رسوم مخفية" },
              { title: "خبرة موثوقة", body: "٨ سنوات من الحضور الميداني" },
              { title: "دعم متواصل", body: "فريق متاح ٧ أيام في الأسبوع" },
              { title: "جودة مضمونة", body: "معايير بناء دولية موثّقة" },
            ].map((item, i) => (
              <div key={item.title} className="m-why__card">
                {/* Index as editorial accent */}
                <span className="text-white/20 font-display text-3xl font-bold leading-none mb-3 block select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display font-bold text-white text-base mb-1.5">
                  {item.title}
                </h4>
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="m-section m-section--tinted">
      <div className="m-wrap">
        <p className="m-overline text-center mx-auto">آراء عملائنا</p>
        <h2 className="m-section-h2 text-center mx-auto mb-14">
          يقولون عن تجربتهم
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={["m-card", i === 1 ? "md:-translate-y-5" : ""].join(" ")}
            >
              {/* Opening mark — type-driven, not decorative emoji */}
              <div className="font-display text-5xl leading-none text-[var(--m-accent)]/20 mb-1 select-none">
                "
              </div>
              <p className="text-[var(--m-fg)] font-sans leading-relaxed text-sm md:text-[0.9375rem] mb-6 -mt-3">
                {t.q}
              </p>
              <div className="pt-5 border-t border-[var(--m-border)] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--m-accent)]/12 flex items-center justify-center font-display font-bold text-sm text-[var(--m-accent)] shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[var(--m-fg)] text-sm">
                    {t.name}
                  </p>
                  <p className="font-sans text-[var(--m-muted)] text-xs mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="m-section">
      <div className="m-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left info */}
          <div className="lg:col-span-5">
            <p className="m-overline">تواصل معنا</p>
            <h2 className="m-section-h2">
              ابدأ رحلتك
              <br />
              معنا اليوم
            </h2>
            <p className="text-[var(--m-muted)] font-sans leading-relaxed mt-4 mb-10">
              مستشارونا جاهزون للإجابة على كل استفساراتك ومساعدتك في اختيار الخيار المناسب لك ولعائلتك.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: "الهاتف", value: "+966 5X XXX XXXX" },
                { label: "البريد الإلكتروني", value: "info@mishraaf.sa" },
                {
                  label: "العنوان",
                  value: "الرياض، المملكة العربية السعودية",
                },
              ].map((c) => (
                <div key={c.label}>
                  <p className="text-[10px] font-sans text-[var(--m-muted)] uppercase tracking-[0.15em] mb-1">
                    {c.label}
                  </p>
                  <p className="font-sans font-medium text-[var(--m-fg)] text-sm">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-7">
            <div className="m-card">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-[var(--m-accent)]/10 flex items-center justify-center mx-auto mb-5 text-[var(--m-accent)]">
                    <CheckIcon />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--m-fg)] mb-2">
                    شكراً لتواصلك
                  </h3>
                  <p className="text-[var(--m-muted)] font-sans text-sm">
                    سيتواصل معك أحد مستشارينا خلال ٢٤ ساعة.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-5"
                >
                  <h3 className="font-display text-lg font-bold text-[var(--m-fg)]">
                    أرسل استفسارك
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="الاسم الكامل"
                      placeholder="محمد العتيبي"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      required
                    />
                    <Field
                      label="رقم الجوال"
                      placeholder="+966 5X XXX XXXX"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      type="tel"
                      dir="ltr"
                      required
                    />
                  </div>
                  <div>
                    <label className="m-label">المدينة</label>
                    <select
                      className="m-input"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    >
                      <option value="">اختر مدينتك</option>
                      <option value="riyadh">الرياض</option>
                      <option value="jeddah">جدة</option>
                      <option value="dammam">الدمام</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="m-label">رسالتك</label>
                    <textarea
                      className="m-input"
                      rows={4}
                      style={{ height: "auto", paddingTop: "0.75rem" }}
                      placeholder="أخبرنا عن احتياجاتك السكنية..."
                      value={form.msg}
                      onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="m-btn m-btn--full mt-1">
                    إرسال الاستفسار
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  dir,
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  dir?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="m-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        dir={dir}
        className="m-input"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--m-border)] py-14">
      <div className="m-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#" className="m-logo mb-5 inline-flex">
              <div className="m-logo__mark">م</div>
              <div className="m-logo__text">
                <span className="m-logo__name">المشراف</span>
                <span className="m-logo__sub">للتطوير العقاري</span>
              </div>
            </a>
            <p className="text-sm text-[var(--m-muted)] font-sans leading-relaxed max-w-xs mt-5">
              وكالة متخصصة في التسويق وتطوير العقارات — نبني معك حلم السكن المناسب.
            </p>
          </div>

          <div className="md:col-span-2">
            <FooterCol title="روابط">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="m-footer-link">
                  {l.label}
                </a>
              ))}
            </FooterCol>
          </div>

          <div className="md:col-span-3">
            <FooterCol title="مناطق التغطية">
              {["الرياض", "جدة", "الدمام", "المنطقة الشرقية"].map((c) => (
                <span key={c} className="text-sm text-[var(--m-muted)] font-sans">
                  {c}
                </span>
              ))}
            </FooterCol>
          </div>

          <div className="md:col-span-3">
            <FooterCol title="تابعنا">
              {["تويتر / X", "إنستغرام", "لينكدإن", "يوتيوب"].map((s) => (
                <a key={s} href="#" className="m-footer-link">
                  {s}
                </a>
              ))}
            </FooterCol>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--m-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--m-muted)] font-sans">
            © ٢٠٢٥ وكالة المشراف للتطوير العقاري. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            {["سياسة الخصوصية", "الشروط والأحكام"].map((t) => (
              <a key={t} href="#" className="text-xs text-[var(--m-muted)] hover:text-[var(--m-fg)] font-sans transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[10px] font-sans text-[var(--m-muted)] uppercase tracking-[0.18em] mb-4 font-medium">
        {title}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

// ─── Micro icons ─────────────────────────────────────────────────────────────

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ArrowUpLeftIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const PlusIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

function MishraafPage() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("mishraaf-theme") as "light" | "dark") ?? "light"
      );
    }
    return "light";
  });

  useEffect(() => {
    const root = document.getElementById("mishraaf-root");
    if (!root) return;
    root.setAttribute("data-m-theme", theme);
    localStorage.setItem("mishraaf-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div
      id="mishraaf-root"
      data-m-theme={theme}
      className="mishraaf-scope"
      dir="rtl"
    >
      <Nav theme={theme} onToggle={toggle} />
      <Hero />
      <Projects />
      <Services />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
