import styled from "styled-components";
import {ProfileCard} from "./ProfileCard/ProfileCard";
import {Post} from "./Posts/Post/Post";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Section} from "../../../components/Section";
import {PostInputFieldContainer} from "./PostInputField/PostInputFieldContainer";
import {PostsType, ProfileType} from "../../../redux/profile-reducer";


type ProfilePropsType = {
    posts: PostsType[]
    profile: ProfileType
}

export const Profile = ({posts, profile}: ProfilePropsType) => {
    console.log('Profile')
    return (
        <Section>
            <Container>
                <BoxWrapper>
                    <ProfileCard profile={profile}/>
                    <PostInputFieldContainer/>
                </BoxWrapper>
                <PostsWrapper>
                    {posts.map(post => <Post key={post.id} postText={post.postText}/>)}
                </PostsWrapper>
            </Container>
        </Section>
    );
};


const BoxWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;

    @media ${Theme.media.desktop} {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

const PostsWrapper = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 50px auto;
`