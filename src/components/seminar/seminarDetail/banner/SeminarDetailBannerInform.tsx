import React from 'react';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';

const SeminarDetailBannerInform = ({ type, data, speaker_data }: { type: string, data: string, speaker_data: string }) => {
  return (
        <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0 }}
    viewport={{ once: true, amount: 0.9 }}
    variants={seminarCardVariants}
    style={{ transformOrigin: '10% 60%' }}
  >
    {data === 'Speaker' ? (
       <div>
       <p className="H6 font-medium pointer-events-none">
           {type}
       </p>
       <div className="B1 font-medium flex gap-2 pointer-events-none">
           {data} <p className="B1 font-normal text-mono_200">{speaker_data}</p>
       </div>
       </div>
    )
  :
  (
    <div>
       <p className="H6 font-medium pointer-events-none">
            {type}
        </p>
        <p className="B1 font-normal pointer-events-none">
            {data}
        </p>
    </div>
  )}
        </motion.section>
  );
};
export default SeminarDetailBannerInform;
