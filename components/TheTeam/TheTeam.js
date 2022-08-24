import Image from "next/image";
import React from "react";

function TheTeam() {
  return (
    <section id="team">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 242, 77, 0.69) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
        className="pt-[45px] pb-[58px] md:py-[90px] container-lg md:rounded-2xl"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-[580px,auto] gap-[50px] lg:gap-[176px]">
          <div className="space-y-5 md:mt-[30px]">
            <h2 className="title_lg">thE Team</h2>
            <div className="space-y-[15px]">
              <p className="body_text">
                OYC was created by four friends who set out to make some dope
                apes, test our skills, and try to build something (ridiculous).
              </p>
              <p className="body_text">
                <span className="text-primary">GARGAMEL.</span> STARCRAFT
                OBSESSED. EATS SMURFS.
              </p>
              <p className="body_text">
                <span className="text-primary">GORDON GONER.</span> REFORMED
                LEVERAGE ADDICT.
              </p>
              <p className="body_text">
                <span className="text-primary">EMPEROR TOMATO KETCHUP.</span>{" "}
                SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
              </p>
              <p className="body_text">
                <span className="text-primary">NO SASS.</span> HERE FOR THE
                APES. NOT FOR THE SASS.
              </p>
            </div>
          </div>

          <div className="max-w-[244px] mx-auto md:max-w-[387px]">
            <Image
              src="/img/the_team_image.png"
              alt="the_team_image"
              width={387}
              height={440}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheTeam;
