import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { CloseButton } from '../../components/pop-up/CloseButton';
import { Counter } from '../../components/counter/Counter';
import { StyledBtn } from '../../components/StyledBtn';
import { TopLevel } from '../sidebar/TopLevel';
import { initialStateSidebarType } from '../../redux/sidebarReducer';


type MobileMenuPopupPropsType = {
    isOpen:boolean
    handleCloseModalWindowMenu:() => void
    counter: {
        boys: number,
        girls: number         
    }
    handleToggleModalWindow: (windowName:string) => void 
    sidebar: initialStateSidebarType
    isActiveId: string | null
    setIsActiveId: Function   
}
export const MenuPopup: React.FC<MobileMenuPopupPropsType> = (props: MobileMenuPopupPropsType) => { 

    useEffect(() => {
        if(props.isOpen) {
            document.body.style.overflowY = "auto";
            document.body.style.position = "fixed";
            document.body.style.width = "100%"; 
            document.body.style.height = "max-content";            
        }
        return () => {
            document.body.style.overflowY = "unset";
            document.body.style.position = "unset";
            document.body.style.width= "unset"; 
            document.body.style.height = "unset";            
        }        
     }, [props.isOpen]);
        
    return (
        <StyledMenuPopup isOpen={props.isOpen}>
            <CloseButton 
                handleCloseMobileModalWindowMenu={props.handleCloseModalWindowMenu} 
                top="-20px"
                right="0"                       
            />
            <Counter counter={props.counter}/>
            <StyledBtn onClick={() => props.handleToggleModalWindow("3ndfl")}>
                Возврат 13%
            </StyledBtn> 
            <TopLevel 
                sidebar={props.sidebar}   
                ids= {props.sidebar.sidebarMenu.entities.topLevelIds.mobile}
                isActiveId={props.isActiveId}
                setIsActiveId={props.setIsActiveId}
                mobile
            />            
        </StyledMenuPopup>
    );
};

const StyledMenuPopup = styled.div<{isOpen:boolean}>`  
    width: 100%;
    height: 100%;    
    padding: 44px 20px 64px;
    margin: 0 auto; 
    overflow-y: auto;      
    
    background-color: ${({theme}) => theme.bgCol.default};
    z-index: 100;
    
    position: fixed;
    top: 58px;  
    left: 0;  
      
    transform: ${props => props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.6s; 


    @media ${({theme}) => theme.media.lg992}{
        ${StyledBtn} {
            display: none;                   
        }

        & > div:nth-of-type(2) {
            margin-bottom: 20px;
        }        
    }

    @media ${({theme}) => theme.media.tablet}{
        ${StyledBtn} {
            display: block; 
            width: 100%;
            padding: 15px 20px; 
            margin-bottom: 10px;      
        }
    }
`






