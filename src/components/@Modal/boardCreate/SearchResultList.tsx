import Button from '@/components/common/Button';

interface SearchResultListProps {
  addUserListToggle: ({
    name,
    imgSrc,
    email,
  }: {
    name: string;
    imgSrc: string;
    email: string;
  }) => void;
  addUserList: {
    name: string;
    imgSrc: string;
    email: string;
  }[];
  searchList: {
    name: string;
    imgSrc: string;
    email: string;
  }[];
}
const SearchResultList = ({
  addUserList,
  addUserListToggle,
  searchList,
}: SearchResultListProps) => {
  return (
    <div className="mt-4">
      {searchList.map((v) => {
        const isAdded = addUserList.map((user) => user.name).includes(v.name);

        return (
          <div key={v.name} className="flex items-center justify-between">
            <div className="flex gap-3 py-2">
              {/* profile img */}
              <div className="bg-[#e9e9e9] w-12 h-12 rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src="https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg"
                />
              </div>
              <div className="flex flex-col">
                <p className="mb-1">{v.name}</p>
                <p className="text-sm">@{v.email}</p>
              </div>
            </div>

            <Button
              color="gray"
              text={isAdded ? '추가됨' : '추가'}
              onClick={() =>
                addUserListToggle({
                  name: v.name,
                  email: v.email,
                  imgSrc: v.imgSrc,
                })
              }
              className={
                isAdded ? 'bg-[#111111] text-white hover:bg-[#111111]' : ''
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultList;
