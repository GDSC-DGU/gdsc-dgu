// 제목
// 설명까지
'use client';
import { motion } from 'framer-motion';
import { aniSlideUp } from '../animation/animaiton';

const HomeTitle: React.FC<{
  title: string[];
  description: string[];
}> = ({ title, description }) => {
  return (
    <div className="flex desktop:flex-row flex-col desktop:gap-8  gap-4 desktop:items-end">
      <motion.div
        className="H3 flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={aniSlideUp}
        transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
      >
        {title.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </motion.div>
      <motion.div
        className="B1 flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={aniSlideUp}
        transition={{ delay: 1 }} // 두 번째 컴포넌트의 delay를 1초로 설정
      >
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeTitle;
