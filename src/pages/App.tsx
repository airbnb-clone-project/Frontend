import { user } from '@/services/getUser';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        const creat = async () => {
            const loginData = await user.login({
                username: 'hori',
                password: 'qwe123',
            });

            console.log(loginData);
        };

        creat();
    }, []);
    return (
        <>
            <h1 className="text-3xl text-red-400 font-bold underline">
                Hello world!
            </h1>
        </>
    );
};

export default App;
