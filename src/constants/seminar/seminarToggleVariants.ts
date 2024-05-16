export const toggleVariants = {
    opened: {
      maxHeight: '500px',
      opacity: 1,
      transition: {
        maxHeight: {
          duration: 0.5,
          ease: 'easeInOut'
        },
        opacity: { 
          delay: 0.1,
          duration: 0.4,
          ease: 'easeInOut'
        }
      }
    },
    closed: {
      maxHeight: 0,
      opacity: 0,
      transition: {
        maxHeight: { 
          duration: 0.5,
          ease: 'easeInOut'
        },
        opacity: {
          delay: 0.1, 
          duration: 0.4, 
          ease: 'easeInOut'
        }
      }
    }
  };