import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const User = (props) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar
                    src={props.user.picture.thumbnail}
                    alt={props.user.name.first + ' ' + props.user.name.last}
                />
            </ListItemAvatar>
            <ListItemText
                primary={props.user.name.first + ' ' + props.user.name.last}
                secondary={props.user.email}
            />
        </ListItem>
    )
}

export default User