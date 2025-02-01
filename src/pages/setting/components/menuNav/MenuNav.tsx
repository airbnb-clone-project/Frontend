import { Link, useLocation } from 'react-router-dom';

const MenuNav = () => {
  const menuList = [
    { text: '프로필 수정', url: '/setting/' },
    { text: '계정 관리', url: '' },
    { text: '프로필 공개 여부', url: '' },
    { text: '홈피드 조정', url: '' },
    { text: '소유권이 표시된 계정', url: '' },
    { text: '소셜 권한', url: '' },
    { text: '알림', url: '' },
    { text: '개인정보 및 데이터', url: '' },
    { text: '보안', url: '' },
    { text: '브랜드 콘텐츠', url: '' },
  ];

  const location = useLocation();
  return (
    <div className="flex flex-col gap-2">
      {menuList.map((v) => (
        <Link
          to={v.url}
          key={v.text}
          className={`w-fit inline-flex items-center p-2 font-semibold ${
            location.pathname === v.url ? 'border-b-4 border-black' : ''
          }`}
        >
          <span>{v.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuNav;
