import Button from '@/components/common/Button';

const LinkCopy = () => {
    return (
        <div className="flex gap-2 relative">
            <input
                value={'https://pin.it/3jMgpeSAd'}
                className={
                    'h-full w-full border-[#cdcdcd] hover:border-[#a5a5a5] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]'
                }
            />
            <Button
                color="gray"
                text="링크 복사"
                className="text-nowrap"
            ></Button>
        </div>
    );
};

export default LinkCopy;
