import { Avatar, Button, Card, CardContent } from '@mui/material';
import useImage from './useImage';
import './styles.css';
import Tag from './Tag';
import { useTheme } from "@mui/material";

function Experience(props: any) {
    let { data } = props;
    const theme = useTheme();
    const { loading, error, image } = useImage(data.logo);
    let tags = data.tags.map((tag:string)=><Tag key={tag} data={tag}></Tag>);
    return (
        <Card className="card">
            <CardContent>
                <div className='title-logo'>
                    {data.logo && <Avatar src={image} sx={{ border: 2, borderColor: 'white' }} className='logo' />}
                    <h3>{data.company}</h3>
                    {/* {data.companylink && <Button sx={{}}>{data.company}</Button>} */}
                    <p>&nbsp;{'| ' + data.title}</p>
                    <div className='date'>
                        <p>{data.start + ' - ' + data.end}</p>
                    </div>
                </div>
                {data.description && 
                    <i style={{color: theme.palette.text.secondary}} className='card-description'>{data.description}</i>
                }
                {/* TODO: replace this with JSON Markdown */}
                {data.company == 'UCF VARLab' && 
                    <div>
                        Projects:
                        <ul>
                            <li>
                                Chip Factory Digital Twin
                                <ul>
                                    <li>Web-based project to simulate and optimize complex manufacturing processes  computer chip manufacturing company using Angular and Three.js</li>
                                    <li>I worked on data visualizations for the machines, the backend, and the animations of the processes</li>
                                </ul>
                            </li>
                            <li>
                                Architecture Review
                                <ul>
                                    <li>VR project for reviewing architecture designs in 3D, immersive reality</li>
                                    <li>rendered on the CAVE, a proprietary room-based VR technology developed by the VARLab</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                }
                {data.company == 'UCF Programming Team' &&
                    <div>
                        <ul>
                            <li>Team members train year-long in algorithms, data structures, and problem-solving skills in Java, C++, and Python</li>
                            <li>They apply these skills in team-based competitive programming competitions, the most notable being ACM’s International Collegiate Programming Contest (ICPC)</li>
                            <li>I competed in the 2022 ACM-ICPC Southeast Regional Competition, placing 6th with my team (named UCF Command Block). I am also in the top 3% of active competitive programmers on CodeForces.</li>

                        </ul>
                        Additional Resources:
                        <ul>
                            <li><a href="https://www.ucfprogrammingteam.org/">UCF Programming Team Website</a></li>
                            <li><a href="https://nasouth22d1.kattis.com/contests/nasouth22d1/standings?filter=4997">Regionals Performance</a></li>
                            <li><a href="https://codeforces.com/profile/ssk4988">CodeForces Profile</a></li>
                        </ul>
                    </div>
                }
                {data.company == 'Lockheed Martin' &&
                    <div>
                        <ul>
                            <li>Implemented prototype in Python using Windows APIs</li>
                            <li>Created an application (written in JavaScript) in ServiceNow that can be scaled to multiple business areas</li>
                            <li>Designed queries to locate 300+ employee assets to be collected in the Missiles and Fire Control Business Area</li>
                        </ul>
                    </div>
                }
                <div className='tag-list'>
                    {tags}
                </div>
            </CardContent>
        </Card>
    );
}

export default Experience;
