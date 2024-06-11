import { Avatar, Card, CardContent, IconButton } from '@mui/material';
import useImage from './useImage';
import './styles.css';
import data from './assets/data.json';
import Tag from './Tag';
import { useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import { LinkOutlined } from '@mui/icons-material';

function Project(props: any) {
    const logos = data.Logos as { [key: string]: string };
    const theme = useTheme();
    let { project } = props;
    const usingNameLogo = false; //project.namelogo && project.namelogo in logos;
    let imgSrc = '';
    if (usingNameLogo) {
        imgSrc = logos[project.namelogo];
    }
    else if (project.logo && project.logo in logos) {
        imgSrc = logos[project.logo];
    }
    const { image } = useImage(imgSrc);
    const tags = project.tags.map((tag: string) => <Tag key={tag} data={tag}></Tag>);
    const markdown = project.markdown ? <ReactMarkdown>{project.markdown.join("\n")}</ReactMarkdown> : null;
    const openLink = () => {
        window.open(project.link);
    }
    console.log(image);
    const header = usingNameLogo ? <img src={image} style={{ height: '50px', width: 'auto' }} /> : <>
        {imgSrc != '' && <Avatar src={image} sx={{ border: 2, borderColor: 'white' }} className='logo' />}
        <h3>{project.name}</h3>
        {project.link && <IconButton onClick={openLink}>
            <LinkOutlined />
        </IconButton>}
    </>
    return (
        <Card className="card">
            <CardContent>
                <div className='title-logo'>
                    {header}
                </div>
                {project.description &&
                    <i style={{ color: theme.palette.text.secondary }} className='card-description'>{project.description}</i>
                }
                {markdown}
                <div className='row'>
                    {tags}
                </div>
            </CardContent>
        </Card>
    );
}

export default Project;
