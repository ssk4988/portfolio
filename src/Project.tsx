import { Avatar, Button, Card, CardContent } from '@mui/material';
import useImage from './useImage';
import './styles.css';
import Tag from './Tag';
import { useTheme } from "@mui/material";

function Project(props: any) {
    let { data } = props;
    const theme = useTheme();
    const { loading, error, image } = useImage(data.logo);
    let tags = data.tags.map((tag: string) => <Tag key={tag} data={tag}></Tag>);
    return (
        <Card className="card">
            <CardContent>
                <div className='title-logo'>
                    {data.logo && <Avatar src={image} sx={{ border: 2, borderColor: 'white' }} className='logo' />}
                    <h3>{data.name}</h3>
                </div>
                {data.description && 
                    <i style={{color: theme.palette.text.secondary}} className='card-description'>{data.description}</i>
                }
                {/* TODO: replace this with JSON Markdown */}
                {(data.name as string).startsWith("Portfolio") &&
                    <div>
                        <ul>
                            <li>Built from scratch</li>
                        </ul>
                    </div>
                }
                {(data.name as string).startsWith("Computer Vision") &&
                    <div>
                        <ul>
                            <li>Currently experimenting with YOLOv4, a fast object detection model</li>
                        </ul>
                    </div>
                }
                {(data.name as string).startsWith("Platform Art") &&
                    <div>
                        <ul>
                            <li>Visualizes Platform Art’s public art projects through an interactive map and directory</li>
                            <li>Integrated with Firebase server to make content scalable and maintainable</li>
                        </ul>
                    </div>
                }
                {(data.name as string).startsWith("Blockchain") &&
                    <div>
                        <ul>
                            <li>Evaluated both by simulation and math the probability of success of 51% attacks to rewrite the ledger using variable percentages of the total CPU Power</li>
                        </ul>
                    </div>
                }
                {(data.name as string).startsWith("ArcherX") &&
                    <div>
                        <ul>
                            <li>Placed 7th at TSA Florida’s Game Design competition</li>
                        </ul>
                    </div>
                }
                {(data.name as string).startsWith("FBLA") &&
                    <div>
                        <ul>
                            <li>Global leaderboard maintained through a Firebase server</li>
                            <li>Settings allow for customized quizzes</li>
                            <li>Coming to Google Play soon after being updated</li>
                        </ul>
                    </div>
                }
                {(data.name as string).startsWith("YouShop") &&
                    <div>
                        <ul>
                            <li>Placed 7th at TSA Florida’s Software Development competition</li>
                            <li>Firebase server allows to save user favorites</li>
                            <li>Filters to narrow searches</li>
                            <li>Coming to Google Play soon after being updated</li>
                        </ul>
                    </div>
                }
                <div className='row'>
                    {tags}
                </div>
            </CardContent>
        </Card>
    );
}

export default Project;
