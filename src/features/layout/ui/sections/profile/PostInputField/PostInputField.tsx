import React, {useRef} from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import {ToolbarSx} from "./PostInputField.styles";
import {Theme} from "../../../../../../app/styles/Theme";

type PostInputPropsType = {
    updatePostText: (value: string) => void
    addPost: () => void
    postText: string
}

export const PostInputField = ({updatePostText, addPost, postText}: PostInputPropsType) => {
    const textareaRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = () => {
        if (textareaRef.current) {
            updatePostText(textareaRef.current.value)
        }
    }

    const onClickHandler = () => {
            addPost()
    }

    return (
        <PostInputWrapper>
            <Toolbar sx={ToolbarSx}>
                <TwitterIcon sx={{mr: '15px'}}/>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    My posts
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="primary">
                        <TwitterIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={2} color="primary">
                        <ImageIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={5} color="primary">
                        <FavoriteBorderIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
            <TextField
                id="outlined-multiline-static"
                label="New post"
                multiline
                rows={4}
                placeholder="Enter the text of your post here..."
                variant="outlined"
                fullWidth
                value={postText}
                onChange={onChangeHandler}
                inputRef={textareaRef}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={onClickHandler}
                sx={{mt: '1rem'}}
            >
                Publish
            </Button>
        </PostInputWrapper>
    );
};

const PostInputWrapper = styled.div`
    max-width: 750px;
    width: 100%;

    @media ${Theme.media.desktop} {
        max-width: inherit;
    }
`