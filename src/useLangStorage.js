import { useState } from "react";

export default function (defaultLang) {
    
    let lang = localStorage.getItem('lang');
    if(lang === null){
        localStorage.setItem('lang', defaultLang);
        lang = defaultLang;
    }

    const [langStorage, setLangStorage] = useState(lang);

    const changeLang = (newLang) => {
        localStorage.setItem('lang', newLang);
        setLangStorage(newLang);
    }

    return [langStorage, changeLang];
}