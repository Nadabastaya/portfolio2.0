import styled, { keyframes } from 'styled-components'
import HeaderAvatar from '../../assets/images/avatar.jpg'

function Header()   {

    const numbers = [1,2,3]
    numbers[10] = 11
    numbers.forEach(f => console.log())

    return (
        

    <HeaderContainer>
        <AvatarContainer1>
        </AvatarContainer1>
        <AvatarContainer>
            <Avatar src={HeaderAvatar} alt="" />
        </AvatarContainer>
        <TitleContainer>
            I'm Camilo, Fullstack Dev
        </TitleContainer>
        
        
    </HeaderContainer>

    )
}

const HeaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DECBB7;
    overflow:hidden;
    
`

const fadeInTopLeft = keyframes`
    0%    {
        transform: translate(-120px, -170px);
        
    }
    100%  {
        transform: translate(0px, 0px);
        
    }
`

const fadeInRight = keyframes`
    0%    {
        transform: translate(100px, 0);
        opacity: 0;
    }
    100%  {
        transform: translate(0, 0);
        opacity: 1;
    }
`

const AvatarContainer = styled.div`
    background: red;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 120px;
    animation: ${fadeInTopLeft} 1s ease-out;
`
const AvatarContainer1 = styled.div`
    width: 640px;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 100px;
    top: 140px;
    animation: ${fadeInTopLeft} 2s ease;
    background: #980915;
`

const TitleContainer = styled.div`
    font-size: 150px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4F3817;
    position: absolute;
    left: 800px;
    animation: ${fadeInRight} 3s 1s ease forwards;
    width: 1100px;
    opacity: 0;
`

const Avatar = styled.img`
    background: #152041;
    opacity: 1;
    transform: scaleX(-1);
`


export default Header