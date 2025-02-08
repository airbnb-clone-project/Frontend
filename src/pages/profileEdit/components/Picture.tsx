import { ChangeEvent } from 'react';

interface PictureProps {
  imgUrl: string;
  imgUrlOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Picture = ({ imgUrl, imgUrlOnChange }: PictureProps) => {
  const userFirstStr = localStorage.getItem('userName')?.split('')[0];

  return (
    <div className="flex flex-col">
      <p className="text-xs">사진</p>

      <div className="flex items-center gap-4">
        {imgUrl ? (
          <img
            src={imgUrl}
            className="rounded-full w-[75px] h-[75px] bg-gray-border-default"
          />
        ) : (
          <div className="text-3xl font-semibold flex justify-center items-center rounded-full w-[75px] h-[75px] bg-gray-border-default">
            {userFirstStr}
          </div>
        )}

        <input
          onChange={(e) => imgUrlOnChange(e)}
          id="profile-img-change"
          className="hidden"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
        />
        <label
          htmlFor="profile-img-change"
          className="py-2 px-3 h-fit text-nowrap transition-all duration-2000 active:scale-90 font-semibold max-w-full max-h-full cursor-pointer rounded-3xl bg-gray-filled-default hover:bg-gray-filled-hover active:bg-gray-filled-active"
        >
          변경
        </label>
      </div>
    </div>
  );
};

export default Picture;
