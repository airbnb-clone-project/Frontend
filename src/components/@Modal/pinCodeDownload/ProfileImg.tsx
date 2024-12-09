const ProfileImg = () => {
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
    );
};

export default ProfileImg;
