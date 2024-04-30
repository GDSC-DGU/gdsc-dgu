const RecruiteFaqBox = ({ faq }: { faq: Faq }) => {
  return (
    <div className="self-stretch p-7 bg-mono_900 rounded flex-col justify-start items-start gap-3 flex">
      <div className="H5">{faq.question}</div>
      <div className="B1">{faq.answer}</div>
    </div>
  );
};

export default RecruiteFaqBox;
