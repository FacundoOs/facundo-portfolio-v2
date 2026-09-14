export default function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-14">
      <p className="eyebrow mb-3">{label}</p>
      <h2 className="display text-[2.5rem] lg:text-[3.25rem] text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  )
}
