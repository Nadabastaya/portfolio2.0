import styled, { keyframes } from 'styled-components'

function Nav() {
    return (
        <NavContainer>
            <h1>Camilo García</h1>
            <ListContainer>
                <List>
                    <ListItem>
                        <ListLink>About</ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink>Projects</ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink>Contact</ListLink>
                    </ListItem>
                </List>
            </ListContainer>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 100px;
    position: fixed;
`

const ListContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 150px;
`

const List = styled.ul`
    display:flex;
    gap: 100px;
`

const ListItem = styled.li`
    list-style: none;
`

const ListLink = styled.a`
    color: #000;
    text-decoration: none;
    font-weight: 600;
`


export default Nav