import ModalLayout from '../../../components/@Modal/ModalLayout';

const PinCodeDownloadModal = () => {
    // line 태그 data 리스트
    const lineData: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
        strokeWidth: number;
        strokeColor: string;
    }[] = [
        {
            x1: '400.5',
            y1: '60.5',
            x2: '400.50101',
            y2: '60.500999',
            strokeWidth: 20.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '424.48196',
            y1: '61.346832',
            x2: '424.48297',
            y2: '61.347832',
            strokeWidth: 8.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '448.34445',
            y1: '63.883148',
            x2: '448.34546',
            y2: '63.884148',
            strokeWidth: 20.0,
            strokeColor: '#fab904',
        },
        {
            x1: '477.82446',
            y1: '69.409485',
            x2: '477.82547',
            y2: '69.410484',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '512.38989',
            y1: '79.438232',
            x2: '512.39087',
            y2: '79.439232',
            strokeWidth: 32.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '607.07715',
            y1: '130.45209',
            x2: '607.07812',
            y2: '130.45309',
            strokeWidth: 20.0,
            strokeColor: '#fab904',
        },
        {
            x1: '630.07275',
            y1: '149.70857',
            x2: '630.07373',
            y2: '149.70958',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '647.19061',
            y1: '166.52617',
            x2: '647.19159',
            y2: '166.52718',
            strokeWidth: 8.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '666.85284',
            y1: '189.17995',
            x2: '666.85382',
            y2: '189.18095',
            strokeWidth: 32.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '687.69861',
            y1: '218.51932',
            x2: '687.69958',
            y2: '218.52032',
            strokeWidth: 20.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '699.81934',
            y1: '239.23019',
            x2: '699.82031',
            y2: '239.2312',
            strokeWidth: 8.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '707.93396',
            y1: '255.29555',
            x2: '707.93494',
            y2: '255.29655',
            strokeWidth: 8.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '736.21716',
            y1: '346.70416',
            x2: '736.21814',
            y2: '346.70517',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '739.65192',
            y1: '376.50034',
            x2: '739.65289',
            y2: '376.50134',
            strokeWidth: 20.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '740.2887',
            y1: '412.4856',
            x2: '740.28967',
            y2: '412.4866',
            strokeWidth: 32.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '737.90985',
            y1: '442.38776',
            x2: '737.91083',
            y2: '442.38876',
            strokeWidth: 8.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '734.11487',
            y1: '466.0827',
            x2: '734.11584',
            y2: '466.08371',
            strokeWidth: 20.0,
            strokeColor: '#fab904',
        },
        {
            x1: '728.65808',
            y1: '489.45093',
            x2: '728.65906',
            y2: '489.45193',
            strokeWidth: 8.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '687.71069',
            y1: '582.46155',
            x2: '687.71167',
            y2: '582.46252',
            strokeWidth: 32.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '666.86688',
            y1: '611.80237',
            x2: '666.86786',
            y2: '611.80334',
            strokeWidth: 20.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '647.20831',
            y1: '634.4552',
            x2: '647.20929',
            y2: '634.45618',
            strokeWidth: 20.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '625.62976',
            y1: '655.28735',
            x2: '625.63074',
            y2: '655.28833',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '597.43561',
            y1: '677.65765',
            x2: '597.43658',
            y2: '677.65863',
            strokeWidth: 32.0,
            strokeColor: '#fab904',
        },
        {
            x1: '567.03467',
            y1: '696.92236',
            x2: '567.03564',
            y2: '696.92334',
            strokeWidth: 20.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '540.26288',
            y1: '710.44568',
            x2: '540.26385',
            y2: '710.44666',
            strokeWidth: 20.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '442.4212',
            y1: '737.9057',
            x2: '442.42221',
            y2: '737.90668',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '406.52014',
            y1: '740.44666',
            x2: '406.52115',
            y2: '740.44763',
            strokeWidth: 32.0,
            strokeColor: '#fab904',
        },
        {
            x1: '370.55161',
            y1: '739.17847',
            x2: '370.55261',
            y2: '739.17944',
            strokeWidth: 20.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '340.82028',
            y1: '735.22131',
            x2: '340.82129',
            y2: '735.22229',
            strokeWidth: 20.0,
            strokeColor: '#fab904',
        },
        {
            x1: '311.55341',
            y1: '728.6593',
            x2: '311.55441',
            y2: '728.66028',
            strokeWidth: 20.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '277.36295',
            y1: '717.4184',
            x2: '277.36395',
            y2: '717.41937',
            strokeWidth: 32.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '179.929',
            y1: '659.24396',
            x2: '179.93001',
            y2: '659.24493',
            strokeWidth: 20.0,
            strokeColor: '#fab904',
        },
        {
            x1: '149.48226',
            y1: '629.60218',
            x2: '149.48328',
            y2: '629.60315',
            strokeWidth: 32.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '124.04347',
            y1: '604.82403',
            x2: '124.04448',
            y2: '604.82501',
            strokeWidth: 32.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '105.38489',
            y1: '577.36169',
            x2: '105.38591',
            y2: '577.36266',
            strokeWidth: 16.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '91.881027',
            y1: '552.5975',
            x2: '91.88203',
            y2: '552.59848',
            strokeWidth: 8.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '82.893967',
            y1: '528.67136',
            x2: '82.89497',
            y2: '528.67233',
            strokeWidth: 8.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '76.401955',
            y1: '504.62103',
            x2: '76.40296',
            y2: '504.62201',
            strokeWidth: 8.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '60.553223',
            y1: '406.51526',
            x2: '60.554222',
            y2: '406.51627',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '61.821991',
            y1: '370.54675',
            x2: '61.82299',
            y2: '370.54776',
            strokeWidth: 32.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '68.095978',
            y1: '329.03271',
            x2: '68.096977',
            y2: '329.03372',
            strokeWidth: 32.0,
            strokeColor: '#fab904',
        },
        {
            x1: '79.438812',
            y1: '288.60846',
            x2: '79.439812',
            y2: '288.60947',
            strokeWidth: 32.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '95.67749',
            y1: '249.89046',
            x2: '95.67849',
            y2: '249.89146',
            strokeWidth: 32.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '110.13846',
            y1: '223.6097',
            x2: '110.13946',
            y2: '223.6107',
            strokeWidth: 8.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '166.53197',
            y1: '153.80391',
            x2: '166.53297',
            y2: '153.80492',
            strokeWidth: 8.0,
            strokeColor: '#ff3700',
        },
        {
            x1: '184.51547',
            y1: '137.91537',
            x2: '184.51648',
            y2: '137.91638',
            strokeWidth: 20.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '203.57487',
            y1: '123.3349',
            x2: '203.57588',
            y2: '123.3359',
            strokeWidth: 8.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '228.77048',
            y1: '107.0567',
            x2: '228.77148',
            y2: '107.0577',
            strokeWidth: 32.0,
            strokeColor: '#0fa573',
        },
        {
            x1: '260.75171',
            y1: '90.547729',
            x2: '260.75272',
            y2: '90.548729',
            strokeWidth: 20.0,
            strokeColor: '#0084ff',
        },
        {
            x1: '294.29883',
            y1: '77.511902',
            x2: '294.29984',
            y2: '77.512901',
            strokeWidth: 32.0,
            strokeColor: '#fab904',
        },
    ];

    return (
        <ModalLayout
            modalName="pincode"
            isBackgroundColor={true}
            className="hover:cursor-zoom-out z-10"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="z-30 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  cursor-auto pb-6 rounded-[16px] items-center w-[540px] bg-white flex flex-col"
            >
                <h1 className="p-6 text-[28px] font-semibold text-center">
                    핀코드
                </h1>

                <div className="w-[230px] h-[230px] -mt-3">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 800 800"
                        x="0px"
                        y="0px"
                    >
                        <g id="art">
                            <image
                                id="image"
                                x="100"
                                y="100"
                                width="600"
                                height="600"
                                href="https://s.pinimg.com/images/user/default_280.png"
                                preserveAspectRatio="xMidYMid slice"
                            ></image>
                            <path
                                id="background"
                                d="M0,0V800H800V0ZM400,700c-165.69,0-300-134.31-300-300S234.31,100,400,100,700,234.31,700,400,565.69,700,400,700Z"
                                className="fill-[#ffffff]"
                            ></path>
                        </g>
                        <g id="data">
                            {lineData.map((v, i) => (
                                <line
                                    key={i}
                                    x1={v.x1}
                                    y1={v.y1}
                                    x2={v.x2}
                                    y2={v.y2}
                                    style={{
                                        stroke: v.strokeColor,
                                        strokeWidth: `${v.strokeWidth}`,
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                    }}
                                />
                            ))}
                        </g>
                    </svg>
                </div>

                <div className="mb-7 mt-2">
                    <svg
                        aria-label="Pinterest 앱을 열고 검색 탭으로 이동해 검색창에 있는 카메라 아이콘을 눌러 핀코드를 스캔하세요."
                        fill="none"
                        height="78"
                        viewBox="0 0 315 78"
                        width="315"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0)">
                            <path
                                d="M105.625 19H107.031V7.72656H105.633L102.633 9.88281V11.3672L105.5 9.28906H105.625V19ZM111.125 19.0781C111.688 19.0781 112.141 18.6172 112.141 18.0625C112.141 17.5 111.688 17.0469 111.125 17.0469C110.57 17.0469 110.109 17.5 110.109 18.0625C110.109 18.6172 110.57 19.0781 111.125 19.0781ZM147.285 9.864C147.285 8.584 148.165 7.688 149.365 7.688C150.549 7.688 151.429 8.584 151.429 9.864C151.429 11.144 150.549 12.056 149.365 12.056C148.165 12.056 147.285 11.144 147.285 9.864ZM152.629 9.864C152.629 7.944 151.253 6.632 149.365 6.632C147.461 6.632 146.101 7.944 146.101 9.864C146.101 11.8 147.461 13.128 149.365 13.128C151.253 13.128 152.629 11.8 152.629 9.864ZM156.773 18.92H149.957V17.064H156.773V18.92ZM156.773 16.024H149.957V14.296H148.645V19.992H158.069V14.296H156.773V16.024ZM156.805 5.848V9.128H154.981V6.12H153.733V13.56H154.981V10.216H156.805V13.672H158.069V5.848H156.805ZM166.664 9.592C166.664 8.296 167.688 7.4 169.112 7.4C170.52 7.4 171.544 8.296 171.544 9.592C171.544 10.872 170.52 11.784 169.112 11.784C167.688 11.784 166.664 10.872 166.664 9.592ZM175.688 8.6V10.52H172.664C172.744 10.232 172.792 9.912 172.792 9.592C172.792 9.24 172.744 8.904 172.648 8.6H175.688ZM175.688 11.56V13.192H177V5.832H175.688V7.56H172.072C171.416 6.792 170.36 6.328 169.112 6.328C166.968 6.328 165.416 7.656 165.416 9.592C165.416 11.496 166.968 12.84 169.112 12.84C170.392 12.856 171.448 12.36 172.12 11.56H175.688ZM169.08 18.952V17.384H177V13.928H167.752V14.968H175.704V16.392H167.784V19.992H177.544V18.952H169.08ZM180.759 7.384V8.44H186.151C185.879 11.848 183.959 14.6 180.103 16.44L180.807 17.512C185.575 15.176 187.479 11.528 187.479 7.384H180.759ZM190.375 5.832V20.184H191.687V5.832H190.375ZM80.1875 36.9062H81.5469C81.5469 35.5703 82.4453 34.6875 83.7969 34.6875C85.125 34.6875 85.9297 35.5781 85.9297 36.7734C85.9297 37.7656 85.5078 38.3516 84.0703 39.9062L80.2578 44.0312V45H87.5547V43.7344H82.2109V43.6094L84.7734 40.9609C86.8047 38.8594 87.3672 37.9219 87.3672 36.625C87.3672 34.7969 85.8594 33.4609 83.8906 33.4609C81.7344 33.4609 80.1875 34.8984 80.1875 36.9062ZM90.8125 45.0781C91.375 45.0781 91.8281 44.6172 91.8281 44.0625C91.8281 43.5 91.375 43.0469 90.8125 43.0469C90.2578 43.0469 89.7969 43.5 89.7969 44.0625C89.7969 44.6172 90.2578 45.0781 90.8125 45.0781ZM134.045 38.872C131.933 38.248 130.541 36.664 130.541 34.92V34.632H133.709V33.576H130.541V31.752H129.229V33.576H126.045V34.632H129.229V34.92C129.229 36.84 127.789 38.568 125.661 39.224L126.317 40.264C127.997 39.688 129.293 38.504 129.901 36.984C130.541 38.344 131.805 39.384 133.437 39.896L134.045 38.872ZM132.221 45.144C130.077 45.144 128.797 44.568 128.797 43.576C128.797 42.584 130.077 42.008 132.221 42.008C134.333 42.008 135.629 42.584 135.629 43.576C135.629 44.568 134.333 45.144 132.221 45.144ZM132.221 40.984C129.261 40.984 127.485 41.912 127.485 43.576C127.485 45.224 129.261 46.152 132.221 46.152C135.149 46.152 136.941 45.224 136.941 43.576C136.941 41.912 135.149 40.984 132.221 40.984ZM136.781 35.544V31.832H135.469V40.632H136.781V36.632H138.909V35.544H136.781ZM146.844 32.728C143.868 32.728 141.628 34.312 141.628 36.696C141.628 39.096 143.868 40.664 146.844 40.664C149.82 40.664 152.06 39.096 152.06 36.696C152.06 34.312 149.82 32.728 146.844 32.728ZM146.844 33.8C149.116 33.8 150.812 34.968 150.812 36.696C150.812 38.44 149.116 39.592 146.844 39.592C144.588 39.592 142.876 38.44 142.876 36.696C142.876 34.968 144.588 33.8 146.844 33.8ZM140.348 43.192V44.28H153.388V43.192H140.348ZM162.234 43.336V40.632H166.826V39.576H157.994V37.256H166.49V32.888H156.666V33.96H165.21V36.2H156.698V40.632H160.906V43.336H155.066V44.408H168.106V43.336H162.234ZM184.749 31.832V46.216H186.061V31.832H184.749ZM178.493 32.936C176.365 32.936 174.845 34.888 174.845 37.944C174.845 41 176.365 42.952 178.493 42.952C180.621 42.952 182.141 41 182.141 37.944C182.141 34.888 180.621 32.936 178.493 32.936ZM178.493 34.12C179.885 34.12 180.877 35.624 180.877 37.944C180.877 40.28 179.885 41.784 178.493 41.784C177.085 41.784 176.093 40.28 176.093 37.944C176.093 35.624 177.085 34.12 178.493 34.12ZM195.532 45.16C193.26 45.16 191.932 44.6 191.932 43.592C191.932 42.584 193.26 42.024 195.532 42.024C197.772 42.024 199.1 42.584 199.1 43.592C199.1 44.6 197.772 45.16 195.532 45.16ZM195.532 41C192.46 41 190.604 41.928 190.604 43.592C190.604 45.256 192.46 46.184 195.532 46.184C198.572 46.184 200.428 45.256 200.428 43.592C200.428 41.928 198.572 41 195.532 41ZM196.188 38.92V37.256H200.508V36.2H191.98V33.544H200.412V32.488H190.668V37.256H194.876V38.92H189.036V39.976H202.028V38.92H196.188ZM69.5547 65.8047H70.9531C72.5391 65.8047 73.5156 66.6172 73.5156 67.9219C73.5156 69.1875 72.4609 70.0391 70.9766 70.0391C69.5234 70.0391 68.5078 69.2812 68.3828 68.0938H67.0234C67.125 70.0078 68.7031 71.2656 70.9922 71.2656C73.2344 71.2656 74.9609 69.8516 74.9609 67.9609C74.9609 66.3906 73.9922 65.3984 72.5312 65.1641V65.0391C73.6875 64.7031 74.5312 63.8047 74.5391 62.4453C74.5469 60.8672 73.2656 59.4609 71.0391 59.4609C68.7578 59.4609 67.3594 60.8125 67.2188 62.6484H68.5859C68.7031 61.3828 69.5859 60.6875 70.9453 60.6875C72.3047 60.6875 73.1094 61.5469 73.1094 62.6016C73.1094 63.7734 72.1875 64.6016 70.8906 64.6016H69.5547V65.8047ZM77.7891 71.0781C78.3516 71.0781 78.8047 70.6172 78.8047 70.0625C78.8047 69.5 78.3516 69.0469 77.7891 69.0469C77.2344 69.0469 76.7734 69.5 76.7734 70.0625C76.7734 70.6172 77.2344 71.0781 77.7891 71.0781ZM120.961 67.784C119.569 67.784 118.593 66.28 118.593 63.944C118.593 61.624 119.569 60.12 120.961 60.12C122.337 60.12 123.313 61.624 123.313 63.944C123.313 66.28 122.337 67.784 120.961 67.784ZM120.961 58.936C118.849 58.936 117.345 60.888 117.345 63.944C117.345 67 118.849 68.952 120.961 68.952C123.073 68.952 124.561 67 124.561 63.944C124.561 60.888 123.073 58.936 120.961 58.936ZM130.545 63.56H128.177V57.848H126.865V72.184H128.177V64.664H130.545V63.56ZM142.288 57.832V72.216H143.6V57.832H142.288ZM136.032 58.936C133.904 58.936 132.384 60.888 132.384 63.944C132.384 67 133.904 68.952 136.032 68.952C138.16 68.952 139.68 67 139.68 63.944C139.68 60.888 138.16 58.936 136.032 58.936ZM136.032 60.12C137.424 60.12 138.416 61.624 138.416 63.944C138.416 66.28 137.424 67.784 136.032 67.784C134.624 67.784 133.632 66.28 133.632 63.944C133.632 61.624 134.624 60.12 136.032 60.12ZM147.759 61.432L147.951 62.536L156.575 62.136C156.527 62.808 156.431 63.544 156.255 64.392L157.551 64.488C157.951 62.52 157.951 61.08 157.951 59.752V58.52H148.111V59.592H156.655V59.752C156.655 60.2 156.655 60.648 156.639 61.144L147.759 61.432ZM149.535 67.736H148.223V71.96H158.255V70.888H149.535V67.736ZM153.167 65.448V63.368H151.855V65.448H146.591V66.504H159.535V65.448H153.167ZM167.773 59.064C170.125 59.064 171.469 59.608 171.469 60.568C171.469 61.528 170.125 62.072 167.773 62.072C165.421 62.072 164.077 61.528 164.077 60.568C164.077 59.608 165.421 59.064 167.773 59.064ZM167.773 63.048C170.925 63.048 172.813 62.184 172.813 60.568C172.813 58.952 170.925 58.072 167.773 58.072C164.621 58.072 162.733 58.952 162.733 60.568C162.733 62.184 164.621 63.048 167.773 63.048ZM164.173 69.544H172.605V66.312H162.845V67.304H171.309V68.584H162.893V72.024H173.037V71H164.173V69.544ZM161.277 64.024V65.08H174.269V64.024H161.277ZM192.016 61.256H183.568V58.04H182.272V62.312H192.016V61.256ZM193.536 64.632V63.56H180.528V64.632H186.352V66.136H182.128V67.144H190.576V68.488H182.16V72.024H192.368V71H183.472V69.448H191.888V66.136H187.664V64.632H193.536ZM197.07 64.184H202.158V59.16H195.742V60.232H200.878V63.128H195.774V68.744H196.878C199.47 68.744 201.294 68.664 203.454 68.28L203.326 67.192C201.262 67.56 199.518 67.656 197.07 67.656V64.184ZM205.742 57.816V63.352H203.006V64.424H205.742V72.2H207.054V57.816H205.742ZM226.849 65.048C224.337 64.568 221.617 62.392 221.617 59.944V58.84H220.241V59.944C220.241 62.392 217.537 64.552 215.025 65.048L215.617 66.136C217.777 65.624 220.017 64.088 220.929 61.992C221.841 64.104 224.081 65.64 226.257 66.136L226.849 65.048ZM214.481 69.176V70.264H227.489V69.176H214.481ZM238.16 63.352H240.048V68.632H241.312V57.848H240.048V62.28H238.16V58.104H236.912V68.152H238.16V63.352ZM230 59.064V60.136H234.272C234.224 60.696 234.112 61.24 233.936 61.752L229.328 62.072L229.536 63.144L233.504 62.728C232.736 64.088 231.392 65.224 229.36 66.088L229.984 67.064C233.984 65.336 235.568 62.552 235.568 59.064H230ZM233.216 70.792V67.336H231.904V71.864H241.744V70.792H233.216Z"
                                fill="#111111"
                            ></path>
                            <path
                                clip-rule="evenodd"
                                d="M109 45C105.692 45 103 42.308 103 39C103 35.692 105.692 33 109 33C112.308 33 115 35.692 115 39C115 42.308 112.308 45 109 45M122.121 47.878L117.863 43.621C118.586 42.238 119 40.668 119 39C119 33.477 114.523 29 109 29C103.477 29 99 33.477 99 39C99 44.523 103.477 49 109 49C110.668 49 112.238 48.586 113.621 47.863L117.878 52.121C119.05 53.293 120.949 53.293 122.121 52.121C123.293 50.95 123.293 49.05 122.121 47.878"
                                fill="#111111"
                                fill-rule="evenodd"
                            ></path>
                        </g>
                        <path
                            clip-rule="evenodd"
                            d="M103.5 66C103.5 62.686 100.735 60 97.3235 60C93.9121 60 91.1471 62.686 91.1471 66C91.1471 69.314 93.9121 72 97.3235 72C100.735 72 103.5 69.314 103.5 66M109.676 61.5V71.5C109.676 73.709 107.833 75.5 105.559 75.5H89.0882C86.8143 75.5 84.9706 73.709 84.9706 71.5V61.5C84.9706 59.291 86.8143 57.5 89.0882 57.5H92.1765L93.3181 55.836C93.8915 55.001 94.855 54.5 95.8885 54.5H98.7585C99.7921 54.5 100.756 55.001 101.329 55.836L102.471 57.5H105.559C107.833 57.5 109.676 59.291 109.676 61.5M100.926 66C100.926 67.93 99.3103 69.5 97.3235 69.5C95.3368 69.5 93.7206 67.93 93.7206 66C93.7206 64.07 95.3368 62.5 97.3235 62.5C99.3103 62.5 100.926 64.07 100.926 66"
                            fill="#111111"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            clip-rule="evenodd"
                            d="M129.088 26C135.716 26 141.088 20.6274 141.088 14C141.088 7.37258 135.716 2 129.088 2C122.461 2 117.088 7.37258 117.088 14C117.088 20.6274 122.461 26 129.088 26Z"
                            fill="white"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M117.118 14C117.118 19.123 120.329 23.497 124.848 25.218C124.738 24.281 124.621 22.736 124.873 21.652C125.09 20.72 126.274 15.714 126.274 15.714C126.274 15.714 125.917 14.999 125.917 13.94C125.917 12.28 126.879 11.04 128.078 11.04C129.098 11.04 129.59 11.805 129.59 12.722C129.59 13.747 128.937 15.279 128.6 16.7C128.319 17.889 129.197 18.859 130.369 18.859C132.492 18.859 134.125 16.62 134.125 13.388C134.125 10.527 132.069 8.528 129.134 8.528C125.736 8.528 123.741 11.077 123.741 13.712C123.741 14.739 124.136 15.839 124.63 16.438C124.727 16.557 124.742 16.66 124.713 16.781C124.622 17.159 124.42 17.97 124.381 18.136C124.328 18.354 124.208 18.401 123.981 18.295C122.489 17.601 121.557 15.42 121.557 13.668C121.557 9.899 124.294 6.439 129.449 6.439C133.593 6.439 136.814 9.392 136.814 13.338C136.814 17.455 134.219 20.769 130.615 20.769C129.404 20.769 128.267 20.139 127.877 19.396C127.877 19.396 127.278 21.678 127.133 22.236C126.851 23.32 126.069 24.692 125.584 25.471C126.702 25.815 127.888 26 129.118 26C135.745 26 141.118 20.627 141.118 14C141.118 7.373 135.745 2 129.118 2C122.491 2 117.118 7.373 117.118 14"
                            fill="var(--color-red-pushpin-450)"
                        ></path>
                        <defs>
                            <clipPath id="clip0">
                                <rect
                                    fill="white"
                                    height="78"
                                    width="306"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                {/* 핀코드 다운로드 버튼 */}
                <button className="hover:bg-[#b60000] font-semibold py-2 px-3 w-[310px] bg-[#e60023] rounded-[24px] text-[16px] text-white">
                    핀코드 다운로드
                </button>
            </div>
        </ModalLayout>
    );
};

export default PinCodeDownloadModal;
