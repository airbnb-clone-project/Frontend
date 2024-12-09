import { useState } from 'react';
import FilterModal from './FilterModal';
import CreatedModal from './CreatedModal';
import FilterIcon from '../../../components/icons/FilterIcon';
import PlusIcon from '../../../components/icons/PlusIcon';
import useModalStore from '../../../stores/useModalStore';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../components/icons/PencilIcon';
import UnorganizedIdea from './UnorganizedIdea';
import BoardEditModal from './BoardEditModal';
import BoardCreate from './BoardCreateModal';
import BoardCleanupModal from './BoardCleanupModal';
import LockIcon from '@/components/icons/LockIcon';
import MasonryList from '@/components/common/MasonryList';

const Saved = () => {
    // 현재 필터 state
    const [currentFilter, setCurrentFilter] = useState<string>('알파벳순');
    // 필터 변경 함수
    const filterItemOnClick = (filterText: string) => {
        setCurrentFilter(filterText);
    };

    const { isModalOpen, toggleModal } = useModalStore();

    const array = [1, 2, 3, 3, 4];
    return (
        <div className="w-full">
            <section className="w-full pb-5 mb-7 border-b border-b-[1px] border-gray-300">
                <div className="mb-[12px] flex justify-between px-[16px] h-[48px]">
                    {/* 필터 아이콘 */}
                    <div className="relative">
                        <span
                            onClick={() => toggleModal('filter')}
                            className={`active:scale-90 sticky z-10  flex justify-center items-center cursor-pointer rounded-[50%] ${
                                isModalOpen.filter
                                    ? 'bg-black'
                                    : 'bg-gray hover:bg-[#ebebeb]'
                            } h-[48px] w-[48px]`}
                        >
                            {isModalOpen.filter ? (
                                <>
                                    {/* 활성화 */}
                                    <FilterIcon color="white" />
                                </>
                            ) : (
                                <>
                                    {/* 비활성화 */}
                                    <FilterIcon />
                                </>
                            )}
                        </span>

                        {/* 필터 Modal 조건부 렌더링 */}
                        {isModalOpen.filter && (
                            <FilterModal
                                filterItemOnClick={filterItemOnClick}
                                currentFilter={currentFilter}
                            />
                        )}
                    </div>

                    {/* 만들기 아이콘 */}
                    <div className="relative flex justify-between px-[16px] h-[48px]">
                        <span
                            onClick={() => toggleModal('create')}
                            className={`active:scale-90 sticky z-10  flex justify-center items-center cursor-pointer rounded-[50%] ${
                                isModalOpen.create
                                    ? 'bg-black'
                                    : 'bg-gray hover:bg-[#ebebeb]'
                            } h-[48px] w-[48px]`}
                        >
                            {isModalOpen.create ? (
                                <>
                                    {/* 활성화 */}
                                    <PlusIcon color="white" />
                                </>
                            ) : (
                                <>
                                    {/* 비활성화 */}
                                    <PlusIcon />
                                </>
                            )}
                        </span>

                        {/* 만들기 Modal 조건부 렌더링 */}
                        {isModalOpen.create && <CreatedModal />}
                    </div>
                </div>

                <MasonryList
                    minCol={2}
                    minWidth={230}
                    sideWidth={32}
                    className="masonry-containe flex px-2"
                    columnClassName="masonry-column flex flex-col gap-7"
                >
                    {/* 보드 Item */}
                    {array.map((v, i) => (
                        <Link
                            key={i}
                            to="/board-details"
                            className="z-10 block mx-[8px] relative group cursor-pointer"
                        >
                            <div className="relative flex gap-[1px] h-[78.53%] rounded-[16px] overflow-hidden">
                                {/* 첫 번째 img */}
                                <div className="w-[67%] aspect-[22966/22866]">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="first image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* 두 번째 div, 2개의 img */}
                                <div className="w-[33%] h-full flex flex-col">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="second image"
                                        className="w-full h-full object-cover"
                                    />
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRUXFxcVFRYYGBgXHRYYFRUYFxcXFxcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABCEAABAwIDBQQIAwcCBgMAAAABAAIRAyEEMUEFElFhgQYicZETMlKhscHR8AdC4RRDU2JygpIj8RUWM0SywqLS4v/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACARAQEAAgICAwEBAAAAAAAAAAABAhESIQMxE0FRcWH/2gAMAwEAAhEDEQA/APad88Ut8riSC7vlLe8PJNSUnTHAeSY6m05saegTklJA/BUjnSpn+0KF+x8Mc8PSP9jfojUlbSrf2cwZzw1L/AfRQu7JYE/9szpb4K5SVurSgPYvA/wAPBzvqtFTIAAAsLJiSt1JC4LkhMXEJne0nZCnjHh7qj2kCLR8wqJ34YU9MQ8f2hb9JMti088qfhgNMRf+j9VA/wDDB+mIb1afqvSlWbWx76IBDQ6cpMX4KudhmO2Cd+GVbStTPQqF34bYrR9M9SPktls7tQ17wx43ZMA81pAVY+Xfo3DXt5I78OsYP4Z/uP0TH9gcYMmNP9y9fSWudZ08bd2Hxo/df/Jv1Ubux+MH7g9C36r2hdVzq08Sd2YxY/7d/uPwKaNg4kTNCp/iV7dKSudXF4YdlVxnRqf4O+ib+w1BnTf/AIu+i90ITS0cAn5BxeHCg7VrvIpwYeC9tNJvAeSjdhmH8jfJXyLi8YhKF7E7A0jnTb5BRO2VQP7pnkE/IuLyJdXq7th4c/um+QUTuzmGP7oK+SHi8uASXpb+zGG/hqF3ZPD+yR1Kvkg4vN3BMK9EqdkKH8w6oV3Y6l7RT8kXGt4kuSurkSXF1cUiSSSUSSSSUiXEkNiMa1nMot0pLRKa9wAkkAcSqHFdowPVHzWfx21H1Lud0XO+WT07YeDK+2oxvaGkz1e8fcqZ/aOo45wOSz1WsgqG0AXOE5H5Llc7Xqx8GMbKpinVBIed7hOaO2RtMzuvJ4XzCy2FxisqeIDvHijHLV2M/H1ptVSdoKo3HNi6fsLaYeTSce8BLebf0TtvUqZYXOMEArvbyx6eOTjl28u2ljL92xBz5/r8lY7H7b1qcNgvAzaeHAOzB9yDxbG75gb2g+M9IBQpoEGTDZyAPDhzsvPLp6Mpt6Bge3lB5AeHU5GZuPdorDEdr8IyJqgjOWgke5eI4qkcRiN1jzbMcALdEfi2CkyCJtAuu3yOPCPbNmbbw+I/6VVruQN/LNWC+b8OXh0steZGnMuC0+zO2WNAtVLy0+o+DInn9ZWpnGbhXtKSwOzPxG3rVKBB1LTbyd9VptndpsNWsKjWu9lxAPTj0WtxmyrdJJIpDi4V1cUjVxOK4gmricmqRpTSnOKic5SceVA4p7kwoLPF9YiKWNLncHsAB8CMvFVJ2ntVri3ccY13beaz+09p+hxJaD6gDSJOYufijKnbx25ugEuvBJsOE8VuZ/o4LLF9o9pUW71RkDiW5eMGyDb+IOK/k8j9VT4PtPXa/eLpBzaciOEKfaWEp1WHEUBuxerT9j+Zs33ZOWi1jlL1YMsbFq38RcTq1nvUjfxIr/w2+ZWIXCuvCOe63jfxMq60m+Z+ilb+JrtaI8157KTGFxDQJJIAHEkwAjhFyr1nZva9+IpPeGejAO6HTMnMx4W8+SrsRjnGwNtefiUDTo+gY2jM7g7x4uN3e8kdFBXxELw+S7y6fQ8OGp2nq4hB1cWq+tj5vqPeqfHYn2XEcs1jT0elvjNpABZt+Oe2rvtknUaEIajVc6rcktBk8LclNQJeL2PiPrIWuLMyaGltvdaONrcJ4o6pt3cHEnIcVlf2CoTAafiFf7M2WR3yAXfzZ9OCzZIMs76jlXaeJB3muDHDLQ5cVZYfbdarT3qjiZsR4ZyqzFYjeaZiRIvoUPharhIbd4uGz/1IvH9VjCpXGz7XorRSc8kAtBtwGXwVX2fa+u41nWptBDf5j+ke9WFekMVhj6I+uBJyNjDgRmDaOi5WrCnTFNthuloA8FLSg2RRitXq6A7o5nM/BDYdpqFxzLjvEE5NmB4KfFtBAaOO9mYGkcDqSeIUjsKQ0UWkgu9Z+W6Gu4jmtDQuk+jh299/esYF+gGgQuK2nT3d9rHN4GJ3kdh+z9CmJfLyBJJJMnlwVFj9rCpVFKmBugiSOIRrfpH7QxFeB6NhMw4kZg8PviVGzB13kOqEMuIvecrAK1L3U2gjevEuIyAJiC7Un7CgZU3j60ROV4gXl2pK1saX+zu2GLwzWs3xVZA3S68cpzHmtTs/8Q2vA9JSIOu64ETyXl9Cp+TjeM4jMnjpfxXXEDhkT+qudjPCV7ps3b9CvZjxPA2Pkc1Zby+ehiC0SCeRHVWGB7UYymd0OeW8TJEdclqZs3x/j3QlcXlNPtdiI/PPhKIo9q8STc7vDei/QXW+U17Z4V6aSmuK82/5wryWyJGkKT/m6vyW5jb6ZvXt6A4qMrCDthV4BPHbCp7IVwyHKNsU1Y4dsHewE4drz7COGR5Ri+3ez3NcyvuxvDdqf1NFnW4tjyWaY9enYllPE0nUaoJBuCM2kZOHNYDbuyH4V4a6H03T6OoNYPqng4ahZbiGi9W+yMaaTw4XGRBuCDYgjhBKoqD1YUSgj9tYIU6ndvTeA+mf5XadMuirirp81cLxdRM/2OsfIwepVMQvXhdx58pqmQtB2OwoNV1dw7tIS3m9wIb5XPQKghbTBYf0NFtI2d67/wCp0W6AAdFjy5ccW/FjyyOqvkkoLE+5Evcg65XgfRxVGK/05Ju0mx5nQrP4rEyS0cYWtqUw4FrhYrHY/Auo1CM2mS0/EeK3jo57SU8oHkrvA4L0TC9ol2YkZdFUYWmCrnBbT3bOFspRkw7g9qkmHGOWSv6W06YaO8FlNt4UVO80weIMeaqsHs2o+puPJAOoKxrbNrYbZeI9Kxod7QzkKiOJlxLJykfynO3gjaWxC0xTqObaDMkKwo4UMZu66njMJ9RaR7Fxv+o2tTsajwyvTJiHZekA5jPiFL2hcDWG5wueZ4Kh2uTTcLm587/qpn71NpLgY42hE/YdJ2gTvGP1KKwAc5zrEyZnwjyvKp8PjxF4IWl2btehh6TnOILs4tPKE7Z0G21gsRUAp0xAOb+A4J2C2RTwrLNlwuXEBxVTju3dUHuUHAE2LgQIXXdqaxAFTDjvt3gWPabO1sTHhp4rcxrNsF4iq957zSBOpieEAT8UFUpmnlYeyDYDnOWenE8UTh9qUKlt4U3ixaZBjjncpmK2pSpDRx4ZDxNkAGwO398AOYYaQ1pjwHtfBHvwzXMIbG9e5z6wEJQ2jSqOu4cBYQJ4DgialNzDvU3CR5H6ItaVz8MacMDx5IetvMInM6Z2mxKtMafSMBc0A8R8xl1Q9PZ7ni941J+K1GUGGxF4Lz55e6y02y8HN3G3GfiNEDT2UyxI6/Q6K/2fVZSbBG8I+wVueO/jFzhu0WARAjnx6oAqXEVA4mMtFCV68Zqaee3dJdXEloOpSkkpLRpLdEVTc17DTqN3mOs4HlkRwI0KnxWzzEi/CFVElhvmvK7Mjt/ZDsLVAneY4TTfxHA/zBMw71vK2FZiqZo1PFrs913EfRZGt2YxVNxHo94AmC0gyOIBMrNanYzYmIDXgO9VwLXDiHCD8UFjcOadR1M/lJE8RoeouiMPsrEDOi8dFZ7S2Y6oaTz3HFu7UnMbkAHd1lseRW/HnJ7Z8mFvpXbAwwfVDiJazvnmR6o8/cCr51aSScyuAMYwU6YhouSc3Hi4/JQFy5eXyc707+Lx8J2mcUO8J7SpWhcnogV1EOtHkq7aWynVGluerTqCOPw6rRNASdWaFbaZbBdm3/mdHhdWbdk02N3R1JVhUxo0VbjMVOvNO2dBXbHGhb/kuYfDObax4RcoSpihebJ+y8eN6ATzv8gnTnlFqyqbgBzeZaUzZVDfq+s8xMtLY6zoLFG1HEwRMcQisJUjKp7r9VnQ2Z2t2VSOHBcB3XNPOxEmfBZjaOy6+LDBh8gSXTkQRAHvVp2u2uxjNxxu6wB559Ff7ArNY0bvqETM2Aixhb1rscurGArdn6tJobUgHg0/OM0G/ZxL6ZOQtx1kLVdo8VL3W7991pjvgatPFAUKjXtBvPA59VjlWtTRVNquHdLWwOLZOSiZjWGQ6hQ3ubBfzTcc9rSCcnWIAykzb3+anfSIjcphzY0z/wB1emfbrdrCzfRUwNN0QhH1WuJBpgk8BNvv4I0YGsLiHNsYIAg8OClrD0YlzABnIVtM9jNkFneaItMZeRReCrk0xcHdMePBWOOqNqAcNRoqXCiS4D6efArXtla0qouDrnrpy6J+F7pgGB8VXh2U3PFEh5DhzVLq7FnSzaSE7eUBrAZlB19qtGQle/lJ7ePV+ljKUrOV9vO0ACEqbWqnVHONcK128lvLGDatb2lKzalX2pR8kXBrpSlZdu3anAKVu3n+yE84uNerseR4puJwbKwhwg8Qi9waLu6F53RnTgn0HTmJs4ZeB4I9uOk7pPgfFWNWCCDcarNbaomnulptcD4gI9mXQvF7TcO6BB1Vaa0prpe2fzD38vFCNqLjcdV6scpYLLlGSmCokXoaStKf6RDGoo34iE6OxFSoTqoHvhAYnaEKqxGPe4wPIc08RyWtfGXgZmw5q42b2PxuIG+Wehp571SQT4M9bzhbT8POxjcNTbXxDJxLrib+iacmjTe4nnHjtnskQV1nj/Xmz8930+aNs7Oe2qaZeS0cAJd00Ckw1H0QBAI+J8SvTPxK2MynTbVZ3ZdukAZzrOi8/bimCQ4HkZWcuro45bm19hGlzM7pwwtX8hvxN0BszGBgiDB4rS7PxAcJRDWVxvZUPJfVcajuJyHgOCP2SfRsNEiQB3eY1C0FRwMhU+OwpPeGYMjonez0rNs0wSCe93m+jIj/AEzEeU6KnqYVxdBtiMwQSG1GjllKuX0yZEZ6cbacF39mlkiYkAk3cxxuHCcwYv1XOzVagY0A+nJvbj+qr3UarGy1xkWHhpKs6dF4LpHdzMZHiR8wh8bQ3wQ07s5qRuE7RwCKkh2s6ok4kVW+N+OXis3U2azR5m8zqVHQxL6bt11x7o+StfiXOFpkMdPGB8lQHEmlWcHEgH3LUYaq1wF7xx1QG1sGwmZBMbsQPjxv+qsMu+xlAhxDJ9YEFF0Xy7OYVG3DNBhpE9RHnZHUnbuciFuz8YLE1oeZnlf5oCtUJOcKDaWJl8hNbXkXXT6c6nYRqU05gD/ZQV3ahSYd031Vf1OvpjKU5jAFG+ZUzGz9fkq06OpuabTCd6LmhXCDCc/EckJ6xg9rRBnxVxhtpNfAtKwI3gisJiS3WEhvXd64ugMZQa4FrhY+46FV2C2nBzvw4DmrJmKbUEOseIQmcxFN1IwfPiBwUFQNeZaYccwcjz8Vqq+Ha5m68bzfvXQqhq7MbTO+1xcDk0iYPjwRl67axtl6VxpvGbTy1nwhOc1wElpHRSYl5GZULXE6k34rluO26iNQoatW4orE1N1pMSANOCGkOjeFifgkcgGIqnQGVufw/wBgU6ThisUCXi9KnBIYfbd/NwGmecRS7LxTW1g9tMHdJneE34j6rWYTtYxzy0jIe9bxuLGfK+m2G3KfPyK7/wAap8/Iqhwu2KTvzAHgbQq/tD2mZQBa27onw5rpycOP0E/EzaT30gKZBZqDIK88wW64hzoMaIfbWNq1qkyTN75ILDvIcJGf3PNc8u3bCabI4luQAnii8Njh6oz8ICzLcZu5k+XxKfT2/SJhwLTlcfqsytVq3Y2Au0sVvaLM19qg5OBGs26BH7O2wDAc2Oea0NLSph2k8P1TW0d1xnLI+B+hnzVdjduhsgAnmBabKuxfaKoY3aZ4E9SPvxWdmRc1j6JxvOpBycOPkq7F7paatF0tHrNzNPxGrefK+SqsSa1enBJbUpkuaZzDT3gPAEOHg5Q4SoKTwWvIeYBAt1A5G8crIsa27VxAtvNaQcnDX6wo620GARu5fX7KJospVZcTuEnvtAlvCS0Zf1NymCNTFtDZwYN8d5ozIvFznGmXBXFcgTcSD6rY5/DJMqtcQCb+YTDiWRYX42Q9fHx8P90zFm5DsS9gbMS4WPPg7x+oVdWxRhQNqkuk+qbEnUG2vmm1qcAieR8Qumv1ztQCtJKlpOEoRzIUkkcluxiCqjuCcIA5lQUnTxU1ZkAcNFj/ABpNQqCbhFboMkAyLC+qrHGSIVhhaJAmZOZjMdUVqBMSSCJC62TkE3Fm9xfxRFPDggEX8U7DcmDqmbgnRPfsY5sc5vv9xQ9TZ2IaLOa7hIj4JAimQPFG0cXzj71WeqVa7PXpHpdcpbYZME7p4ER8UptcLtHSR9emq5tDBGo2aToIF2Tn4GbLO0sYDqrDDbQiAFmzalUWMpNBIO8HaguNiORTcLjrRFxzzWk2rgqeJbfu1AO675O5LA1qpo1HUqoIeCJBByixbx8dVzuFdJlFriccAHG+R++EqvZjT3W73q3uCZ5IWpVkDnnpY8VFUPqgD+U3tGXnqnGK1aYHahcS/IN6zIyI6SuUMc5tQvPj1PHoq9r4A0FpHMW+lkq1VrWyYOoHiZ6/ojS2vWbSc5rnvtaAOSO2RjQ+mPSd6LS7PqsKMWarwMgrOvji3/Tp34803HSmUq/2+GMp+kZaMx10QGx8Y2o2MiEFidobtL0bpk2IP3cKp2bXLHWPP6pmO5Rb211ZxBiIHxQmM3X+s1rvGx81MzEipTMHvAGOI+yqeniQ8ltXuvAgEGx8PesSVq2FVwjfyOLf5XXBXDWLDq05bzcuUwha2I3CQf0P0XP2rhrocukLpJWdxYs2tXaMw8R92z4KSt2keImmMp6mf081UktcZB3D5i6k3nHUGSB4fdldfY2Pf2kc0NqBuThbjAcCPIDzVdtfFBtVwA7tnMM5tcA5p8nJVyN0Bw/MTbgQB/6+9LFvYWUXETAcwzadx29/41Gjoma/BbUjcZNQloh4cT/Vfh7Xx+LHbSeSalMuaR6zZu3mOLZ45E9SM/cJ3gDf53RtJ2ThZ+eXrePP4/F3B2jftI1AN5jN7Ultj1aQR95Ic1CP3dPpvT0O9ZG4gbwLmiBqPZ//ACTr0OkxGkAJt4T98FclpG0g3LWz4u/+yWOqNMWzE2J8NZ1TalWJkDw4IYv+/FXtVx5bGR8x9FwN0vPNICSAjMQwCND8U2jQKI1RlNtp5IZ0Spw8bpuZ0RTHKNLeMCc8kc47sTPwFkHhhYv4ZX+FknOJuZKKTKxm5Ov3mrLDYkBoFgqetV6qengKjxvAQDlkmzY29a37/JOp1RmfehSeCRF+SULa8H7yCbXwVCoO8xrhzCGMnwXXOIQgmI7K0p/03upnkZHkUNV2PiaRlu7Vby7p99laU6hF/ijaOJ00SGapbRLXQ8OYfZcCPI6ona9AYqmADFRvqOz/ALTyWjqBlQQ9ocNAR9VW4ns+M6Liw+ybt+oQnnrKThLXiCDefFdfS3oHOcvgrnbuCeDL27rx+bNrhwlVNKCJOevwWLNOkRvoQReMvmSqzcdVqFrjEZcvAK+bTkHlkfKB4fRU2PG4+R61weATjRlBVKj6Md0d7jr7lFRpne3n68vJQ0qwcRocvhki34U7uXRPoe1ftLFSRrGqHp1IcCoKrrlOpCVvXTG91aMxpa/gD4Zn4pbQcHi2YuDGk5e9Q1GNLYGeo+aiwz/ylZ01s5r96G5myYaZz6eS6+gWnfAyueCJoOa8QTY5HUE8uCaEG6efRPMTlHFPfQc2CL+F/vJQPeZKPZHelOQItGnHiPNKo8mkwOEjfqf+NOUGKniiK57lPnvu/wAoH/qFaWzHVhER4LgxHJQl3NMLk6GxZxZzkyBA1BHAjVcrOkbwF9RMxzHEfD3oM8V3dIuDf4J0tuPfvFOZfISnPIPI8h8lxxgQPioJ8HTuZz0un4q5BJuEPh37qlrVucrN9tfQd5TnvEREKJxvCVRwSykpO5WUzq1oGf14Iahc3yCnYff7k2GVG2l1Jv0Vz+1boA7uWolB4V95vPyC6ardTJ5R9Fm9tTp6xSwv3yUn7LKcKoHVSvrgDP8AVQQnBH6fVOZgh4lSU6wiUvTqRlbANI5oWtgHC/wVl6VdFa8KSoAI06ovDVI5otgaRkOHjxTf2VhNiRoVbSLEUm1GlrgDPESsRtns+KZLqOtyzQjlwK3bcKAD3+sIbE7Oa788a5IUeY/t7GDWQIjnzQVLCPrS93dBy5ytptLsN6V++2uGuOY3DfnY5oOn2WxdG4LKrdWglp6bwhGtejvftm6WySxweDvAXsNJ8bKxxNTdEm0i2XlyyR+HplpcCxzYFwW5TaxyOSznaCpvOzmOHkjvK9nqTpS1fWPiicPh3ZrmGwpcRortmDdEHwEarpldOeM2CDZytH39+CrMTS3SrR9J4duuy8p6oPFnkrE1PhMTvN3T4JlbB2ltr/YVcyZsrikTHFVmlOwdOu9vdKdvBykxb8vam0DO8ZeKhbh6jbmm4D+kpmxt14AFk92IPdHAR5kn4FdEx6jv8T1TKveOR5W6BS27ujPXRRuCfRoVNGOPQ/RTM2ZWd+WPG3VMi2ZRa0NJzdoonPkwFaUNiOjvPAtoJ+ie3YzP4jj4ABa+PKjlFQ1oHiogbq6Oxm/xHe5MOwxo/wAwn48hyispu5f7J1Zo0R3/AAU6P9yjrbOqjIAjkfqs3DI8ornlMF1NUw9QZscOh+l1JTwLs3A9AT8EJDQzUlU9OClFINJsQDxn5rlVgzR9l3DvMH36IigJGaFYwNuXCDontxkWFkdtf16q2oT0y++KcwkkpJISYNOafSnM9Oa6kpHMYScvvxRNKkTokkhHikZiYhOY1oN3JJKR3pKds4T2PZ7ISSUku/8AYXK9TdHP5lJJCNawHO6Dq7GwzjLqFJxnMsab9QkklOHZWGAth6XRjfou/wDCcPrRpx/S3RJJSMfsTDG5oU/8Qh6nZrCG/oGdAR8EklIK7sTgid4Ud08nOHzXafZDBi/ogf6iXe4ldSVtKntyW06TGMDQ7e7gAFoBmBwvCpaNSQM0kl6fF6c8/adr94998WzdJ6WlRGuBoEkl24sbQvxvMhDYrH1HuLnHeJ1SSVJBtykSVK1i6kopqdIOIEgTq6wHiU/E4fcdG812V2mQkki72fpym+JFr8gfKcuijCSSQ6LInDYcvmC0ED8zg2dLE2K6ks5dQz2iJjO/IqDEMYT6o8Ekkyb7AN+Ep+wPJDOwFP2feUkkXGHb/9k="
                                        alt="third image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* 비밀 보드라면 자물쇠 아이콘 렌더링 */}
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        toggleModal('createPinEdit');
                                    }}
                                    className="pointer-events-auto items-center z-20 absolute left-2 top-2 justify-center flex w-8 h-8 rounded-full bg-white"
                                >
                                    <LockIcon />
                                </div>

                                {/* Hover 효과 */}
                                <div className="z-10 rounded-[16px] absolute inset-0 bg-[rgba(0,0,0,0.1)] hidden group-hover:block">
                                    {/* 자식 div */}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            toggleModal('boardEdit');
                                        }}
                                        className="active:scale-90 pointer-events-auto hover:bg-[#e2e2e2] items-center flex z-20 absolute right-2 bottom-3 justify-center flex w-8 h-8 rounded-full bg-white"
                                    >
                                        <PencilIcon />
                                    </div>
                                </div>
                            </div>
                            {/* 보드 설명 */}
                            <div className="p-[8px] h-[21.47%]">
                                {/* 보드 이름 */}
                                <p className="text-[20px] font-semibold">
                                    동물
                                </p>
                                <p>
                                    {/* 들어있는 사진 count */}
                                    <span className="text-[12px]">핀 1개</span>
                                    {/* 마지막 사진 추가로부터 지난 시간 */}
                                    <span className="ml-[8px] text-[12px] text-[#767676]">
                                        1일
                                    </span>
                                </p>
                            </div>
                        </Link>
                    ))}
                </MasonryList>
            </section>

            {/* 정리되지 않은 아이디어 section */}
            <UnorganizedIdea />

            {/* 보드 수정 Modal */}
            {(isModalOpen.boardEdit ||
                isModalOpen.boardCoverChange ||
                isModalOpen.boardDelete ||
                isModalOpen.boardImgResize ||
                isModalOpen.addParticipants) && <BoardEditModal />}

            {/* board 만들기 Modal */}
            {isModalOpen.boardCreate && <BoardCreate />}

            {/* board 정리하기 Modal */}
            {isModalOpen.boardCleanup && <BoardCleanupModal />}
        </div>
    );
};

export default Saved;
