export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 noise">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_10%_-10%,rgba(106,186,177,0.50),transparent),radial-gradient(1000px_700px_at_110%_0%,rgba(106,186,177,0.45),transparent),linear-gradient(180deg,rgba(106,186,177,0.14),rgba(106,186,177,0.10)_40%,#ffffff_85%)]" />
      <div className="absolute inset-0 opacity-[0.26] bg-[linear-gradient(to_right,rgba(106,186,177,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(106,186,177,0.18)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-x-0 bottom-[-20%] h-[50%] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(106,186,177,0.40),transparent)]" />
    </div>
  );
}


