import { Link } from 'react-router-dom'

function ContactCta() {
  return (
    <section className="bg-oe-blue py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <h2 className="font-display text-3xl text-white uppercase sm:text-4xl">
          On s'assoit à votre table ?
        </h2>
        <p className="max-w-xl font-sans text-white/85">
          Racontez-nous vos habitudes — clim, cuiseur à riz, piscine — et
          repartez avec une estimation claire, sans jargon ni engagement.
        </p>
        <Link
          to="/contact"
          className="rounded-full bg-oe-yellow px-8 py-4 font-sans text-base font-bold text-oe-navy shadow-lg transition hover:scale-105"
        >
          Je demande conseil à un expert
        </Link>
      </div>
    </section>
  )
}

export default ContactCta
