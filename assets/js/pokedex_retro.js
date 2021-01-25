// All types colors
const allColors = {
    fire: '#FB6C6C',
    grass: '#48D0B0',
    electric: '#FFD86F',
    water: '#76BDFE',
    ground: '#D68E5E',
    rock: '#C9B98B',
    fairy: '#FEBAEA',
    poison: '#54B564',
    bug: '#2CDAB1',
    dragon: '#0875C8',
    psychic: '#9758AD',
    flying: '#AEC5EF',
    fighting: '#DA475C',
    normal: '#5B5F68',
    ice: '#51C4E7',
    ghost: '#7B62A3',
    dark: '#9D9EA0',
    steel: '#9EB7B8'
}

// DOM
const dexTurnOnBtn = document.querySelector(".on-btn");
const dexMenuBtn = document.querySelector(".menu-btn");
const dexTurnOffBtn = document.querySelector(".off-btn");
const backToFiltersBtn = document.querySelector(".btf-btn");
const pkmnTxtContainer = document.querySelector(".p-dex-txt");
const pDexInfoBtn = document.querySelector(".p-dex-info-btn");
const topDisplay = document.querySelector(".p-dex-start-screen");
const mobileMenu = document.querySelector('.mobile-menu-slider');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const bottomDisplay = document.querySelector(".p-dex-ctrl-screen");
const dexInfoContainer = document.querySelector(".p-dex-info-cont");
const pkmnDataContainer = document.querySelector(".p-dex-data-cont");
const navigationButtons = document.querySelectorAll(".p-dex-nav-btn");
const bottomDisplayBg = document.querySelector(".p-dex-ctrl-screen-bg");
const controlStartScr = document.querySelector(".pdex-ctrl-start-screen");
const modeOptionBtns = document.querySelectorAll(".p-dex-mode-options-btn");
const typeFinderScr = document.querySelector(".p-dex-ctrl-type-finder-scr");
const typeFinderTypesCont = document.querySelector(".type-finder-types-box");
const typeFinderNamesCont = document.querySelector(".type-finder-names-box");
const typeFinderNamesTypes = document.querySelector("#type-finder-names-types");

// Background for start screen
const startScrBg = "#6dd5ed";

// Maximal amount pkmn
const pkmnLimit = 150;

let currentPkmnSet;
let pkmnSetIndex;

let menuOpen = false;
let loaded = false;
let allPkmn = [];


//------------------------------------------------------------------------------ FETCHES & MODIFIES ALL 150 PKMN

// Gets all Pokemon (API) and modifies data
const getAndModifyPkmn = () => {
    for (let pkmn = 1; pkmn <= pkmnLimit; pkmn++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`).then(res => res.json()).then(pokemon => {
            const sprites = [pokemon.sprites.front_default, pokemon.sprites.back_default];
            const pData = [pokemon.height, pokemon.weight/10];
            
            // fetches species data
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`).then(res => res.json()).then(pkmn => {
                const formattetPkmn = {
                    id : pkmn.id,
                    name : pkmn.name,
                    height : pData[0],
                    weight : pData[1],
                    backSprite : sprites[1],
                    frontSprite : sprites[0],
                    category : pkmn.genera[7].genus,
                    type1 : pokemon.types[0].type.name,
                    color : allColors[pokemon.types[0].type.name],
                    text : pkmn.flavor_text_entries[1].flavor_text,
                    type2 : (pokemon.types[1] ? pokemon.types[1].type.name : "hidden"),
                }
                allPkmn.push(formattetPkmn);
                
            }).catch(err => console.error(err));
            
        }).catch(err => console.error(err));
    } 
}       


// Start - turns on the Dex
const turnOnDex = () => {
    turnOnAnimation();
    allPkmn.sort((a, b) => a.id - b.id);
//           displayFirstOrLastNames(true);
}


// Displays start screen and menu
const turnOnAnimation = () => {
    toggleStartScreen();
    toggleBottomDispl();
    toggleMainCtrlfBtns();
    setTimeout(slideInBtns, 500);
}


//------------------------------------------------------------------------------ TOGGLE FUNCTIONS

// Removes Start Screen
const toggleStartScreen = () => topDisplay.classList.toggle("opacity");


// Toggles Bootom Displ - changes bg-color
const toggleBottomDispl = () => controlStartScr.classList.toggle("opacity");


