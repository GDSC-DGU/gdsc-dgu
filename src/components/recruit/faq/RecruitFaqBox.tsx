const RecruiteFaqBox = ({ faq }: { faq: Faq }) => {
  return (
    <div className="self-stretch p-7 bg-zinc-900 rounded flex-col justify-start items-start gap-3 flex">
      <div className="text-2xl leading-7">{faq.question}</div>
      <div className="leading-7">{faq.answer}</div>
    </div>
  );
};

export default RecruiteFaqBox;
