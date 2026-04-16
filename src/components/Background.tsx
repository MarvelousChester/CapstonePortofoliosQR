export const Background = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(79, 168, 255, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(157, 116, 255, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 50% 50%, rgba(30, 35, 60, 1) 0%, rgba(15, 17, 26, 1) 100%)
      `,
      backgroundAttachment: 'fixed'
    }}></div>
  );
};
