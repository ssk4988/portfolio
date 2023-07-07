import { useTheme } from "@mui/material";

function Tag(props: any) {
    const theme = useTheme();
    return (<div className="tag tag-in-list" style={{backgroundColor: theme.palette.primary.dark}}>{props.data}</div>)
}

export default Tag;
