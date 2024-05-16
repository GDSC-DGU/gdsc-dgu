import { motion } from 'framer-motion';

interface PaginationProps {
    pageNumbers: number[];
    currentPage: number;
    paginate: (pageNumber: number) => void;
  }
  
  const SeminarPagination: React.FC<PaginationProps> = ({ pageNumbers, currentPage, paginate }) => {
    return (
      <div className="pt-10 mt-5 desktop:flex bigTablet:flex lg:flex tablet:hidden md:hidden hidden justify-center gap-3">
                {/* desktop에서만 보이기 */}
        {pageNumbers.map(number => (
            <motion.button
            key={number}
            onClick={() => paginate(number)}
            className={`text-[0.75rem] font-medium w-5 h-5 justify-center items-center text-center border rounded ${currentPage === number ? 'text-mono_white border-mono_white' : 'text-mono_500 border-mono_500'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {number}
          </motion.button>
        ))}
      </div>
    );
  };
  
  export default SeminarPagination;