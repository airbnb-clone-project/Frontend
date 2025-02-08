import Input from '@/components/common/Input';
import InfoIcon from '@/components/icons/InfoIcon';
import Calendar from 'react-calendar';
import './css/Calendar.css';
import CalendarIcon from '@/components/icons/CalendarIcon';
import { useRef, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

interface BirthProps {
  birth: string;
  birthOnChange: (text: string) => void;
}

const Birth = ({ birth, birthOnChange }: BirthProps) => {
  // 달력 창 활성화 여부
  const [isCalendar, setIsCalendar] = useState<boolean>(false);

  /** 달력창 활성화 여부 toggle 함수 */
  const isCalendarToggle = () => {
    setIsCalendar(!isCalendar);
  };

  // 달력 요소 ref
  const claendarRef = useRef<HTMLDivElement | null>(null);

  // 달력 요소외의 클릭시 감지 후 isCalendarToggle 실행
  useOutsideClick({
    ref: claendarRef,
    callback: () => isCalendarToggle(),
  });

  return (
    <div>
      <div className="flex items-center mb-1">
        <label className="cursor-pointer text-xs" htmlFor="birth-input">
          생년월일
        </label>
        <div className="group relative flex items-center justify-center w-6 h-6 cursor-pointer rounded-full hover:bg-gray-filled-hover">
          <InfoIcon />
          {/* 생년월일 설정 이유 */}
          <div className="hidden group-hover:block absolute translate-x-2 -translate-y-1/2 top-1/2 left-full rounded-lg w-[180px] h-[160px] p-2 bg-black text-xs text-white">
            생년월일은 관련 추천 및 광고와 같이 보다 맞춤화된 경험을 제공하는 데
            활용되며,
            <br /> Pinterest 커뮤니티의 안전을 유지하는 데 사용되기도 합니다. 이
            정보는 프로필에 표시되지 않습니다. Pinterest가 생년월일을 요청하는
            이유에 대해 자세히 알아보세요.
          </div>
        </div>
      </div>

      <div className="relative" onClick={isCalendarToggle}>
        <Input
          className="w-full"
          onChangeFC={birthOnChange}
          placeholder=""
          value={birth}
          id="birth-input"
        />

        <span className="absolute top-1/2 -translate-y-1/2 right-5">
          <CalendarIcon />
        </span>

        {isCalendar && (
          <div
            ref={claendarRef}
            onClick={(e) => e.stopPropagation()}
            className="absolute z-50 top-full translate-y-2 right-1/2 translate-x-1/2"
          >
            <Calendar
              onChange={(e) => birthOnChange(String(e))}
              value={birth}
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth={false}
              calendarType={'hebrew'}
              formatDay={(locale, date) => date.getDate().toString()}
              className="relative w-[312px] rounded-2xl bg-white shadow-custom-modal p-4 font-Pretendard"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Birth;
