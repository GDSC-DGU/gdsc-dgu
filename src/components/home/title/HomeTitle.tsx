// 제목
// 설명까지

const HomeTitle: React.FC<{
  title: string[];
  description: string[];
}> = ({ title, description }) => {
  return (
    <div className="flex desktop:flex-row flex-col desktop:gap-8  gap-4 desktop:items-end">
      <div className="H3 flex flex-col">
        {title.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="B1 flex flex-col">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default HomeTitle;
