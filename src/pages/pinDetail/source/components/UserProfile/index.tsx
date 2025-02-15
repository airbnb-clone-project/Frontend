interface UserProfileProps {
  userName: string;
  followers: number;
  profileImage?: string;
}

const UserProfile = ({
  userName,
  followers,
  profileImage,
}: UserProfileProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        {profileImage && (
          <img
            src={profileImage}
            alt={`${userName}의 프로필`}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div>
        <p className="font-semibold">{userName}</p>
        <p className="text-sm text-gray-500">팔로워 {followers}명</p>
      </div>
    </div>
  );
};

export default UserProfile;
