import LabelInput from '@/components/common/LabelInput';

interface WebSiteProps {
  webSite: string;
  webSiteOnChange: (value: string) => void;
}
const WebSite = ({ webSite, webSiteOnChange }: WebSiteProps) => {
  return (
    <div className="flex flex-col">
      <LabelInput
        title="웹사이트"
        onChangeFC={webSiteOnChange}
        value={webSite}
        placeholder="https://"
      />
      <p className="mt-1 text-xs text-gray-input-hover">
        회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요
      </p>
    </div>
  );
};

export default WebSite;
