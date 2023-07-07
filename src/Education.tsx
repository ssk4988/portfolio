import { Avatar, Card, CardContent } from '@mui/material';
import useImage from './useImage';

function Education(props: any) {
    let { data } = props;
    const { loading, error, image } = useImage(data.logo);
    return (
        <Card className="card">
            <CardContent>
                <div className='title-logo'>
                    {data.logo && <Avatar src={image} sx={{ border: 2, borderColor: 'white' }} className='logo' />}
                    <h3>{data.name}</h3>
                    <div className='date'>
                        <p>{data.start + ' - ' + data.end}</p>
                    </div>
                </div>
                <div>
                    <h4>Degree</h4>
                    {data.degrees.map((degree: any) => <p>{degree.type}{degree.topic ? ' in ' + degree.topic : ''}</p>)}
                </div>
            </CardContent>
        </Card>
    );
}

export default Education;
