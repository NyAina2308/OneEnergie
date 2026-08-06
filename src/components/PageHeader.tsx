interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  backgroundImage?: string
}

function PageHeader({
  eyebrow,
  title,
  description,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative bg-oe-navy pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden flex items-center justify-center min-h-[300px]">
      
      {/* Gestion de l'image de fond et de l'overlay bleuté */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Overlay translucide bleuté (basé sur la couleur oe-navy) */}
          <div className="absolute inset-0 bg-oe-navy/80 z-0" />
        </>
      )}

      {/* Contenu principal - Z-index supérieur pour passer au-dessus de l'overlay */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="inline-block bg-oe-yellow px-4 py-1.5 font-sans text-sm font-bold text-oe-navy shadow-sm">
          {eyebrow}
        </span>
        <h1 className="font-display mt-5 text-3xl leading-[1.1] text-white uppercase sm:text-4xl md:text-5xl drop-shadow-md">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-white/90 drop-shadow">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHeader