export default function MissionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <video
        src='/MissionStatementBackground.mov'
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 blur-xs"
      />
      <p className="relative text-sm z-10 max-w-4xl px-6 text-center">
        Rooted in curiosity. Driven by creativity.
        <br /><br />
        It started with a need: new games, no way to buy them, and an old BASIC manual. That first problem led to a lifelong passion for building things with code—from scrappy experiments to full-stack applications that solve real-world problems.
        <br /><br />
        I&apos;m a full-stack developer with a love for elegant front-end experiences, raised in Charlotte, North Carolina and shaped by the trails, waves, and slopes of the Southeast. Whether I&apos;m climbing sandstone, surfing the Outer Banks, or debugging a React component, I&apos;m chasing the same feeling: focus, flow, and freedom.
        <br /><br />
        Now at UNC-Chapel Hill, I study Computer Science and Geography, believing that a well-rounded liberal arts education gives deeper context to technical work. Tech isn&apos;t just code—it&apos;s culture. It&apos;s storytelling. And it&apos;s one of the greatest equalizers of our time. All you need is a computer.
        <br /><br />
        From building with Virnika to launching Brightstar Ventures, I work at the intersection of design, development, and impact—crafting tools that empower people to share their voice and shape their world.
        This is about more than just software.
        <br /><br />
        It&apos;s about building access, one project at a time.
      </p>
    </section>
  )
}