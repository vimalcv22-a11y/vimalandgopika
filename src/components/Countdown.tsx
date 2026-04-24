import { useEffect, useState } from "react";

interface CountdownProps {
  target: string;
}

function calc(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export function Countdown({ target }: CountdownProps) {
  const targetDate = new Date(target);
  const [time, setTime] = useState(() => calc(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(targetDate)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (time.done) {
    return (
      <p className="font-script text-4xl text-gradient-gold">The day is here ✦</p>
    );
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {units.map((u) => (
        <div
          key={u.label}
          className="relative flex flex-col items-center justify-center rounded-lg border border-gold bg-card/60 px-2 py-4 sm:px-6 sm:py-6 backdrop-blur-sm shadow-elegant"
        >
          <span className="font-display text-3xl sm:text-5xl text-maroon tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}