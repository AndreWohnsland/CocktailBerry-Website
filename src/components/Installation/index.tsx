import SectionTitle from "../Common/SectionTitle";
import TiltStreakBg from "../Common/TiltStreakBg";
import SingleFeature from "../Features/SingleFeature";
import prerequisiteData from "./prerequisiteData";
import { Snippet } from "@nextui-org/snippet";

const Installation = () => {
  return (
    <>
      <section
        id="prerequisite"
        className="relative z-10 bg-gray-light py-10 dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle
            title="Prerequisites"
            paragraph="This is all you need to set up before installing CocktailBerry."
            center
            width="665px"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-2 2xl:grid-cols-3">
            {prerequisiteData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <section id="steps" className="relative z-10 py-10">
        <div className="container">
          <SectionTitle
            title="Installation Steps"
            paragraph="Once you are ready and set up, let's install CocktailBerry on your device! With your terminal open, copy and paste the following command. Now it's time to sit back and relax."
            center
            width="800px"
            mb="3rem"
          />
          <div className="snippet-container mx-auto my-12 w-full text-center">
            <Snippet style={{ maxWidth: "100%" }}>
              wget -O -
              https://raw.githubusercontent.com/AndreWohnsland/CocktailBerry/master/scripts/all_in_one.sh
              | bash
            </Snippet>
          </div>
          <TiltStreakBg />
        </div>
        <div
          className="mx-auto w-full px-4 text-center"
          style={{ maxWidth: "800px" }}
        >
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            This will check all the requirements, download the software plus
            needed packages and create the autostart settings. After that, the
            machine is already ready to go. When you start the system, the
            program will run automatically. More information about general
            installation can be found{" "}
            <a
              href="https://docs.cocktailberry.org/installation/"
              className="text-primary underline"
            >
              in the docs
            </a>
            .
          </p>
          <p className="pt-8 text-base !leading-relaxed text-body-color md:text-lg">
            If you want to, you can directly start the program with:
          </p>
        </div>
        <div className="snippet-container mx-auto my-12 w-full text-center">
          <Snippet style={{ maxWidth: "100%" }}>
            cd ~ && bash launcher.sh
          </Snippet>
        </div>
        <div
          className="mx-auto w-full px-4 text-center "
          style={{ maxWidth: "800px" }}
        >
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The CocktailBerry UI will start and you can set everything up. To
            get to the settings, go to bottles and click the gear icon. To have
            a full insight of the setup options you can check the{" "}
            <a
              href="https://docs.cocktailberry.org/setup/"
              className="text-primary underline"
            >
              official documentation
            </a>{" "}
            for that.
          </p>
          <p className="pt-8 text-base !leading-relaxed text-body-color md:text-lg">
            Nice, you are all set up! Enjoy your CocktailBerry experience.
          </p>
        </div>
      </section>
    </>
  );
};

export default Installation;
