import { Card, Link } from '@nextui-org/react';
import { screens } from './constants';
import { Screen } from './declaration';

export const Home = () => {
    const generationScreen = () => {
        return screens.map((value: Screen) => <div className='w-5 text-center'>
            <Card>
                <Link href={value.url}>{value.title}</Link>
            </Card>
        </div>)
    }
    return <div className="flex justify-center items-center h-full w-full">{generationScreen()}</div>;
};
