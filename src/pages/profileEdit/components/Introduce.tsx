interface IntroduceProps {
  introduce: string;
  introduceOnChange: (value: string) => void;
}

const Introduce = ({ introduce, introduceOnChange }: IntroduceProps) => {
  return (
    <div>
      <p className="text-xs mb-2">소개</p>
      <textarea
        value={introduce}
        onChange={(v) => introduceOnChange(v.target.value)}
        className={`hover:border-[#a5a5a5] resize-none min-h-[96px] w-full border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] `} // 포커스 시 파란색 테두리
        placeholder="회원님의 이야기를 들려주세요."
      ></textarea>
    </div>
  );
};

export default Introduce;
