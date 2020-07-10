import cloudsImage from '../assets/background/clouds.jpg';
import skyImage from '../assets/background/clouds2.jpg';
import starsImage from '../assets/background/milky-way.jpg';
import blackImage from '../assets/background/black.jpg';
import puzzleImage from '../assets/background/puzzle.jpg';
import roadImage from '../assets/background/road.jpg';
import spaceImage from '../assets/background/space.jpg';
import treeImage from '../assets/background/tree.jpg';

const imageStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};

const white = {
    cardStyles: {
       background: '#F5F5F5'
    },
    textStyles: {
        color: '#001021'
    },
    footerStyle: {
        backgroundColor: '#fafafa',
        color:'#001021'
    }
};

const gold = {
    cardStyles: {
       background: '#FFD700'
    },
    textStyles: {
        color: '#211A1E'
    },
    footerStyle: {
        backgroundColor: '#141301',
        color:'#E9F1F7'
    }
};

const blue = {
    cardStyles: {
       background: '#458CD9'
    },
    textStyles: {
        color: 'white'
    },
    footerStyle: {
        backgroundColor: '#DCE1DE',
        color:'#1F2421'
    }
};

const red = {
    cardStyles: {
       background: '#FF3333'
    },
    textStyles: {
        color: '#240115'
    },
    footerStyle: {
        backgroundColor: '#2F131E',
        color:'white'
    }
};

const clouds = {
    cardStyles: {
        backgroundImage:`url(${cloudsImage})`,
        ...imageStyle
    },
    textStyles: {
        color: 'black',
        textShadow:'0px 0px 5px rgba(255,255,255,1), -0px 0px 5px rgba(255,255,255,1)'
    },
    footerStyle: {
        backgroundColor: 'orchid',
        color:'black'
    }
};

const sky = {
    cardStyles: {
        backgroundImage:`url(${skyImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'white',
        textShadow:'0px 0px 5px rgba(0,0,0,.7), -0px 0px 5px rgba(0,0,0,.7)'
    },
    footerStyle: {
        backgroundColor:'dodgerblue',
        color:'white',
    }
};

const stars = {
    cardStyles: {
        backgroundImage:`url(${starsImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'white'
    },
    footerStyle: {
        backgroundColor:'darkblue',
        color:'white',
    }
};

const puzzle = {
    cardStyles: {
        backgroundImage:`url(${puzzleImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'black',
        textShadow:'0px 0px 5px rgba(255,255,255,1), -0px 0px 5px rgba(255,255,255,1)'
    },
    footerStyle: {
        backgroundColor:'ghostwhite',
        color:'black'
    }
};

const road = {
    cardStyles: {
        backgroundImage:`url(${roadImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'white',
        textShadow:'0px 0px 5px rgba(0,0,0,.7), -0px 0px 5px rgba(0,0,0,.7)'
    },
    footerStyle: {
        backgroundColor:'lightslategrey',
        color:'white'
    }
};

const space = {
    cardStyles: {
        backgroundImage:`url(${spaceImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'white',
    },
    footerStyle: {
        backgroundColor:'darkred',
        color:'white'
    }
};

const tree = {
    cardStyles: {
        backgroundImage:`url(${treeImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'white',
        textShadow:'0px 0px 5px rgba(0,0,0,.7), -0px 0px 5px rgba(0,0,0,.7)'
    },
    footerStyle: {
        backgroundColor:'indigo',
        color:'white'
    }
};

const black = {
    cardStyles: {
        backgroundImage:`url(${blackImage})`,
        ...imageStyle
    },
    textStyles: {
        color:'white'
    },
    footerStyle: {
        backgroundColor:'black',
        color:'white'
    }
}

const themes = [
    white,
    gold,
    blue,
    red,
    clouds,
    sky,
    stars,
    puzzle,
    road,
    space,
    tree,
    black    
];

export default themes;