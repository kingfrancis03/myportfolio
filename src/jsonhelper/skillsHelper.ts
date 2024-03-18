import data from '../json/myskills.json';
import { Skills } from '../typings/skills'
import pythonLogo from '../assets/python.png'
import javaScriptLogo from '../assets/JavaScript-logo.png'
import mySqlLogo from '../assets/mysql.png'
import VueLogo from '../assets/vue.png'
import htmlCSSLogo from '../assets/html-css.png'

// const imageName = 'html-css.png'; // Dynamically specify the image name
// const imagePath = `../assets/${imageName}`;

// let htmlCSSLogo = ''
// import(imagePath)
//   .then(image => {
//     htmlCSSLogo = image
//   })
//   .catch(error => {
//     console.error('Error loading image:', error);
//   });

class SkillHelper {
    skills: Skills[] = []
    logos: any = {
        pythonLogo: pythonLogo,
        javaScriptLogo: javaScriptLogo,
        mySqlLogo: mySqlLogo,
        VueLogo: VueLogo,
        htmlCSSLogo: htmlCSSLogo,
    }

    constructor() {
        this.skills = data.map(myobj => {
            let newObj: Skills = myobj
            newObj.logoImage = this.logos[myobj.logoImage]

            return newObj
        })
    }

    getSkills(): Skills[] {
        return this.skills
    }
}


export default SkillHelper
