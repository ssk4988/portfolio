import { Avatar, Button, Card, Tooltip, Typography, useTheme } from "@mui/material";
import data from './assets/data.json';
import useImage from "./useImage";
import ConditionalWrapper from "./ConditionalWrapper";

function Award(props: any) {
    const theme = useTheme();
    const logos = data.Logos as { [key: string]: string };
    const { image } = useImage(props.data.contextlogo in logos ? logos[props.data.contextlogo] : '');
    const logoobj = useImage(props.data.logo in logos ? logos[props.data.logo] : '');
    let color: string = theme.palette.text.primary;
    switch (props.data.award) {
        case 'Candidate Master':
            color = '#a0a';
            break;
        case 'Master':
            color = '#ff8c00';
            break;
        case 'Platinum Division':
            color = '#d1d1d1';
            break;
        case '1st Place':
            color = '#f5c34f';
            break;
        case '2nd Place':
            color = '#b2afa3';
            break;
    }
    let context = <>
        {props.data.contextlogo in logos && <Avatar src={image} style={{ marginRight: '0.5rem' }} />}
        <Typography sx={{ fontSize: 20 }}>{props.data.context}</Typography>
    </>
    if (props.data.link) {
        context = <Button sx={{ flexGrow: 1, color: 'text.primary' }}
            onClick={() => { window.open(props.data.link); }}>{context}</Button>
    } else {
        context = <div className="center-row" style={{ flexGrow: 1 }}>{context}</div>
    }
    return (
        <ConditionalWrapper
            condition={props.data.tooltip}
            wrapper={(children: any) => <Tooltip title={props.data.tooltip} arrow>{children}</Tooltip>}
        >
            <Card className="award-card">
                <div className="center-row" style={{ marginTop: "1rem" }}>
                    {props.data.logo in logos && <Avatar src={logoobj.image} style={{ marginRight: '0.5rem' }} />}
                    <Typography sx={{ fontSize: 32, fontWeight: 600, color: color }}>{props.data.award}</Typography>
                </div>
                {context}
                {props.data.year && <i>{props.data.year}</i>}
            </Card>
        </ConditionalWrapper>
    );
}

export default Award;