// Toggles Options Btns - slides them up / in
const slideInBtns = () => [...modeOptionBtns].forEach(mob => mob.classList.toggle("slidein"));
                                                

// Toggles Nav Btns - disables / enables them
const toggleNavBtns = () => navigationButtons.forEach(nb => nb.classList.toggle("notactive"));


// Toggles Info Cont - opacity
const toggleInfoCont = () => {
    dexInfoContainer.classList.toggle("opacity");
    
    if (dexInfoContainer.classList.contains("opacity")) {
        pDexInfoBtn.style.textShadow = "0 0 15px rgba(0,0,0,.5)";
        pDexInfoBtn.style.color = "#fafafa";
    } else {
        pDexInfoBtn.style.textShadow = "none";
        pDexInfoBtn.style.color = "crimson";
    }
}


// Toggles On/Off Buttons
const toggleMainCtrlfBtns = () => {
    dexMenuBtn.classList.toggle("opacity");
    dexTurnOnBtn.classList.toggle("hidden");
    dexTurnOffBtn.classList.toggle("hidden");
    backToFiltersBtn.classList.toggle("opacity");
}


// Toggles Mobile Menu & Checkbox
const toggleMobileMenu = () => {
    menuOpen ? menuOpen = false : menuOpen = true;
    menuOpen ? mobileMenuBtn.innerHTML = `<i class="fas fa-times"></i>` : mobileMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    menuOpen ? mobileMenu.classList.add("menu-open") : mobileMenu.classList.remove("menu-open");
}


//------------------------------------------------------------------------------ (BOTTOM SCREEN) CHOOSE MODE

// Displays selected Mode (depending on boolean)
const selectOptionMode = (bool) => {
    const modes = [bottomDisplay, controlStartScr, typeFinderScr];
    
    modes.forEach(mode => mode.classList.add("opacity"));
    if (bool) {
        [...navigationButtons].forEach(nb => nb.classList.remove("notactive"));
        bottomDisplay.classList.remove("opacity");
        displayFirstOrLastNames(true);
    } else {
        displayAllTypesBtns();
        typeFinderScr.classList.remove("opacity");
        typeFinderNamesTypes.classList.remove("opacity");
    }
}


//------------------------------------------------------------------------------ (BOTTOM SCREEN) FILTER BY TYPE MODE

// Diplays all filter by types Btns and headline
const displayAllTypesBtns = () => {
    backToFiltersBtn.classList.add("disabl");
    switchTypesNamesBox("types", "names");
    typeFinderTypesCont.insertAdjacentHTML("beforeend", `<h6>- Choose a Type -</h6>`);
    
    for (const type in allColors) {
        typeFinderTypesCont.insertAdjacentHTML("beforeend", `
        <div onclick="filterViaType(event)" class="type-finder-type-btn flex-center" style="background-color: ${allColors[type]}">${capitalize(type)}</div>
    `);
    }
}


// Clears bottom screen (select type section), changes bg  & switches classes
const switchTypesNamesBox = (choice1, choice2) => {
    typeFinderNamesTypes.innerHTML = "";
    typeFinderNamesTypes.classList.remove(`type-finder-${choice2}-box`);
    typeFinderNamesTypes.classList.add(`type-finder-${choice1}-box`, `${choice1 === "names" ? "flex-center" : "no"}`);

    if (choice1 === "types") {
        typeFinderNamesTypes.style.backgroundColor = "#333";
    }
}


// Filters by type - Button
const filterViaType = (e) => {
    backToFiltersBtn.classList.remove("disabl");
    const typeToFilter = e.target.innerText.toLowerCase();
    const filteredPkmn = allPkmn.filter(p => p.type1 === typeToFilter || p.type2 === typeToFilter).sort((a, b) => a.id - b.id);

    switchTypesNamesBox("names", "types");
    typeFinderNamesTypes.style.backgroundColor = allColors[typeToFilter];
    
    filteredPkmn.forEach(fp => {
        typeFinderNamesTypes.insertAdjacentHTML("beforeend", `
            <div onclick="dipslayClickedPkmn(event, false)" class="type-finder-name" style="font-size: ${filteredPkmn.length >= 19 ? ".85em" : "1.1em"}">
                ${capitalize(fp.name)}
            </div>`);
    });
}



