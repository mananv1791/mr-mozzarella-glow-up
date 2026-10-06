export function CheeseDrip({ color = "#FDF6EC" }: { color?: string }) {
  return (
    <div className="relative w-full -mt-px leading-none cheese-drip-anim" aria-hidden>
      <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-16" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,0 L1440,0 L1440,30
             C1380,55 1340,20 1300,45
             C1260,75 1220,30 1180,55
             C1140,80 1100,35 1060,60
             C1020,85 980,40 940,65
             C900,90 860,40 820,60
             C780,80 740,30 700,55
             C660,80 620,35 580,60
             C540,85 500,40 460,65
             C420,90 380,35 340,60
             C300,85 260,40 220,65
             C180,90 140,35 100,55
             C60,75 30,40 0,55 Z"
        />
        <g fill={color}>
          <circle cx="120" cy="62" r="6" />
          <circle cx="380" cy="68" r="5" />
          <circle cx="680" cy="70" r="7" />
          <circle cx="980" cy="68" r="5" />
          <circle cx="1280" cy="66" r="6" />
        </g>
      </svg>
    </div>
  );
}
