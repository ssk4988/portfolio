import { Typography, useTheme } from "@mui/material";
import './styles.css';

function Wrapper(props: any) {
    const { children, name, id } = props;
    const theme = useTheme();
    return (
        <div id={id} className="wrapper" style={{scrollMarginTop: theme.mixins.toolbar.minHeight + "px"}}>
            <Typography fontSize={40} fontWeight={700}>{name}</Typography>
            {children}
        </div>
    );
}

export default Wrapper;
