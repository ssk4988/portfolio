import { Avatar, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import useImage from './useImage';
import data from './assets/data.json';
import './styles.css';
import Tag from './Tag';
import { useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import { LinkOutlined } from '@mui/icons-material';

function Experience(props: any) {
    const logos = data.Logos as { [key: string]: string };
    let { experience } = props;
    const theme = useTheme();
    const { image } = useImage(experience.logo in logos ? logos[experience.logo] : '');
    const tags = experience.tags.map((tag: string) => <Tag key={tag} data={tag}></Tag>);
    const markdown = experience.markdown ? <ReactMarkdown>{experience.markdown.join("\n")}</ReactMarkdown> : null;
    const links = experience.links ? experience.links.map((link: any) => {
        return <Button
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkOutlined />}
        >{link.name}</Button>
    }) : null;
    const openCompanyLink = () => {
        window.open(experience.companylink);
    }
    return (
        <Card className="card">
            <CardContent>
                <div className='title-logo'>
                {experience.logo && <Avatar src={image} sx={{ border: 2, borderColor: 'white' }} className='logo' />}
                    <Typography
                        variant="h6"
                        fontWeight={theme.typography.fontWeightBold}
                        color={theme.palette.text.primary}
                    >{experience.company + " | " + experience.title}
                    </Typography>
                    {experience.companylink && <IconButton onClick={openCompanyLink}>
                        <LinkOutlined />
                    </IconButton>}
                    <div className='date'>
                        <p>{experience.start + ' - ' + experience.end}</p>
                    </div>
                </div>
                {experience.description &&
                    <i style={{ color: theme.palette.text.secondary }} className='card-description'>{experience.description}</i>
                }
                {markdown}
                <div className='row' style={{ marginBottom: "1rem" }}>
                    {links}
                </div>
                <div className='row'>
                    {tags}
                </div>
            </CardContent>
        </Card>
    );
}

export default Experience;
