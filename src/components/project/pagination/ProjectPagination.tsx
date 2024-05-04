import { motion } from 'framer-motion';

/**
 * @description
 * 프로젝트 페이지 프로젝트 페이지네이션 컴포넌트
 * @component ProjectPagination
 * @returns {JSX.Element} ProjectPagination
 * @since 2024.04.16
 */
/**
 * Renders the pagination component for the project section.
 * @returns The rendered pagination component.
 */

const ProjectPagination = ({
  pageNum,
  currentPage,
  changeCurrentPage,
}: {
  pageNum: number[];
  currentPage: number;
  changeCurrentPage: (page: number) => void;
}) => {
  return (
    <section className="w-full pt-[3.75rem] flex justify-center items-center gap-3">
      {pageNum.map((page) => (
        <motion.button
          onClick={() => changeCurrentPage(page)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          key={page}
          className={`flex justify-center items-center w-6 h-6 bg-transparent border ${
            page === currentPage
              ? 'border-white'
              : 'border-mono_500 text-mono_500'
          } rounded Btn cursor-pointer`}
        >
          {page}
        </motion.button>
      ))}
    </section>
  );
};

export default ProjectPagination;
