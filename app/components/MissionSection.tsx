export default function MissionSection() {
  return (
    <section className="">
      <div className="h-screen overflow-hidden sticky top-0">
        <video
          src='/MissionStatementBackground.mov'
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </div>
      <div className="h-screen overflow-hidden sticky top-0 flex flex-col items-center justify-center backdrop-blur-xs">
        <p className="relative text-sm z-10 max-w-4xl px-6 text-center">
          Hey I'm Nathan Santiago from Charlotte, North Carolina. I&apos;m a full-stack developer with a love for everything from elegant front-end experiences to toiling over assembly code. Whether I&apos;m climbing in the mountains, surfing the Outer Banks, or debugging a React component, I&apos;m chasing the same feeling: focus, flow, and freedom.
          <br /><br />
          Now at UNC-Chapel Hill, I study Computer Science and Geography, with the belief that a well-rounded education gives deeper context to technical work. It&apos;s storytelling. And it&apos;s one of the greatest equalizers of our time. All you need is a computer.
          <br /><br />
          From building with Virnika to launching Brightstar Ventures, I work at the intersection of design, development, and business development.
          <br /><br />
          Everyday I am writing stories, one project at a time.
        </p>
      </div>
    </section>
  )
}