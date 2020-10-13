import { createGlobalStyle, css } from 'styled-components';

// try coolors.co
export const Theme: any = {
    color: {
        primary: '#f6b26b',
        secondary: '#1155cc',
        white: '#FFFFFF',
        blue: '#4c94f6',
        red: '#ee5454',
        yellow: '#f6db35',
        orange: '#ffc510'

    },
    font: {
        primary: 'Varela Round',
        secondary: 'Bangers'
    }
};

export const GlobalStyle: any = createGlobalStyle`
    ${({ theme }: any): any => css`
        @import url('https://fonts.googleapis.com/css?family=Lato|Varela+Round&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');

        body {
            font-family: 'Lato', sans-serif;
            font-family: 'Varela Round', sans-serif;
            font-family: 'Bangers', cursive;
            font-family: 'Comic Neue', cursive;

            font-size: 16px;
            color: ${theme.color.primary};
            background-color: ${theme.color.secondary};
            box-sizing: border-box;
            *:focus {
                outline: none;
            }
            height: 100%;
            display: flex;
            margin: 0;
            padding: 0;
        }
        
        html {
            height: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        #root {
            display: flex;
            flex: 1;
        }
    `}`;