// ------------------------------------------------------------------------------ PAGINATION BUTTONS (PREV/NEXT) & FILL PKMN NAMES BOTTOM SCREEN

// Displays first 10 or last 10 (140-150) PKMN depending on boolean
const displayFirstOrLastNames = (bool) => {
    // sorts all pokemon by id from 1-150
    pkmnSetIndex = bool ? 10 : 150;
    bottomDisplay.innerHTML = "";
    
    for (let i = 10; i >= 1; i--) {
        bottomDisplay.insertAdjacentHTML("beforeend", `
            <span onclick="dipslayClickedPkmn(event, true)" class="p-dex-data flex-center">
                <span class="bottom-pkmn-id">#${displayPkmnId(allPkmn[pkmnSetIndex - i].id)}</span>
                ${capitalize(allPkmn[pkmnSetIndex - i].name)}
            </span> 
        `);
    }
}


// Perev/Next - Button Funcion
const paginationBtnFunc = (e) => {
    if (pkmnSetIndex >= 10 && pkmnSetIndex <= 150) {
        bottomDisplay.innerHTML = "";
        
        let finish = e.target.innerText.toLowerCase() === "prev" ? pkmnSetIndex -= 10 : pkmnSetIndex += 10;
        
        if (finish < 10) {
            displayFirstOrLastNames(false);
        } else if (finish > 150) {
            displayFirstOrLastNames(true);
        } else {
            let start = finish - 10;
            let updatedSetToDisplay = allPkmn.filter(ap => ap.id > start && ap.id <= finish);
            
            updatedSetToDisplay.forEach(p => {
                bottomDisplay.insertAdjacentHTML("beforeend", `
                <span onclick="dipslayClickedPkmn(event, true)" class="p-dex-data flex-center">
                    <span class="bottom-pkmn-id">#${displayPkmnId(p.id)}</span>
                    ${capitalize(p.name)}
                </span> 
                `);
            });
        } 
    }
}


// ------------------------------------------------------------------------------ DISPLAY CLICKED PKMN DATA IN TOP SCREEN 

// Displays Data in Top Screen of clicked pkmn name
const dipslayClickedPkmn = (e, bool) => {
    removeSelectedClass();
    e.target.classList.add("selected");
    const selectedName = `${bool ? e.target.innerText.slice(4).toLowerCase().trim() : e.target.innerText.toLowerCase()}`;
    const selectedPkmn = allPkmn.filter(ap => ap.name === selectedName)[0];
    const dexContainer = document.createElement("div");

    dexContainer.classList.add("flex-center", "wide");
    topDisplay.style.backgroundColor = selectedPkmn.color;

    // Top screen innner Html
    const dexContainerInnerHTML = `
        <div class="p-dex-image-cont flex-center flex-column">
            <img class="front-sprite" src="${selectedPkmn.frontSprite}" alt="pokemon">
            <img class="back-sprite hidden" src="${selectedPkmn.backSprite}" alt="pokemon">
            <div onclick="changeDexInfo()" class="turn-sprite-btn flex-center">
                <i class="fas fa-sync-alt"></i>
            </div>
        </div>
        <div class="p-dex-data-cont flex-center flex-column">
            <div class="flex-center flex-column">
                <div class="flex-center p-dex-data-row">
                    <h3 class="p-dex-name">${capitalize(selectedPkmn.name)}</h3>
                    <div class="p-dex-data poke-id">#${displayPkmnId(selectedPkmn.id)}</div>
                </div>
                <div class="p-dex-category">- ${selectedPkmn.category} -</div>
                <div class="flex-center p-dex-data-row">
                    <div class="p-dex-descr">Types:</div>
                    <div class="p-dex-type" style="background-color: green">${capitalize(selectedPkmn.type1)}</div>
                    <div class="p-dex-type ${selectedPkmn.type2}" style="background-color: purple">${capitalize(selectedPkmn.type2)}</div>
                </div>
                <div class="flex-center p-dex-data-row">
                    <div class="pdex-data-descr">Height:</div>
                    <div class="pdex-data">${convertDecimeterToFeetMeter(selectedPkmn.height)[0]} (${convertDecimeterToFeetMeter(selectedPkmn.height)[1]})</div>
                </div>
                <div class="flex-center p-dex-data-row">
                    <div class="pdex-data-descr">Weight:</div>
                    <div class="pdex-data">${convertKilosToLbs(selectedPkmn.weight)} (${selectedPkmn.weight}kg)</div>
                </div>
            </div>
            <div class="p-dex-txt hidden">
                <div class="descr-circle" style="background-color: ${allColors[selectedPkmn.type1]}"></div>
                <h6>Descr.</h6>
                <p>${filterPkmnText(selectedPkmn.text)}</p>
            </div>
        </div>
    `;
    topDisplay.innerHTML = "";
    dexContainer.innerHTML = dexContainerInnerHTML;
    topDisplay.append(dexContainer);
}


