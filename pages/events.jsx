import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Timeline from "@/components/timeline";
import HeadContent from "@/components/headContent";

export default function Events({ events }) {

    return (
        <Layout>
            <HeadContent title={"Events - M-Hub"} />
            <Hero title={"Events"} />
            <div className="px-2 py-16">
                <div className="bg-grey p-4 sm:p-8 rounded-lg max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        {events.title}
                    </h2>
                    <p className="mb-4">{events.description}</p>
                    <Timeline events={events.events} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const eventsFilePath = path.join(process.cwd(), "config", "past-events.json");
    const eventsFileContent = fs.readFileSync(eventsFilePath, "utf-8");
    const events = JSON.parse(eventsFileContent);
    return { props: { events } };
}