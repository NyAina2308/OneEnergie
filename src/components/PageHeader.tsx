function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="bg-oe-navy pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="inline-block bg-oe-yellow px-4 py-1.5 font-sans text-sm font-bold text-oe-navy">
          {eyebrow}
        </span>
        <h1 className="font-display mt-5 text-3xl leading-[1.1] text-white uppercase sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-white/90">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHeader
