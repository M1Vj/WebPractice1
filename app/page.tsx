import Script from 'next/script'

export default function HomePage() {
  return (
    <main className="faq" id="faq">
      <h1>FAQs</h1>
      {/* Migrated from src/index.html (Q1–Q4) */}
      <article className="faq__item">
        <h2 className="faq__question">
          <button
            className="faq__trigger"
            id="faq-trigger-1"
            aria-expanded="false"
            aria-controls="faq-panel-1"
          >
            What is Frontend Mentor, and how will it help me?
          </button>
        </h2>
        <div
          className="faq__panel"
          id="faq-panel-1"
          role="region"
          aria-labelledby="faq-trigger-1"
          hidden
        >
          <p>
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
          </p>
        </div>
      </article>
      <article className="faq__item">
        <h2 className="faq__question">
          <button
            className="faq__trigger"
            id="faq-trigger-2"
            aria-expanded="false"
            aria-controls="faq-panel-2"
          >
            Q2?
          </button>
        </h2>
        <div
          className="faq__panel"
          id="faq-panel-2"
          role="region"
          aria-labelledby="faq-trigger-2"
          hidden
        >
          <p>answer2</p>
        </div>
      </article>
      <article className="faq__item">
        <h2 className="faq__question">
          <button
            className="faq__trigger"
            id="faq-trigger-3"
            aria-expanded="false"
            aria-controls="faq-panel-3"
          >
            Q3?
          </button>
        </h2>
        <div
          className="faq__panel"
          id="faq-panel-3"
          role="region"
          aria-labelledby="faq-trigger-3"
          hidden
        >
          <p>answer3</p>
        </div>
      </article>
      <article className="faq__item">
        <h2 className="faq__question">
          <button
            className="faq__trigger"
            id="faq-trigger-4"
            aria-expanded="false"
            aria-controls="faq-panel-4"
          >
            What is Frontend Mentor, and how will it help me?
          </button>
        </h2>
        <div
          className="faq__panel"
          id="faq-panel-4"
          role="region"
          aria-labelledby="faq-trigger-4"
          hidden
        >
          <p>
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
          </p>
        </div>
      </article>

      {/* Load original DOM script for accordion behavior */}
      <Script src="/scripts/main.js" strategy="afterInteractive" />
    </main>
  )
}
