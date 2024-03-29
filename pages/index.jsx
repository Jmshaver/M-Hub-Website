import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Link from "next/link";
import Button from "@/components/button";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Timeline from "@/components/timeline";
import { IoLogoLinkedin } from 'react-icons/io5';
import { useRouter } from "next/router";
import HeadContent from "@/components/headContent";
export default function Home({ teamjson, timeline }) {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <HeadContent title={"M-Hub - The Business Research Hub at University of Michigan"} />
      <Hero>
        <div className="flex gap-8 items-center md:flex-row flex-col-reverse p-8">
          <div className="md:w-1/2 w-full">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-4xl text-3xl font-bold font-sans tracking-tight">
              The Business Research Hub <br /> <span className="font-semibold">at U of M</span>
            </h1>
            <p className="mb-5 xl:text-lg lg:text-base text-sm font-light tracking-normal">
            We strive to bridge the gap between business and academia.<br /><br />
              
            As a newly created student-led organization at the University of Michigan, M-HUB strives to make business research more accessible to undergraduates by providing learning, networking, and research opportunities. By facilitating collaborative opportunities for diverse research initiatives, M-HUB aims to foster meaningful connections between students, business professors, and industry experts. Through these collaborations, we seek to cultivate a dynamic environment that nurtures innovation, fosters academic growth, and paves the way for future business leaders.
            </p>

            <Button href="/join" text="Join Us" />

          </div>
          <Image
            className="md:w-1/2 rounded-lg"
            width="500"
            height="500"
            src={
              basePath
                ? `${basePath}/images/hero.svg`
                : "/images/hero.svg"
            }
            alt="Research Clip Art"
          />
        </div>
      </Hero>
      <section className="py-16">
        <div className="container mx-auto px-2 flex flex-col md:flex-row  gap-8">
          <div className="md:w-1/2 md:pt-8">
            <h2 className="text-3xl font-bold mb-4" >Our Purpose</h2>
            <p className="mb-3">
              M-HUB aims to foster meaningful connections between students and business professors by facilitating  collaborative opportunities for diverse research initiatives. We are a platform for students to engage with Ross faculty as well as like-minded peers by hosting speakers, networking, and educational events. Through these opportunities we strive to cultivate a dynamic environment that nurtures innovation, fosters academic growth, and paves the way for future business leaders. 
              </p>
              <Button className="" href="/join" text="Join Today" />
          </div>

          <div id="timeline" className="bg-grey p-4 sm:p-8 rounded-lg md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {timeline.title}
            </h2>
            <Timeline events={timeline.events} />
          </div>


        </div>


      </section>
      <section id="why-us">
        <div className="container mx-auto pb-16 px-2">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join</h2>
          <div className="flex flex-col md:flex-row gap-4 ">
            <WhyCard basePath={basePath} img="research.svg" title="Research" description="Pursue research assistant opportunities to collaborate with esteemed professors and Ph.D. students on cutting-edge research initiatives." />
            <WhyCard basePath={basePath} img="networking.svg" title="Networking" description="Develop relationships with professors and academics with years of industry-specific experience. Grow your personal and professional network by joining our collaborative research community." />
            <WhyCard basePath={basePath} img="education.svg" title="Education" description="Engage in workshops and bootcamps to strengthen crucial research and data skills and learn about emerging technologies and industry trends. " />
          </div>
        </div>


      </section>
      <section id="team">
        {teamjson.map((group, index) => (
          <GroupSection key={group.groupName} basePath={basePath} group={group} />
        ))}
      </section>

      <div className="container mx-auto mb-8 px-2">
        <h2 className="text-3xl text-center">
          Interested? <br />
          Click for our interest form!
        </h2>
        <div className="flex mt-4 justify-center">
          <Button href="/join" text="Interest Forms" />
        </div>
      </div>
    </Layout>
  );
}

function WhyCard({ basePath, img, title, description }) {
  return (
    <div className="p-8 bg-grey rounded-lg w-full">
      <Image
        className="max-h-64 md:h-56 mx-auto"
        width="500"
        height="500"
        src={
          basePath
            ? `${basePath}/images/${img}`
            : "/images/" + img
        }
        alt="Image of a dataframe"
      />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export async function getStaticProps() {
  // const sponsorFilePath = path.join(process.cwd(), "config", "sponsors.json");
  // const sponsorFileContent = fs.readFileSync(sponsorFilePath, "utf-8");
  // const sponsors = JSON.parse(sponsorFileContent);

  // const projectFilePath = path.join(process.cwd(), "config", "homepage.json");
  // const projectFileContent = fs.readFileSync(projectFilePath, "utf-8");
  // const projects = JSON.parse(projectFileContent);
  const filePath = path.join(process.cwd(), "config", "ourteam.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const teamjson = JSON.parse(fileContent);

  const timelineFilePath = path.join(process.cwd(), "config", "timeline.json");
  const timelineFileContent = fs.readFileSync(timelineFilePath, "utf-8");
  const timeline = JSON.parse(timelineFileContent);
  return { props: { timeline, teamjson } };
  // return { props: {} };
}


function GroupSection({ group, basePath }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="text-3xl mb-4">{group.groupName}</h2>
        <p className="font-light sm:text-xl">{group.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.members.map((memberinfo, index) => (
          <MemberCard key={index} basePath={basePath} json={memberinfo} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ json, basePath }) {
  return (
    <div className="text-center rounded-lg bg-grey p-4 w-80 sm:w-60">
      <Image
        className="mx-auto mb-4 rounded w-full h-72 sm:h-56 object-cover"
        width="500"
        height="500"
        src={
          basePath
            ? `${basePath}/images/team/${json.image}`
            : `/images/team/${json.image}`
        }
        alt={json.image.split(".")[0].split("_").join(" ")}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight">{json.name}</h3>
      <p>{json.title}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        {json.linkedin ? (
          <li>
            <Link href={json.linkedin} className="hover:text-gray">
              <IoLogoLinkedin className="text-4xl" />
            </Link>
          </li>
        ) : null}

      </ul>
    </div>
  );
}
