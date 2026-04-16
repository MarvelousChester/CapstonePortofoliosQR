export const CTASection = () => {
  return (
    <section className="mt-32 mb-10 flex flex-col items-center text-center">
      <h2 className="text-[28px] lg:text-[40px] font-[200] leading-tight tracking-tight mb-8">
        HAVE A VISION FOR <br /> COLLABORATION?
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-2xl px-4">
        <button className="w-full sm:w-64 bg-accent-blue text-white text-[13px] font-medium py-4 rounded-[16px] uppercase tracking-[1px] border border-transparent shadow-[0_0_15px_rgba(79,168,255,0.2)] hover:bg-accent-blue/90 hover:shadow-[0_0_20px_rgba(79,168,255,0.4)] active:scale-[0.98] transition-all outline-none">
          Start a Project
        </button>
        <button className="w-full sm:w-64 bg-transparent text-white text-[13px] font-medium py-4 rounded-[16px] uppercase tracking-[1px] border border-white/[0.12] hover:bg-white/5 active:scale-[0.98] transition-all outline-none">
          Join the Collective
        </button>
      </div>
    </section>
  );
};
