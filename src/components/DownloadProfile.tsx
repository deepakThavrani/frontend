export default function DownloadProfile() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundImage:
          "url('https://static.wixstatic.com/media/nsplsh_4a408af950eb435b9b8fb7a3bba7dd49~mv2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#E02222]/50 to-[#E02222]/40" />

      <div
        className="relative flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight">
          Download Our
          <br />
          Company Profile
        </h2>
        <a
          href="https://drive.google.com/file/d/1gGerG64NLFeho5dKW--9czIZbbD0AsB3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "20px 50px",
            fontSize: "16px",
            letterSpacing: "2px",
          }}
          className="bg-black/80 text-white font-semibold hover:bg-black transition-all duration-300 uppercase inline-block border border-white/20 hover:border-white/50 hover:scale-105"
        >
          Download
        </a>
      </div>
    </section>
  );
}
