import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({
  from = 0,
  to,
  suffix = '',
  decimal = false,
}: {
  from?: number;
  to: number;
  suffix?: string;
  decimal?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setValue(from + (to - from) * easeOut);
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(to);
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {decimal ? value.toFixed(1) : Math.floor(value)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 99.9, suffix: '%', label: 'Uptime SLA', decimal: true },
    { value: 10, suffix: 'x', label: 'Faster workflows', decimal: false },
    { value: 85, suffix: '%', label: 'Automation rate', decimal: false },
    { text: 'Enterprise', suffix: '', label: 'Grade scale' },
  ];

  return (
    <section className="py-16 md:py-20 bg-surface-warm border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 rounded-2xl border border-border bg-white p-8 md:p-10 card-shadow">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center md:border-r md:last:border-r-0 border-border md:px-4"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-2">
                {stat.text ? (
                  <span>{stat.text}</span>
                ) : (
                  <Counter
                    from={0}
                    to={stat.value!}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                  />
                )}
              </h3>
              <p className="text-brand font-semibold text-xs tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
