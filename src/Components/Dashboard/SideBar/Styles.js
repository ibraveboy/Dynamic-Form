
const styles = theme => ({
    list: {
        width: 250,
        flexShrink:0
    },
    fullList: {
        width:'auto'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    linkItem: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            textDecoration: "none",
        color: "black",
        }
    }
})

export default styles