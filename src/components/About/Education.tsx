import { Timeline } from "@/components/ui/timeline";
import { WobbleCard } from "../ui/wobble-card";
import Heading from "@/components/Heading";
export default function TimelineDemo() {
  const data = [
    {
      title: "2022 - Present",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>B.Tech in Information Technology</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>Institute:</strong> Indian Institute of Information
              Technology, Allahabad (IIIT A)
            </h3>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>CGPA:</strong> 8.00 (till 5th semester)
            </p>

            <h4 className="mt-4 text-left text-xl font-semibold text-white">
              Responsibilities:
            </h4>
            <ul className="list-inside list-disc text-lg md:text-xl text-white">
              <li>
                <strong>Volunteer at Prayaas Society:</strong> Actively
                contributing to community-driven initiatives.
              </li>
            </ul>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2022",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Class 12th</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>School:</strong> CHHATRAPATI SHIVAJI JNR COLLEGE
            </h3>

            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Board:</strong> Maharashtra State Board
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Percentage:</strong> 89.83%
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2020",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Class 10th</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>School:</strong> Orion English Medium School
            </h3>

            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Board:</strong> Maharashtra State Board
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Percentage:</strong> 92.2%
            </p>
          </div>
        </WobbleCard>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center space-y-3">
      <div className="mb-0">
        <Heading title="Education" />
      </div>
      <div className="mt-0">
        <Timeline data={data} />
      </div>
    </div>
  );
}
