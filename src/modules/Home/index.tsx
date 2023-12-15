import { Card, Link } from '@nextui-org/react';
import { screens } from './constants';
import { Screen } from './declaration';

export const Home = () => {
    const generationScreen = () => {
        return screens.map((value: Screen, index: number) => <div key={`card-${index}`} className='w-[150px] h-[100px] text-center'>
            <Card className='w-full h-full flex justify-center items-center cursor-pointer'>
                <Link href={value.url}><span className='text-[20px]'>{value.title}</span></Link>
            </Card>
        </div>)
    }
    return <div className="flex justify-center items-center h-full w-full">{generationScreen()}</div>;
};
