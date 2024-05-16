'use client';
import { motion } from 'framer-motion';
import { aniSlideRight, aniSlideUp } from '../animation/animaiton';

const MemberGuideLine: React.FC<{ label: string; description: string }> = ({
  label,
  description,
}) => {
  return (
    <div className="flex ">
      <p className="Sh1 w-20 flex-shrink-0">{label}</p>
      <p className="B1">{description}</p>
    </div>
  );
};

const PartCard: React.FC<{
  icon: string;
  part: string;
  description: string;
}> = ({ icon, part, description }) => {
  return (
    <motion.div
      className="desktop:w-[352px] flex-shrink-0 p-8 bg-mono_black flex desktop:flex-col desktop:gap-10 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={aniSlideUp}
    >
      <img
        className="desktop:w-6  desktop:h-6 w-7 h-7 flex-shrink-0"
        src={icon}
      />
      <div className="text-[#ffffff] flex flex-col gap-3">
        <span className="H6">{part}</span>
        <p className="B1">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutGDSCDGU = () => {
  return (
    <div className="w-full flex justify-center items-center  bg-mono_50">
      <section className="w-full max-w-[1200px]  py-40 tablet:px-10 px-4 gap-16 flex flex-col text-mono_black">
        <div className="flex desktop:flex-row flex-col flex-wrap">
          {/* title */}
          <div className="mr-10 mb-6 tablet:min-w-[440px]">
            {/*GDSC IN DOUGGUK UNIV*/}
            <motion.div
              className="H3 inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={aniSlideUp}
            >
              <span className="flex items-center gap-4">
                <span>GDSC in</span>
                <hr className="flex-grow border-black" />
              </span>

              <span className="inline-block whitespace-no-wrap">
                Dongguk University
              </span>
            </motion.div>

            <motion.div
              className="B1 pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={aniSlideUp}
            >
              GDSC DGU는 자발적이고 주도적으로 학습하는 커뮤니티 그룹입니다.
              <br />
              저희는 이론과 산업 간의 격차를 줄이는 연구를 하기 위해 모였습니다.
            </motion.div>
          </div>
          {/* title */}

          {/* member */}
          <motion.div
            className="flex flex-col mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={aniSlideUp}
          >
            <p className="H6 h-[56px] flex items-center">Members</p>
            <MemberGuideLine
              label="Lead"
              description="모든 활동 총괄 및 총 책임을 맡습니다."
            />
            <MemberGuideLine
              label="Core"
              description="모든 맴버가 유기적으로 연결 될 수 있도록 돕습니다."
            />
            <MemberGuideLine
              label="General"
              description="적극적인 활동으로, 커뮤니티의 활성화에 기여합니다."
            />
            <MemberGuideLine
              label="DevRel"
              description="질 높은 컨텐츠를 제공하기 위해 돕습니다."
            />
          </motion.div>
          {/* member */}
        </div>

        <div>
          <div className="flex flex-col">
            {/* title */}
            <motion.img
              className="w-6 h-6  mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={aniSlideRight}
              src="/svg/icons/common/chart.svg"
            />
            <motion.p
              className="H4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={aniSlideUp}
            >
              모든 길은 로마로 흐른다
            </motion.p>
            <motion.p
              className="B1 pt-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={aniSlideUp}
            >
              어떤 목표에 도달하는데는 많은 경로가 있습니다.
              <br />
              이와 같이, 하나의 파트에 국한 되지 않고 세가지 분야로 이루어져
              <br />
              서로의 지식과 경험을 공유하며 함께 성장해나가고자 합니다.
            </motion.p>
          </div>
          {/* title */}

          {/* part */}
          <div className="mt-10 flex justify-between desktop:flex-row flex-col desktop:justify-between desktop:gap-8 gap-3 overflow-x-scroll">
            <PartCard
              icon="/svg/icons/common/part_web.app.svg"
              part="Web / App"
              description="EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임"
            />
            <PartCard
              icon="/svg/icons/common/part_server.cloud.svg"
              part="Server / Cloud"
              description="EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임"
            />
            <PartCard
              icon="/svg/icons/common/part_ai.ml.svg"
              part="AI / ML"
              description="EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임"
            />
          </div>
          {/* part */}
        </div>
      </section>
    </div>
  );
};

export default AboutGDSCDGU;
