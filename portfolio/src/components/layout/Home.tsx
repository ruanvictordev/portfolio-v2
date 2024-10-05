import { Button } from "../ui/button";

export default function Home() {
  return (
    <section className="w-full py-24 max-md:py-30">
      <div className="max-w-7xl mx-auto px-2 max-sm:px-6 max-lg:px-8">
        <div className="flex justify-between items-center h-5/6 max-md:flex-col">
          <div className="flex flex-col gap-4 max-w-lg max-md:text-center">
            <h1 className="flex gap-2 text-2xl font-bold max-md:justify-center">
              <span>Hey, I'm Ruan Victor!</span>
              <span className="inline-block origin-[70% 70%] animate-wave">
                👋🏻
              </span>
            </h1>
            <p className="text-base leading-relaxed">
              I am a frontend developer living in Pedro II - PI. Focused on
              studying, creating and sharing knowledge.
            </p>
            <p className="text-base leading-relaxed">
              I work mainly in the{" "}
              <a
                className="underline font-semibold"
                href="https://codewarriorsdevs.vercel.app/"
              >
                Code Warriors
              </a>{" "}
              community as an organizer and founder organizing events and open
              source projects.
            </p>
            <div className="flex gap-4 max-md:flex-col max-md:w-full">
              <a href="https://github.com/user-attachments/files/17267200/Curriculo-RuanVictor.docx.pdf" download>
                <Button className="max-md:w-3/5">Download CV</Button>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 max-md:hidden">
            <img
              className="w-64 rounded-full"
              src="https://i.ibb.co/QYLW68t/Whats-App-Image-2024-09-17-at-14-42-47.jpg"
              alt="Ruan Victor profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
