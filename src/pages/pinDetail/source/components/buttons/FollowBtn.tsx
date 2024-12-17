import Button from '../common/Button';

const FollowBtn = () => {
    return (
        <Button
            aria-label="팔로우"
            className="min-w-[60px] rounded-3xl bg-white border border-slate-300 px-4 py-3"
        >
            <span className="text-black font-semibold">팔로우</span>
        </Button>
    );
};

export default FollowBtn;
