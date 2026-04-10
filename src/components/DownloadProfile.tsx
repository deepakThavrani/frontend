export default function DownloadProfile() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-[60px]"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/nsplsh_4a408af950eb435b9b8fb7a3bba7dd49~mv2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#E02222]/50 to-[#E02222]/40" />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-[10%] text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight">
          Download Our
          <br />
          Company Profile
        </h2>
        <a
          href="https://drive.google.com/file/d/1gGerG64NLFeho5dKW--9czIZbbD0AsB3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/80 text-white font-semibold hover:bg-black transition-all duration-300 uppercase inline-block border border-white/20 hover:border-white/50 hover:scale-105 px-8 md:px-[50px] py-4 md:py-[20px] text-sm md:text-base tracking-[2px] whitespace-nowrap"
        >
          Download
        </a>
      </div>
    </section>
  );
}
