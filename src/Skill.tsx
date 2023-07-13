import { Avatar, useTheme } from "@mui/material";
import data from './assets/data.json';
import useImage from "./useImage";

function Skill(props: any) {
    const theme = useTheme();
    const logos = data.Logos as { [key: string]: string };
    const { loading, error, image } = useImage(props.name in logos ? logos[props.name] : '');
    return (<div className="skill skill-in-list row" style={{ backgroundColor: theme.palette.primary.dark }}>
        {props.name in logos && <Avatar src={image} style={{ marginRight: '0.5rem' }} />}
        {props.name}
    </div>)
}

export default Skill;
