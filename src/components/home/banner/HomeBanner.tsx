'use client';
import { motion } from 'framer-motion';
import { aniFadein, aniSlideUp } from '../animation/animaiton';
const HomeBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] relative">
      <div className="flex items-center justify-center pb-12">
        <img
          src="/GDSC-logo_out.gif"
          className="
        max-w-[1400px] w-[140%] h-[auto]
        "
        />
      </div>

      <div className="pb-[2rem]">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={aniSlideUp}
          transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
          className="text-center H3"
        >
          같이 해서 가치를 만들고,
          <br />
          세상에 스며든다.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={aniFadein}
          transition={{ delay: 10 }} // 두 번째 컴포넌트의 delay를 1초로 설정
          className="text-center pt-6 B1"
        >
          GDSD DGU는 교내 개발자들과 지식 공유를 통해
          <br />
          긍정적 영향을 끼치는 커뮤니티로 성장하고자 합니다.
        </motion.p>
      </div>
    </section>
  );
};

export default HomeBanner;