// Removes all selected classes from clicked pkmn Names
const removeSelectedClass = () => {
    const currPkmnNames = document.querySelectorAll(".p-dex-data");
    const typeFinderNames = document.querySelectorAll(".type-finder-name");
    
    currPkmnNames.forEach(cpn => cpn.classList.remove("selected"));
    typeFinderNames.forEach(tfn => tfn.classList.remove("selected"));
}

// ------------------------------------------------------------------------------ TOP SCREEN FUNCITONS FOR DISPLAYED PKMN DATA

// Capitalizes a String
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);


// Converts lbs to kilos
const convertKilosToLbs = (num) => Math.round(num / 0.45359237) + "lbs";


// Converts decimeters (input) to feet and meters returns array with both values
const convertDecimeterToFeetMeter = (num) => [((num * 0.3280839895).toFixed(1) + `"`), (num / 10 + "m")];


// Displays Id in 3. characters
const displayPkmnId = (id) => {
    let result = [];
    let idSplitted = "000" + id.toString().split();
    
    for (let i = idSplitted.length - 1; i > idSplitted.length - 4; i--) {
        result.push(idSplitted[i]);
    }
    return result.reverse().join("");
}


// Displays Sprite backside & Descr. Text
const changeDexInfo = () => {
    document.querySelector(".front-sprite").classList.toggle("hidden");
    document.querySelector(".back-sprite").classList.toggle("hidden");
    document.querySelector(".p-dex-txt").classList.toggle("hidden");
}


// Filters non letters out        
const filterPkmnText = (txt) => {
    const checkIfLetter = (char) => (/[a-zA-Z]/).test(char);  // coderrocketfuel.com
    
    return txt.split("").map(char => (checkIfLetter(char) || char == "é" || char === " " || char === ".") ? char : " ").join("");
}


// Start Screen Html
const startScreenInnerHTML = `
    <h2 class="p-dex-start-headline">Online Pokedex</h2>
    <p>
        Choose between Dexter and Type Finder Mode.<br>
        Dexter Mode - List of all 150 Pokemon (1st Gen)<br>
        Type Finder Mode - Search Pokemon via Type<br>
    </p>
    <div class="flex-center">
        <div class="element-square flex-center"><i class="fas fa-tint"></i></div>
        <div class="element-square flex-center"><i class="fas fa-fire"></i></div>
        <div class="element-square flex-center"><i class="fas fa-seedling"></i></div>
    </div>
    <div class="p-dex-start-info"></div>
`;


// ------------------------------------------------------------------------------ CONRTOLL BUTTONS (PDEX MIDDLE PART)

// Display Menu/Go back to Menu - Button
const displayMenuScr = () => {
    topDisplay.style.backgroundColor = startScrBg;
    topDisplay.innerHTML = `${startScreenInnerHTML}`;
    [bottomDisplay, controlStartScr].forEach(m => m.classList.remove("opacity"));
    
    if (!navigationButtons[0].classList.contains("notactive")) {
        toggleNavBtns();
    }
}


// Turns off both screens
const turnOffDex = () => {
    toggleMainCtrlfBtns();
    topDisplay.style.backgroundColor = startScrBg;
    topDisplay.innerHTML = `${startScreenInnerHTML}`;
    [controlStartScr, topDisplay].forEach(m => m.classList.add("opacity"));
    switchTypesNamesBox("types", "names");
    bottomDisplay.classList.add("opacity");
    
    if (!navigationButtons[0].classList.contains("notactive")) {
        toggleNavBtns();
    } if (modeOptionBtns[0].classList.contains("slidein")) {
        slideInBtns();
    }
}


// Gets all 150 Pkmn after site is loaded
window.addEventListener("load", getAndModifyPkmn);
