import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Timeline from "@/components/timeline";
import { PiStudent, PiChalkboardTeacher } from 'react-icons/pi';
import HeadContent from "@/components/headContent";
import { createElement } from "react";
export default function Home({ teamjson, timeline }) {

    const interestForms = [
        {
            "name": "Student",
            "href": "https://forms.gle/ygM4LJUMddQ9ohLb6",
            "icon": PiStudent
        },
        {
            "name": "Faculty",
            "href": "https://docs.google.com/forms/d/1PzHIuwwiiiaHmdE5dvusTlGqRwZ3XvZKNkl-sGnilbM/edit",
            "icon": PiChalkboardTeacher

        }
    ]
    return (
        <Layout>
            <HeadContent title={"Join - M-Hub"} />
            <Hero title={"Join Today"} />
            <div className="py-8 px-2 flex flex-col md:flex-row justify-center items-center gap-4">
                {interestForms.map((form) => (<LinkElement key={form.name} link={form} />))}
            </div>
            <div className="px-2">
                <div className="bg-grey p-4 sm:p-8 rounded-lg max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        {timeline.title}
                    </h2>
                    <Timeline events={timeline.events} />
                </div>
            </div>

        </Layout>
    );
}

function LinkElement({ link }) {
    return (<Link
        key={link.name}
        href={link.href}
        target="_blank"
        className={"p-4 bg-grey flex justify-start rounded-lg w-72 items-center gap-6 hover:-translate-y-1"}
    >
        {createElement(link.icon, { "className": "text-6xl inline" })}
        <span className="font-bold text-xl">{link.name}</span>

    </Link>)
}

export async function getStaticProps() {

    const timelineFilePath = path.join(process.cwd(), "config", "timeline.json");
    const timelineFileContent = fs.readFileSync(timelineFilePath, "utf-8");
    const timeline = JSON.parse(timelineFileContent);
    return { props: { timeline } };
    // return { props: {} };
}
