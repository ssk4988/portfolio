import { Avatar, Card, CardContent } from '@mui/material';
import useImage from './useImage';

function Education(props: any) {
    let { data } = props;
    const { loading, error, image } = useImage(data.logo);
    let degrees = data.degrees as object[];
    return (
        <Card className="card">
            <CardContent>
                <div className='center-row'>
                    {data.logo && <Avatar src={image} sx={{ border: 2, borderColor: 'white', height: 56, width: 56 }} className='logo' />}
                    <div className='column'>
                        <h3 style={{margin: 0}}>{data.name}</h3>
                        <p style={{margin: 0}}>{degrees.join(", ")}</p>
                        {/* {data.degrees.map((degree: any) => <p>{degree.type}{degree.topic ? ' in ' + degree.topic : ''}</p>)} */}
                    </div>
                    <div className='date'>
                        <p>{data.end ? (data.start + ' - ' + data.end) : data.start}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default Education;
