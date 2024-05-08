import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedContainerProps {
  children: ReactNode;
  initialY?: number; // 초기 Y 위치는 선택적으로 설정할 수 있음
}

const AnimatedBanner: React.FC<AnimatedContainerProps> = ({
  children,
  initialY = 0, // 기본값으로 0을 사용하여 Y 변화 없음을 기본 설정
}) => {
  return (
    <motion.div
      className="w-full flex justify-center mt-[5rem] mb-[5rem]"
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBanner;
